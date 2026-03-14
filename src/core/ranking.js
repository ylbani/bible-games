// ====================================
// Ranking system (local + simulated)
// ====================================

import { save, load } from './storage.js';
import { getPlayer } from './player.js';

const RANKING_KEY = 'ranking';

const SIMULATED_PLAYERS = [
  { name: 'María', avatar: '👩', score: 2800, level: 8 },
  { name: 'Daniel', avatar: '👦', score: 2400, level: 7 },
  { name: 'Sara', avatar: '👧', score: 2100, level: 6 },
  { name: 'José', avatar: '🧑', score: 1800, level: 5 },
  { name: 'Rebeca', avatar: '👩‍🦱', score: 1500, level: 5 },
  { name: 'David', avatar: '👨', score: 1200, level: 4 },
  { name: 'Esther', avatar: '👩‍🦰', score: 900, level: 3 },
  { name: 'Pablo', avatar: '🧔', score: 600, level: 2 },
  { name: 'Ana', avatar: '👱‍♀️', score: 400, level: 2 },
  { name: 'Samuel', avatar: '👶', score: 200, level: 1 },
];

export function getRanking() {
  const player = getPlayer();
  
  const allPlayers = [
    ...SIMULATED_PLAYERS,
    {
      name: player.name,
      avatar: player.avatar,
      score: player.totalScore,
      level: player.level,
      isCurrentPlayer: true
    }
  ];
  
  // Sort by score descending
  allPlayers.sort((a, b) => b.score - a.score);
  
  // Add position
  return allPlayers.map((p, i) => ({
    ...p,
    position: i + 1
  }));
}

export function getPlayerPosition() {
  const ranking = getRanking();
  const playerEntry = ranking.find(p => p.isCurrentPlayer);
  return playerEntry?.position || ranking.length;
}
