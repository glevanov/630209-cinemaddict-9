import {getFilmCard} from './FilmCard';
import {getShowMore} from './ShowMore';
import {films} from '../data';

/**
 * Returns Films section element markup
 * @param {array} items Films objects
 * @return {string} element markup
 */
export const getFilmsList = (items) => {
  const filmElements = items.map(getFilmCard);

  return `
  <section class="films-list">
    <h2 class="films-list__title visually-hidden">All movies. Upcoming</h2>

    <div class="films-list__container">
      ${filmElements.join(``)}
    </div>

    ${getShowMore()}
  </section>`;
};

/**
 * Returns Extra Films section element markup
 * @param {array} items Films objects
 * @param {string} title Section title
 * @return {string} element markup
 */
export const getFilmsListExtra = (items, title) => {
  const filmElements = items.map(getFilmCard);

  return `
  <section class="films-list--extra">
    <h2 class="films-list__title">${title}</h2>

    <div class="films-list__container">
      ${filmElements.join(``)}
    </div>
  </section>`;
};

/**
 * Returns Films section element markup
 * @return {string} element markup
 */
export const getFilmsSection = () => {
  return `
  <section class="films">
    ${getFilmsList(films)}
    ${getFilmsListExtra(films.slice(0, 2), `Top rated`)}
    ${getFilmsListExtra(films.slice(0, 2), `Most commented`)}
  </section>`;
};
