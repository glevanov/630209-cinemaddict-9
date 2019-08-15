import {getFilmCard} from './FilmCard';

export const getFilmsListExtra = (films, title) => {
  const filmElements = films.map((film) => getFilmCard(film));

  return `
  <section class="films-list--extra">
    <h2 class="films-list__title">${title}</h2>

    <div class="films-list__container">
      ${filmElements.join(``)}
    </div>
  </section>`;
};
