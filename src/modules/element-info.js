import modal from './commentModal/modal.js';
import addLike from './likes/postLikes.js';

// CREATE ELEMENTS BASED ON INDEX.HTML
class elementInfo {
  static renderCard = (title, imgUrl, itemID, summary, like) => {
    const cardContainer = document.querySelector('.grid-container');
    const card = document.createElement('div');
    card.classList.add('card');
    // const id = itemID;

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
    console.log(like);

    const likesNumber = like;
    likesContainer.textContent = likesNumber;
    // console.log(likesNumber);

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
    });

    // append elements to the card container
    cardContainer.append(card);
    card.append(imageContainer, itemInfo, commentsButton);

    imageContainer.append(image);
    itemInfo.append(itemTitle, likesContainer);
    likesContainer.append(heartIcon);

    // PRINT TOTAL LIKES - RECORDED ON THE Involvement API

    // const getLikes = async () => {
    //   const likes = await getTotalLikes();
    //   // eslint-disable-next-line no-plusplus
    //   for (let i = 0; i < likes.length; i++) {
    //     const likesCounter = likes[i].likes;
    //     if (likes[i].item_id === itemID) {
    //       return likesCounter;
    //     }
    //   };
    //   return
    // };
    // getLikes();

    // const printLikes = document.createElement('span');
    // likes.classList.add('likes-counter');
    // likes.innerHTML = `Likes: ${likes}`;
    // likesContainer.append(printLikes);

    // set an item counter
    // static itemCounter = () => {
    //   const cardContainer = document.querySelector('.grid-container');
    //   const count = cardContainer.childElementCount;
    //   const itemCounter = document.querySelector('.item-counter');
    //   itemCounter.textContent = `Displaying ${count} shows:`;
  };
}
export default elementInfo;