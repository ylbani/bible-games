import { db, auth } from '../../core/firebase.js';
import { collection, addDoc, onSnapshot, updateDoc, doc, query, where, getDocs, serverTimestamp } from "firebase/firestore";
import { showToast } from '../../core/ui-utils.js';
import { getPlayer } from '../../core/player.js';
import { questions } from '../../data/questions.js';

export function renderBaseballTeams(container) {
  const player = getPlayer();
  const myId = localStorage.getItem('bb_player_id'); // ID de jugador (Auth o Local)

  let myTeam = null;
  let teamsList = [];
  let unsubscribeTeams = null;
  let isCreating = false;

  function init() {
    listenToTeams();
  }

  function listenToTeams() {
    const teamsRef = collection(db, "bsb_teams");
    unsubscribeTeams = onSnapshot(teamsRef, (snapshot) => {
      teamsList = snapshot.docs.map(d => ({ id: d.id, ...d.data() }));
      
      // Buscar si el usuario ya pertenece a algún equipo
      myTeam = teamsList.find(t => t.members.some(m => m.uid === myId)) || null;

      if (myTeam) {
        renderTeamDashboard();
      } else {
        renderLobby();
      }
    });
  }

  function renderLobby() {
    container.innerHTML = `
      <div class="bsb-teams-lobby">
        <div class="bb-menu-header">
          <h3>👥 Equipos de Béisbol</h3>
          <p class="text-secondary text-sm">Crea o únete a un equipo para competir</p>
        </div>

        <div class="lobby-actions p-md">
          <button class="btn btn-primary btn-block" id="btn-create-team">➕ Crear Nuevo Equipo</button>
        </div>

        <div class="teams-list-container">
          <h4>Equipos Disponibles (${teamsList.length})</h4>
          <div class="teams-grid">
            ${teamsList.length === 0 ? '<p class="text-muted text-center p-md">No hay equipos creados. ¡Sé el primero!</p>' : ''}
            ${teamsList.map(t => `
              <div class="team-card glass">
                <div class="team-info">
                  <span class="team-name">${t.name}</span>
                  <span class="team-count">${t.members.length} miembros</span>
                </div>
                <button class="btn btn-sm btn-outline btn-join-team" data-id="${t.id}">Unirse</button>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    `;

    setupLobbyEvents();
  }

  function setupLobbyEvents() {
    document.getElementById('btn-create-team')?.addEventListener('click', handleCreateTeam);

    container.querySelectorAll('.btn-join-team').forEach(btn => {
      btn.addEventListener('click', () => handleJoinTeam(btn.dataset.id));
    });
  }

  async function handleCreateTeam() {
    const teamName = prompt('Ingresa el nombre de tu equipo:');
    if (!teamName || !teamName.trim()) return;

    try {
      if (!myId) {
         showToast('Inicia sesión para crear un equipo', 'warning');
         return;
      }

      await addDoc(collection(db, "bsb_teams"), {
         name: teamName.trim(),
         admin: myId,
         members: [{ uid: myId, name: player.name, avatar: player.avatar }],
         createdAt: serverTimestamp()
      });

      showToast(`Equipo "${teamName}" creado ✅`, 'success');
    } catch (e) {
      showToast('Error al crear equipo ❌', 'error');
    }
  }

  async function handleJoinTeam(teamId) {
    if (!myId) {
       showToast('Inicia sesión para unirte', 'warning');
       return;
    }

    const team = teamsList.find(t => t.id === teamId);
    if (!team) return;

    if (team.members.length >= 9) {
       showToast('Equipo lleno (máx 9 jugadores)', 'warning');
       return;
    }

    try {
       const updatedMembers = [...team.members, { uid: myId, name: player.name, avatar: player.avatar }];
       await updateDoc(doc(db, "bsb_teams", teamId), {
          members: updatedMembers
       });
       showToast('Te has unido al equipo ✅', 'success');
    } catch (e) {
       showToast('Error al unirse ❌', 'error');
    }
  }

  function renderTeamDashboard() {
    const isAdmin = myTeam.admin === myId;

    container.innerHTML = `
      <div class="bsb-team-dashboard">
        <div class="team-header glass">
          <div class="team-icon">🛡️</div>
          <h2>${myTeam.name}</h2>
          <span class="badge">${myTeam.members.length} Miembros</span>
        </div>

        <div class="team-members-list mt-md">
          <h4>📋 Plantilla</h4>
          <div class="members-grid">
            ${myTeam.members.map((m, i) => `
              <div class="member-item">
                <span class="member-index">${i + 1}.</span>
                <span class="member-avatar">${m.avatar}</span>
                <span class="member-name">${m.name} ${m.uid === myId ? '(Tú)' : ''}</span>
              </div>
            `).join('')}
          </div>
        </div>

        <div class="team-actions mt-lg">
          ${myTeam.currentMatchId ? `
            <button class="btn btn-warning btn-block" id="btn-join-match">⚔️ Reincorporarse al Partido</button>
          ` : `
            ${isAdmin ? `<button class="btn btn-success btn-block" id="btn-search-match">⚾ Buscar Partido</button>` : `<p class="text-sm text-center text-muted">Esperando que el líder busque partido...</p>`}
          `}
          <button class="btn btn-danger btn-block mt-sm" id="btn-leave-team">🚪 Salir del Equipo</button>
        </div>
      </div>
    `;

    setupDashboardEvents();
    
    // Auto Redirigir si ya hay un partido activo asignado al equipo
    if (myTeam.currentMatchId) {
      renderArenaTeams(myTeam.currentMatchId);
    }
  }

  function setupDashboardEvents() {
    document.getElementById('btn-leave-team')?.addEventListener('click', handleLeaveTeam);
    document.getElementById('btn-search-match')?.addEventListener('click', handleSearchMatch);
    document.getElementById('btn-join-match')?.addEventListener('click', () => {
       renderArenaTeams(myTeam.currentMatchId);
    });
  }

  async function handleSearchMatch() {
    if (!myTeam) return;
    showToast('Buscando oponentes...', 'info');

    try {
      const queueRef = collection(db, "bsb_team_queue");
      const q = query(queueRef, where("status", "==", "waiting"));
      const snapshot = await getDocs(q);
      
      const rivalDoc = snapshot.docs.find(d => d.data().teamId !== myTeam.id);

      if (rivalDoc) {
        // Encontramos Rival!
        const rival = rivalDoc.data();
        await updateDoc(doc(db, "bsb_team_queue", rivalDoc.id), { status: 'matched' });

        // Crear Partido
        const matchRef = await addDoc(collection(db, "bsb_matches"), {
           status: 'playing',
           teamA: { id: myTeam.id, name: myTeam.name, lineup: myTeam.members.map(m => m.uid) },
           teamB: { id: rival.teamId, name: rival.teamName, lineup: rival.lineup },
           score: { A: 0, B: 0 },
           inning: 1,
           halfInning: 'top', // teamA batea
           battingIndexA: 0,
           battingIndexB: 0,
           outs: 0,
           bases: [false, false, false],
           currentQIndex: 0,
           createdAt: serverTimestamp()
        });

        // Actualizar ambos equipos con el Match ID
        await updateDoc(doc(db, "bsb_teams", myTeam.id), { currentMatchId: matchRef.id });
        await updateDoc(doc(db, "bsb_teams", rival.teamId), { currentMatchId: matchRef.id });

        renderArenaTeams(matchRef.id);
      } else {
        // Nadie esperando, nos listamos
        const myTicket = await addDoc(collection(db, "bsb_team_queue"), {
           teamId: myTeam.id,
           teamName: myTeam.name,
           lineup: myTeam.members.map(m => m.uid),
           status: 'waiting',
           createdAt: serverTimestamp()
        });

        // Escuchar si nos emparejan
        const unsubQueue = onSnapshot(doc(db, "bsb_team_queue", myTicket.id), async (snap) => {
           if (snap.exists() && snap.data().status === 'matched') {
              unsubQueue();
              // El rival creó el match y actualizará nuestro document de equipo
              showToast('¡Partido Encontrado!', 'success');
           }
        });
      }
    } catch (e) {
      console.error(e);
      showToast('Error de conexión con la arena', 'danger');
    }
  }

  // --- ARENA MULTIPLAYER CON EQUIPOS ---
  let matchData = null;
  let unsubscribeMatch = null;

  function renderArenaTeams(matchId) {
    if (unsubscribeTeams) unsubscribeTeams(); // Frenar escucha de lobby general
    
    unsubscribeMatch = onSnapshot(doc(db, "bsb_matches", matchId), (snap) => {
       if (!snap.exists()) return;
       matchData = snap.data();
       drawArenaTeams();
    });
  }

  function drawArenaTeams() {
    if (!matchData) return;

    const currentTeamKey = matchData.halfInning === 'top' ? 'teamA' : 'teamB';
    const currentTeam = matchData[currentTeamKey];
    const lineup = currentTeam.lineup;
    const currentIndex = matchData.halfInning === 'top' ? matchData.battingIndexA : matchData.battingIndexB;
    const activeBatterId = lineup[currentIndex];
    const isMyTurn = activeBatterId === myId;

    const bases = matchData.bases || [false, false, false];

    // Obtener nombre del bateador actual
    const bsb_team = teamsList.find(t => t.id === currentTeam.id);
    let batterName = 'Bateador';
    if (bsb_team) {
       const mem = bsb_team.members.find(m => m.uid === activeBatterId);
       if (mem) batterName = mem.name;
    }

    container.innerHTML = `
      <div class="bsb-game">
        <div class="bsb-hud glass">
          <div class="bsb-score-board">
            <div class="bsb-team">
              <span class="bsb-team-name">${matchData.teamA.name}</span>
              <span class="bsb-team-runs">${matchData.score.A}</span>
            </div>
            <div class="bsb-divider">vs</div>
            <div class="bsb-team">
              <span class="bsb-team-name">${matchData.teamB.name}</span>
              <span class="bsb-team-runs">${matchData.score.B}</span>
            </div>
          </div>
          <div class="bsb-game-stats">
            <div>Entrada: <span class="badge">${matchData.inning}${matchData.halfInning === 'top' ? '▲' : '▼'}</span></div>
            <div>Outs: <span class="bsb-outs">${'🔴'.repeat(matchData.outs)}${'⚪'.repeat(3 - matchData.outs)}</span></div>
          </div>
        </div>

        <div class="bsb-field-container">
          <div class="bsb-diamond">
            <div class="bsb-base edge-top ${bases[1] ? 'occupied' : ''}">2B</div>
            <div class="bsb-base edge-left ${bases[2] ? 'occupied' : ''}">3B</div>
            <div class="bsb-base edge-right ${bases[0] ? 'occupied' : ''}">1B</div>
            <div class="bsb-base edge-bottom batting">🏠</div>
          </div>
        </div>

        <div class="bsb-controls">
           ${isMyTurn ? `
             ${matchData.status === 'playing' ? `
               <div class="text-center mb-sm"><span class="badge badge-warning">🔥 ¡ES TU TURNO DE BATEAR!</span></div>
               <button class="btn btn-primary btn-lg" id="bsb-team-spin-btn">⚾ GIRAR RULETA</button>
             ` : '<p class="text-secondary text-sm">Resuelve la pregunta en el panel...</p>'}
           ` : `
             <div class="bsb-cpu-turn glass">
               <p>Bateando: <b>${batterName}</b></p>
               <div class="spinner"></div>
             </div>
           `}
        </div>

        <!-- MODAL DE PREGUNTA SINCRONIZADO -->
        <div class="bsb-question-modal ${matchData.status === 'batting_question' ? 'visible' : ''}">
          ${matchData.currentQuestion ? `
            <div class="bsb-modal-content glass">
              <div class="bsb-modal-header">
                <span class="badge diff-${matchData.currentPlayType}">${matchData.currentPlayType}</span>
                <p class="text-muted text-xs mt-xs">${isMyTurn ? '📌 ¡Responde tú!' : `📺 Viendo a ${batterName}...`}</p>
              </div>
              <h3 class="mt-sm">${matchData.currentQuestion.q}</h3>
              <div class="bsb-options">
                ${matchData.currentQuestion.options.map((opt, idx) => `
                  <button class="bsb-opt-btn" ${isMyTurn ? `onclick="handleTeamAnswer(${idx})"` : 'disabled'}>${opt}</button>
                `).join('')}
              </div>
            </div>
          ` : ''}
        </div>
      </div>
    `;

    setupArenaEvents(isMyTurn);
  }

  function setupArenaEvents(isMyTurn) {
    if (isMyTurn) {
       document.getElementById('bsb-team-spin-btn')?.addEventListener('click', handleTeamSpin);
    }

    window.handleTeamAnswer = (idx) => {
       if (!matchData || !matchData.currentQuestion) return;
       const isCorrect = idx === matchData.currentQuestion.answer;
       processTeamAnswer(isCorrect);
    };
  }

  async function handleTeamSpin() {
    const PLAY_TYPES = [
      { type: 'Hit', diff: 'easy' },
      { type: 'Doble', diff: 'medium' },
      { type: 'Triple', diff: 'hard' },
      { type: 'HomeRun', diff: 'hard' }
    ];

    const randomPlay = PLAY_TYPES[Math.floor(Math.random() * PLAY_TYPES.length)];
    const pool = questions[randomPlay.diff];
    const q = pool[Math.floor(Math.random() * pool.length)];

    await updateDoc(doc(db, "bsb_matches", myTeam.currentMatchId), {
       currentPlayType: randomPlay.type,
       currentQuestion: { q: q.q, options: q.options, answer: q.answer },
       status: 'batting_question'
    });
  }

  async function processTeamAnswer(isCorrect) {
    if (!myTeam || !myTeam.currentMatchId) return;

    if (isCorrect) {
       showToast(`¡Excelente! Conectas un ${matchData.currentPlayType}`, 'success');
       await processTeamHit(matchData.currentPlayType);
    } else {
       showToast('¡Fallo! Out registrado 🔴', 'error');
       const updatedOuts = matchData.outs + 1;
       await updateDoc(doc(db, "bsb_matches", myTeam.currentMatchId), {
          outs: updatedOuts,
          status: 'playing'
       });
       if (updatedOuts >= 3) {
          await changeHalfInning();
       } else {
          await advanceLineupCursor();
       }
    }
  }

  async function processTeamHit(type) {
    let baseAdvance = 1;
    if (type === 'Doble') baseAdvance = 2;
    if (type === 'Triple') baseAdvance = 3;
    if (type === 'HomeRun') baseAdvance = 4;

    let runsScored = 0;
    let bases = [...(matchData.bases || [false, false, false])];

    for (let i = 0; i < baseAdvance; i++) {
      if (bases[2]) { runsScored++; bases[2] = false; }
      if (bases[1]) { bases[2] = true; bases[1] = false; }
      if (bases[0]) { bases[1] = true; bases[0] = false; }
    }

    if (baseAdvance === 4) {
      runsScored++;
    } else {
      bases[baseAdvance - 1] = true;
    }

    const currentTeamKey = matchData.halfInning === 'top' ? 'A' : 'B';
    const updatedScore = { ...matchData.score };
    updatedScore[currentTeamKey] += runsScored;

    await updateDoc(doc(db, "bsb_matches", myTeam.currentMatchId), {
       bases: bases,
       score: updatedScore,
       status: 'playing'
    });

    if (runsScored > 0) {
       showToast(`⚾ ¡Anotación! +${runsScored} carrera(s)`, 'success');
    }

    await advanceLineupCursor();
  }

  async function advanceLineupCursor() {
    const isTop = matchData.halfInning === 'top';
    const currentTeam = matchData[isTop ? 'teamA' : 'teamB'];
    let nextIndex = (isTop ? matchData.battingIndexA : matchData.battingIndexB) + 1;
    
    if (nextIndex >= currentTeam.lineup.length) nextIndex = 0; // Rotar ciclo

    const updateObj = {};
    updateObj[isTop ? 'battingIndexA' : 'battingIndexB'] = nextIndex;

    await updateDoc(doc(db, "bsb_matches", myTeam.currentMatchId), updateObj);
  }

  async function changeHalfInning() {
    const isTop = matchData.halfInning === 'top';
    const nextHalf = isTop ? 'bottom' : 'top';
    const nextInning = isTop ? matchData.inning : matchData.inning + 1;

    // Si batea el equipo B y se cambia el Inning, termina la entrada
    if (!isTop && nextInning > 3) { // 3 entradas modo rápido
       await updateDoc(doc(db, "bsb_matches", myTeam.currentMatchId), { status: 'ended' });
       return;
    }

    await updateDoc(doc(db, "bsb_matches", myTeam.currentMatchId), {
       halfInning: nextHalf,
       inning: nextInning,
       outs: 0,
       bases: [false, false, false],
       status: 'playing'
    });
    
    showToast('¡Inning cambiado! 🔄', 'info');
  }

  async function handleLeaveTeam() {
    if (!myTeam) return;

    try {
      const updatedMembers = myTeam.members.filter(m => m.uid !== myId);
      await updateDoc(doc(db, "bsb_teams", myTeam.id), {
         members: updatedMembers
      });
      showToast('Has dejado el equipo 🚪', 'info');
    } catch (e) {
      showToast('Error al salir ❌', 'error');
    }
  }

  init();
}
