// ====================================
// UI Utilities - Toasts, Modals, helpers
// ====================================

export function showToast(message, type = 'info', duration = 3000) {
  const container = document.getElementById('toast-container');
  if (!container) return;
  
  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  
  const icons = { success: '✅', error: '❌', info: 'ℹ️', reward: '🎁' };
  toast.innerHTML = `<span>${icons[type] || '📢'}</span><span>${message}</span>`;
  
  container.appendChild(toast);
  
  setTimeout(() => {
    toast.classList.add('removing');
    setTimeout(() => toast.remove(), 300);
  }, duration);
}

export function showModal(title, message, buttons = []) {
  const overlay = document.getElementById('modal-overlay');
  if (!overlay) return;
  
  const buttonsHTML = buttons.map(b => 
    `<button class="btn ${b.class || 'btn-primary'} btn-block" id="modal-btn-${b.id}">${b.label}</button>`
  ).join('');
  
  overlay.innerHTML = `
    <div class="modal">
      <h2>${title}</h2>
      <p>${message}</p>
      <div class="flex flex-col gap-sm">${buttonsHTML}</div>
    </div>
  `;
  overlay.classList.remove('hidden');
  
  buttons.forEach(b => {
    const el = document.getElementById(`modal-btn-${b.id}`);
    if (el) {
      el.addEventListener('click', () => {
        overlay.classList.add('hidden');
        if (b.onClick) b.onClick();
      });
    }
  });
}

export function hideModal() {
  const overlay = document.getElementById('modal-overlay');
  if (overlay) overlay.classList.add('hidden');
}

export function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export function randomFromArray(array, count = 1) {
  const shuffled = shuffleArray(array);
  return count === 1 ? shuffled[0] : shuffled.slice(0, count);
}

export function formatNumber(n) {
  if (n >= 1000) return (n / 1000).toFixed(1) + 'K';
  return n.toString();
}
