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
  const array = Array(length).fill(``).map(getSentence);
  return `${array.join(`. `)}.`;
};

/**
 * Picks and returns a random sentence from list
 * @return {string}
 */
const getSentence = () => [
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
][getRandomInteger(0, 10)];

/**
 * Return a mock comment
 * @return {object}
 */
export const getComment = () => ({
  emoji: [
    `smile`,
    `sleeping`,
    `puke`,
    `angry`,
  ][getRandomInteger(0, 3)],
  text: getSentence(),
  author: [
    `Tim Macoveev`,
    `John Doe`,
    `Sarah Dresdner`,
    `Kate ♡`
  ][getRandomInteger(0, 3)],
  days: `${getRandomInteger(1, 7)} days ago`,
});

/**
 * Return a name
 * @return {object}
 */
export const getName = () => [
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
][getRandomInteger(0, 9)];

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
  comments: Array(getRandomInteger(1, 4)).fill(``).map(getComment),
});
