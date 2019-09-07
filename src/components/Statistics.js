import {createElement} from '../util';

/**
 * Statistics component
 * @class
 */
export default class Statistics {
  /**
   * @param {object} props
   */
  constructor(props) {
    this._element = null;
    this._films = props.films;
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
    return `<p>${this._films.length.toLocaleString(`ru-RU`)} movies inside</p>`;
  }
}
