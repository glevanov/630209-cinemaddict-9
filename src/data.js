import {getRandomInteger, getRandomParagraph, getRandomBoolean, getName, getComments} from './mockHelpers';

/**
 * Max length of film data
 * @constant
 * @type {number}
 */
const MAX_FILMS = 1;

/**
 * Min length of film data
 * @constant
 * @type {number}
 */
const MIN_FILMS = 18;

/**
 * @constant
 * @type {array}
 */
const MOCK_TITLES = [
  `The Godfather`,
  `Shawshank Redemption`,
  `Schindler's List`,
  `Raging Bull`,
  `Casablanca`,
  `Citizen Kane`,
  `Gone with the Wind`,
  `The Wizard of Oz`,
  `Flying over the cuckoo's nest`,
  `Lawrence of Arabia`,
  `Obsession`,
  `Psycho`,
  `Godfather 2`,
  `In the port`,
  `Sunset Boulevard`
];

/**
 * @constant
 * @type {array}
 */
const MOCK_ORIGINAL_TITLES = [
  `The Godfather`,
  `Shawshank Redemption`,
  `Schindler's List`,
  `Raging Bull`,
  `Casablanca`,
  `Citizen Kane`,
  `Gone with the Wind`,
  `The Wizard of Oz`,
  `Flying over the cuckoo's nest`,
  `Lawrence of Arabia`,
  `Obsession`,
  `Psycho`,
  `Godfather 2`,
  `In the port`,
  `Sunset Boulevard`
];

/**
 * @constant
 * @type {array}
 */
const MOCK_POSTER_URLS = [
  `./images/posters/the-dance-of-life.jpg`,
  `./images/posters/sagebrush-trail.jpg`,
  `./images/posters/santa-claus-conquers-the-martians.jpg`,
  `./images/posters/popeye-meets-sinbad.png`,
  `./images/posters/the-man-with-the-golden-arm.jpg`,
  `./images/posters/the-great-flamarion.jpg`,
];

/**
 * @constant
 * @type {array}
 */
const MOCK_RATINGS = [
  `G`,
  `PG`,
  `PG-13`,
  `R`,
  `NC-17`,
  `U`,
  `NR`,
];

/**
 * Mock countries
 * @constant
 * @type {array}
 */
const MOCK_COUNTRIES = [
  `USA`,
  `Germany`,
  `Italy`,
  `UK`,
  `Netherlands`,
  `Hong Kong`,
  `Russia`,
];

/**
 * Returns a mock film object
 * @return {object}
 */
export const getFilm = () => ({
  title: MOCK_TITLES[getRandomInteger(0, MOCK_TITLES.length - 1)],
  titleOriginal: MOCK_ORIGINAL_TITLES[getRandomInteger(0, MOCK_ORIGINAL_TITLES.length - 1)],
  posterURL: MOCK_POSTER_URLS[getRandomInteger(0, MOCK_POSTER_URLS.length - 1)],
  ageRestriction: getRandomInteger(6, 21),
  rating: MOCK_RATINGS[getRandomInteger(0, MOCK_RATINGS.length - 1)],
  director: getName(),
  writers: [...Array(getRandomInteger(1, 3))].map(getName),
  actors: [...Array(getRandomInteger(1, 8))].map(getName),
  releaseDate: `19${getRandomInteger(10, 99)}`,
  duration: `${getRandomInteger(0, 2)}h ${getRandomInteger(10, 59)}m`,
  country: MOCK_COUNTRIES[getRandomInteger(0, MOCK_COUNTRIES.length - 1)],
  genres: new Set([
    `Horror`,
    `Drama`,
    `Comedy`,
    `Action`,
    `Noir`,
    `Biography`,
    `Crime`,
    `Mystery`,
    `Romance`,
    `Family`,
    `Fantasy`,
  ]),
  description: getRandomParagraph(getRandomInteger(1, 3)),
  commentsCount: getRandomInteger(1, 4),
  isOnWatchlist: getRandomBoolean(),
  isWatched: getRandomBoolean(),
  isFavorite: getRandomBoolean(),
  id: getRandomInteger(1, Number.MAX_SAFE_INTEGER),
});

/**
 * Returns an array of mock films of desired length
 * @param {number} length
 * @return {array}
 */
const getFilms = (length) => {
  const acc = [];
  for (let i = 0; i < length; i++) {
    acc.push(getFilm());
  }
  return acc;
};

export const films = getFilms(getRandomInteger(MIN_FILMS, MAX_FILMS));

export const comments = films.map((film) => getComments(film.id));
