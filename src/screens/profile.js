// ====================================
// Profile Screen
// ====================================

import { getPlayer, getXPForNextLevel, getLevelName, getAvatars, setName, setAvatar } from '../core/player.js';
import { getUnlockedCount, getTotalCount } from '../core/achievements.js';
import { getPlayerPosition } from '../core/ranking.js';
import { showToast } from '../core/ui-utils.js';

export function renderProfile(container) {
  const player = getPlayer();
  const xpInfo = getXPForNextLevel();
  const levelName = getLevelName();
  const achievementsCount = getUnlockedCount();
  const totalAchievements = getTotalCount();
  const rank = getPlayerPosition();
  const avatars = getAvatars();

  container.innerHTML = `
    <div class="profile-screen">
      <div class="profile-header-card">
        <div class="profile-avatar-wrapper">
          <div class="profile-avatar" id="profile-avatar">${player.avatar}</div>
          <button class="profile-avatar-edit" id="btn-change-avatar">✏️</button>
        </div>
        <h2 class="profile-name" id="profile-name">${player.name}</h2>
        <div class="profile-level-badge">
          <span class="level-number">Nivel ${player.level}</span>
          <span class="level-name">${levelName}</span>
        </div>
      </div>

      <div class="xp-bar-container">
        <div class="xp-bar-label">
          <span>XP</span>
          <span>${xpInfo.current} / ${xpInfo.needed}</span>
        </div>
        <div class="xp-bar-track">
          <div class="xp-bar-fill" style="width: ${Math.round(xpInfo.progress * 100)}%"></div>
        </div>
      </div>

      <div class="profile-stats-grid">
        <div class="profile-stat-card">
          <div class="profile-stat-icon">🪙</div>
          <div class="profile-stat-value">${player.coins}</div>
          <div class="profile-stat-label">Monedas</div>
        </div>
        <div class="profile-stat-card">
          <div class="profile-stat-icon">🎮</div>
          <div class="profile-stat-value">${player.totalGamesPlayed}</div>
          <div class="profile-stat-label">Partidas</div>
        </div>
        <div class="profile-stat-card">
          <div class="profile-stat-icon">✅</div>
          <div class="profile-stat-value">${player.totalCorrectAnswers}</div>
          <div class="profile-stat-label">Correctas</div>
        </div>
        <div class="profile-stat-card">
          <div class="profile-stat-icon">🏆</div>
          <div class="profile-stat-value">#${rank}</div>
          <div class="profile-stat-label">Ranking</div>
        </div>
      </div>

      <div class="profile-section">
        <div class="section-title">📊 Estadísticas</div>
        <div class="stats-list">
          <div class="stats-row">
            <span>Puntuación Total</span>
            <span class="stats-value">${player.totalScore.toLocaleString()}</span>
          </div>
          <div class="stats-row">
            <span>Logros Desbloqueados</span>
            <span class="stats-value">${achievementsCount} / ${totalAchievements}</span>
          </div>
          <div class="stats-row">
            <span>Juegos Distintos</span>
            <span class="stats-value">${Object.keys(player.gamesCompleted).length} / 5</span>
          </div>
          <div class="stats-row">
            <span>Miembro Desde</span>
            <span class="stats-value">${new Date(player.createdAt).toLocaleDateString('es')}</span>
          </div>
        </div>
      </div>

      <div class="profile-section">
        <button class="btn btn-secondary btn-block" id="btn-edit-name">
          ✏️ Cambiar Nombre
        </button>
      </div>

      <!-- Avatar Picker Modal -->
      <div class="avatar-picker hidden" id="avatar-picker">
        <div class="avatar-picker-title">Elige tu avatar</div>
        <div class="avatar-grid">
          ${avatars.map(a => `
            <button class="avatar-option ${a === player.avatar ? 'selected' : ''}" data-avatar="${a}">${a}</button>
          `).join('')}
        </div>
        <button class="btn btn-sm btn-secondary mt-md" id="btn-close-avatar-picker">Cerrar</button>
      </div>
    </div>
  `;

  // Change Avatar
  document.getElementById('btn-change-avatar')?.addEventListener('click', () => {
    document.getElementById('avatar-picker')?.classList.toggle('hidden');
  });

  document.getElementById('btn-close-avatar-picker')?.addEventListener('click', () => {
    document.getElementById('avatar-picker')?.classList.add('hidden');
  });

  document.querySelectorAll('.avatar-option').forEach(btn => {
    btn.addEventListener('click', () => {
      const av = btn.dataset.avatar;
      setAvatar(av);
      document.getElementById('profile-avatar').textContent = av;
      document.querySelectorAll('.avatar-option').forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      showToast('Avatar actualizado ✅', 'success');
    });
  });

  // Edit Name
  document.getElementById('btn-edit-name')?.addEventListener('click', () => {
    const newName = prompt('Ingresa tu nombre:', player.name);
    if (newName && newName.trim()) {
      setName(newName.trim());
      document.getElementById('profile-name').textContent = newName.trim();
      showToast('Nombre actualizado ✅', 'success');
    }
  });
}
