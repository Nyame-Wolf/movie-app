import './style.css';
import getShows from './modules/get-shows.js';

// initialize elements
document.addEventListener('DOMContentLoaded', async () => {
  await getShows();
  const cards = document.querySelectorAll('.card');
  const commentBtns = document.querySelectorAll('.comments-button');

  commentBtns.forEach((commentBtn) => {
    commentBtn.addEventListener('click', (e) => {
      console.log(e.target.parentElement.dataset.id);
      const cardId = e.target.parentElement.dataset.id;
      const card = cards[cardId - 1];
      console.log(e.target.parentElement.dataset);
      console.log(card);

      const modal = document.querySelector('.modal');

      const img = document.querySelectorAll('.item-image')[cardId - 1];

      modal.style.display = 'block';
      modal.appendChild(img);
    });
  });
});