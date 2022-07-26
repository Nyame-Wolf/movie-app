import { tvApi } from './api.js';
import elementInfo from './element-info.js';

const getShows = async () => {
  const response = await fetch(`${tvApi}/show`);
  const data = await response.json();
  const shows = data.slice(0, 99);
  shows.forEach((data) => {
    if (data.image !== null) {
      elementInfo.renderCard(data.name, data.image.medium, data.id, data.summary);
    }
  });
  elementInfo.itemCounter();
};

export default getShows;