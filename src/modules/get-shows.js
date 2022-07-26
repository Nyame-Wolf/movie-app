import { tvApi } from './api.js';
import elementInfo from './element-info.js';

let shows = [];
export const renderShows = () => {
  shows.forEach((data) => {
    if (data.image !== null) {
      elementInfo.renderCard(data.name, data.image.medium, data.id, data.summary);
    }
  });
};

// GET SHOWS FROM API https://www.tvmaze.com/api/shows
const getShows = async () => {
  if (shows.length) {
    return shows;
  }
  const response = await fetch(`${tvApi}/show`);
  const data = await response.json();
  // we can display more or less shows if we like
  shows = data.slice(0, 999);
  return shows;
};

export default getShows;