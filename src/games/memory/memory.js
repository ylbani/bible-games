// ====================================
// Memory Match Game
// ====================================

import { characters } from '../../data/characters.js';
import { recordGamePlayed } from '../../core/player.js';
import { grantReward } from '../../core/rewards.js';
import { showToast, shuffleArray } from '../../core/ui-utils.js';
import { navigate } from '../../core/router.js';

export function renderMemory(container) {
  const PAIRS = 6;

  // Create pairs from characters (name + first clue)
  const selectedChars = shuffleArray([...characters]).slice(0, PAIRS);
  const pairs = selectedChars.map((c, i) => [
    { id: i, type: 'name', text: c.name, icon: '👤', pairId: i },
    { id: i, type: 'clue', text: c.clues[0], icon: '💡', pairId: i }
  ]).flat();

  const cards = shuffleArray(pairs);

  let flippedCards = [];
  let matchedPairs = [];
  let moves = 0;
  let score = 0;
  let startTime = Date.now();
  let canFlip = true;

  function renderUI() {
    container.innerHTML = `
      <div class="memory-game">
        <div class="memory-header">
          <div class="memory-stats">
            <span>🎯 ${matchedPairs.length}/${PAIRS}</span>
            <span>🔄 ${moves} movimientos</span>
          </div>
        </div>

        <div class="memory-grid">
          ${cards.map((card, i) => `
            <div class="memory-card ${matchedPairs.includes(card.pairId) ? 'matched' : ''} ${flippedCards.includes(i) ? 'flipped' : ''}"
                 data-index="${i}">
              <div class="memory-card-inner">
                <div class="memory-card-front">
                  <span class="memory-card-icon">✝️</span>
                </div>
                <div class="memory-card-back">
                  <span class="memory-card-type">${card.icon}</span>
                  <span class="memory-card-text">${card.text}</span>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;

    // Card click events
    container.querySelectorAll('.memory-card').forEach(cardEl => {
      cardEl.addEventListener('click', () => {
        if (!canFlip) return;
        const idx = parseInt(cardEl.dataset.index);
        flipCard(idx);
      });
    });
  }

  function flipCard(idx) {
    // Don't flip if already flipped or matched
    if (flippedCards.includes(idx)) return;
    if (matchedPairs.includes(cards[idx].pairId)) return;
    if (flippedCards.length >= 2) return;

    flippedCards.push(idx);

    // Update UI for this card
    const cardEl = container.querySelector(`.memory-card[data-index="${idx}"]`);
    if (cardEl) cardEl.classList.add('flipped');

    if (flippedCards.length === 2) {
      moves++;
      canFlip = false;

      const [first, second] = flippedCards;
      const card1 = cards[first];
      const card2 = cards[second];

      if (card1.pairId === card2.pairId && card1.type !== card2.type) {
        // Match!
        matchedPairs.push(card1.pairId);
        score += Math.max(30 - moves, 10);

        setTimeout(() => {
          document.querySelector(`.memory-card[data-index="${first}"]`)?.classList.add('matched');
          document.querySelector(`.memory-card[data-index="${second}"]`)?.classList.add('matched');

          // Update stats
          const statsEl = container.querySelector('.memory-stats');
          if (statsEl) statsEl.innerHTML = `<span>🎯 ${matchedPairs.length}/${PAIRS}</span><span>🔄 ${moves} movimientos</span>`;

          flippedCards = [];
          canFlip = true;

          showToast(`✅ ¡Par encontrado!`, 'success');

          if (matchedPairs.length === PAIRS) {
            setTimeout(showResults, 800);
          }
        }, 600);
      } else {
        // No match
        setTimeout(() => {
          document.querySelector(`.memory-card[data-index="${first}"]`)?.classList.remove('flipped');
          document.querySelector(`.memory-card[data-index="${second}"]`)?.classList.remove('flipped');

          // Update stats
          const statsEl = container.querySelector('.memory-stats');
          if (statsEl) statsEl.innerHTML = `<span>🎯 ${matchedPairs.length}/${PAIRS}</span><span>🔄 ${moves} movimientos</span>`;

          flippedCards = [];
          canFlip = true;
        }, 1000);
      }
    }
  }

  function showResults() {
    const elapsed = Math.floor((Date.now() - startTime) / 1000);
    const timeBonus = Math.max(0, 120 - elapsed);
    score += timeBonus;

    const reward = grantReward('memory', score, matchedPairs.length, 'easy');
    recordGamePlayed('memory', score, matchedPairs.length);

    const emoji = moves <= PAIRS * 2 ? '🧠' : moves <= PAIRS * 3 ? '😊' : '🃏';

    container.innerHTML = `
      <div class="game-results">
        <div class="results-emoji">${emoji}</div>
        <h2 class="results-title">${moves <= PAIRS * 2 ? '¡Memoria increíble!' : '¡Bien jugado!'}</h2>

        <div class="results-score-circle">
          <span class="results-score-value">${score}</span>
          <span class="results-score-label">puntos</span>
        </div>

        <div class="results-stats">
          <div class="results-stat">
            <span class="results-stat-value">${moves}</span>
            <span class="results-stat-label">Movimientos</span>
          </div>
          <div class="results-stat">
            <span class="results-stat-value">${elapsed}s</span>
            <span class="results-stat-label">Tiempo</span>
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
      navigate('game', { gameId: 'memory' });
    });

    document.getElementById('btn-go-home')?.addEventListener('click', () => {
      navigate('home');
    });
  }

  renderUI();
}
