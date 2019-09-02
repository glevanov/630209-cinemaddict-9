import {films} from './data';

const KEYS = {
  watchlist: `isOnWatchlist`,
  history: `isWatched`,
  favorites: `isFavorite`,
};

/**
 * Returns Films section element markup
 * @param {string} id Key to check if true or false
 * @return {number|undefined} result
 */
export default (id) => {
  if (!KEYS[id]) {
    return undefined;
  }
  return films.reduce((acc, film) => {
    if (film[KEYS[id]]) {
      acc++;
    }
    return acc;
  }, 0);
};
