/**
 * Returns Film card element markup
 * @param {object} film object
 * @return {string} element markup
 */
export const getFilmCard = (film) => `
<article class="film-card">
  <h3 class="film-card__title">${film.title}</h3>
  <p class="film-card__rating">${film.rating}</p>
  <p class="film-card__info">
    <span class="film-card__year">${film.year}</span>
    <span class="film-card__duration">${film.duration}</span>
    <span class="film-card__genre">${film.genre}</span>
  </p>
  <img src="${film.posterURL}" alt="" class="film-card__poster">
  <p class="film-card__description">${film.description}</p>
  <a class="film-card__comments">${film.commentsCount} comments</a>
  <form class="film-card__controls">
    <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist ${(film.activeControls.watchlist) ? `film-card__controls-item--active` : ``}">Add to watchlist</button>
    <button class="film-card__controls-item button film-card__controls-item--mark-as-watched ${(film.activeControls.watched) ? `film-card__controls-item--active` : ``}">Mark as watched</button>
    <button class="film-card__controls-item button film-card__controls-item--favorite ${(film.activeControls.favorite) ? `film-card__controls-item--active` : ``}">Mark as favorite</button>
  </form>
</article>`;
