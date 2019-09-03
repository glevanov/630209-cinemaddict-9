/**
 * Returns Statistics element markup
 * @param {array} films list
 * @return {string}
 */
export const getStatistics = (films) => `
<p>${films.length.toLocaleString(`ru-RU`)} movies inside</p>
`;
