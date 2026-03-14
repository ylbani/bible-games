// ====================================
// Verse of the Day Screen
// ====================================

import { verses, getVerseOfDay, getRandomVerses } from '../data/verses.js';
import { showToast } from '../core/ui-utils.js';

export function renderVerse(container) {
  const todayVerse = getVerseOfDay();
  const moreVerses = getRandomVerses(5, [todayVerse.ref]);

  container.innerHTML = `
    <div class="verse-screen">
      <div class="verse-of-day-card">
        <div class="verse-badge">📅 Versículo del Día</div>
        <blockquote class="verse-main-text">"${todayVerse.text}"</blockquote>
        <cite class="verse-main-ref">— ${todayVerse.ref}</cite>
        <div class="verse-actions">
          <button class="btn btn-sm btn-primary" id="btn-share-verse">
            📤 Compartir
          </button>
          <button class="btn btn-sm btn-secondary" id="btn-copy-verse">
            📋 Copiar
          </button>
        </div>
      </div>

      <div class="section-title mt-lg">✨ Más Versículos</div>
      <div class="verse-list">
        ${moreVerses.map(v => `
          <div class="verse-list-item">
            <div class="verse-list-text">"${v.text}"</div>
            <div class="verse-list-ref">— ${v.ref}</div>
          </div>
        `).join('')}
      </div>

      <div class="verse-footer">
        <p class="text-sm text-muted">Cada día un nuevo versículo para meditar 🙏</p>
      </div>
    </div>
  `;

  // Share Verse
  document.getElementById('btn-share-verse')?.addEventListener('click', () => {
    const text = `"${todayVerse.text}" — ${todayVerse.ref}`;
    if (navigator.share) {
      navigator.share({ title: 'Versículo del Día', text }).catch(() => {});
    } else {
      navigator.clipboard?.writeText(text).then(() => {
        showToast('Versículo copiado al portapapeles', 'success');
      });
    }
  });

  // Copy Verse
  document.getElementById('btn-copy-verse')?.addEventListener('click', () => {
    const text = `"${todayVerse.text}" — ${todayVerse.ref}`;
    navigator.clipboard?.writeText(text).then(() => {
      showToast('Versículo copiado ✅', 'success');
    }).catch(() => {
      showToast('No se pudo copiar', 'error');
    });
  });
}
