import {render, removeElement} from './util';
import Search from './components/Search';
import Profile from './components/Profile';
import Menu from './components/Menu';
import FilmsSection from './components/FilmsSection';
import ShowMore from './components/ShowMore';
import Statistics from "./components/Statistics";
import countByID from './countByID';
import {films, comments} from './data';
import FilmCard from "./components/FilmCard";
import Popup from "./components/Popup";

const PROFILE_COUNT_ID = `history`;

/**
 * Max number of films to display per render
 * @constant
 * @type {number}
 */
const MAX_FILMS_PER_RENDER = 5;

/**
 * Max number of films to display per film section
 * @constant
 * @type {number}
 */
const MAX_FILMS_PER_SECTION = 2;

/**
 * Popup state flag
 * @type {boolean}
 */
let hasOpenPopup = false;

/**
 * Renders a film
 * @param {Node} target Film data
 * @param {object} film Film data
 */
const renderFilm = (target, film) => {
  const filmComments = comments.find((it) => it.id === film.id).comments || [];
  const card = new FilmCard({film, _commentsCount: filmComments.length});
  const popup = new Popup({film, comments: filmComments});

  const cardTargets = Array.from(card.getElement()
    .querySelectorAll(`.film-card__poster, .film-card__title, .film-card__comments`));

  const handleEscKeyDown = (evt) => {
    if (evt.key === `Escape` || evt.key === `Esc`) {
      removeElement(popup.getElement());
      document.removeEventListener(`keydown`, handleEscKeyDown);
      hasOpenPopup = false;
    }
  };

  cardTargets.forEach((element) => {
    element.addEventListener(`click`, () => {
      if (!hasOpenPopup) {
        render(mainElement, popup.getElement());
        document.addEventListener(`keydown`, handleEscKeyDown);
      }
      hasOpenPopup = true;
    });
  });

  popup.getElement()
    .querySelector(`.film-details__close-btn`)
    .addEventListener(`click`, () => {
      removeElement(popup.getElement());
      document.removeEventListener(`keydown`, handleEscKeyDown);
      hasOpenPopup = false;
    });

  render(target, card.getElement());
};

const renderScaffolding = () => {
  render(headerElement, search.getElement());
  render(headerElement, profile.getElement());
  render(mainElement, menu.getElement());
  render(mainElement, filmsSection.getElement());
  render(statisticsElement, statistics.getElement());
};

const renderFilms = () => {
  const mainContainer = filmsSection.getElement().querySelector(`.films-list__container`);
  const extraContainers = Array.from(filmsSection.getElement().querySelectorAll(`.films-list--extra .films-list__container`));
  const topRatedContainer = extraContainers[0];
  const mostCommentedContainer = extraContainers[1];

  films.slice(0, MAX_FILMS_PER_RENDER).forEach((film) => {
    renderFilm(mainContainer, film);
  });
  films.slice(0, MAX_FILMS_PER_SECTION).forEach((film) => {
    renderFilm(topRatedContainer, film);
  });
  films.slice(0, MAX_FILMS_PER_SECTION).forEach((film) => {
    renderFilm(mostCommentedContainer, film);
  });
};

const headerElement = document.querySelector(`.header`);
const mainElement = document.querySelector(`.main`);
const statisticsElement = document.querySelector(`.footer__statistics`);

const search = new Search();
const profile = new Profile({watchedFilmsCount: countByID(PROFILE_COUNT_ID)});
const menu = new Menu();
const filmsSection = new FilmsSection();
const statistics = new Statistics({films});
const showMore = new ShowMore();

renderScaffolding();
renderFilms();

if (films.length > MAX_FILMS_PER_RENDER) {
  render(mainElement.querySelector(`.films-list`), showMore.getElement());
}
