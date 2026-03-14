// ====================================
// Game Registry - Modular game system
// ====================================

const games = [];

export function registerGame(game) {
  games.push(game);
}

export function getGames() {
  return [...games];
}

export function getGameById(id) {
  return games.find(g => g.id === id);
}
