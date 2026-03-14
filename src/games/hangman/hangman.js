// ====================================
// Hangman Game Module (Ahorcado)
// ====================================

import { hangmanWords } from '../../data/hangman_words.js';
import { addCoins, addXP } from '../../core/player.js';
import { showToast } from '../../core/ui-utils.js';

export function renderHangman(container) {
  let currentItem = getRandomWord();
  let guessedLetters = [];
  let lives = 6;
  let maxLives = 6;
  let isGameOver = false;

  function getRandomWord() {
    const randomIndex = Math.floor(Math.random() * hangmanWords.length);
    return hangmanWords[randomIndex];
  }

  function render() {
    if (isGameOver) {
      renderGameEnd();
      return;
    }

    const wordToGuess = currentItem.word.toUpperCase();
    const isWon = wordToGuess.split('').every(letter => guessedLetters.includes(letter) || letter === ' ');

    if (isWon) {
      endGame(true);
      return;
    }

    if (lives <= 0) {
      endGame(false);
      return;
    }

    container.innerHTML = `
      <div class="hangman-game">
        <div class="hm-header">
          <div class="hm-category">🏷️ ${currentItem.category}</div>
          <div class="hm-lives">
            ${Array.from({ length: maxLives }, (_, i) => `
              <span class="hm-heart ${i < lives ? 'filled' : 'empty'}">❤️</span>
            `).join('')}
          </div>
        </div>

        <div class="hm-hint-container">
          <p class="hm-hint">💡 Pista: <span>${currentItem.hint}</span></p>
        </div>

        <div class="hm-word-display" id="hm-word-display">
          ${wordToGuess.split('').map(letter => `
            <div class="hm-letter-box ${letter === ' ' ? 'hm-space' : ''}">
              ${guessedLetters.includes(letter) || letter === ' ' ? letter : '_'}
            </div>
          `).join('')}
        </div>

        <div class="hm-keyboard" id="hm-keyboard">
          ${'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ'.split('').map(letter => `
            <button class="btn btn-keyboard" 
                    data-letter="${letter}" 
                    ${guessedLetters.includes(letter) ? 'disabled' : ''}>
              ${letter}
            </button>
          `).join('')}
        </div>
      </div>
    `;

    // Attach listeners
    container.querySelectorAll('.btn-keyboard').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const letter = e.target.dataset.letter;
        handleGuess(letter);
      });
    });
  }

  function handleGuess(letter) {
    if (guessedLetters.includes(letter)) return;

    guessedLetters.push(letter);
    const word = currentItem.word.toUpperCase();

    if (!word.includes(letter)) {
      lives--;
      // Small feedback
      showToast('¡Letra incorrecta!', 'warning');
    } else {
      showToast('¡Correcto!', 'success');
    }

    render();
  }

  function endGame(won) {
    isGameOver = true;
    if (won) {
      addCoins(50);
      addXP(25);
    }
    renderGameEnd(won);
  }

  function renderGameEnd(won) {
    container.innerHTML = `
      <div class="hangman-game">
        <div class="hm-result-card glass">
          <div class="hm-result-icon">${won ? '🎉' : '😢'}</div>
          <h2>${won ? '¡Victoria!' : '¡Fin del Juego!'}</h2>
          
          <p class="hm-result-word">La palabra era: <span>${currentItem.word}</span></p>
          
          <div class="hm-verse-box">
            <h4>📖 Contexto Bíblico:</h4>
            <p>${currentItem.verse}</p>
          </div>

          <div class="reward-summary">
            ${won ? `
              <div class="reward-item">💰 <span>+50</span></div>
              <div class="reward-item">⭐ <span>+25 XP</span></div>
            ` : '<p class="text-muted">No te rindas, ¡sigue aprendiendo!</p>'}
          </div>

          <button class="btn btn-primary btn-block" id="btn-restart-hm">
            Jugar de Nuevo
          </button>
        </div>
      </div>
    `;

    document.getElementById('btn-restart-hm')?.addEventListener('click', () => {
      currentItem = getRandomWord();
      guessedLetters = [];
      lives = 6;
      isGameOver = false;
      render();
    });
  }

  render(); // Initial call
}
