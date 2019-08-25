/**
 * Returns Film card element markup
 * @param {object} film object
 * @return {string} element markup
 */
export const getFilmCard = ({
  title,
  rating,
  year,
  duration,
  genres,
  posterURL,
  description,
  commentsCount,
  isOnWatchlist,
  isWatched,
  isFavorite,
}) => `
<article class="film-card">
  <h3 class="film-card__title">${title}</h3>
  <p class="film-card__rating">${rating}</p>
  <p class="film-card__info">
    <span class="film-card__year">${year}</span>
    <span class="film-card__duration">${duration}</span>
    <span class="film-card__genre">${Array.from(genres)[0]}</span>
  </p>
  <img src="${posterURL}" alt="" class="film-card__poster">
  <p class="film-card__description">${description}</p>
  <a class="film-card__comments">${commentsCount} comments</a>
  <form class="film-card__controls">
    <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist ${(isOnWatchlist) ? `film-card__controls-item--active` : ``}">Add to watchlist</button>
    <button class="film-card__controls-item button film-card__controls-item--mark-as-watched ${(isWatched) ? `film-card__controls-item--active` : ``}">Mark as watched</button>
    <button class="film-card__controls-item button film-card__controls-item--favorite ${(isFavorite) ? `film-card__controls-item--active` : ``}">Mark as favorite</button>
  </form>
</article>`;
