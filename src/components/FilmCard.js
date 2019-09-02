/**
 * Returns Film card element markup
 * @param {object} props
 * @return {string}
 */
export const getFilmCard = (props) => `
<article class="film-card">
  <h3 class="film-card__title">${props.title}</h3>
  <p class="film-card__rating">${props.rating}</p>
  <p class="film-card__info">
    <span class="film-card__year">${props.releaseDate}</span>
    <span class="film-card__duration">${props.duration}</span>
    <span class="film-card__genre">${Array.from(props.genres)[0]}</span>
  </p>
  <img src="${props.posterURL}" alt="" class="film-card__poster">
  <p class="film-card__description">${props.description}</p>
  <a class="film-card__comments">${props.commentsCount} comments</a>
  <form class="film-card__controls">
    <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist ${(props.isOnWatchlist) ? `film-card__controls-item--active` : ``}">Add to watchlist</button>
    <button class="film-card__controls-item button film-card__controls-item--mark-as-watched ${(props.isWatched) ? `film-card__controls-item--active` : ``}">Mark as watched</button>
    <button class="film-card__controls-item button film-card__controls-item--favorite ${(props.isFavorite) ? `film-card__controls-item--active` : ``}">Mark as favorite</button>
  </form>
</article>`;
