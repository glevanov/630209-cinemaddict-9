import {render, removeElement} from '../util';
import Menu from './Menu';
import FilmsSection from './FilmsSection';
import ShowMore from './ShowMore';
import FilmCard from './FilmCard';
import Popup from './Popup';
import {films} from "../data";

export default class PageController {
  constructor(props) {
    this._films = props.films;
    this._comments = props.comments;
    this._container = props.container;
    this._MAX_FILMS_PER_RENDER = 5;
    this._MAX_FILMS_PER_SECTION = 2;
    this._hasOpenPopup = false;
    this._filmIndexCounter = 0;
    this._menu = new Menu();
    this._filmsSection = new FilmsSection();
    this._showMore = new ShowMore();
    this._mainFilmsContainer = this._filmsSection.getElement().querySelector(`.films-list__container`);
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
    render(this._container, this._filmsSection.getElement());
  }

  /**
   * Renders all films
   */
  _renderFilms() {
    const extraContainers = Array.from(this._filmsSection.getElement().querySelectorAll(`.films-list--extra .films-list__container`));
    const topRatedContainer = extraContainers[0];
    const mostCommentedContainer = extraContainers[1];

    films.slice(0, this._MAX_FILMS_PER_RENDER).forEach((film) => {
      this._renderFilm(this._mainFilmsContainer, film);
    });
    films.slice(0, this._MAX_FILMS_PER_SECTION).forEach((film) => {
      this._renderFilm(topRatedContainer, film);
    });
    films.slice(0, this._MAX_FILMS_PER_SECTION).forEach((film) => {
      this._renderFilm(mostCommentedContainer, film);
    });
  }

  /**
   * Removes Show More button & handler
   */
  _removeShowMore() {
    this._showMore.getElement().removeEventListener(`click`, this._handleShowMoreClick);
    removeElement(this._showMore.getElement());
  }

  /**
   * Handles Show More button click
   */
  _handleShowMoreClick() {
    this._filmIndexCounter++;
    const currentIndex = this._filmIndexCounter * this._MAX_FILMS_PER_RENDER;
    const filmsToRender = this._films.slice(currentIndex, currentIndex + this._MAX_FILMS_PER_RENDER);

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
   * Adds Show More button event handlers
   */
  _addShowMoreEventListener() {
    if (this._showMore.getElement()) {
      this._showMore.getElement().addEventListener(`click`, this._handleShowMoreClick);
    }
  }

  init() {
    this._renderScaffolding();
    this._renderFilms();

    if (this._films.length > this._MAX_FILMS_PER_RENDER) {
      render(this._container.querySelector(`.films-list`), this._showMore.getElement());
      this._addShowMoreEventListener();
    }
  }
}
