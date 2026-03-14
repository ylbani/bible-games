// ====================================
// Home Screen
// ====================================

import { getPlayer, getLevelName } from '../core/player.js';
import { getGames } from '../games/game-registry.js';
import { navigate } from '../core/router.js';
import { getVerseOfDay } from '../data/verses.js';
import { getPlayerPosition } from '../core/ranking.js';

export function renderHome(container) {
  const player = getPlayer();
  const verse = getVerseOfDay();
  const games = getGames();
  const rank = getPlayerPosition();

  const gameColors = [
    'linear-gradient(135deg, #4361ee, #6c83f7)',
    'linear-gradient(135deg, #a855f7, #c084fc)',
    'linear-gradient(135deg, #06d6a0, #34d399)',
    'linear-gradient(135deg, #fb923c, #fdba74)',
    'linear-gradient(135deg, #f472b6, #f9a8d4)'
  ];

  container.innerHTML = `
    <div class="home-screen">
      <div class="home-welcome">
        <span class="welcome-emoji">✝️</span>
        <h2>¡Hola, ${player.name}!</h2>
        <p>¿Listo para aprender jugando?</p>
      </div>

      <div class="home-stats">
        <div class="stat-card">
          <div class="stat-value">${player.level}</div>
          <div class="stat-label">Nivel</div>
        </div>
        <div class="stat-card">
          <div class="stat-value">${player.totalGamesPlayed}</div>
          <div class="stat-label">Jugados</div>
        </div>
        <div class="stat-card">
          <div class="stat-value">#${rank}</div>
          <div class="stat-label">Ranking</div>
        </div>
      </div>

      <div class="verse-card-home" id="verse-card-home">
        <div class="verse-text">"${verse.text}"</div>
        <div class="verse-ref">— ${verse.ref}</div>
      </div>

      <div class="section-title">🎮 Juegos</div>
      <div class="games-grid">
        ${games.map((game, i) => `
          <div class="game-card" data-game-id="${game.id}">
            <div class="game-card-icon" style="background: ${gameColors[i % gameColors.length]}">
              ${game.icon}
            </div>
            <div class="game-card-info">
              <h3>${game.name}</h3>
              <p>${game.description}</p>
              <div class="game-card-meta">
                <span class="badge badge-${game.difficulty}">${game.difficulty === 'easy' ? 'Fácil' : game.difficulty === 'medium' ? 'Medio' : 'Difícil'}</span>
                ${player.bestScores[game.id] ? `<span class="text-sm text-muted">Mejor: ${player.bestScores[game.id]}</span>` : ''}
              </div>
            </div>
            <div class="game-card-arrow">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </div>
          </div>
        `).join('')}
      </div>

      <div class="section-title mt-xl">🏆 Ranking</div>
      <button class="btn btn-secondary btn-block" id="btn-ranking">
        Ver Ranking Completo
      </button>
    </div>
  `;

  // Events
  container.querySelectorAll('.game-card').forEach(card => {
    card.addEventListener('click', () => {
      const gameId = card.dataset.gameId;
      navigate('game', { gameId });
    });
  });

  document.getElementById('verse-card-home')?.addEventListener('click', () => {
    navigate('verse');
  });

  document.getElementById('btn-ranking')?.addEventListener('click', () => {
    navigate('ranking');
  });
}
