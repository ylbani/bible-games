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
    let playedWords = JSON.parse(localStorage.getItem('hm_played_words') || '[]');
    
    // Filtrar disponibles
    let available = hangmanWords.filter(w => !playedWords.includes(w.word));
    
    // Si se agotaron todas las palabras, reiniciar la lista
    if (available.length === 0) {
      playedWords = [];
      available = [...hangmanWords];
    }
    
    const randomIndex = Math.floor(Math.random() * available.length);
    const selected = available[randomIndex];
    
    // Guardar para que no se repita en esta tanda
    playedWords.push(selected.word);
    localStorage.setItem('hm_played_words', JSON.stringify(playedWords));
    
    return selected;
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
        </div>

        <div class="hm-gallows">
          <svg height="180" width="140" class="gallows-svg">
            <style>
              .gallows-line { stroke: #ffffff; stroke-width: 4; fill: none; stroke-linecap: round; }
              .gallows-char { stroke: #ef233c; stroke-width: 3.5; fill: none; stroke-linecap: round; transition: opacity 0.3s ease; }
              .gallows-visible { opacity: 1 !important; visibility: visible !important; }
              .gallows-hidden { opacity: 0 !important; visibility: hidden !important; }
            </style>
            <!-- Posiciones fijas (Horca) -->
            <line x1="10" y1="170" x2="130" y2="170" class="gallows-line" /> <!-- Base -->
            <line x1="30" y1="170" x2="30" y2="10" class="gallows-line" />  <!-- Poste vertical -->
            <line x1="30" y1="10" x2="90" y2="10" class="gallows-line" />   <!-- Poste horizontal -->
            <line x1="90" y1="10" x2="90" y2="30" class="gallows-line" />   <!-- Soga -->

            <!-- Monigote (Cuerpo del Ahorcado) -->
            <!-- Cabeza -->
            <circle cx="90" cy="45" r="15" class="gallows-char ${lives <= 5 ? 'gallows-visible' : 'gallows-hidden'}" />
            
            <!-- Cuerpo -->
            <line x1="90" y1="60" x2="90" y2="105" class="gallows-char ${lives <= 4 ? 'gallows-visible' : 'gallows-hidden'}" />
            
            <!-- Brazo Izquierdo -->
            <line x1="90" y1="70" x2="70" y2="90" class="gallows-char ${lives <= 3 ? 'gallows-visible' : 'gallows-hidden'}" />
            
            <!-- Brazo Derecho -->
            <line x1="90" y1="70" x2="110" y2="90" class="gallows-char ${lives <= 2 ? 'gallows-visible' : 'gallows-hidden'}" />
            
            <!-- Pierna Izquierda -->
            <line x1="90" y1="105" x2="75" y2="140" class="gallows-char ${lives <= 1 ? 'gallows-visible' : 'gallows-hidden'}" />
            
            <!-- Pierna Derecho -->
            <line x1="90" y1="105" x2="105" y2="140" class="gallows-char ${lives <= 0 ? 'gallows-visible' : 'gallows-hidden'}" />
          </svg>
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
