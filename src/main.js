import {render} from './util';
import Search from './components/Search';
import Profile from './components/Profile';
import Statistics from './components/Statistics';
import countByID from './countByID';
import {films, comments} from './data';
import PageController from './controllers/PageController';

const PROFILE_COUNT_ID = `history`;

const headerElement = document.querySelector(`.header`);
const mainElement = document.querySelector(`.main`);
const statisticsElement = document.querySelector(`.footer__statistics`);

const search = new Search();
const profile = new Profile({watchedFilmsCount: countByID(PROFILE_COUNT_ID)});
const statistics = new Statistics({films});
const pageController = new PageController({films, comments, container: mainElement});

render(headerElement, search.getElement());
render(headerElement, profile.getElement());
render(statisticsElement, statistics.getElement());

pageController.init();
