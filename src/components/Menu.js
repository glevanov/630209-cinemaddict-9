import getRandomInteger from '../getRandomInteger';

/**
 * Returns Sort element markup
 * @return {string} element markup
 */
export const getSort = () => {
  const sortTypes = [
    {
      title: `Sort by default`,
      isActive: true,
    },
    {
      title: `Sort by date`,
      isActive: false,
    },
    {
      title: `Sort by rating`,
      isActive: false,
    },
  ];

  const sortItems = sortTypes.map((item) => `
    <li><a href="#" class="sort__button ${(item.isActive) ? `sort__button--active` : ``}">${item.title}</a></li>
  `);

  return `
  <ul class="sort">
    ${sortItems.join(``)}
  </ul>`;
};


/**
 * Returns Statistic element markup
 * @return {string} element markup
 */
const getStatistic = () => {
  const navigationData = [
    {
      id: `all`,
      title: `All movies`,
      isActive: true,
      isAdditional: false,
      hasCount: false,
    },
    {
      id: `watchlist`,
      title: `Watchlist`,
      isActive: false,
      isAdditional: false,
      hasCount: true,
    },
    {
      id: `history`,
      title: `History`,
      isActive: false,
      isAdditional: false,
      hasCount: true,
    },
    {
      id: `favorites`,
      title: `Favorites`,
      isActive: false,
      isAdditional: false,
      hasCount: true,
    },
    {
      id: `stats`,
      title: `Stats`,
      isActive: false,
      isAdditional: true,
      hasCount: false,
    },
  ];

  const navigationItems = navigationData.map((item) => `
    <a
      href="#${item.id}"
      class="main-navigation__item ${(item.isActive) ? `main-navigation__item--active` : ``} ${(item.isAdditional) ? `main-navigation__item--additional` : ``}"
    >
      ${item.title}${(item.hasCount) ? ` <span class="main-navigation__item-count">${getRandomInteger(1, 13)}</span>` : ``}
    </a>
  `);

  return `
  <nav class="main-navigation">
    ${navigationItems.join(``)}
  </nav>`;
};

/**
 * Returns Menu element markup
 * @return {string} element markup
 */
export const getMenu = () => `
  ${getStatistic()}
  ${getSort()}
`;
