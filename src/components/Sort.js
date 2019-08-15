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
