// ====================================
// Player - Profile & progression
// ====================================

import { save, load } from './storage.js';

const PLAYER_KEY = 'player';

const DEFAULT_PLAYER = {
  name: 'Jugador',
  avatar: '😊',
  level: 1,
  xp: 0,
  coins: 50,
  totalGamesPlayed: 0,
  totalCorrectAnswers: 0,
  totalScore: 0,
  gamesCompleted: {},
  bestScores: {},
  leaguePoints: 0, // Puntos de Liga para Bible Battle
  league: 'Pescador',
  createdAt: Date.now()
};

const LEVEL_THRESHOLDS = [
  0, 100, 250, 500, 800, 1200, 1700, 2300, 3000, 3800,
  4700, 5700, 6800, 8000, 9500, 11000, 13000, 15000, 17500, 20000
];

const LEVEL_NAMES = [
  'Semilla', 'Brote', 'Plantita', 'Arbusto', 'Árbol Joven',
  'Roble', 'Cedro del Líbano', 'Discípulo', 'Apóstol', 'Profeta',
  'Siervo Fiel', 'Guerrero de Fe', 'Sabio', 'Maestro', 'Pastor',
  'Evangelista', 'Misionero', 'Guardián', 'Ángel', 'Leyenda Bíblica'
];

const AVATARS = ['😊', '😇', '🙏', '✝️', '⭐', '👑', '🕊️', '🌟', '💪', '🎯', '📖', '🏆'];

let player = null;

export function getPlayer() {
  if (!player) {
    player = load(PLAYER_KEY, { ...DEFAULT_PLAYER });
  }
  return { ...player };
}

export function savePlayer() {
  save(PLAYER_KEY, player);
}

export function setName(name) {
  if (!player) getPlayer();
  player.name = name.trim() || 'Jugador';
  savePlayer();
}

export function setAvatar(avatar) {
  if (!player) getPlayer();
  player.avatar = avatar;
  savePlayer();
}

export function addXP(amount) {
  if (!player) getPlayer();
  player.xp += amount;
  
  // Check level up
  let leveledUp = false;
  while (player.level < LEVEL_THRESHOLDS.length && player.xp >= LEVEL_THRESHOLDS[player.level]) {
    player.level++;
    leveledUp = true;
  }
  
  savePlayer();
  return leveledUp;
}

export function addCoins(amount) {
  if (!player) getPlayer();
  player.coins += amount;
  savePlayer();
  updateCoinDisplay();
}

export function spendCoins(amount) {
  if (!player) getPlayer();
  if (player.coins < amount) return false;
  player.coins -= amount;
  savePlayer();
  updateCoinDisplay();
  return true;
}

export function recordGamePlayed(gameId, score, correct = 0) {
  if (!player) getPlayer();
  player.totalGamesPlayed++;
  player.totalScore += score;
  player.totalCorrectAnswers += correct;
  
  if (!player.gamesCompleted[gameId]) {
    player.gamesCompleted[gameId] = 0;
  }
  player.gamesCompleted[gameId]++;
  
  if (!player.bestScores[gameId] || score > player.bestScores[gameId]) {
    player.bestScores[gameId] = score;
  }
  
  savePlayer();
}

export function getXPForNextLevel() {
  const p = getPlayer();
  if (p.level >= LEVEL_THRESHOLDS.length) return { current: p.xp, needed: p.xp, progress: 1 };
  const currentLevelXP = LEVEL_THRESHOLDS[p.level - 1] || 0;
  const nextLevelXP = LEVEL_THRESHOLDS[p.level];
  const progress = (p.xp - currentLevelXP) / (nextLevelXP - currentLevelXP);
  return { current: p.xp - currentLevelXP, needed: nextLevelXP - currentLevelXP, progress: Math.min(progress, 1) };
}

export function getLevelName(level = null) {
  const l = level || getPlayer().level;
  return LEVEL_NAMES[Math.min(l - 1, LEVEL_NAMES.length - 1)];
}

export function getAvatars() {
  return [...AVATARS];
}

export function resetPlayer() {
  player = { ...DEFAULT_PLAYER, createdAt: Date.now() };
  savePlayer();
  updateCoinDisplay();
}

export function updateCoinDisplay() {
  const el = document.getElementById('coin-count');
  if (el) {
    const p = getPlayer();
    el.textContent = p.coins;
  }
}
