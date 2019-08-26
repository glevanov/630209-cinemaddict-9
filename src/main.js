import render from './render';
import {getSearch} from './components/Search';
import {getProfile} from './components/Profile';
import {getMenu} from './components/Menu';
import {getFilmsSection} from './components/FilmsSection';
import {addLoadMoreEventListener} from './components/ShowMore';
import {getStatistics} from "./components/Statistics";
import countByKey from './countByKey';
import {films} from './data';

const headerElement = document.querySelector(`.header`);
const mainElement = document.querySelector(`.main`);
const statisticsElement = document.querySelector(`.footer__statistics`);

render(headerElement, `
  ${getSearch()}
  ${getProfile(countByKey(films, `isWatched`))}
`);

render(mainElement, `
  ${getMenu()}
  ${getFilmsSection()}
`);
addLoadMoreEventListener();

render(statisticsElement, getStatistics(films));
