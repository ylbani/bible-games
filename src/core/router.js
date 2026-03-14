// ====================================
// Router - Simple hash-based SPA router
// ====================================

const routes = {};
let currentScreen = null;
let currentCleanup = null;
let onNavigateCallback = null;

export function registerRoute(path, handler) {
  routes[path] = handler;
}

export function navigate(path, options = {}) {
  if (currentCleanup) {
    currentCleanup();
    currentCleanup = null;
  }

  currentScreen = path;
  window.location.hash = path;

  const container = document.getElementById('main-content');
  if (!container) return;

  container.innerHTML = '';
  container.className = 'main-content screen-enter';

  if (routes[path]) {
    const cleanup = routes[path](container, options);
    if (typeof cleanup === 'function') {
      currentCleanup = cleanup;
    }
  }

  if (onNavigateCallback) {
    onNavigateCallback(path, options);
  }
}

export function onNavigate(callback) {
  onNavigateCallback = callback;
}

export function getCurrentScreen() {
  return currentScreen;
}

export function initRouter(defaultScreen = 'home') {
  window.addEventListener('hashchange', () => {
    const path = window.location.hash.slice(1) || defaultScreen;
    if (path !== currentScreen && routes[path]) {
      navigate(path);
    }
  });

  const initialPath = window.location.hash.slice(1) || defaultScreen;
  navigate(initialPath);
}
