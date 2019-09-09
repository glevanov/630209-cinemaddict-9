import countByID from '../countByID';
import {createElement} from '../util';

/**
 * Menu component
 * @class
 */
export default class Menu {
  constructor() {
    this._element = null;
    this._navigationData = {
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
    this._sortTypes = [
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
  }

  /**
   * Returns component node
   * @return {Node}
   */
  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }
    return this._element;
  }

  /** Removes link to element */
  removeElement() {
    this._element = null;
  }

  /**
   * Returns Sort element markup
   * @return {string}
   */
  _getSort() {
    const sortItems = this._sortTypes.map((item) => `
      <li>
        <a href="#" class="sort__button ${(item.isActive) ? `sort__button--active` : ``}">
          ${item.title}
        </a>
      </li>
    `);

    return `
    <ul class="sort">
      ${sortItems.join(``)}
    </ul>`;
  }

  /**
   * Returns Statistic element markup
   * @return {string}
   */
  _getStatistic() {
    const navigationMarkup = this._getNavigationItems(this._getNavigationIDs).map((item) => `
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
  }

  /**
   * Returns a navigation item
   * @param {string} id
   * @return {object}
   */
  _getNavigationItem(id) {
    const item = {
      id,
      title: this._navigationData[id].title,
      isActive: this._navigationData[id].isActive,
      isAdditional: this._navigationData[id].isAdditional,
    };
    const counter = countByID(id);
    if (counter) {
      item.counter = counter;
    }
    return item;
  }

  /**
   * Transforms navigation data to navigation items array
   * @param {array} IDs
   * @return {array}
   */
  _getNavigationItems(IDs) {
    if (!IDs.length) {
      return [];
    }
    let acc = [];
    IDs.forEach((id) => acc.push(this._getNavigationItem(id)));
    return acc;
  }

  /**
   * Returns component markup
   * @return {array}
   */
  _getNavigationIDs() {
    return Object.keys(this._navigationData);
  }

  /**
   * Returns component markup
   * @return {string}
   */
  getTemplate() {
    return `
    ${this._getStatistic()}
    ${this._getSort()}`;
  }
}
