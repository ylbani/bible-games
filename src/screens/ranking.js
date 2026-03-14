// ====================================
// Ranking Screen
// ====================================

import { getRanking, getPlayerPosition } from '../core/ranking.js';
import { formatNumber } from '../core/ui-utils.js';

export function renderRanking(container) {
  const ranking = getRanking();
  const playerPos = getPlayerPosition();

  const medals = ['🥇', '🥈', '🥉'];

  container.innerHTML = `
    <div class="ranking-screen">
      <div class="ranking-header">
        <div class="ranking-podium">
          ${ranking.slice(0, 3).map((p, i) => `
            <div class="podium-item podium-${i + 1} ${p.isCurrentPlayer ? 'is-player' : ''}">
              <div class="podium-avatar">${p.avatar}</div>
              <div class="podium-medal">${medals[i]}</div>
              <div class="podium-name">${p.name}</div>
              <div class="podium-score">${formatNumber(p.score)}</div>
            </div>
          `).join('')}
        </div>
      </div>

      <div class="ranking-your-pos">
        Tu posición: <strong>#${playerPos}</strong>
      </div>

      <div class="ranking-list">
        ${ranking.map((p, i) => `
          <div class="ranking-row ${p.isCurrentPlayer ? 'is-player' : ''}">
            <div class="ranking-pos">
              ${i < 3 ? medals[i] : `#${p.position}`}
            </div>
            <div class="ranking-avatar">${p.avatar}</div>
            <div class="ranking-info">
              <div class="ranking-name">${p.name} ${p.isCurrentPlayer ? '(Tú)' : ''}</div>
              <div class="ranking-level">Nivel ${p.level}</div>
            </div>
            <div class="ranking-score">${formatNumber(p.score)}</div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}
