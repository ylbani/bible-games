// ====================================
// Rewards system
// ====================================

import { addCoins, addXP, getPlayer } from './player.js';
import { showToast } from './ui-utils.js';
import { checkAchievements } from './achievements.js';

export function calculateReward(gameId, score, difficulty = 'easy') {
  const diffMultiplier = { easy: 1, medium: 1.5, hard: 2 };
  const mult = diffMultiplier[difficulty] || 1;
  
  const baseCoins = Math.floor(score * 0.5 * mult);
  const baseXP = Math.floor(score * mult);
  
  return {
    coins: Math.max(baseCoins, 5),
    xp: Math.max(baseXP, 10)
  };
}

export function grantReward(gameId, score, correct = 0, difficulty = 'easy') {
  const reward = calculateReward(gameId, score, difficulty);
  
  addCoins(reward.coins);
  const leveledUp = addXP(reward.xp);
  
  if (leveledUp) {
    const p = getPlayer();
    showToast(`🎉 ¡Subiste al nivel ${p.level}!`, 'reward');
  }
  
  // Check achievements after game
  setTimeout(() => checkAchievements(), 500);
  
  return { ...reward, leveledUp };
}
