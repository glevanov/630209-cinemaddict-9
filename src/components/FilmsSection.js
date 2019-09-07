import {createElement} from '../util';

/**
 * Films Section component
 * @class
 */
export default class FilmsSection {
  constructor() {
    this._element = null;
    this._SectionsTitles = {
      TOP_RATED: `Top rated`,
      MOST_COMMENTED: `Most commented`
    };
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
   * Returns Films section markup
   * @return {string}
   */
  _getFilmsList() {
    return `
    <section class="films-list">
      <h2 class="films-list__title visually-hidden">All movies. Upcoming</h2>
      <div class="films-list__container"></div>
    </section>`;
  }

  /**
   * Returns Extra Films section markup
   * @param {string} title Section title
   * @return {string}
   */
  _getFilmsListExtra(title) {
    return `
    <section class="films-list--extra">
      <h2 class="films-list__title">${title}</h2>
      <div class="films-list__container"></div>
    </section>`;
  }
  /**
   * Returns component markup
   * @return {string}
   */
  getTemplate() {
    return `
    <section class="films">
      ${this._getFilmsList()}
      ${this._getFilmsListExtra(this._SectionsTitles.TOP_RATED)}
      ${this._getFilmsListExtra(this._SectionsTitles.MOST_COMMENTED)}
    </section>`;
  }
}
