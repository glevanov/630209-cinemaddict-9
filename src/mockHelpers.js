/**
 * @constant
 * @type {array}
 */
const MOCK_SENTENCES = [
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit`,
  `Cras aliquet varius magna, non porta ligula feugiat eget`,
  `Fusce tristique felis at fermentum pharetra`,
  `Aliquam id orci ut lectus varius viverra`,
  `Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante`,
  `Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum`,
  `Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui`,
  `Sed sed nisi sed augue convallis suscipit in sed felis`,
  `Aliquam erat volutpat`,
  `Nunc fermentum tortor ac porta dapibus`,
  `In rutrum ac purus sit amet tempus`
];

/**
 * @constant
 * @type {array}
 */
const MOCK_NAMES = [
  `Trevor Rodgers`,
  `Johnny Marshall`,
  `Garry Tyler`,
  `Shannon Vasquez`,
  `Tomas Fisher`,
  `Sherman Huff`,
  `Otis Hodges`,
  `Claudia Thompson`,
  `Ross Garcia`,
  `Genevieve Park`,
];

/**
 * @constant
 * @type {array}
 */
const MOCK_EMOJIS = [
  `smile`,
  `sleeping`,
  `puke`,
  `angry`,
];

/**
 * @constant
 * @type {array}
 */
const MOCK_AUTHORS = [
  `Tim Macoveev`,
  `John Doe`,
  `Sarah Dresdner`,
  `Kate ♡`
];

/**
 * Returns random integer
 * @param {number} min Minimum integer
 * @param {number} max Maximum integer
 * @return {number}
 */
export const getRandomInteger = (min, max) => {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

/**
 * Returns mock paragraph of arbitrary length
 * @param {number} length Number of sentences
 * @return {string}
 */
export const getRandomParagraph = (length) => {
  const array = [...Array(length)].map(getSentence);
  return `${array.join(`. `)}.`;
};

/**
 * Picks and returns a random sentence from list
 * @return {string}
 */
const getSentence = () => MOCK_SENTENCES[getRandomInteger(0, MOCK_SENTENCES.length - 1)];

/**
 * Return a mock comment
 * @return {object}
 */
export const getComment = () => ({
  emoji: MOCK_EMOJIS[getRandomInteger(0, MOCK_EMOJIS.length - 1)],
  text: getSentence(),
  author: MOCK_AUTHORS[getRandomInteger(0, MOCK_AUTHORS.length - 1)],
  days: `${getRandomInteger(1, 7)} days ago`,
});

/**
 * Return a name
 * @return {object}
 */
export const getName = () => MOCK_NAMES[getRandomInteger(0, MOCK_NAMES.length - 1)];

/**
 * Returns random boolean
 * @return {boolean}
 */
export const getRandomBoolean = () => Boolean(Math.round(Math.random()));

/**
 * Return mock comments paired with film id
 * @param {string} id Film id
 * @return {object}
 */
export const getComments = (id) => ({
  id,
  comments: [...Array(getRandomInteger(0, 4))].map(getComment),
});
