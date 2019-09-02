import countByID from '../countByID';

/**
 * Returns Sort element markup
 * @return {string}
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
 * @return {string}
 */
const getStatistic = () => {
  const navigationMarkup = getNavigationItems(navigationIDs).map((item) => `
    <a
      href="#${item.id}"
      class="main-navigation__item ${(item.isActive) ? `main-navigation__item--active` : ``} ${(item.isAdditional) ? `main-navigation__item--additional` : ``}"
    >
      ${item.title}${(item.counter) ? ` <span class="main-navigation__item-count">${item.counter}</span>` : ``}
    </a>
  `);

  return `
  <nav class="main-navigation">
    ${navigationMarkup.join(``)}
  </nav>`;
};

/**
 * Returns Menu element markup
 * @return {string}
 */
export const getMenu = () => `
  ${getStatistic()}
  ${getSort()}
`;

/**
 * Returns a navigation item
 * @param {string} id
 * @return {object}
 */
const getNavigationItem = (id) => {
  const item = {
    id,
    title: navigationData[id].title,
    isActive: navigationData[id].isActive,
    isAdditional: navigationData[id].isAdditional,
  };
  const counter = countByID(id);
  if (counter) {
    item.counter = counter;
  }
  return item;
};

/**
 * Transforms navigation data to navigation items array
 * @param {array} IDs
 * @return {array}
 */
const getNavigationItems = (IDs) => {
  if (!IDs.length) {
    return [];
  }
  let acc = [];
  IDs.forEach((id) => acc.push(getNavigationItem(id)));
  return acc;
};

const navigationData = {
  all: {
    title: `All movies`,
    isActive: true,
    isAdditional: false,
  },
  watchlist: {
    title: `Watchlist`,
    isActive: false,
    isAdditional: false,
  },
  history: {
    title: `History`,
    isActive: false,
    isAdditional: false,
  },
  favorites: {
    title: `Favorites`,
    isActive: false,
    isAdditional: false,
  },
  stats: {
    title: `Stats`,
    isActive: false,
    isAdditional: true,
  },
};

const navigationIDs = Object.keys(navigationData);
