// ====================================
// Storage - LocalStorage wrapper
// ====================================

const STORAGE_PREFIX = 'bgc_';

export function save(key, value) {
  try {
    localStorage.setItem(STORAGE_PREFIX + key, JSON.stringify(value));
    return true;
  } catch (e) {
    console.warn('Storage save failed:', e);
    return false;
  }
}

export function load(key, defaultValue = null) {
  try {
    const item = localStorage.getItem(STORAGE_PREFIX + key);
    return item ? JSON.parse(item) : defaultValue;
  } catch (e) {
    console.warn('Storage load failed:', e);
    return defaultValue;
  }
}

export function remove(key) {
  localStorage.removeItem(STORAGE_PREFIX + key);
}

export function clearAll() {
  const keys = Object.keys(localStorage).filter(k => k.startsWith(STORAGE_PREFIX));
  keys.forEach(k => localStorage.removeItem(k));
}
