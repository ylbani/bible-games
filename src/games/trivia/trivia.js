// ====================================
// Bible Trivia Quiz
// ====================================

import { questions } from '../../data/questions.js';
import { recordGamePlayed } from '../../core/player.js';
import { grantReward } from '../../core/rewards.js';
import { showToast, shuffleArray } from '../../core/ui-utils.js';
import { navigate } from '../../core/router.js';
import { unlock } from '../../core/achievements.js';

export function renderTrivia(container) {
  const TOTAL_QUESTIONS = 10;
  const TIME_PER_QUESTION = 20; // seconds

  // Gather questions from all difficulties
  const allQ = [
    ...questions.easy.map(q => ({ ...q, diff: 'easy' })),
    ...questions.medium.map(q => ({ ...q, diff: 'medium' })),
    ...questions.hard.map(q => ({ ...q, diff: 'hard' }))
  ];
  const gameQuestions = shuffleArray(allQ).slice(0, TOTAL_QUESTIONS);

  let currentQ = 0;
  let score = 0;
  let correctCount = 0;
  let streak = 0;
  let timer = null;
  let timeLeft = TIME_PER_QUESTION;
  let answered = false;

  function renderQuestion() {
    const q = gameQuestions[currentQ];
    answered = false;
    timeLeft = TIME_PER_QUESTION;

    const diffLabel = { easy: 'Fácil', medium: 'Medio', hard: 'Difícil' };
    const diffColor = { easy: 'var(--color-success)', medium: 'var(--color-gold)', hard: 'var(--color-error)' };

    container.innerHTML = `
      <div class="trivia-game">
        <div class="trivia-header">
          <div class="trivia-progress">
            <span>Pregunta ${currentQ + 1} / ${TOTAL_QUESTIONS}</span>
            <span class="trivia-score">⭐ ${score}</span>
          </div>
          <div class="trivia-progress-bar">
            <div class="trivia-progress-fill" style="width: ${((currentQ) / TOTAL_QUESTIONS) * 100}%"></div>
          </div>
        </div>

        <div class="trivia-timer">
          <div class="timer-circle">
            <svg viewBox="0 0 100 100" width="60" height="60">
              <circle cx="50" cy="50" r="42" fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="6"/>
              <circle id="timer-ring" cx="50" cy="50" r="42" fill="none" stroke="var(--color-gold)" stroke-width="6"
                stroke-dasharray="${2 * Math.PI * 42}"
                stroke-dashoffset="0"
                stroke-linecap="round"
                transform="rotate(-90 50 50)"/>
            </svg>
            <span id="timer-text" class="timer-text">${timeLeft}</span>
          </div>
        </div>

        <div class="trivia-category">
          <span class="badge" style="background: ${diffColor[q.diff]}">${diffLabel[q.diff]}</span>
          <span class="text-sm text-muted">${q.category}</span>
        </div>

        <div class="trivia-question">${q.q}</div>

        <div class="trivia-options">
          ${q.options.map((opt, i) => `
            <button class="trivia-option" data-index="${i}">
              <span class="option-letter">${String.fromCharCode(65 + i)}</span>
              <span>${opt}</span>
            </button>
          `).join('')}
        </div>

        ${streak >= 3 ? `<div class="streak-indicator">🔥 ¡Racha de ${streak}!</div>` : ''}
      </div>
    `;

    // Start timer
    startTimer();

    // Option clicks
    container.querySelectorAll('.trivia-option').forEach(btn => {
      btn.addEventListener('click', () => {
        if (answered) return;
        const idx = parseInt(btn.dataset.index);
        handleAnswer(idx, q);
      });
    });
  }

  function startTimer() {
    clearInterval(timer);
    const ring = document.getElementById('timer-ring');
    const circumference = 2 * Math.PI * 42;

    timer = setInterval(() => {
      timeLeft--;
      const textEl = document.getElementById('timer-text');
      if (textEl) textEl.textContent = timeLeft;

      if (ring) {
        const offset = circumference * (1 - timeLeft / TIME_PER_QUESTION);
        ring.setAttribute('stroke-dashoffset', offset);
        if (timeLeft <= 5) ring.setAttribute('stroke', 'var(--color-error)');
      }

      if (timeLeft <= 0) {
        clearInterval(timer);
        handleTimeout();
      }
    }, 1000);
  }

  function handleAnswer(idx, q) {
    answered = true;
    clearInterval(timer);

    const buttons = container.querySelectorAll('.trivia-option');
    const isCorrect = idx === q.answer;

    buttons.forEach((btn, i) => {
      btn.disabled = true;
      if (i === q.answer) btn.classList.add('correct');
      if (i === idx && !isCorrect) btn.classList.add('wrong');
    });

    if (isCorrect) {
      correctCount++;
      streak++;
      const timeBonus = Math.floor(timeLeft * 2);
      const diffBonus = { easy: 10, medium: 20, hard: 30 };
      const points = 10 + timeBonus + (diffBonus[q.diff] || 0);
      score += points;

      if (streak >= 3) unlock('streak_3');
      if (timeLeft >= TIME_PER_QUESTION - 3) unlock('fast_answer');
    } else {
      streak = 0;
    }

    setTimeout(() => {
      currentQ++;
      if (currentQ < TOTAL_QUESTIONS) {
        renderQuestion();
      } else {
        showResults();
      }
    }, 1500);
  }

  function handleTimeout() {
    answered = true;
    streak = 0;

    const q = gameQuestions[currentQ];
    const buttons = container.querySelectorAll('.trivia-option');
    buttons.forEach((btn, i) => {
      btn.disabled = true;
      if (i === q.answer) btn.classList.add('correct');
    });

    showToast('⏰ ¡Se acabó el tiempo!', 'error');

    setTimeout(() => {
      currentQ++;
      if (currentQ < TOTAL_QUESTIONS) {
        renderQuestion();
      } else {
        showResults();
      }
    }, 1500);
  }

  function showResults() {
    clearInterval(timer);

    const percentage = Math.round((correctCount / TOTAL_QUESTIONS) * 100);
    if (percentage === 100) unlock('perfect_trivia');

    const reward = grantReward('trivia', score, correctCount, 'easy');
    recordGamePlayed('trivia', score, correctCount);

    const emoji = percentage >= 80 ? '🏆' : percentage >= 60 ? '😊' : percentage >= 40 ? '🤔' : '📖';

    container.innerHTML = `
      <div class="game-results">
        <div class="results-emoji">${emoji}</div>
        <h2 class="results-title">${percentage >= 60 ? '¡Bien hecho!' : '¡Sigue practicando!'}</h2>

        <div class="results-score-circle">
          <span class="results-score-value">${score}</span>
          <span class="results-score-label">puntos</span>
        </div>

        <div class="results-stats">
          <div class="results-stat">
            <span class="results-stat-value">${correctCount}/${TOTAL_QUESTIONS}</span>
            <span class="results-stat-label">Correctas</span>
          </div>
          <div class="results-stat">
            <span class="results-stat-value">${percentage}%</span>
            <span class="results-stat-label">Precisión</span>
          </div>
        </div>

        <div class="results-rewards">
          <div class="reward-item">🪙 +${reward.coins} monedas</div>
          <div class="reward-item">⭐ +${reward.xp} XP</div>
        </div>

        <div class="results-actions">
          <button class="btn btn-primary btn-block" id="btn-play-again">🔄 Jugar de Nuevo</button>
          <button class="btn btn-secondary btn-block" id="btn-go-home">🏠 Volver al Menú</button>
        </div>
      </div>
    `;

    document.getElementById('btn-play-again')?.addEventListener('click', () => {
      navigate('game', { gameId: 'trivia' });
    });

    document.getElementById('btn-go-home')?.addEventListener('click', () => {
      navigate('home');
    });
  }

  // Start game
  renderQuestion();

  // Cleanup
  return () => {
    clearInterval(timer);
  };
}
