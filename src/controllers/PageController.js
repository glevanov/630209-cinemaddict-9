import {render, removeElement, clearChildNodes} from '../util';
import Menu from '../components/Menu';
import FilmsSection from '../components/FilmsSection';
import ShowMore from '../components/ShowMore';
import FilmCard from '../components/FilmCard';
import Popup from '../components/Popup';
import Sort from '../components/Sort';

export default class PageController {
  constructor(props) {
    this._films = props.films;
    this._comments = props.comments;
    this._container = props.container;
    this._sortedFilms = this._films.slice();
    this._MAX_FILMS_PER_RENDER = 5;
    this._MAX_FILMS_PER_SECTION = 2;
    this._hasOpenPopup = false;
    this._filmIndexCounter = 0;
    this._menu = new Menu();
    this._filmsSection = new FilmsSection();
    this._showMore = new ShowMore();
    this._sort = new Sort();
    this._mainFilmsContainer = this._filmsSection.getElement().querySelector(`.films-list__container`);
    this._SortTypes = {
      DATE: `date`,
      RATING: `rating`,
      DEFAULT: `default`,
    };
    this._currentSort = this._SortTypes.DEFAULT;
  }

  /**
   * Renders a film
   * @param {Node} target Film data
   * @param {object} film Film data
   */
  _renderFilm(target, film) {
    const filmComments = this._comments.find((it) => it.id === film.id).comments || [];
    const card = new FilmCard({film, commentsCount: filmComments.length});
    const popup = new Popup({film, comments: filmComments});

    const cardTargets = Array.from(card.getElement()
      .querySelectorAll(`.film-card__poster, .film-card__title, .film-card__comments`));

    const handleEscKeyDown = (evt) => {
      if (evt.key === `Escape` || evt.key === `Esc`) {
        removeElement(popup.getElement());
        document.removeEventListener(`keydown`, handleEscKeyDown);
        this._hasOpenPopup = false;
      }
    };

    cardTargets.forEach((element) => {
      element.addEventListener(`click`, () => {
        if (!this._hasOpenPopup) {
          render(this._container, popup.getElement());
          document.addEventListener(`keydown`, handleEscKeyDown);
        }
        this._hasOpenPopup = true;
      });
    });

    popup.getElement()
      .querySelector(`.film-details__close-btn`)
      .addEventListener(`click`, () => {
        removeElement(popup.getElement());
        document.removeEventListener(`keydown`, handleEscKeyDown);
        this._hasOpenPopup = false;
      });

    popup.getElement()
      .querySelector(`.film-details__comment-input`)
      .addEventListener(`focus`, () => {
        document.removeEventListener(`keydown`, handleEscKeyDown);
      });

    popup.getElement()
      .querySelector(`.film-details__comment-input`)
      .addEventListener(`blur`, () => {
        document.addEventListener(`keydown`, handleEscKeyDown);
      });

    render(target, card.getElement());
  }

  /**
   * Renders menu and films section
   */
  _renderScaffolding() {
    render(this._container, this._menu.getElement());
    render(this._container, this._sort.getElement());
    render(this._container, this._filmsSection.getElement());
  }

  /**
   * Renders main films and show more button
   */
  _renderFilms() {
    this._filmIndexCounter = 0;
    this._sortedFilms.slice(0, this._MAX_FILMS_PER_RENDER).forEach((film) => {
      this._renderFilm(this._mainFilmsContainer, film);
    });

    if (this._sortedFilms.length > this._MAX_FILMS_PER_RENDER) {
      render(this._container.querySelector(`.films-list`), this._showMore.getElement());
      this._addShowMoreEventListener();
    }
  }

  /**
   * Renders extra films
   * @param {Node} container Target container
   */
  _renderExtraFilms(container) {
    this._films.slice(0, this._MAX_FILMS_PER_SECTION).forEach((film) => {
      this._renderFilm(container, film);
    });
  }

  /**
   * Removes Show More button & handler
   */
  _removeShowMore() {
    removeElement(this._showMore.getElement());
  }

  /**
   * Handles Show More button click
   */
  _handleShowMoreClick() {
    this._filmIndexCounter++;
    const currentIndex = this._filmIndexCounter * this._MAX_FILMS_PER_RENDER;
    const filmsToRender = this._sortedFilms.slice(currentIndex, currentIndex + this._MAX_FILMS_PER_RENDER);

    if (filmsToRender.length) {
      if (filmsToRender.length < this._MAX_FILMS_PER_RENDER) {
        this._removeShowMore();
      }
      filmsToRender.forEach((film) => {
        this._renderFilm(this._mainFilmsContainer, film);
      });
    } else {
      this._removeShowMore();
    }
  }

  /**
   * Return sorted films based on sort type
   * @param {string} sortType
   */
  _sortFilmsBy(sortType) {
    switch (sortType) {
      case this._SortTypes.RATING:
        this._sortedFilms = this._sortedFilms.sort((a, b) => {
          if (a.rating < b.rating) {
            return -1;
          }
          if (a.rating > b.rating) {
            return 1;
          }
          return 0;
        });
        break;
      case this._SortTypes.DATE:
        this._sortedFilms = this._sortedFilms.sort((a, b) => {
          const dateA = parseInt(a.releaseDate, 10);
          const dateB = parseInt(b.releaseDate, 10);
          if (dateA < dateB) {
            return -1;
          }
          if (dateA > dateB) {
            return 1;
          }
          return 0;
        });
        break;
      default:
        this._sortedFilms = this._films.slice();
    }
  }

  /**
   * Adds Show More button event handlers
   */
  _addShowMoreEventListener() {
    if (this._showMore.getElement()) {
      this._showMore.getElement().addEventListener(`click`, this._handleShowMoreClick.bind(this));
    }
  }

  /**
   * Inits page
   * @param {object} evt
   */
  _handleSortClick(evt) {
    evt.preventDefault();
    const sortType = evt.target.dataset.sortType;
    if (!sortType || sortType === this._currentSort) {
      return;
    }

    clearChildNodes(this._mainFilmsContainer);
    if (this._showMore.getElement()) {
      this._removeShowMore();
    }

    this._sortFilmsBy(sortType);
    this._currentSort = sortType;
    this._renderFilms(this._sortedFilms);

    this._sort.getElement()
      .querySelector(`.sort__button--active`)
      .classList.remove(`sort__button--active`);
    evt.target.classList.add(`sort__button--active`);
  }

  /**
   * Inits page
   */
  init() {
    const extraContainers = Array.from(this._filmsSection.getElement()
      .querySelectorAll(`.films-list--extra .films-list__container`));
    const topRatedContainer = extraContainers[0];
    const mostCommentedContainer = extraContainers[1];

    this._renderScaffolding();
    this._renderFilms(this._films);
    this._renderExtraFilms(topRatedContainer);
    this._renderExtraFilms(mostCommentedContainer);

    this._sort.getElement()
      .addEventListener(`click`, this._handleSortClick.bind(this));
  }
}
