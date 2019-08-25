/**
 * Returns Films section element markup
 * @param {array} items List of films
 * @param {string} key Key to check if true or false
 * @return {number} result
 */
export default (items, key) => items.reduce((acc, film) => {
  if (film[key]) {
    acc++;
  }
  return acc;
}, 0);
