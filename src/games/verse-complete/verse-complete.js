// ====================================
// Complete the Verse Game
// ====================================

import { verses } from '../../data/verses.js';
import { recordGamePlayed } from '../../core/player.js';
import { grantReward } from '../../core/rewards.js';
import { showToast, shuffleArray } from '../../core/ui-utils.js';
import { navigate } from '../../core/router.js';

export function renderVerseComplete(container) {
  const TOTAL_ROUNDS = 5;

  const gameVerses = shuffleArray([...verses]).slice(0, TOTAL_ROUNDS);

  let currentRound = 0;
  let score = 0;
  let correctCount = 0;

  function getVerseWithBlanks(verse) {
    const words = verse.text.split(' ');
    // Remove 2-3 words from the verse
    const numBlanks = Math.min(3, Math.max(2, Math.floor(words.length / 5)));
    const indices = [];

    while (indices.length < numBlanks) {
      const idx = Math.floor(Math.random() * words.length);
      // Skip very short words
      if (!indices.includes(idx) && words[idx].length > 3) {
        indices.push(idx);
      }
    }

    indices.sort((a, b) => a - b);

    const blankedWords = [];
    const missingWords = [];

    words.forEach((word, i) => {
      if (indices.includes(i)) {
        // Clean the word (remove punctuation for matching)
        const clean = word.replace(/[.,;:!?¡¿"']/g, '');
        const punct = word.replace(clean, '');
        blankedWords.push({ type: 'blank', original: clean, punct, index: missingWords.length });
        missingWords.push(clean);
      } else {
        blankedWords.push({ type: 'word', text: word });
      }
    });

    // Generate distractors (fake options)
    const distractors = ['gracia', 'verdad', 'camino', 'espíritu', 'gloria', 'pueblo', 'cielo', 'tierra', 'corazón', 'alma'];
    const fakeWords = shuffleArray(distractors.filter(d => !missingWords.includes(d.toLowerCase()))).slice(0, 2);
    const allOptions = shuffleArray([...missingWords, ...fakeWords]);

    return { blankedWords, missingWords, allOptions };
  }

  function renderRound() {
    const verse = gameVerses[currentRound];
    const { blankedWords, missingWords, allOptions } = getVerseWithBlanks(verse);

    let selectedAnswers = new Array(missingWords.length).fill(null);

    function renderUI() {
      container.innerHTML = `
        <div class="verse-complete-game">
          <div class="verse-complete-header">
            <div class="trivia-progress">
              <span>Versículo ${currentRound + 1} / ${TOTAL_ROUNDS}</span>
              <span class="trivia-score">⭐ ${score}</span>
            </div>
            <div class="trivia-progress-bar">
              <div class="trivia-progress-fill" style="width: ${(currentRound / TOTAL_ROUNDS) * 100}%"></div>
            </div>
          </div>

          <div class="verse-complete-ref">📖 ${verse.ref}</div>

          <div class="verse-complete-text">
            ${blankedWords.map(w => {
              if (w.type === 'word') {
                return `<span class="vc-word">${w.text}</span>`;
              } else {
                const selected = selectedAnswers[w.index];
                return `<span class="vc-blank ${selected ? 'filled' : ''}" data-blank="${w.index}">${selected || '___'}${w.punct}</span>`;
              }
            }).join(' ')}
          </div>

          <div class="section-title mt-lg">Elige las palabras:</div>
          <div class="vc-options">
            ${allOptions.map(opt => {
              const isUsed = selectedAnswers.includes(opt);
              return `<button class="vc-option ${isUsed ? 'used' : ''}" data-word="${opt}" ${isUsed ? 'disabled' : ''}>${opt}</button>`;
            }).join('')}
          </div>

          <button class="btn btn-primary btn-block mt-lg ${selectedAnswers.includes(null) ? 'disabled' : ''}" id="btn-check-verse" ${selectedAnswers.includes(null) ? 'disabled' : ''}>
            ✅ Comprobar
          </button>
        </div>
      `;

      // Blank clicks (to clear)
      container.querySelectorAll('.vc-blank.filled').forEach(blank => {
        blank.addEventListener('click', () => {
          const idx = parseInt(blank.dataset.blank);
          selectedAnswers[idx] = null;
          renderUI();
        });
      });

      // Option clicks
      container.querySelectorAll('.vc-option:not([disabled])').forEach(btn => {
        btn.addEventListener('click', () => {
          const word = btn.dataset.word;
          // Find first empty blank
          const emptyIdx = selectedAnswers.indexOf(null);
          if (emptyIdx !== -1) {
            selectedAnswers[emptyIdx] = word;
            renderUI();
          }
        });
      });

      // Check answer
      document.getElementById('btn-check-verse')?.addEventListener('click', () => {
        checkAnswer(missingWords);
      });
    }

    function checkAnswer(missingWords) {
      let allCorrect = true;
      missingWords.forEach((word, i) => {
        if (selectedAnswers[i]?.toLowerCase() !== word.toLowerCase()) {
          allCorrect = false;
        }
      });

      if (allCorrect) {
        correctCount++;
        score += 30;
        showToast('✅ ¡Correcto! +30 pts', 'success');
      } else {
        showToast(`❌ Respuesta: ${missingWords.join(', ')}`, 'error');
      }

      setTimeout(() => {
        currentRound++;
        if (currentRound < TOTAL_ROUNDS) {
          renderRound();
        } else {
          showResults();
        }
      }, 2000);
    }

    renderUI();
  }

  function showResults() {
    const reward = grantReward('verse-complete', score, correctCount, 'medium');
    recordGamePlayed('verse-complete', score, correctCount);

    const emoji = correctCount >= 4 ? '📖' : correctCount >= 2 ? '😊' : '🙏';

    container.innerHTML = `
      <div class="game-results">
        <div class="results-emoji">${emoji}</div>
        <h2 class="results-title">${correctCount >= 3 ? '¡Excelente memorización!' : '¡Sigue practicando la Palabra!'}</h2>

        <div class="results-score-circle">
          <span class="results-score-value">${score}</span>
          <span class="results-score-label">puntos</span>
        </div>

        <div class="results-stats">
          <div class="results-stat">
            <span class="results-stat-value">${correctCount}/${TOTAL_ROUNDS}</span>
            <span class="results-stat-label">Completados</span>
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
      navigate('game', { gameId: 'verse-complete' });
    });

    document.getElementById('btn-go-home')?.addEventListener('click', () => {
      navigate('home');
    });
  }

  renderRound();
}
