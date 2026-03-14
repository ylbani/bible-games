// ====================================
// Word Search Game (Sopa de Letras)
// ====================================

import { wordSets } from '../../data/words.js';
import { recordGamePlayed } from '../../core/player.js';
import { grantReward } from '../../core/rewards.js';
import { showToast, shuffleArray } from '../../core/ui-utils.js';
import { navigate } from '../../core/router.js';

export function renderWordSearch(container) {
  // 1. View Seleción de Dificultad
  renderDifficultySelection();

  function renderDifficultySelection() {
    container.innerHTML = `
      <div class="word-search-game">
        <div class="ws-header">
          <h2>🔍 Sopa de Letras</h2>
          <p class="text-secondary text-center">Encuentra palabras bíblicas ocultas en el tablero.</p>
        </div>

        <div class="difficulty-selection">
          <h3>Selecciona la Dificultad:</h3>
          <div class="difficulty-grid">
            <button class="btn btn-difficulty" data-level="easy">
               <div class="diff-title">🌱 Fácil</div>
               <div class="diff-desc">Grid 11x11, 10 palabras (Horiz/Vert)</div>
            </button>
            <button class="btn btn-difficulty" data-level="medium">
               <div class="diff-title">⚔️ Medio</div>
               <div class="diff-desc">Grid 13x13, 11 palabras (+ Diagonales)</div>
            </button>
            <button class="btn btn-difficulty" data-level="hard">
               <div class="diff-title">👑 Difícil</div>
               <div class="diff-desc">Grid 15x15, 12 palabras (Todas direcciones)</div>
            </button>
          </div>
        </div>
      </div>
    `;

    container.querySelectorAll('.btn-difficulty').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const level = btn.dataset.level;
        startWordSearch(level);
      });
    });
  }

  function startWordSearch(difficultyLevel) {
    const config = {
      easy: { size: 11, wordCount: 10, directions: [[0,1], [1,0]] },
      medium: { size: 13, wordCount: 11, directions: [[0,1], [1,0], [1,1]] },
      hard: { size: 15, wordCount: 12, directions: [[0,1], [1,0], [1,1], [0,-1], [-1,0]] }
    };

    const activeConfig = config[difficultyLevel];
    const GRID_SIZE = activeConfig.size;

    // Pick a random word set
    const wordSet = shuffleArray([...wordSets])[0];
    // Sample words quantity based on difficulty, ensure enough available
    const words = shuffleArray([...wordSet.words]).slice(0, activeConfig.wordCount);

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

      const directions = activeConfig.directions;

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
              <span>${wordSet.theme} (${difficultyLevel.toUpperCase()})</span>
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
                <div class="ws-cell" data-row="${r}" data-col="${c}">${cell}</div>
              `).join('')
            ).join('')}
          </div>

          <p class="text-sm text-muted text-center mt-md">Arrastra para seleccionar palabras consecutivas.</p>
        </div>
      `;

      const gridEl = document.getElementById('ws-grid');
      if (gridEl) {
        gridEl.style.gridTemplateColumns = `repeat(${GRID_SIZE}, 1fr)`;
      }

      setupInteraction();
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
        document.querySelectorAll('.cell-selected').forEach(el => el.classList.remove('cell-selected'));
        selectedCells = [];
      };

      function isInLine(newCell) {
        if (selectedCells.length < 1) return true;
        const first = selectedCells[0];
        const last = selectedCells[selectedCells.length - 1];

        const dr = Math.sign(last.row - first.row);
        const dc = Math.sign(last.col - first.col);

        const expectedRow = last.row + dr;
        const expectedCol = last.col + dc;

        return newCell.row === expectedRow && newCell.col === expectedCol;
      }

      gridEl.addEventListener('mousedown', startSelect);
      gridEl.addEventListener('mousemove', moveSelect);
      window.addEventListener('mouseup', endSelect); // En window para mayor seguridad
      gridEl.addEventListener('touchstart', startSelect, { passive: false });
      gridEl.addEventListener('touchmove', moveSelect, { passive: false });
      window.addEventListener('touchend', endSelect);
    }

    function checkSelection() {
      if (selectedCells.length < 2) return;

      const selected = selectedCells.map(c => grid[c.row][c.col]).join('');
      const reversed = selected.split('').reverse().join('');

      const matchedWord = words.find(w => (w === selected || w === reversed) && !foundWords.includes(w));

      if (matchedWord) {
        foundWords.push(matchedWord);
        score += 25;

        selectedCells.forEach(c => {
          const el = document.querySelector(`.ws-cell[data-row="${c.row}"][data-col="${c.col}"]`);
          if (el) el.classList.add('cell-found');
        });

        const wordEl = Array.from(document.querySelectorAll('.ws-word')).find(el => el.textContent === matchedWord);
        if (wordEl) wordEl.classList.add('found');

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
      const reward = grantReward('word-search', score, foundWords.length, difficultyLevel);
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
        renderWordSearch(container);
      });

      document.getElementById('btn-go-home')?.addEventListener('click', () => {
        navigate('home');
      });
    }

    generateGrid();
    renderUI();
  }
}
