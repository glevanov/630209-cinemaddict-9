import render from '../render';
import {films} from '../data';
import {getFilmCard} from './FilmCard';
import {MAX_FILMS_PER_RENDER} from './FilmsSection';

/**
 * Returns Show More button element markup
 * @return {string} element markup
 */
export const getShowMore = () => `
  <button class="films-list__show-more">
    Show more
  </button>`;

/**
 * Removes load more button & handler
 */
const removeLoadMore = () => {
  const filmsSection = document.querySelector(`.films-list`);
  const loadMore = filmsSection.querySelector(`.films-list__show-more`);

  loadMore.removeEventListener(`click`, handleLoadMoreClick);
  filmsSection.removeChild(loadMore);
};

/**
 * Handles load more button click
 */
const handleLoadMoreClick = () => {
  const filmsContainer = document.querySelector(`.films-list__container`);

  filmsIndexCounter++;
  const currentIndex = filmsIndexCounter * MAX_FILMS_PER_RENDER;
  const filmsToRender = films.slice(currentIndex, currentIndex + MAX_FILMS_PER_RENDER);

  if (filmsToRender.length) {
    if (currentIndex <= films.length - 1) {
      removeLoadMore();
    }
    render(filmsContainer, `${filmsToRender.map(getFilmCard).join(``)}`);
  } else {
    removeLoadMore();
  }
};

/**
 * Adds Load more button event handlers
 */
export const addLoadMoreEventListener = () => {
  const loadMore = document.querySelector(`.films-list__show-more`);
  if (loadMore) {
    loadMore.addEventListener(`click`, handleLoadMoreClick);
  }
};

/**
 * Counter for number of Load More button clicks
 * @type {number}
 */
let filmsIndexCounter = 0;
