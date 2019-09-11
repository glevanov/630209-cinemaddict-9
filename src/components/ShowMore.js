import AbstractComponent from './AbstractComponent';

/**
 * ShowMore component
 * @class
 */
export default class ShowMore extends AbstractComponent {
  constructor() {
    super();
  }

  /**
   * Returns component markup
   * @return {string}
   */
  getTemplate() {
    return `<button class="films-list__show-more">Show more</button>`;
  }
}
