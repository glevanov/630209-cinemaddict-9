import AbstractComponent from './AbstractComponent';

/**
 * Statistics component
 * @class
 */
export default class Statistics extends AbstractComponent {
  /**
   * @param {object} props
   */
  constructor(props) {
    super();
    this._films = props.films;
  }

  /**
   * Returns component markup
   * @return {string}
   */
  getTemplate() {
    return `<p>${this._films.length.toLocaleString(`ru-RU`)} movies inside</p>`;
  }
}
