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

// === Bible Battle League & Sync ===

export function addLeaguePoints(amount) {
  if (!player) getPlayer();
  player.leaguePoints = (player.leaguePoints || 0) + amount;
  if (player.leaguePoints < 0) player.leaguePoints = 0;

  const pts = player.leaguePoints;
  if (pts >= 2000) player.league = 'Profeta';
  else if (pts >= 1200) player.league = 'Apóstol';
  else if (pts >= 600) player.league = 'Evangelista';
  else if (pts >= 200) player.league = 'Discípulo';
  else player.league = 'Pescador';

  savePlayer();
  syncPlayerWithFirestore();
}

import { db, auth } from './firebase.js';
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { signInWithRedirect, signOut, getRedirectResult, GoogleAuthProvider, signInWithCredential } from "firebase/auth";

export async function loginWithGoogle() {
  if (!auth) return null;
  const provider = new GoogleAuthProvider();
  try {
    // Si corre en WebView Android MAUI, disparar flujo C#
    if (window.isAndroidApp) {
       window.location.href = "hybrid:login";
       return;
    }
    // De lo contrario, usar Redirect estándar
    await signInWithRedirect(auth, provider);
  } catch (e) {
    console.error("Google Login Error:", e);
    throw e;
  }
}

// Receptor del token nativo C#
window.nativeGoogleLogin = async (idToken) => {
  if (!auth) return;
  try {
    const credential = GoogleAuthProvider.credential(idToken);
    const result = await signInWithCredential(auth, credential);
    const user = result.user;
    
    if (!player) getPlayer();
    player.name = user.displayName || 'Jugador';
    localStorage.setItem('bb_player_id', user.uid);
    savePlayer();
    await syncPlayerWithFirestore();
    
    // Forzar recarga con Timestamp para romper caché de WebView y actualizar perfil
    if (typeof showToast === 'function') showToast('¡Sesión Iniciada!', 'success');
    
    const baseUrl = window.location.origin + window.location.pathname;
    window.location.href = `${baseUrl}?t=${Date.now()}#profile`;
  } catch (e) {
    console.error("Native Auth Error:", e);
  }
};

export async function handleAuthRedirect() {
  if (!auth) return;
  try {
    const result = await getRedirectResult(auth);
    if (result && result.user) {
      const user = result.user;
      if (!player) getPlayer();
      player.name = user.displayName || 'Jugador';
      localStorage.setItem('bb_player_id', user.uid);
      savePlayer();
      await syncPlayerWithFirestore();
    }
  } catch (e) {
    console.error("Error absorbiendo Redirect:", e);
  }
}

export async function logout() {
  if (!auth) return;
  await signOut(auth);
  localStorage.removeItem('bb_player_id');
}

export async function syncPlayerWithFirestore() {
  const myId = localStorage.getItem('bb_player_id');
  if (myId && db) {
    try {
      if (!player) getPlayer();
      await setDoc(doc(db, "bb_users", myId), {
        name: player.name,
        avatar: player.avatar,
        leaguePoints: player.leaguePoints || 0,
        league: player.league || 'Pescador',
        updatedAt: serverTimestamp()
      }, { merge: true });
    } catch (e) {
      console.error("Error syncing player state to Firestore:", e);
    }
  }
}
