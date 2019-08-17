import {getFilmCard} from './FilmCard';
import {getShowMore} from './ShowMore';

/**
 * Returns Films section element markup
 * @param {array} films Films objects
 * @return {string} element markup
 */
export const getFilmsList = (films) => {
  const filmElements = films.map((film) => getFilmCard(film));

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
 * @param {array} films Films objects
 * @param {string} title Section title
 * @return {string} element markup
 */
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

/**
 * Returns Films section element markup
 * @return {string} element markup
 */
export const getFilmsSection = () => {
  const films = [
    {
      title: `The Dance of Life`,
      rating: `8.3`,
      year: `1929`,
      duration: `1h 55m`,
      genre: `Musical`,
      posterURL: `./images/posters/the-dance-of-life.jpg`,
      description: `Burlesque comic Ralph "Skid" Johnson (Skelly), and specialty dancer Bonny Lee King (Carroll), end up together on a cold, rainy night at a tr…`,
      commentsCount: `5`,
      activeControls: {
        watchlist: false,
        watched: false,
        favorite: false,
      },
    },
    {
      title: `Sagebrush Trail`,
      rating: `3.2`,
      year: `1933`,
      duration: `54m`,
      genre: `Western`,
      posterURL: `./images/posters/sagebrush-trail.jpg`,
      description: `Sentenced for a murder he did not commit, John Brant escapes from prison determined to find the real killer. By chance Brant's narrow escap…`,
      commentsCount: `89`,
      activeControls: {
        watchlist: true,
        watched: false,
        favorite: false,
      },
    },
    {
      title: `The Man with the Golden Arm`,
      rating: `9.0`,
      year: `1955`,
      duration: `1h 59m`,
      genre: `Drama`,
      posterURL: `./images/posters/the-man-with-the-golden-arm.jpg`,
      description: `Frankie Machine (Frank Sinatra) is released from the federal Narcotic Farm in Lexington, Kentucky with a set of drums and a new outlook on…`,
      commentsCount: `18`,
      activeControls: {
        watchlist: false,
        watched: true,
        favorite: false,
      },
    },
    {
      title: `Santa Claus Conquers the Martians`,
      rating: `2.3`,
      year: `1964`,
      duration: `1h 21m`,
      genre: `Comedy`,
      posterURL: `./images/posters/santa-claus-conquers-the-martians.jpg`,
      description: `The Martians Momar ("Mom Martian") and Kimar ("King Martian") are worried that their children Girmar ("Girl Martian") and Bomar ("Boy Marti…`,
      commentsCount: `465`,
      activeControls: {
        watchlist: false,
        watched: false,
        favorite: true,
      },
    },
    {
      title: `Popeye the Sailor Meets Sindbad the Sailor`,
      rating: `6.3`,
      year: `1936`,
      duration: `16m`,
      genre: `Cartoon`,
      posterURL: `./images/posters/popeye-meets-sinbad.png`,
      description: `In this short, Sindbad the Sailor (presumably Bluto playing a "role") proclaims himself, in song, to be the greatest sailor, adventurer and…`,
      commentsCount: `0`,
      activeControls: {
        watchlist: true,
        watched: true,
        favorite: true,
      },
    },
  ];
  const topFilms = [
    {
      title: `The Man with the Golden Arm`,
      rating: `9.0`,
      year: `1955`,
      duration: `1h 59m`,
      genre: `Drama`,
      posterURL: `./images/posters/the-man-with-the-golden-arm.jpg`,
      description: `Frankie Machine (Frank Sinatra) is released from the federal Narcotic Farm in Lexington, Kentucky with a set of drums and a new outlook on…`,
      commentsCount: `18`,
      activeControls: {
        watchlist: false,
        watched: true,
        favorite: false,
      },
    },
    {
      title: `The Great Flamarion`,
      rating: `8.9`,
      year: `1945`,
      duration: `1h 18m`,
      genre: `Mystery`,
      posterURL: `./images/posters/the-great-flamarion.jpg`,
      description: `The film opens following a murder at a cabaret in Mexico City in 1936, and then presents the events leading up to it in flashback. The Grea…`,
      commentsCount: `12`,
      activeControls: {
        watchlist: false,
        watched: false,
        favorite: false,
      },
    },
  ];
  const hotFilms = [
    {
      title: `Santa Claus Conquers the Martians`,
      rating: `2.3`,
      year: `1964`,
      duration: `1h 21m`,
      genre: `Comedy`,
      posterURL: `./images/posters/santa-claus-conquers-the-martians.jpg`,
      description: `The Martians Momar ("Mom Martian") and Kimar ("King Martian") are worried that their children Girmar ("Girl Martian") and Bomar ("Boy Marti…`,
      commentsCount: `465`,
      activeControls: {
        watchlist: false,
        watched: false,
        favorite: true,
      },
    },
    {
      title: `Made for Each Other`,
      rating: `5.8`,
      year: `1939`,
      duration: `1h 32m`,
      genre: `Comedy`,
      posterURL: `./images/posters/made-for-each-other.png`,
      description: `John Mason (James Stewart) is a young, somewhat timid attorney in New York City. He has been doing his job well, and he has a chance of bei…`,
      commentsCount: `56`,
      activeControls: {
        watchlist: false,
        watched: false,
        favorite: false,
      },
    },
  ];

  return `
  <section class="films">
    ${getFilmsList(films)}
    ${getFilmsListExtra(topFilms, `Top rated`)}
    ${getFilmsListExtra(hotFilms, `Most commented`)}
  </section>`;
};
