// ====================================
// Achievements system
// ====================================

import { save, load } from './storage.js';
import { getPlayer } from './player.js';
import { showToast } from './ui-utils.js';

const ACHIEVEMENTS_KEY = 'achievements';

export const ACHIEVEMENT_DEFS = [
  { id: 'first_game', name: 'Primeros Pasos', desc: 'Completa tu primer juego', icon: '🐣', coins: 10 },
  { id: 'games_5', name: 'Jugador Activo', desc: 'Completa 5 juegos', icon: '🎮', coins: 25 },
  { id: 'games_25', name: 'Veterano', desc: 'Completa 25 juegos', icon: '🏅', coins: 50 },
  { id: 'games_100', name: 'Leyenda', desc: 'Completa 100 juegos', icon: '🏆', coins: 100 },
  { id: 'perfect_trivia', name: 'Erudito Bíblico', desc: 'Puntuación perfecta en Trivia', icon: '🧠', coins: 30 },
  { id: 'trivia_10', name: 'Sabio', desc: 'Completa 10 partidas de Trivia', icon: '📚', coins: 25 },
  { id: 'character_5', name: 'Detective Bíblico', desc: 'Adivina 5 personajes', icon: '🔍', coins: 20 },
  { id: 'verse_master', name: 'Memorizador', desc: 'Completa 10 versículos', icon: '📖', coins: 30 },
  { id: 'word_hunter', name: 'Cazapalabras', desc: 'Completa 5 sopas de letras', icon: '🔤', coins: 20 },
  { id: 'memory_king', name: 'Rey de la Memoria', desc: 'Completa 5 juegos de Memoria', icon: '🃏', coins: 20 },
  { id: 'level_5', name: 'Discípulo', desc: 'Alcanza el nivel 5', icon: '⭐', coins: 30 },
  { id: 'level_10', name: 'Apóstol', desc: 'Alcanza el nivel 10', icon: '🌟', coins: 50 },
  { id: 'coins_500', name: 'Tesoro', desc: 'Acumula 500 monedas', icon: '💰', coins: 25 },
  { id: 'all_games', name: 'Explorador', desc: 'Juega todos los juegos', icon: '🗺️', coins: 40 },
  { id: 'streak_3', name: 'Racha Divina', desc: '3 respuestas correctas seguidas', icon: '🔥', coins: 15 },
  { id: 'fast_answer', name: 'Rayo', desc: 'Responde en menos de 3 segundos', icon: '⚡', coins: 15 },
];

let unlockedAchievements = null;

function getUnlocked() {
  if (!unlockedAchievements) {
    unlockedAchievements = load(ACHIEVEMENTS_KEY, {});
  }
  return unlockedAchievements;
}

export function isUnlocked(achievementId) {
  return !!getUnlocked()[achievementId];
}

export function unlock(achievementId) {
  const unlocked = getUnlocked();
  if (unlocked[achievementId]) return false;
  
  const def = ACHIEVEMENT_DEFS.find(a => a.id === achievementId);
  if (!def) return false;
  
  unlocked[achievementId] = { unlockedAt: Date.now() };
  unlockedAchievements = unlocked;
  save(ACHIEVEMENTS_KEY, unlocked);
  
  showToast(`🏆 ¡Logro desbloqueado: ${def.name}!`, 'reward');
  
  return true;
}

export function getUnlockedCount() {
  return Object.keys(getUnlocked()).length;
}

export function getTotalCount() {
  return ACHIEVEMENT_DEFS.length;
}

export function getAllAchievements() {
  const unlocked = getUnlocked();
  return ACHIEVEMENT_DEFS.map(def => ({
    ...def,
    unlocked: !!unlocked[def.id],
    unlockedAt: unlocked[def.id]?.unlockedAt || null
  }));
}

// Check and award achievements based on current player state
export function checkAchievements() {
  const p = getPlayer();
  
  if (p.totalGamesPlayed >= 1) unlock('first_game');
  if (p.totalGamesPlayed >= 5) unlock('games_5');
  if (p.totalGamesPlayed >= 25) unlock('games_25');
  if (p.totalGamesPlayed >= 100) unlock('games_100');
  if (p.level >= 5) unlock('level_5');
  if (p.level >= 10) unlock('level_10');
  if (p.coins >= 500) unlock('coins_500');
  
  // Check if all game types played
  const gameTypes = ['trivia', 'characters', 'verse-complete', 'word-search', 'memory'];
  const allPlayed = gameTypes.every(g => (p.gamesCompleted[g] || 0) > 0);
  if (allPlayed) unlock('all_games');
  
  if ((p.gamesCompleted['trivia'] || 0) >= 10) unlock('trivia_10');
  if ((p.gamesCompleted['characters'] || 0) >= 5) unlock('character_5');
  if ((p.gamesCompleted['verse-complete'] || 0) >= 10) unlock('verse_master');
  if ((p.gamesCompleted['word-search'] || 0) >= 5) unlock('word_hunter');
  if ((p.gamesCompleted['memory'] || 0) >= 5) unlock('memory_king');
}
