import modal from './commentModal/modal.js';
import addLike from './likes/postLikes.js';

// CREATE ELEMENTS BASED ON INDEX.HTML
class elementInfo {
  static showCount = (shows) => {
    const showsNumber = document.querySelector('.item-counter');
    showsNumber.innerText = shows.length;
  }

  static renderCard = (title, imgUrl, itemID, summary, like) => {
    const cardContainer = document.querySelector('.grid-container');
    const card = document.createElement('div');
    card.classList.add('card');

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
    const likesNumber = document.createElement('span');
    likesNumber.textContent = like;

    // PRINT TOTAL LIKES - RECORDED ON THE Involvement API
    const updateLikes = () => {
      const currentLikes = likesNumber.innerText;
      likesNumber.innerText = currentLikes ? Number(currentLikes) + 1 : 1;
    };

    const heartIcon = document.createElement('i');
    heartIcon.classList.add('fa-solid', 'fa-heart');

    const commentsButton = document.createElement('button');
    commentsButton.classList.add('comments-button');
    commentsButton.textContent = 'Comments';
    // code starts
    commentsButton.addEventListener('click', () => modal(title, imgUrl, itemID, summary));
    // code ends

    // ADD LIKES - RECORDED ON THE Involvement API
    heartIcon.addEventListener('click', async (e) => {
      e.preventDefault();
      await addLike(itemID);
      updateLikes();
    });

    // append elements to the card container
    cardContainer.append(card);
    card.append(imageContainer, itemInfo, commentsButton);

    imageContainer.append(image);
    itemInfo.append(itemTitle, likesContainer);
    likesContainer.append(heartIcon, likesNumber);
  };
}
export default elementInfo;