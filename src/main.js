import {getSearch} from './components/Search';
import {getProfile} from './components/Profile';
import {getMenu} from './components/Menu';
import {getFilmsSection} from './components/FilmsSection';
import countByKey from './countByKey';
import {films} from './data';

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
  ${getProfile(countByKey(films, `isWatched`))}
`);
render(mainElement, `
  ${getMenu()}
  ${getFilmsSection()}
`);
