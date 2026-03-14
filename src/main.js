// ====================================
// Main Entry Point - Bible Games Collection
// ====================================

import { registerRoute, initRouter, onNavigate, navigate } from './core/router.js';
import { getPlayer, updateCoinDisplay } from './core/player.js';
import { renderHome } from './screens/home.js';
import { renderVerse } from './screens/verse.js';
import { renderProfile } from './screens/profile.js';
import { renderAchievements } from './screens/achievements.js';
import { renderSettings } from './screens/settings.js';
import { renderRanking } from './screens/ranking.js';
import { registerGame, getGameById } from './games/game-registry.js';
import { renderTrivia } from './games/trivia/trivia.js';
import { renderCharacters } from './games/characters/characters.js';
import { renderVerseComplete } from './games/verse-complete/verse-complete.js';
import { renderWordSearch } from './games/word-search/word-search.js';
import { renderMemory } from './games/memory/memory.js';

// === Register Games ===
registerGame({
  id: 'trivia',
  name: 'Trivia Bíblica',
  icon: '❓',
  description: 'Pon a prueba tu conocimiento bíblico',
  difficulty: 'easy',
  render: renderTrivia
});

registerGame({
  id: 'characters',
  name: 'Adivina el Personaje',
  icon: '🕵️',
  description: 'Descubre quién es con las pistas',
  difficulty: 'medium',
  render: renderCharacters
});

registerGame({
  id: 'verse-complete',
  name: 'Completa el Versículo',
  icon: '📖',
  description: 'Llena las palabras que faltan',
  difficulty: 'medium',
  render: renderVerseComplete
});

registerGame({
  id: 'word-search',
  name: 'Sopa de Letras',
  icon: '🔤',
  description: 'Encuentra palabras bíblicas',
  difficulty: 'easy',
  render: renderWordSearch
});

registerGame({
  id: 'memory',
  name: 'Memoria Bíblica',
  icon: '🃏',
  description: 'Encuentra los pares bíblicos',
  difficulty: 'easy',
  render: renderMemory
});

// === Register Routes ===
registerRoute('home', (container) => renderHome(container));
registerRoute('verse', (container) => renderVerse(container));
registerRoute('profile', (container) => renderProfile(container));
registerRoute('achievements', (container) => renderAchievements(container));
registerRoute('settings', (container) => renderSettings(container));
registerRoute('ranking', (container) => renderRanking(container));

registerRoute('game', (container, options) => {
  const game = getGameById(options.gameId);
  if (game && game.render) {
    return game.render(container);
  } else {
    container.innerHTML = `<div class="empty-state"><p>Juego no encontrado</p></div>`;
  }
});

// === Navigation UI ===
const navScreens = ['home', 'verse', 'profile', 'achievements', 'settings'];
const gameTitles = {
  home: 'Bible Games',
  verse: 'Versículo del Día',
  profile: 'Mi Perfil',
  achievements: 'Logros',
  settings: 'Ajustes',
  ranking: 'Ranking',
  game: 'Juego'
};

function updateNav(path, options = {}) {
  // Update bottom nav active state
  const navBtns = document.querySelectorAll('.nav-btn');
  navBtns.forEach(btn => {
    btn.classList.toggle('active', btn.dataset.screen === path);
  });

  // Update header title
  const headerTitle = document.getElementById('header-title');
  if (headerTitle) {
    if (path === 'game' && options.gameId) {
      const game = getGameById(options.gameId);
      headerTitle.textContent = game ? game.name : 'Juego';
    } else {
      headerTitle.textContent = gameTitles[path] || 'Bible Games';
    }
  }

  // Show/hide back button
  const backBtn = document.getElementById('btn-back');
  const isSubScreen = !navScreens.includes(path);
  if (backBtn) {
    backBtn.classList.toggle('hidden', !isSubScreen);
  }

  // Show/hide bottom nav
  const bottomNav = document.getElementById('bottom-nav');
  if (bottomNav) {
    bottomNav.classList.toggle('hidden', isSubScreen);
  }

  // Update coin display
  updateCoinDisplay();
}

// === Initialize App ===
function init() {
  // Navigation callback
  onNavigate(updateNav);

  // Bottom nav clicks
  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const screen = btn.dataset.screen;
      if (screen) navigate(screen);
    });
  });

  // Back button
  document.getElementById('btn-back')?.addEventListener('click', () => {
    navigate('home');
  });

  // Update coins on load
  updateCoinDisplay();

  // Start router
  initRouter('home');
}

// Wait for DOM
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
