// ====================================
// Word Search Game
// ====================================

import { wordSets } from '../../data/words.js';
import { recordGamePlayed } from '../../core/player.js';
import { grantReward } from '../../core/rewards.js';
import { showToast, shuffleArray } from '../../core/ui-utils.js';
import { navigate } from '../../core/router.js';

export function renderWordSearch(container) {
  const GRID_SIZE = 10;

  // Pick a random word set
  const wordSet = shuffleArray([...wordSets])[0];
  const words = wordSet.words;

  let grid = [];
  let foundWords = [];
  let selecting = false;
  let selectedCells = [];
  let score = 0;
  let startTime = Date.now();

  function generateGrid() {
    // Create empty grid
    grid = Array.from({ length: GRID_SIZE }, () =>
      Array.from({ length: GRID_SIZE }, () => '')
    );

    const directions = [
      [0, 1],  // right
      [1, 0],  // down
      [1, 1],  // diagonal down-right
      [0, -1], // left
      [-1, 0], // up
    ];

    // Place each word
    words.forEach(word => {
      let placed = false;
      let attempts = 0;

      while (!placed && attempts < 100) {
        attempts++;
        const dir = directions[Math.floor(Math.random() * directions.length)];
        const row = Math.floor(Math.random() * GRID_SIZE);
        const col = Math.floor(Math.random() * GRID_SIZE);

        // Check if word fits
        const endRow = row + dir[0] * (word.length - 1);
        const endCol = col + dir[1] * (word.length - 1);

        if (endRow < 0 || endRow >= GRID_SIZE || endCol < 0 || endCol >= GRID_SIZE) continue;

        let canPlace = true;
        for (let i = 0; i < word.length; i++) {
          const r = row + dir[0] * i;
          const c = col + dir[1] * i;
          if (grid[r][c] !== '' && grid[r][c] !== word[i]) {
            canPlace = false;
            break;
          }
        }

        if (canPlace) {
          for (let i = 0; i < word.length; i++) {
            const r = row + dir[0] * i;
            const c = col + dir[1] * i;
            grid[r][c] = word[i];
          }
          placed = true;
        }
      }
    });

    // Fill empty cells with random letters
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    for (let r = 0; r < GRID_SIZE; r++) {
      for (let c = 0; c < GRID_SIZE; c++) {
        if (grid[r][c] === '') {
          grid[r][c] = letters[Math.floor(Math.random() * letters.length)];
        }
      }
    }
  }

  function renderUI() {
    container.innerHTML = `
      <div class="word-search-game">
        <div class="ws-header">
          <div class="ws-theme">
            <span class="ws-theme-icon">📚</span>
            <span>${wordSet.theme}</span>
          </div>
          <div class="ws-found">${foundWords.length} / ${words.length}</div>
        </div>

        <div class="ws-words-list">
          ${words.map(w => `
            <span class="ws-word ${foundWords.includes(w) ? 'found' : ''}">${w}</span>
          `).join('')}
        </div>

        <div class="ws-grid" id="ws-grid">
          ${grid.map((row, r) =>
            row.map((cell, c) => `
              <div class="ws-cell ${isCellFound(r, c) ? 'cell-found' : ''}"
                   data-row="${r}" data-col="${c}">${cell}</div>
            `).join('')
          ).join('')}
        </div>

        <p class="text-sm text-muted text-center mt-md">Toca una letra para empezar y arrastra para seleccionar</p>
      </div>
    `;

    // Set grid CSS
    const gridEl = document.getElementById('ws-grid');
    if (gridEl) {
      gridEl.style.gridTemplateColumns = `repeat(${GRID_SIZE}, 1fr)`;
    }

    // Touch/mouse events
    setupInteraction();
  }

  function isCellFound(r, c) {
    // Simple check - mark cells as found
    return false; // Will be handled by CSS classes
  }

  function setupInteraction() {
    const gridEl = document.getElementById('ws-grid');
    if (!gridEl) return;

    const getCellFromEvent = (e) => {
      const touch = e.touches ? e.touches[0] : e;
      const el = document.elementFromPoint(touch.clientX, touch.clientY);
      if (el && el.classList.contains('ws-cell')) {
        return {
          row: parseInt(el.dataset.row),
          col: parseInt(el.dataset.col),
          el
        };
      }
      return null;
    };

    const startSelect = (e) => {
      e.preventDefault();
      selecting = true;
      selectedCells = [];
      const cell = getCellFromEvent(e);
      if (cell) {
        selectedCells.push(cell);
        cell.el.classList.add('cell-selected');
      }
    };

    const moveSelect = (e) => {
      if (!selecting) return;
      e.preventDefault();
      const cell = getCellFromEvent(e);
      if (cell && !selectedCells.some(c => c.row === cell.row && c.col === cell.col)) {
        // Check if it's a valid direction (must be in line)
        if (selectedCells.length === 1 || isInLine(cell)) {
          selectedCells.push(cell);
          cell.el.classList.add('cell-selected');
        }
      }
    };

    const endSelect = () => {
      if (!selecting) return;
      selecting = false;
      checkSelection();
      // Clear selection
      document.querySelectorAll('.cell-selected').forEach(el => el.classList.remove('cell-selected'));
      selectedCells = [];
    };

    function isInLine(newCell) {
      if (selectedCells.length < 1) return true;
      const first = selectedCells[0];
      const last = selectedCells[selectedCells.length - 1];

      // Determine direction from first to current last
      const dr = Math.sign(last.row - first.row);
      const dc = Math.sign(last.col - first.col);

      // New cell should continue in same direction
      const expectedRow = last.row + dr;
      const expectedCol = last.col + dc;

      return newCell.row === expectedRow && newCell.col === expectedCol;
    }

    gridEl.addEventListener('mousedown', startSelect);
    gridEl.addEventListener('mousemove', moveSelect);
    gridEl.addEventListener('mouseup', endSelect);
    gridEl.addEventListener('touchstart', startSelect, { passive: false });
    gridEl.addEventListener('touchmove', moveSelect, { passive: false });
    gridEl.addEventListener('touchend', endSelect);
  }

  function checkSelection() {
    if (selectedCells.length < 2) return;

    const selected = selectedCells.map(c => grid[c.row][c.col]).join('');
    const reversed = selected.split('').reverse().join('');

    const matchedWord = words.find(w => (w === selected || w === reversed) && !foundWords.includes(w));

    if (matchedWord) {
      foundWords.push(matchedWord);
      score += 20;

      // Mark cells as found
      selectedCells.forEach(c => {
        const el = document.querySelector(`.ws-cell[data-row="${c.row}"][data-col="${c.col}"]`);
        if (el) el.classList.add('cell-found');
      });

      // Update word list
      const wordEl = Array.from(document.querySelectorAll('.ws-word')).find(el => el.textContent === matchedWord);
      if (wordEl) wordEl.classList.add('found');

      // Update counter
      const countEl = document.querySelector('.ws-found');
      if (countEl) countEl.textContent = `${foundWords.length} / ${words.length}`;

      showToast(`✅ ¡Encontraste "${matchedWord}"!`, 'success');

      if (foundWords.length === words.length) {
        const timeBonus = Math.max(0, 60 - Math.floor((Date.now() - startTime) / 1000));
        score += timeBonus;
        setTimeout(showResults, 1000);
      }
    }
  }

  function showResults() {
    const reward = grantReward('word-search', score, foundWords.length, wordSet.difficulty);
    recordGamePlayed('word-search', score, foundWords.length);

    container.innerHTML = `
      <div class="game-results">
        <div class="results-emoji">🔤</div>
        <h2 class="results-title">¡Sopa Completada!</h2>

        <div class="results-score-circle">
          <span class="results-score-value">${score}</span>
          <span class="results-score-label">puntos</span>
        </div>

        <div class="results-stats">
          <div class="results-stat">
            <span class="results-stat-value">${foundWords.length}</span>
            <span class="results-stat-label">Palabras</span>
          </div>
          <div class="results-stat">
            <span class="results-stat-value">${Math.floor((Date.now() - startTime) / 1000)}s</span>
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
      navigate('game', { gameId: 'word-search' });
    });

    document.getElementById('btn-go-home')?.addEventListener('click', () => {
      navigate('home');
    });
  }

  generateGrid();
  renderUI();
}
