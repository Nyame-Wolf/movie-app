import getShows, { renderShows } from '../get-shows.js';

const populate = async () => {
  await getShows();
  renderShows();
  //   const cards = document.querySelectorAll('.card');
  //   const commentBtns = document.querySelectorAll('.comments-button');

  //   commentBtns.forEach((commentBtn) => {
  //     commentBtn.addEventListener('click', (e) => {
  //   console.log(e.target.parentElement.dataset.id);
  //   const cardId = e.target.parentElement.dataset.id;
  //   const show = shows.find((s) => s.id === cardId);
  //   const card = cards[cardId - 1];
  //   console.log(e.target.parentElement.dataset);
  //   console.log(card);

  //   const modal = document.querySelector('.modal');
  //   const popup = document.createElement('div');
  //   popup.classList.add('popup');
  //   const img = document.querySelectorAll('.item-image')[cardId - 1];

  //   const title = document.querySelectorAll('.item-title')[cardId - 1];

  //   const closeBtn = document.createElement('button');
  //   closeBtn.innerHTML = '&#x3A7';
  //   closeBtn.classList.add('close-btn');

  //   // const comments = document.createElement('div');

  //   //   popup.append(title.cloneNode(true), closeBtn, img.cloneNode(true));
  //   popup.append(e.target.parentElement.cloneNode(true));

  //   modal.style.display = 'block';
  //   modal.appendChild(popup);

  //   closeBtn.addEventListener('click', () => {
  //     popup.remove();
  //     modal.style.display = 'none';
//     //   });
//     });
//   });
};