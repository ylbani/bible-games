// ====================================
// Settings Screen
// ====================================

import { getPlayer, setName, resetPlayer } from '../core/player.js';
import { clearAll } from '../core/storage.js';
import { showToast, showModal } from '../core/ui-utils.js';
import { navigate } from '../core/router.js';

export function renderSettings(container) {
  const player = getPlayer();

  container.innerHTML = `
    <div class="settings-screen">
      <div class="settings-group">
        <div class="settings-group-title">👤 Jugador</div>
        <div class="settings-item" id="setting-name">
          <div class="settings-item-left">
            <span class="settings-icon">✏️</span>
            <span>Nombre del Jugador</span>
          </div>
          <div class="settings-item-right">
            <span class="text-muted" id="display-name">${player.name}</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
          </div>
        </div>
      </div>

      <div class="settings-group">
        <div class="settings-group-title">🎨 Apariencia</div>
        <div class="settings-item">
          <div class="settings-item-left">
            <span class="settings-icon">🌙</span>
            <span>Modo Oscuro</span>
          </div>
          <div class="settings-item-right">
            <label class="toggle-switch">
              <input type="checkbox" id="toggle-dark">
              <span class="toggle-slider"></span>
            </label>
          </div>
        </div>
        <div class="settings-item">
          <div class="settings-item-left">
            <span class="settings-icon">🔊</span>
            <span>Sonido</span>
          </div>
          <div class="settings-item-right">
            <label class="toggle-switch">
              <input type="checkbox" id="toggle-sound">
              <span class="toggle-slider"></span>
            </label>
          </div>
        </div>
      </div>

      <div class="settings-group">
        <div class="settings-group-title">ℹ️ Información</div>
        <div class="settings-item">
          <div class="settings-item-left">
            <span class="settings-icon">📱</span>
            <span>Versión</span>
          </div>
          <div class="settings-item-right">
            <span class="text-muted">1.0.0</span>
          </div>
        </div>
        <div class="settings-item">
          <div class="settings-item-left">
            <span class="settings-icon">📖</span>
            <span>Bible Quest</span>
          </div>
          <div class="settings-item-right">
            <span class="text-muted">PWA</span>
          </div>
        </div>
      </div>

      <div class="settings-group">
        <div class="settings-group-title">⚠️ Zona de Peligro</div>
        <button class="btn btn-danger btn-block" id="btn-reset-data">
          🗑️ Borrar Todos los Datos
        </button>
        <p class="text-sm text-muted mt-sm text-center">¡Esta acción no se puede deshacer!</p>
      </div>

      <div class="settings-footer">
        <p>Hecho con ❤️ y ✝️</p>
        <p class="text-sm text-muted">Bible Quest © ${new Date().getFullYear()}</p>
      </div>
    </div>
  `;

  // Edit name
  document.getElementById('setting-name')?.addEventListener('click', () => {
    const newName = prompt('Ingresa tu nombre:', player.name);
    if (newName && newName.trim()) {
      setName(newName.trim());
      document.getElementById('display-name').textContent = newName.trim();
      showToast('Nombre actualizado ✅', 'success');
    }
  });

  // Dark Mode Toggle
  const themeToggle = document.getElementById('toggle-dark');
  if (themeToggle) {
    // Checkbox should be checked if NOT in light theme (checked = dark mode on)
    themeToggle.checked = !document.body.classList.contains('light-theme');

    themeToggle.addEventListener('change', (e) => {
      if (e.target.checked) {
        document.body.classList.remove('light-theme');
        localStorage.setItem('theme', 'dark');
      } else {
        document.body.classList.add('light-theme');
        localStorage.setItem('theme', 'light');
      }
    });
  }

  // Reset Data
  document.getElementById('btn-reset-data')?.addEventListener('click', () => {
    showModal(
      '⚠️ ¿Estás seguro?',
      'Se borrarán todas tus monedas, logros, estadísticas y progreso. Esta acción no se puede deshacer.',
      [
        {
          id: 'confirm-reset',
          label: '🗑️ Sí, borrar todo',
          class: 'btn-danger',
          onClick: () => {
            clearAll();
            resetPlayer();
            showToast('Datos borrados', 'info');
            navigate('home');
          }
        },
        {
          id: 'cancel-reset',
          label: 'Cancelar',
          class: 'btn-secondary'
        }
      ]
    );
  });
}
