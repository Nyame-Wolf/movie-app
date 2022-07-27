import './style.css';
import populate from './modules/commentModal/populate.js';
import getTotalLikes from './modules/likes/getLikes.js';

// initialize elements
document.addEventListener('DOMContentLoaded', populate);

const getLikes = async () => {
  const likes = await getTotalLikes();
  console.log(likes);
};
getLikes();