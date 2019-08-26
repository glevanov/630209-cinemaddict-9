import render from './render';
import {getSearch} from './components/Search';
import {getProfile} from './components/Profile';
import {getMenu} from './components/Menu';
import {getFilmsSection} from './components/FilmsSection';
import countByKey from './countByKey';
import {films} from './data';
import {getStatistics} from "./components/Statistics";

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
render(statisticsElement, getStatistics(films));
