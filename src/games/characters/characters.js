// ====================================
// Guess the Character Game
// ====================================

import { characters } from '../../data/characters.js';
import { recordGamePlayed } from '../../core/player.js';
import { grantReward } from '../../core/rewards.js';
import { showToast, shuffleArray, randomFromArray } from '../../core/ui-utils.js';
import { navigate } from '../../core/router.js';

export function renderCharacters(container) {
  const TOTAL_ROUNDS = 5;

  const gameCharacters = shuffleArray([...characters]).slice(0, TOTAL_ROUNDS);

  let currentRound = 0;
  let score = 0;
  let correctCount = 0;
  let currentClueIndex = 0;

  function renderRound() {
    const character = gameCharacters[currentRound];
    currentClueIndex = 0;

    // Generate fake options
    const otherNames = characters
      .filter(c => c.name !== character.name)
      .map(c => c.name);
    const fakeOptions = shuffleArray(otherNames).slice(0, 3);
    const options = shuffleArray([character.name, ...fakeOptions]);

    renderClueUI(character, options);
  }

  function renderClueUI(character, options) {
    const cluesRevealed = character.clues.slice(0, currentClueIndex + 1);
    const maxPoints = Math.max(50 - (currentClueIndex * 10), 10);

    container.innerHTML = `
      <div class="characters-game">
        <div class="characters-header">
          <div class="characters-progress">
            <span>Personaje ${currentRound + 1} / ${TOTAL_ROUNDS}</span>
            <span class="characters-score">⭐ ${score}</span>
          </div>
          <div class="trivia-progress-bar">
            <div class="trivia-progress-fill" style="width: ${(currentRound / TOTAL_ROUNDS) * 100}%"></div>
          </div>
        </div>

        <div class="characters-clue-counter">
          <span>Pista ${currentClueIndex + 1} de ${character.clues.length}</span>
          <span class="text-muted">Valor: ${maxPoints} pts</span>
        </div>

        <div class="characters-clues">
          ${cluesRevealed.map((clue, i) => `
            <div class="clue-card ${i === currentClueIndex ? 'clue-new' : ''}">
              <span class="clue-number">${i + 1}</span>
              <span>${clue}</span>
            </div>
          `).join('')}
        </div>

        ${currentClueIndex < character.clues.length - 1 ? `
          <button class="btn btn-secondary btn-block mb-md" id="btn-more-clue">
            💡 Otra Pista (-10 pts)
          </button>
        ` : ''}

        <div class="section-title mt-md">¿Quién es?</div>
        <div class="characters-options">
          ${options.map(opt => `
            <button class="characters-option" data-name="${opt}">${opt}</button>
          `).join('')}
        </div>
      </div>
    `;

    // More clue button
    document.getElementById('btn-more-clue')?.addEventListener('click', () => {
      currentClueIndex++;
      renderClueUI(character, options);
    });

    // Answer buttons
    container.querySelectorAll('.characters-option').forEach(btn => {
      btn.addEventListener('click', () => {
        const selected = btn.dataset.name;
        handleAnswer(selected, character, options);
      });
    });
  }

  function handleAnswer(selected, character, options) {
    const isCorrect = selected === character.name;

    // Disable all buttons
    container.querySelectorAll('.characters-option').forEach(btn => {
      btn.disabled = true;
      if (btn.dataset.name === character.name) btn.classList.add('correct');
      if (btn.dataset.name === selected && !isCorrect) btn.classList.add('wrong');
    });

    if (isCorrect) {
      correctCount++;
      const points = Math.max(50 - (currentClueIndex * 10), 10);
      score += points;
      showToast(`✅ ¡Correcto! +${points} pts`, 'success');
    } else {
      showToast(`❌ Era: ${character.name}`, 'error');
    }

    setTimeout(() => {
      currentRound++;
      if (currentRound < TOTAL_ROUNDS) {
        renderRound();
      } else {
        showResults();
      }
    }, 1800);
  }

  function showResults() {
    const reward = grantReward('characters', score, correctCount, 'medium');
    recordGamePlayed('characters', score, correctCount);

    const emoji = correctCount >= 4 ? '🕵️' : correctCount >= 3 ? '😊' : '📖';

    container.innerHTML = `
      <div class="game-results">
        <div class="results-emoji">${emoji}</div>
        <h2 class="results-title">${correctCount >= 3 ? '¡Gran detective bíblico!' : '¡Sigue aprendiendo!'}</h2>

        <div class="results-score-circle">
          <span class="results-score-value">${score}</span>
          <span class="results-score-label">puntos</span>
        </div>

        <div class="results-stats">
          <div class="results-stat">
            <span class="results-stat-value">${correctCount}/${TOTAL_ROUNDS}</span>
            <span class="results-stat-label">Adivinados</span>
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
      navigate('game', { gameId: 'characters' });
    });

    document.getElementById('btn-go-home')?.addEventListener('click', () => {
      navigate('home');
    });
  }

  renderRound();
}
