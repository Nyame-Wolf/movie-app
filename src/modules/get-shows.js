import { tvApi } from './api.js';
import elementInfo from './element-info.js';
import getTotalLikes from './likes/getLikes.js';

let shows = [];
export const renderShows = () => {
  elementInfo.showCount(shows);
  shows.forEach((data) => {
    if (data.image !== null) {
      elementInfo.renderCard(data.name, data.image.medium, data.id, data.summary, data.likes.likes);
    }
  });
};

// GET SHOWS FROM API https://www.tvmaze.com/api/shows
const getShows = async () => {
  if (shows.length > 0) {
    return shows;
  }
  const response = await fetch(`${tvApi}/show`);
  const data = await response.json();

  // we can display more or less shows if we like
  shows = data.slice(0, 240);
  const likes = (await getTotalLikes()).reduce((likesById, like) => {
    likesById[like.item_id] = like;
    return likesById;
  }, {});
  shows = shows.map((show) => {
    show.likes = likes[show.id] || {};
    return show;
  });
  return shows;
};

export default getShows;