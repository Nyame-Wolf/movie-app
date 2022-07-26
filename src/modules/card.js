// // eslint-disable-next-line import/no-cycle
import getModalContainer from './card-content.js';

const displayCard = (imgURL, name, itemID, summary) => {
  getModalContainer(imgURL, name, summary, itemID);
};

export default displayCard;
