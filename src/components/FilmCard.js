import AbstractComponent from './AbstractComponent';

/**
 * Film Card component
 * @class
 */
export default class FilmCard extends AbstractComponent {
  /**
   * @param {object} props
   */
  constructor(props) {
    super();
    this._film = props.film;
    this._commentsCount = props.commentsCount;
  }

  /**
   * Returns component markup
   * @return {string}
   */
  getTemplate() {
    return `
    <article class="film-card">
      <h3 class="film-card__title">${this._film.title}</h3>
      <p class="film-card__rating">${this._film.rating}</p>
      <p class="film-card__info">
        <span class="film-card__year">${this._film.releaseDate}</span>
        <span class="film-card__duration">${this._film.duration}</span>
        <span class="film-card__genre">${Array.from(this._film.genres)[0]}</span>
      </p>
      <img src="${this._film.posterURL}" alt="" class="film-card__poster">
      <p class="film-card__description">${this._film.description}</p>
      <a class="film-card__comments">${this._commentsCount} comments</a>
      <form class="film-card__controls">
        <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist ${(this._film.isOnWatchlist) ? `film-card__controls-item--active` : ``}">Add to watchlist</button>
        <button class="film-card__controls-item button film-card__controls-item--mark-as-watched ${(this._film.isWatched) ? `film-card__controls-item--active` : ``}">Mark as watched</button>
        <button class="film-card__controls-item button film-card__controls-item--favorite ${(this._film.isFavorite) ? `film-card__controls-item--active` : ``}">Mark as favorite</button>
      </form>
    </article>`;
  }
}
