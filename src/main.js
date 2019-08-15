import {getSearch} from './components/Search';
import {getHeaderProfile} from './components/HeaderProfile';
import {getMainNavigation} from './components/MainNavigation';
import {getSort} from './components/Sort';
import {getFilmsSection} from './components/FilmsSection';

/**
 * Renders markup inside the target container
 * @param {Node} container
 * @param {string} markup
 */
const render = (container, markup) => {
  container.insertAdjacentHTML(`beforeend`, markup);
};

const headerElement = document.querySelector(`.header`);
const mainElement = document.querySelector(`.main`);

render(headerElement, `
  ${getSearch()}
  ${getHeaderProfile()}
  `);
render(mainElement, `
  ${getMainNavigation()}
  ${getSort()}
  ${getFilmsSection()}
  `);
