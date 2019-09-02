/**
 * Returns user rating based on number of watched films
 * @param {number} watchedFilmsCount Number of watched films
 * @return {string}
 */
const getRating = (watchedFilmsCount) => {
  if (watchedFilmsCount === 0) {
    return ``;
  }
  if (watchedFilmsCount > 0 && watchedFilmsCount <= 10) {
    return `novice`;
  }
  if (watchedFilmsCount > 10 && watchedFilmsCount <= 20) {
    return `fan`;
  }
  return `movie buff`;
};

/**
 * Returns Header Profile element markup
 * @param {number} watchedFilmsCount Number of watched films
 * @return {string}
 */
export const getProfile = (watchedFilmsCount) => `
<section class="header__profile profile">
  <p class="profile__rating">${getRating(watchedFilmsCount)}</p>
  <img class="profile__avatar" src="images/bitmap@2x.png" alt="Avatar" width="35" height="35">
</section>`;
