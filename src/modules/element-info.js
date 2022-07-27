import postComments from './commentModal/postComments.js';
import getComments from './commentModal/getComments.js';
import { addLike, getTotalLikes } from '../likes.js';

// CREATE ELEMENTS BASED ON INDEX.HTML
class elementInfo {
  static renderCard = (title, imgUrl, itemID) => {
    const cardContainer = document.querySelector('.grid-container');
    const card = document.createElement('div');
    card.classList.add('card');
    const id = itemID;
    // card.setAttribute('data-id', itemID);
    // added a dataset use to create ids

    const imageContainer = document.createElement('div');
    imageContainer.classList.add('image-container');

    const image = document.createElement('img');
    image.classList.add('item-image');
    image.src = imgUrl;

    const itemInfo = document.createElement('div');
    itemInfo.classList.add('item-info');

    const itemTitle = document.createElement('h2');
    itemTitle.classList.add('item-title');
    itemTitle.innerText = title;

    const likesContainer = document.createElement('div');
    likesContainer.classList.add('likes-container');

    const heartIcon = document.createElement('i');
    heartIcon.classList.add('fa-solid', 'fa-heart');

    const commentsButton = document.createElement('button');
    commentsButton.classList.add('comments-button');
    commentsButton.textContent = 'Comments';
    // code starts
    commentsButton.addEventListener('click', () => {
      const modal = document.querySelector('.modal');
      const popup = document.createElement('div');
      popup.classList.add('popup');

      const closeBtn = document.createElement('button');
      closeBtn.innerHTML = '&#x3A7';
      closeBtn.classList.add('close-btn');

      const popupImg = image.cloneNode(true);
      popup.classList.add('popup-img');

      const comments = document.createElement('div');
      getComments();
      comments.textContent = 'Comments()';

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
      commentBtn.addEventListener('click', async () => {
        await postComments(id, name.value, commentI.value);
      });
      form.append(name, commentI, commentBtn);
      formDiv.append(h3, form);
      const titleDiv = document.createElement('div');
      titleDiv.classList.add('pop-up-title-div');
      const popUpTitle = itemTitle.cloneNode(true);
      popUpTitle.classList.add('pop-up-title');
      titleDiv.append(popUpTitle, closeBtn);
      popup.append(titleDiv, popupImg, comments, formDiv);

      modal.style.display = 'block';
      modal.appendChild(popup);

      closeBtn.addEventListener('click', () => {
        popup.remove();
        modal.style.display = 'none';
      });
    });
    // code ends

    // ADD LIKES - RECORDED ON THE Involvement API
    heartIcon.addEventListener('click', async (e) => {
      e.preventDefault();
      await addLike(itemID);
    });

    // append elements to the card container
    cardContainer.append(card);
    card.append(imageContainer, itemInfo, commentsButton);

    imageContainer.append(image);
    itemInfo.append(itemTitle, likesContainer);
    likesContainer.append(heartIcon);

    // PRINT TOTAL LIKES - RECORDED ON THE Involvement API
    const getLikes = async () => {
      await getTotalLikes();
    };
    console.log(getLikes());

    // set an item counter
    // static itemCounter = () => {
    //   const cardContainer = document.querySelector('.grid-container');
    //   const count = cardContainer.childElementCount;
    //   const itemCounter = document.querySelector('.item-counter');
    //   itemCounter.textContent = `Displaying ${count} shows:`;
    // };
  };
}

export default elementInfo;