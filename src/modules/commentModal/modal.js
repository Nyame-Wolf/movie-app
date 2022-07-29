import postComments from './postComments.js';
import getComments from './getComments.js';
import createComments from './commentPopulate.js';
import getCommentsCount from './comments-count.js';

const modal = async (title, imgUrl, itemID, summary) => {
  const modal = document.querySelector('.modal');
  const popup = document.createElement('div');
  popup.classList.add('popup');

  const imgSummary = document.createElement('div');
  imgSummary.classList.add('img-summary');
  const popupImg = document.createElement('img');
  popupImg.classList.add('popup-img');
  popupImg.src = imgUrl;

  const itemSummary = document.createElement('div');

  itemSummary.classList.add('summary');
  itemSummary.innerHTML = summary;
  imgSummary.append(popupImg, itemSummary);

  const itemInfo = document.createElement('div');
  itemInfo.classList.add('item-info');

  const popUpTitle = document.createElement('h2');
  popUpTitle.classList.add('item-title');
  popUpTitle.innerText = title;

  const closeBtn = document.createElement('button');
  closeBtn.innerHTML = '&#x3A7';
  closeBtn.classList.add('close-btn');

  const comments = document.createElement('div');
  comments.classList.add('pop-up-comments');

  const commentTable = document.createElement('table');
  commentTable.classList.add('comments');
  const tableRow = document.createElement('tr');
  const dateHeader = document.createElement('th');
  dateHeader.textContent = 'Created on';
  const nameHeader = document.createElement('th');
  nameHeader.textContent = 'Created by';
  const commentHeader = document.createElement('th');
  commentHeader.textContent = 'Comment';
  tableRow.append(dateHeader, nameHeader, commentHeader);

  const tableBody = document.createElement('tbody');
  tableBody.classList.add('tbody');
  commentTable.append(tableRow, tableBody);

  const updateComments = async () => {
    const c = await getComments(itemID).catch(() => []);
    if (c.length) {
      createComments(c);
      const commentCount = getCommentsCount();
      comments.textContent = `Comments (${commentCount})`;
    } else {
      comments.textContent = 'Comments (0)';
    }
  };
  updateComments();
  const formDiv = document.createElement('div');
  formDiv.classList.add('form-div');
  const h3 = document.createElement('h3');
  h3.textContent = 'Add a comment';

  const form = document.createElement('form');
  form.classList.add('comment-form');
  const name = document.createElement('input');
  const commentI = document.createElement('textarea');
  const commentBtn = document.createElement('button');
  commentBtn.classList.add('comment-btn');
  commentBtn.textContent = 'Comment';
  form.append(name, commentI, commentBtn);

  commentBtn.addEventListener('click', async (e) => {
    e.preventDefault();
    await postComments(itemID, name.value, commentI.value, new Date());
    updateComments();
    form.reset();
  });

  formDiv.append(h3, form);
  const titleDiv = document.createElement('div');
  titleDiv.classList.add('pop-up-title-div');
  popUpTitle.classList.add('pop-up-title');
  titleDiv.append(popUpTitle, closeBtn);
  popup.append(titleDiv, imgSummary, comments, commentTable, formDiv);

  modal.style.display = 'flex';
  modal.appendChild(popup);

  closeBtn.addEventListener('click', () => {
    popup.remove();
    modal.style.display = 'none';
  });
};

export default modal;