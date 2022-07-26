import { tvApi } from './api.js';
import elementInfo from './element-info.js';

// GET SHOWS FROM API https://www.tvmaze.com/api/shows
const getShows = async () => {
  const response = await fetch(`${tvApi}/show`);
  const data = await response.json();
  // we can display more or less shows if we like
  const shows = data.slice(0, 99);
  shows.forEach((data) => {
    if (data.image !== null) {
      elementInfo.renderCard(data.name, data.image.medium, data.id, data.summary);
    }
  });
  elementInfo.itemCounter();
};

export default getShows;