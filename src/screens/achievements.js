// ====================================
// Achievements Screen
// ====================================

import { getAllAchievements, getUnlockedCount, getTotalCount } from '../core/achievements.js';

export function renderAchievements(container) {
  const achievements = getAllAchievements();
  const unlocked = getUnlockedCount();
  const total = getTotalCount();
  const progress = Math.round((unlocked / total) * 100);

  container.innerHTML = `
    <div class="achievements-screen">
      <div class="achievements-header">
        <div class="achievements-progress-ring">
          <svg viewBox="0 0 120 120" width="120" height="120">
            <circle cx="60" cy="60" r="52" fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="8"/>
            <circle cx="60" cy="60" r="52" fill="none" stroke="var(--color-gold)" stroke-width="8"
              stroke-dasharray="${2 * Math.PI * 52}"
              stroke-dashoffset="${2 * Math.PI * 52 * (1 - progress / 100)}"
              stroke-linecap="round"
              transform="rotate(-90 60 60)"/>
          </svg>
          <div class="achievements-progress-text">
            <span class="achievements-count">${unlocked}</span>
            <span class="achievements-total">/ ${total}</span>
          </div>
        </div>
        <p class="achievements-subtitle">Logros Desbloqueados</p>
      </div>

      <div class="achievements-grid">
        ${achievements.map(a => `
          <div class="achievement-card ${a.unlocked ? 'unlocked' : 'locked'}">
            <div class="achievement-icon">${a.unlocked ? a.icon : '🔒'}</div>
            <div class="achievement-info">
              <div class="achievement-name">${a.name}</div>
              <div class="achievement-desc">${a.desc}</div>
              ${a.unlocked
                ? `<div class="achievement-unlocked-date">✅ ${new Date(a.unlockedAt).toLocaleDateString('es')}</div>`
                : `<div class="achievement-reward">🪙 +${a.coins}</div>`
              }
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}
