/**
 * Returns Sort element markup
 * @return {string} element markup
 */
export const getSort = () => {
  const sortTypes = [
    {
      title: `Sort by default`,
      active: true,
    },
    {
      title: `Sort by date`,
      active: false,
    },
    {
      title: `Sort by rating`,
      active: false,
    },
  ];

  const sortItems = sortTypes.map((item) => `
    <li><a href="#" class="sort__button ${(item.active) ? `sort__button--active` : ``}">${item.title}</a></li>
  `);

  return `
  <ul class="sort">
    ${sortItems.join(``)}
  </ul>`;
};
