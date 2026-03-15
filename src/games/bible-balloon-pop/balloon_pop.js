// ====================================
// Bible Balloon Pop Game Module
// ====================================

import { questions } from '../../data/questions.js';
import { addCoins, addXP } from '../../core/player.js';
import { showToast, shuffleArray } from '../../core/ui-utils.js';
import { navigate } from '../../core/router.js';

export function renderBalloonPop(container) {
  let score = 0;
  let lives = 3;
  let speedMultiplier = 1;
  let correctCount = 0;
  let isGameOver = false;
  
  let currentQuestion = null;
  let balloons = [];
  let animationFrameId = null;
  let lastSpawnTime = 0;
  let spawnInterval = 1500; // ms

  const COLORS = ['#ef233c', '#4361ee', '#2ec4b6', '#ffb703', '#9b5de5'];
  const SPECIALS = ['bomb', 'gold', 'freeze'];

  function init() {
    loadNextQuestion();
    gameLoop(0);
  }

  function loadNextQuestion() {
    // Escoger pregunta aleatoria de easy o medium
    const pool = [...questions.easy, ...questions.medium];
    currentQuestion = pool[Math.floor(Math.random() * pool.length)];
    
    // Limpiar globos antiguos
    balloons = [];
    
    // Generar globos con respuestas
    const options = shuffleArray([...currentQuestion.options]);
    const containerWidth = container.querySelector('.bbp-game-arena')?.clientWidth || 400;
    
    // El 'answer' es un indice en el array original de opciones
    const correctAnswerText = currentQuestion.options[currentQuestion.answer];

    options.forEach((opt, index) => {
      const isCorrect = (opt === correctAnswerText);
      const isSpecial = Math.random() < 0.2; // 20% probabilidad de especial
      let type = 'normal';
      
      if (isSpecial) {
        type = SPECIALS[Math.floor(Math.random() * SPECIALS.length)];
      }

      balloons.push({
        id: 'bal_' + Date.now() + '_' + index,
        text: opt,
        isCorrect: isCorrect,
        type: type, // 'normal', 'bomb', 'gold', 'freeze'
        x: (index * (containerWidth / options.length)) + 20, // Distribuir horizontal
        y: -120, // Empieza abajo (fuera de pantalla)
        speed: (1.2 + Math.random() * 0.8) * speedMultiplier, // Reducir un poco la velocidad base
        color: type === 'bomb' ? '#2b2b2b' : (type === 'gold' ? '#ffd700' : (type === 'freeze' ? '#00f5d4' : COLORS[index % COLORS.length])),
        size: 70 + (Math.random() * 10)
      });
    });
    
    // Asegurar que siempre hay una correcta
    if (!balloons.some(b => b.isCorrect)) {
       balloons[0].isCorrect = true; 
    }

    renderUI();
  }

  function gameLoop(currentTime) {
    if (isGameOver) return;

    if (currentTime - lastSpawnTime > spawnInterval) {
      lastSpawnTime = currentTime;
    }

    const arena = container.querySelector('.bbp-game-arena');
    if (!arena) {
        animationFrameId = requestAnimationFrame(gameLoop);
        return;
    }
    const currentArenaHeight = arena.clientHeight;

    // Actualizar posiciones
    for (let i = balloons.length - 1; i >= 0; i--) {
      const b = balloons[i];
      b.y += b.speed; 

      // Dibujar/Actualizar en DOM
      let balEl = document.getElementById(b.id);
      if (!balEl) {
        balEl = document.createElement('div');
        balEl.id = b.id;
        balEl.className = `balloon ${b.type}`;
        balEl.style.backgroundColor = b.color;
        balEl.style.width = b.size + 'px';
        balEl.style.height = (b.size * 1.2) + 'px';
        balEl.innerHTML = `
          <div class="balloon-content">${b.text}</div>
          <div class="balloon-string"></div>
          ${b.type !== 'normal' ? `<div class="balloon-badge">${b.type === 'bomb' ? '💣' : (b.type === 'gold' ? '⭐' : '❄️')}</div>` : ''}
        `;
        balEl.addEventListener('click', () => handleBalloonClick(b));
        arena.appendChild(balEl);
      }

      balEl.style.left = b.x + 'px';
      balEl.style.bottom = b.y + 'px';

      // Verificar si salió por arriba (Con un margen para que salga completo)
      if (currentArenaHeight > 100 && b.y > (currentArenaHeight + 150)) {
        balEl.remove();
        balloons.splice(i, 1);
        
        // Penalizar si era el correcto
        if (b.isCorrect && b.type !== 'bomb') {
          lives--;
          showToast('¡Se escapó la respuesta!', 'warning');
          checkGameOver();
          if (!isGameOver) loadNextQuestion();
        }
      }
    }

    if (!isGameOver) {
      animationFrameId = requestAnimationFrame(gameLoop);
    }
  }

  function handleBalloonClick(b) {
    if (isGameOver) return;

    const el = document.getElementById(b.id);
    if (el) {
      createBurstEffect(b.x + b.size/2, arenaHeight() - b.y - b.size/2, b.color);
      el.remove();
    }

    // Quitar del array
    balloons = balloons.filter(item => item.id !== b.id);

    // Lógica según tipo
    if (b.type === 'bomb') {
      lives--;
      showToast('¡BOOM! Globo Bomba 💣', 'danger');
      checkGameOver();
      return;
    }

    if (b.isCorrect) {
      let points = 10;
      if (b.type === 'gold') points = 20;
      score += points;
      correctCount++;
      showToast(b.type === 'gold' ? '¡Doble Puntos! 🌟' : '¡Correcto! 🎉', 'success');
      
      // Incrementar dificultad
      speedMultiplier = 1 + (correctCount * 0.05);
      
      if (b.type === 'freeze') {
        speedMultiplier = 0.5;
        showToast('¡Tiempo Congelado! ❄️', 'info');
        setTimeout(() => { if (!isGameOver) speedMultiplier = 1 + (correctCount * 0.05); }, 4000);
      }

      loadNextQuestion();
    } else {
      lives--;
      showToast('¡Incorrecto! 💔', 'warning');
      checkGameOver();
    }

    renderUIStatusOnly();
  }

  function arenaHeight() {
      return container.querySelector('.bbp-game-arena')?.clientHeight || 400;
  }

  function createBurstEffect(x, y, color) {
    const arena = container.querySelector('.bbp-game-arena');
    if (!arena) return;

    for (let i = 0; i < 8; i++) {
      const p = document.createElement('div');
      p.className = 'bbp-particle';
      p.style.backgroundColor = color;
      p.style.left = x + 'px';
      p.style.top = y + 'px';
      
      const angle = Math.random() * Math.PI * 2;
      const speed = 2 + Math.random() * 4;
      p.style.setProperty('--dx', Math.cos(angle) * speed * 20 + 'px');
      p.style.setProperty('--dy', Math.sin(angle) * speed * 20 + 'px');

      arena.appendChild(p);
      setTimeout(() => p.remove(), 600);
    }
  }

  function checkGameOver() {
    if (lives <= 0) {
      isGameOver = true;
      cancelAnimationFrame(animationFrameId);
      addCoins(Math.floor(score / 2));
      addXP(score);
      renderResults();
    } else {
        renderUIStatusOnly();
    }
  }

  function renderUI() {
    container.innerHTML = `
      <div class="bbp-game">
        <div class="bbp-hud">
          <div class="bbp-stat">❤️ Vidas: <span>${lives}</span></div>
          <div class="bbp-stat">🏆 Puntos: <span>${score}</span></div>
          <div class="bbp-stat">⚡ Velocidad: <span>x${speedMultiplier.toFixed(1)}</span></div>
        </div>

        <div class="bbp-question-box glass">
          <p class="bbp-question">${currentQuestion ? currentQuestion.q : 'Cargando...'}</p>
        </div>

        <div class="bbp-game-arena" id="bbp-game-arena">
          <!-- Globos se inyectan aquí con JS -->
        </div>
      </div>
    `;
  }

  function renderUIStatusOnly() {
      const hud = container.querySelector('.bbp-hud');
      if (hud) {
          hud.innerHTML = `
            <div class="bbp-stat">❤️ Vidas: <span>${lives}</span></div>
            <div class="bbp-stat">🏆 Puntos: <span>${score}</span></div>
            <div class="bbp-stat">⚡ Velocidad: <span>x${speedMultiplier.toFixed(1)}</span></div>
          `;
      }
  }

  function renderResults() {
    container.innerHTML = `
      <div class="bbp-game">
        <div class="hm-result-card glass">
          <div class="hm-result-icon">🎈</div>
          <h2>¡Partida Terminada!</h2>
          <p class="text-center text-lg">Puntuación: <strong>${score} puntos</strong></p>
          
          <div class="reward-summary mt-md">
            <div class="reward-item">💰 <span>+${Math.floor(score/2)}</span></div>
            <div class="reward-item">⭐ <span>+${score} XP</span></div>
          </div>

          <button class="btn btn-primary btn-block mt-lg" id="btn-restart-bbp">
            Jugar de Nuevo
          </button>
          <button class="btn btn-secondary btn-block mt-sm" id="btn-home-bbp">
            Volver
          </button>
        </div>
      </div>
    `;

    document.getElementById('btn-restart-bbp')?.addEventListener('click', () => {
      score = 0;
      lives = 3;
      speedMultiplier = 1;
      correctCount = 0;
      isGameOver = false;
      init();
    });

    document.getElementById('btn-home-bbp')?.addEventListener('click', () => {
        navigate('home');
    });
  }

  init(); // Disparar lógica
}
