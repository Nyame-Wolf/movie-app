// const modal = () => {
//   const modal = document.querySelector('.modal');
//   const popup = document.createElement('div');
//   popup.classList.add('popup');

//   const closeBtn = document.createElement('button');
//   closeBtn.innerHTML = '&#x3A7';
//   closeBtn.classList.add('close-btn');

//   const popupImg = image.cloneNode(true);
//   popup.classList.add('popup-img');

//   const comments = document.createElement('div');
//   getComments();
//   comments.textContent = 'Comments()';

//   const formDiv = document.createElement('div');
//   formDiv.classList.add('form-div');
//   const h3 = document.createElement('h3');
//   h3.textContent = 'Add a comment';

//   const form = document.createElement('form');
//   form.classList.add('comment-form');
//   const name = document.createElement('input');
//   const commentI = document.createElement('textarea');
//   const commentBtn = document.createElement('button');
//   commentBtn.textContent = 'Comment';
//   commentBtn.addEventListener('click', async () => {
//     await postComments(id, name.value, commentI.value);
//   });
//   form.append(name, commentI, commentBtn);
//   formDiv.append(h3, form);

//   popup.append(itemTitle.cloneNode(true), closeBtn, popupImg, comments, formDiv);

//   modal.style.display = 'block';
//   modal.appendChild(popup);

//   closeBtn.addEventListener('click', () => {
//     popup.remove();
//     modal.style.display = 'none';
//   });
// };

// export default modal;