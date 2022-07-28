import getShows, { renderShows } from '../get-shows.js';

const populate = async () => {
  await getShows();
  renderShows();
};
export default populate;
