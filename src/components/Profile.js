import {createElement} from '../util';

/**
 * Profile component
 * @class
 */
export default class Profile {
  /**
   * @param {object} props
   */
  constructor(props) {
    this._element = null;
    this._watchedFilmsCount = props.watchedFilmsCount;
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
   * Returns user rating based on number of watched films
   * @param {number} watchedFilmsCount
   * @return {string}
   */
  _getRating(watchedFilmsCount) {
    if (watchedFilmsCount > 20) {
      return `movie buff`;
    } else if (watchedFilmsCount > 10 && watchedFilmsCount <= 20) {
      return `fan`;
    } else if (watchedFilmsCount > 0 && watchedFilmsCount <= 10) {
      return `novice`;
    } else {
      return ``;
    }
  }

  /**
   * Returns component markup
   * @return {string}
   */
  getTemplate() {
    return `
    <section class="header__profile profile">
      <p class="profile__rating">${this._getRating(this._watchedFilmsCount)}</p>
      <img class="profile__avatar" src="images/bitmap@2x.png" alt="Avatar" width="35" height="35">
    </section>`;
  }
}
