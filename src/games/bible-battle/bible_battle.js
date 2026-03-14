// ====================================
// Bible Battle - 1v1 Multiplayer Trivia
// ====================================

import { db } from '../../core/firebase.js';
import { collection, addDoc, onSnapshot, updateDoc, doc, query, where, getDocs, deleteDoc, serverTimestamp, query as fsQuery, orderBy, limit } from "firebase/firestore";
import { questions } from '../../data/questions.js';
import { getPlayer, addCoins, addXP, addLeaguePoints, syncPlayerWithFirestore } from '../../core/player.js';
import { showToast, shuffleArray } from '../../core/ui-utils.js';
import { navigate } from '../../core/router.js';

export function renderBibleBattle(container) {
  const player = getPlayer();
  const myId = localStorage.getItem('bb_player_id') || generateId();
  localStorage.setItem('bb_player_id', myId);

  let currentMatchId = null;
  let matchData = null;
  let unsubscribeMatch = null;
  let unsubscribeQueue = null;
  let myRole = 'p1'; // 'p1' or 'p2'
  let currentTimer = 10;
  let timerInterval = null;
  let hasAnsweredCurrent = false;

  // Powerups State
  let powerups = {
    fiftyfifty: true,
    freeze: true,
    double: true
  };
  let activeDouble = false;

  function generateId() {
    return 'user_' + Math.random().toString(36).substr(2, 9);
  }

  // --- Fase 1: Selección de Modo / Matchmaking ---
  function renderMatchmaking() {
    container.innerHTML = `
      <div class="bible-battle-game">
        <div class="bb-menu-header">
          <h3>⚔️ Bible Battle</h3>
          <p class="text-secondary text-sm">Elige cómo quieres competir</p>
        </div>

        <div class="bb-modes-grid">
          <button class="btn btn-primary btn-block btn-lg" id="btn-mode-random">
             <span class="btn-icon">🆚</span>
             <div class="btn-text">
               <div class="btn-title">Partida Aleatoria</div>
               <div class="btn-desc">Emparejamiento rápido global</div>
             </div>
          </button>

          <button class="btn btn-success btn-block btn-lg" id="btn-mode-create">
             <span class="btn-icon">🏠</span>
             <div class="btn-text">
               <div class="btn-title">Crear Sala Privada</div>
               <div class="btn-desc">Obtén un código para un amigo</div>
             </div>
          </button>

          <button class="btn btn-secondary btn-block btn-lg" id="btn-mode-join">
             <span class="btn-icon">🔑</span>
             <div class="btn-text">
               <div class="btn-title">Unirse con Código</div>
               <div class="btn-desc">Ingresa el código de tu amigo</div>
             </div>
          </button>
        </div>

        <div class="bb-matchmaking-actions mt-xl">
          <button class="btn btn-outline btn-block" id="btn-open-leaderboard">🏆 Ver Clasificación</button>
          <button class="btn btn-secondary btn-block mt-sm" id="btn-back-home">🏠 Volver al Menú</button>
        </div>

        <!-- Modal Leaderboard ... -->
        <div id="bb-leaderboard-modal" class="modal-overlay" style="display:none;">
          <div class="modal-content glass">
            <span class="modal-close" id="close-leaderboard">&times;</span>
            <div class="modal-header">
              <h3>🏆 Ranking Global</h3>
            </div>
            <div class="modal-body" id="leaderboard-list">
              <p class="text-center text-muted">Cargando clasificación...</p>
            </div>
          </div>
        </div>
      </div>
    `;

    // Eventos del Menú
    document.getElementById('btn-mode-random')?.addEventListener('click', () => {
      renderRadar();
      tryMatchmake();
    });

    document.getElementById('btn-mode-create')?.addEventListener('click', () => {
      createPrivateRoom();
    });

    document.getElementById('btn-mode-join')?.addEventListener('click', () => {
      renderJoinRoom();
    });

    document.getElementById('btn-back-home')?.addEventListener('click', () => {
      navigate('home');
    });

    document.getElementById('btn-open-leaderboard')?.addEventListener('click', () => {
      document.getElementById('bb-leaderboard-modal').style.display = 'flex';
      loadLeaderboard();
    });

    document.getElementById('close-leaderboard')?.addEventListener('click', () => {
      document.getElementById('bb-leaderboard-modal').style.display = 'none';
    });
  }

  function renderRadar() {
    container.innerHTML = `
      <div class="bible-battle-game">
        <div class="radar-container">
          <div class="radar-circle"></div>
          <div class="radar-scan"></div>
          <div class="radar-avatar">${player.avatar}</div>
        </div>
        <h3 class="text-center mt-md">Buscando Oponente...</h3>
        <p class="text-muted text-center text-sm">Emparejando en la arena de fe</p>
        
        <div class="bb-matchmaking-actions mt-lg">
          <button class="btn btn-secondary btn-block" id="btn-cancel-match">Cancelar</button>
        </div>
      </div>
    `;

    document.getElementById('btn-cancel-match')?.addEventListener('click', () => {
      if (unsubscribeQueue) unsubscribeQueue();
      renderMatchmaking(); // Volver al menú del juego
    });
  }

  async function createPrivateRoom() {
    const code = Math.random().toString(36).substr(2, 4).toUpperCase();
    container.innerHTML = `
      <div class="bible-battle-game">
        <div class="bb-private-room">
          <div class="bb-room-icon">🏠</div>
          <h3>Sala Privada Creada</h3>
          <p class="text-secondary text-sm">Comparte este código con tu amigo para que se una:</p>
          <div class="bb-room-code" id="room-code-display">${code}</div>
          <button class="btn btn-outline btn-sm mt-xs" id="btn-copy-code">📋 Copiar Código</button>
          
          <div class="bb-waiting-dots mt-xl">
             <div class="dot"></div><div class="dot"></div><div class="dot"></div>
          </div>
          <p class="text-muted text-sm text-center">Esperando a que tu amigo se una...</p>

          <button class="btn btn-secondary btn-block mt-xl" id="btn-cancel-room">Cancelar</button>
        </div>
      </div>
    `;

    document.getElementById('btn-cancel-room')?.addEventListener('click', () => {
      if (unsubscribeMatch) unsubscribeMatch();
      renderMatchmaking();
    });

    document.getElementById('btn-copy-code')?.addEventListener('click', () => {
      navigator.clipboard.writeText(code);
      showToast('¡Código copiado!', 'info');
    });

    try {
      myRole = 'p1';
      const allQs = shuffleArray([...questions.easy, ...questions.medium]).slice(0, 5);
      const matchRef = await addDoc(collection(db, "bb_matches"), {
        status: 'waiting_friend',
        code: code,
        p1: { uid: myId, name: player.name, avatar: player.avatar, score: 0, currentQ: 0, lastAnswered: -1 },
        p2: null,
        questions: allQs,
        createdAt: serverTimestamp()
      });

      startMatch(matchRef.id);
    } catch (e) {
      showToast("Error creando sala: " + e.message, "danger");
      renderMatchmaking();
    }
  }

  function renderJoinRoom() {
    container.innerHTML = `
      <div class="bible-battle-game">
        <div class="bb-private-room">
          <div class="bb-room-icon">🔑</div>
          <h3>Unirse a Sala</h3>
          <p class="text-secondary text-sm">Ingresa el código de 4 dígitos de tu amigo:</p>
          
          <input type="text" id="input-room-code" class="input-code mt-md" placeholder="CÓDIGO" maxlength="4" style="text-transform: uppercase;">

          <button class="btn btn-primary btn-block mt-lg" id="btn-confirm-join">Unirse a la Batalla</button>
          <button class="btn btn-secondary btn-block mt-sm" id="btn-cancel-join">Cancelar</button>
        </div>
      </div>
    `;

    document.getElementById('btn-cancel-join')?.addEventListener('click', () => {
      renderMatchmaking();
    });

    document.getElementById('btn-confirm-join')?.addEventListener('click', async () => {
      const typedCode = document.getElementById('input-room-code').value.trim().toUpperCase();
      if (typedCode.length < 4) {
        showToast('Ingresa un código válido de 4 letras.', 'warning');
        return;
      }

      try {
        const q = query(collection(db, "bb_matches"), where("status", "==", "waiting_friend"), where("code", "==", typedCode));
        const snapshot = await getDocs(q);

        if (snapshot.empty) {
          showToast('Sala no encontrada o llena.', 'warning');
          return;
        }

        const matchDoc = snapshot.docs[0];
        myRole = 'p2';

        await updateDoc(doc(db, "bb_matches", matchDoc.id), {
          status: 'playing',
          p2: { uid: myId, name: player.name, avatar: player.avatar, score: 0, currentQ: 0, lastAnswered: -1 }
        });

        startMatch(matchDoc.id);
      } catch (e) {
        showToast('Error al unirse: ' + e.message, 'danger');
      }
    });
  }

  async function loadLeaderboard() {
    const listEl = document.getElementById('leaderboard-list');
    if (!listEl) return;

    try {
      const q = fsQuery(collection(db, "bb_users"), orderBy("leaguePoints", "desc"), limit(10));
      const snapshot = await getDocs(q);
      
      if (snapshot.empty) {
        listEl.innerHTML = '<p class="text-center text-muted">Aún no hay clasificados. ¡Sé el primero!</p>';
        return;
      }

      listEl.innerHTML = `
        <div class="ranking-list">
          ${snapshot.docs.map((doc, index) => {
            const u = doc.data();
            return `
              <div class="ranking-item ${u.uid === myId ? 'me' : ''}">
                <div class="rank-pos">${index + 1}</div>
                <div class="rank-avatar">${u.avatar || '👤'}</div>
                <div class="rank-info">
                  <div class="rank-name">${u.name}</div>
                  <div class="rank-league">${u.league || 'Pescador'}</div>
                </div>
                <div class="rank-points">${u.leaguePoints || 0} PL</div>
              </div>
            `;
          }).join('')}
        </div>
      `;
    } catch (e) {
      console.error(e);
      listEl.innerHTML = '<p class="text-center text-danger">Error cargando ranking.</p>';
    }
  }

  async function tryMatchmake() {
    const queueRef = collection(db, "bb_queue");
    // Simplificamos la consulta para evitar requerir un Índice Compuesto de Firestore
    const q = query(queueRef, where("status", "==", "waiting"), limit(10));
    
    try {
      const snapshot = await getDocs(q);
      
      // Filtrar localmente en Javascript para excluirnos a nosotros mismos
      const rivalDoc = snapshot.docs.find(d => d.data().uid !== myId);

      if (rivalDoc) {
        // 1. Encontramos un rival esperando
        const rival = rivalDoc.data();
        myRole = 'p2';

        // Crear Partida
        const allQs = shuffleArray([...questions.easy, ...questions.medium]).slice(0, 5);
        const matchRef = await addDoc(collection(db, "bb_matches"), {
          status: 'starting',
          p1: { uid: rival.uid, name: rival.name, avatar: rival.avatar, score: 0, currentQ: 0, lastAnswered: -1 },
          p2: { uid: myId, name: player.name, avatar: player.avatar, score: 0, currentQ: 0, lastAnswered: -1 },
          questions: allQs,
          startTime: serverTimestamp()
        });

        // Actualizar ticket del rival para que se mueva a la partida
        await updateDoc(doc(db, "bb_queue", rivalDoc.id), {
          status: 'matched',
          matchId: matchRef.id
        });

        startMatch(matchRef.id);
      } else {
        // 2. Nadie esperando, nos listamos nosotros
        myRole = 'p1';
        const myTicketRef = await addDoc(collection(db, "bb_queue"), {
          uid: myId,
          name: player.name,
          avatar: player.avatar,
          status: 'waiting',
          createdAt: serverTimestamp()
        });

        // Escuchar si alguien nos empareja
        unsubscribeQueue = onSnapshot(doc(db, "bb_queue", myTicketRef.id), (docSnapshot) => {
          if (docSnapshot.exists() && docSnapshot.data().status === 'matched') {
            const mId = docSnapshot.data().matchId;
            unsubscribeQueue();
            // Eliminar ticket
            deleteDoc(myTicketRef);
            startMatch(mId);
          }
        });
      }
    } catch (error) {
       console.error("Matchmaking error:", error);
       showToast("Error de conexión: " + error.message, "danger");
       // Dejar la alerta en pantalla sin redirigir para que el usuario pueda leerla
    }
  }

  // --- Fase 2: El Juego (Arena) ---
  function startMatch(matchId) {
    currentMatchId = matchId;
    unsubscribeMatch = onSnapshot(doc(db, "bb_matches", matchId), (docSnapshot) => {
      if (!docSnapshot.exists()) return;
      matchData = docSnapshot.data();
      
      if (matchData.status === 'starting') {
        // Countdown visual pequeño si se desea
        updateMatchStatus('playing');
      } else {
        renderArena();
      }
    });
  }

  async function updateMatchStatus(status) {
    if (!currentMatchId) return;
    await updateDoc(doc(db, "bb_matches", currentMatchId), { status });
  }

  function renderArena() {
    if (!matchData) return;

    const myData = matchData[myRole];
    const rivalRole = myRole === 'p1' ? 'p2' : 'p1';
    const rivalData = matchData[rivalRole];
    const qIndex = myData.currentQ;

    // Condición de Fin de Partida
    if (qIndex >= 5 || matchData.status === 'ended') {
      clearInterval(timerInterval);
      renderResults();
      return;
    }

    const currentQuestion = matchData.questions[qIndex];

    container.innerHTML = `
      <div class="bible-battle-game">
        <div class="bb-hud">
          <div class="bb-player">
            <div class="bb-avatar">${myData.avatar}</div>
            <div class="bb-name">Tú</div>
            <div class="bb-score">${myData.score} pts</div>
          </div>
          <div class="bb-vs">VS</div>
          <div class="bb-player">
            <div class="bb-avatar">${rivalData.avatar}</div>
            <div class="bb-name">${rivalData.name}</div>
            <div class="bb-score">${rivalData.score} pts</div>
          </div>
        </div>

        <div class="bb-timer-bar">
          <div class="timer-fill" style="width: ${(currentTimer / 10) * 100}%"></div>
        </div>

        <div class="bb-question-box card">
          <div class="bb-q-header">Pregunta ${qIndex + 1}/5</div>
          <h3 class="bb-question">${currentQuestion.q}</h3>
        </div>

        <div class="bb-options-grid" id="options-grid">
          ${currentQuestion.options.map((opt, i) => `
            <button class="btn btn-option" data-ans="${i}">${opt}</button>
          `).join('')}
        </div>

        <div class="bb-powerups">
          <button class="btn btn-powerup ${powerups.fiftyfifty ? '' : 'disabled'}" id="p-5050" ${powerups.fiftyfifty ? '' : 'disabled'}>✂️ 50/50</button>
          <button class="btn btn-powerup ${powerups.freeze ? '' : 'disabled'}" id="p-freeze" ${powerups.freeze ? '' : 'disabled'}>❄️ Hielo</button>
          <button class="btn btn-powerup ${powerups.double ? '' : 'disabled'}" id="p-double" ${powerups.double ? '' : 'disabled'}>🔥 X2</button>
        </div>
      </div>
    `;

    hasAnsweredCurrent = false;
    startTimer();
    attachArenaEvents(currentQuestion.answer);
  }

  function startTimer() {
    clearInterval(timerInterval);
    currentTimer = 10;
    const fillEl = container.querySelector('.timer-fill');

    timerInterval = setInterval(async () => {
      currentTimer -= 0.1;
      if (fillEl) fillEl.style.width = `${(currentTimer / 10) * 100}%`;

      if (currentTimer <= 0) {
        clearInterval(timerInterval);
        if (!hasAnsweredCurrent) handleAnswer(-1, -1); // Time out
      }
    }, 100);
  }

  function attachArenaEvents(correctIndex) {
    container.querySelectorAll('.btn-option').forEach(btn => {
      btn.addEventListener('click', (e) => {
        if (hasAnsweredCurrent) return;
        hasAnsweredCurrent = true;
        const selected = parseInt(btn.dataset.ans);
        handleAnswer(selected, correctIndex);
      });
    });

    // Powerups Click
    document.getElementById('p-5050')?.addEventListener('click', () => {
      if (!powerups.fiftyfifty || hasAnsweredCurrent) return;
      powerups.fiftyfifty = false;
      let options = Array.from(container.querySelectorAll('.btn-option'));
      let wrongOptions = options.filter(o => parseInt(o.dataset.ans) !== correctIndex);
      shuffleArray(wrongOptions).slice(0, 2).forEach(o => o.style.visibility = 'hidden');
      document.getElementById('p-5050').classList.add('disabled');
    });

    document.getElementById('p-double')?.addEventListener('click', () => {
      if (!powerups.double || hasAnsweredCurrent) return;
      powerups.double = false;
      activeDouble = true;
      document.getElementById('p-double').classList.add('disabled');
      showToast('¡Próximo acierto duplicado!', 'info');
    });

    document.getElementById('p-freeze')?.addEventListener('click', () => {
       if (!powerups.freeze) return;
       powerups.freeze = false;
       document.getElementById('p-freeze').classList.add('disabled');
       // Realmente el oponente no baja su tiempo pero podriamos sumarnos puntos o mandar un flag.
       showToast('❄️ Efecto visual de Hielo', 'info');
    });
  }

  async function handleAnswer(selected, correctIndex) {
    clearInterval(timerInterval);
    let points = 0;
    if (selected === correctIndex) {
      points = Math.floor(currentTimer * 10 * (activeDouble ? 2 : 1));
      showToast('¡Correcto!', 'success');
    } else {
      showToast('¡Incorrecto!', 'warning');
    }
    activeDouble = false;

    const myData = matchData[myRole];
    const updateObj = {};
    updateObj[`${myRole}.score`] = myData.score + points;
    updateObj[`${myRole}.currentQ`] = myData.currentQ + 1;
    updateObj[`${myRole}.lastAnswered`] = selected;

    await updateDoc(doc(db, "bb_matches", currentMatchId), updateObj);
  }

  // --- Fase 3: Resultados ---
  function renderResults() {
    if (unsubscribeMatch) unsubscribeMatch();
    const myData = matchData[myRole];
    const rivalRole = myRole === 'p1' ? 'p2' : 'p1';
    const rivalData = matchData[rivalRole];

    const won = myData.score > rivalData.score;
    const tie = myData.score === rivalData.score;

    if (won) {
      addCoins(100);
      addXP(50);
      addLeaguePoints(25);
    } else if (!tie) {
      addLeaguePoints(-10); // Restar puntos si pierde
    }

    // Sync final stats
    syncPlayerWithFirestore();

    container.innerHTML = `
      <div class="game-results">
        <div class="results-emoji">${won ? '🏆' : tie ? '🤝' : '😢'}</div>
        <h2 class="results-title">${won ? '¡Victoria!' : tie ? '¡Empate!' : '¡Derrota!'}</h2>

        <div class="results-score-circle">
          <span class="results-score-value">${myData.score}</span>
          <span class="results-score-label">Tus puntos</span>
        </div>

        <div class="results-stats">
          <p class="text-secondary">Rival: <b>${rivalData.name}</b> (${rivalData.score} pts)</p>
          <div class="bb-league-badge mt-sm">${player.league}</div>
        </div>

        <div class="results-rewards">
          ${won ? `<div class="reward-item">🪙 +100 monedas</div><div class="reward-item">⭐ +50 XP</div><div class="reward-item">🏆 +25 PL</div>` : tie ? '<p class="text-sm">¡Buen combate!</p>' : '<div class="reward-item">❌ -10 PL</div>'}
        </div>

        <div class="results-actions">
          <button class="btn btn-primary btn-block" id="btn-play-again-bb">🔄 Jugar de Nuevo</button>
          <button class="btn btn-secondary btn-block" id="btn-go-home">🏠 Volver al Menú</button>
        </div>
      </div>
    `;

    document.getElementById('btn-play-again-bb')?.addEventListener('click', () => {
      renderMatchmaking();
    });

    document.getElementById('btn-go-home')?.addEventListener('click', () => {
      navigate('home');
    });

    // delete match file safety
    setTimeout(() => {
       if (myRole === 'p1') deleteDoc(doc(db, "bb_matches", currentMatchId));
    }, 5000);
  }

  renderMatchmaking();
}
