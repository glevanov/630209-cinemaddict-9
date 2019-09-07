import {createElement} from '../util';

/**
 * ShowMore component
 * @class
 */
export default class ShowMore {
  constructor() {
    this._element = null;
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
   * Returns component markup
   * @return {string}
   */
  getTemplate() {
    return `<button class="films-list__show-more">Show more</button>`;
  }
}
