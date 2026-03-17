import { questions } from '../../data/questions.js';
import { showToast, shuffleArray } from '../../core/ui-utils.js';
import { addXP, addCoins } from '../../core/player.js';
import { renderBaseballTeams } from './baseball_teams.js';

export function renderBaseball(container) {
  // --- ESTADO DEL JUEGO ---
  let score = { away: 0, home: 0 }; 
  let inning = 1;
// ... (existing code remains identical below)
  let halfInning = 'top'; // 'top' (Arriba) batea jugador, 'bottom' (Abajo) batea IA
  let outs = 0;
  let bases = [false, false, false]; // [1B, 2B, 3B]
  let isGameOver = false;
  let isSpinning = false;
  let currentQuestion = null;
  let currentPlayType = null; // 'Hit', 'Doble', 'Triple', 'HomeRun'
  
  const MAX_INNINGS = 3; // Modo rápido por defecto

  const PLAY_TYPES = [
    { label: 'Hit (Sencillo)', type: 'Hit', deg: 0, diff: 'easy' },
    { label: 'Doble', type: 'Doble', deg: 90, diff: 'medium' },
    { label: 'Triple', type: 'Triple', deg: 180, diff: 'hard' },
    { label: 'Home Run', type: 'HomeRun', deg: 270, diff: 'hard' }
  ];

  function init() {
    renderUI();
  }

  function renderUI() {
    container.innerHTML = `
      <div class="bsb-game">
        <!-- MARCADOR -->
        <div class="bsb-hud glass">
          <div class="bsb-score-board">
            <div class="bsb-team">
              <span class="bsb-team-name">VIS (Tú)</span>
              <span class="bsb-team-runs">${score.away}</span>
            </div>
            <div class="bsb-divider">vs</div>
            <div class="bsb-team">
              <span class="bsb-team-name">HOME (IA)</span>
              <span class="bsb-team-runs">${score.home}</span>
            </div>
          </div>
          <div class="bsb-game-stats">
            <div>Entrada: <span class="badge">${inning}${halfInning === 'top' ? '▲' : '▼'}</span></div>
            <div>Outs: <span class="bsb-outs">${'🔴'.repeat(outs)}${'⚪'.repeat(3 - outs)}</span></div>
          </div>
        </div>

        <!-- CAMPO DE JUEGO (DIAMANTE) -->
        <div class="bsb-field-container">
          <div class="bsb-diamond">
            <div class="bsb-base edge-top ${bases[1] ? 'occupied' : ''}" id="base-2">2B</div>
            <div class="bsb-base edge-left ${bases[2] ? 'occupied' : ''}" id="base-3">3B</div>
            <div class="bsb-base edge-right ${bases[0] ? 'occupied' : ''}" id="base-1">1B</div>
            <div class="bsb-base edge-bottom batting" id="base-home">🏠</div>
            
            <div class="bsb-pitcher-area">
               <div class="bsb-ball-anim" id="bsb-ball"></div>
            </div>
          </div>
        </div>

        <!-- CONTROLES / RULETA -->
        <div class="bsb-controls">
          ${halfInning === 'top' ? `
            <div class="bsb-roulette-container">
              <div class="bsb-wheel" id="bsb-wheel">
                <div class="bsb-slice red">Hit</div>
                <div class="bsb-slice blue">Doble</div>
                <div class="bsb-slice green">Triple</div>
                <div class="bsb-slice gold">HR</div>
              </div>
              <div class="bsb-wheel-pointer">▼</div>
            </div>
            <button class="btn btn-primary btn-lg" id="bsb-spin-btn" ${isSpinning ? 'disabled' : ''}>
              ${isSpinning ? 'GIRANDO...' : '⚾ GIRAR RULETA'}
            </button>
          ` : `
            <div class="bsb-cpu-turn glass">
              <p>🤖 Turno de la IA para batear...</p>
              <div class="spinner"></div>
            </div>
          `}
        </div>

        <!-- MODAL DE PREGUNTA -->
        <div class="bsb-question-modal ${currentQuestion ? 'visible' : ''}">
          ${currentQuestion ? `
            <div class="bsb-modal-content glass">
              <div class="bsb-modal-header">
                <span class="badge diff-${currentPlayType}">${currentPlayType}</span>
                <p>Responde correctamente para avanzar</p>
              </div>
              <h3>${currentQuestion.q}</h3>
              <div class="bsb-options">
                ${currentQuestion.options.map((opt, idx) => `
                  <button class="bsb-opt-btn" onclick="handleBaseballAnswer(${idx})">${opt}</button>
                `).join('')}
              </div>
            </div>
          ` : ''}
        </div>
      </div>
    `;

    setupEvents();
  }

  function setupEvents() {
    const spinBtn = container.querySelector('#bsb-spin-btn');
    if (spinBtn) {
      spinBtn.addEventListener('click', handleSpin);
    }

    // Inyectar el handler global temporalmente para los botones de opciones onclick
    window.handleBaseballAnswer = (idx) => {
      const isCorrect = idx === currentQuestion.answer;
      handleAnswer(isCorrect);
    };
  }

  function handleSpin() {
    if (isSpinning) return;
    isSpinning = true;
    renderUI();

    const wheel = container.querySelector('#bsb-wheel');
    const randomPlay = PLAY_TYPES[Math.floor(Math.random() * PLAY_TYPES.length)];
    currentPlayType = randomPlay.type;

    // Calcular grados (múltiples vueltas + offset de la jugada + Jitter aleatorio para naturalidad)
    const extraTurns = 2880; // 8 vueltas completos
    const jitter = Math.floor(Math.random() * 50) - 25; // +/- 25 grados
    const targetDeg = extraTurns + randomPlay.deg + jitter;

    if (wheel) {
      // Forzar reflow para que el navegador registre el estado inicial
      wheel.offsetHeight; 
      
      requestAnimationFrame(() => {
        if (wheel) {
            wheel.style.transform = `rotate(-${targetDeg}deg)`;
        }
      });
    }

    setTimeout(() => {
      isSpinning = false;
      loadQuestion(randomPlay.diff);
    }, 3200); // Dar 3.2s para la animación completa
  }

  function loadQuestion(difficulty) {
    const pool = questions[difficulty] || questions.easy;
    currentQuestion = pool[Math.floor(Math.random() * pool.length)];
    renderUI();
  }

  function handleAnswer(isCorrect) {
    currentQuestion = null; // Cerrar modal

    if (isCorrect) {
      showToast(`¡Excelente! Conectas un ${currentPlayType}`, 'success');
      processHit(currentPlayType);
    } else {
      showToast('¡Fallo! Out registrado 🔴', 'error');
      outs++;
      checkOuts();
    }
    renderUI();
  }

  function processHit(type) {
    let baseAdvance = 1;
    if (type === 'Doble') baseAdvance = 2;
    if (type === 'Triple') baseAdvance = 3;
    if (type === 'HomeRun') baseAdvance = 4;

    let runsScored = 0;

    // Avanzar corredores existentes
    for (let i = 0; i < baseAdvance; i++) {
      if (bases[2]) { runsScored++; bases[2] = false; }
      if (bases[1]) { bases[2] = true; bases[1] = false; }
      if (bases[0]) { bases[1] = true; bases[0] = false; }
    }

    // El bateador entra a las bases
    if (baseAdvance === 4) {
      runsScored++; // El mismo bateador anota
    } else {
      bases[baseAdvance - 1] = true;
    }

    // Sumar carreras
    if (runsScored > 0) {
      score[halfInning === 'top' ? 'away' : 'home'] += runsScored;
      showToast(`⚾ ¡Anotación! +${runsScored} carrera(s)`, 'success');
    }
  }

  function checkOuts() {
    if (outs >= 3) {
      showToast('¡Tres Outs! Cambio de lado 🔄', 'info');
      outs = 0;
      bases = [false, false, false]; // Limpiar bases
      
      if (halfInning === 'top') {
        halfInning = 'bottom';
        setTimeout(simulateCPUTurn, 1500); // Dar paso a la IA
      } else {
        halfInning = 'top';
        inning++;
        checkGameOver();
      }
    }
  }

  function simulateCPUTurn() {
    if (isGameOver || halfInning === 'top') return;

    // Simular que la ruleta gira para la IA
    const randomPlay = PLAY_TYPES[Math.floor(Math.random() * PLAY_TYPES.length)];
    const aiSuccess = Math.random() < 0.6; // 60% de acierto de la IA

    setTimeout(() => {
      if (aiSuccess) {
        showToast(`La IA conecta un ${randomPlay.type}`, 'warning');
        processHit(randomPlay.type);
      } else {
        showToast('¡La IA falla! Out', 'info');
        outs++;
      }
      renderUI();

      if (outs < 3) {
        setTimeout(simulateCPUTurn, 2000); // Continuar turno IA
      } else {
        checkOuts(); // Cambiará a top
        renderUI();
      }
    }, 2000);
  }

  function checkGameOver() {
    if (inning > MAX_INNINGS) {
      isGameOver = true;
      let winnerText = score.away > score.home ? '¡Has ganado el Partido! 🎉' : (score.away < score.home ? 'La IA ha ganado 🤖' : '¡Empate! 🤝');
      
      if (score.away > score.home) {
        addXP(50);
        addCoins(30);
      }

      container.innerHTML = `
        <div class="bsb-game-over glass">
          <h2>⚾ JUEGO TERMINADO ⚾</h2>
          <h3>${winnerText}</h3>
          <div class="bsb-final-score">
            <div>Tú: ${score.away}</div>
            <div>IA: ${score.home}</div>
          </div>
          <button class="btn btn-primary" id="bsb-restart">Jugar de Nuevo</button>
        </div>
      `;

      container.querySelector('#bsb-restart')?.addEventListener('click', () => {
        score = { away: 0, home: 0 };
        inning = 1;
        halfInning = 'top';
        outs = 0;
        bases = [false, false, false];
        isGameOver = false;
        renderUI();
      });
    }
  }

  function init() {
    renderModeSelection();
  }

  function renderModeSelection() {
    container.innerHTML = `
      <div class="bsb-mode-selection">
        <div class="bb-menu-header text-center">
          <h3>⚾ Béisbol Cristiano</h3>
          <p class="text-secondary text-sm">Selecciona cómo deseas jugar</p>
        </div>
        
        <div class="bb-modes-grid mt-xl">
          <button class="btn btn-primary btn-block btn-lg" id="btn-mode-solo">
             <span class="btn-icon">🧑‍💻</span>
             <div class="btn-text">
               <div class="btn-title">Modo Solitario</div>
               <div class="btn-desc">Juega contra la IA y entrena</div>
             </div>
          </button>

          <button class="btn btn-success btn-block btn-lg mt-sm" id="btn-mode-teams">
             <span class="btn-icon">👥</span>
             <div class="btn-text">
               <div class="btn-title">Modo Equipos</div>
               <div class="btn-desc">Crea o únete a un equipo ppa participar</div>
             </div>
          </button>
        </div>
      </div>
    `;

    document.getElementById('btn-mode-solo')?.addEventListener('click', () => {
      renderUI();
    });

    document.getElementById('btn-mode-teams')?.addEventListener('click', () => {
      renderBaseballTeams(container);
    });
  }

  init();
}
