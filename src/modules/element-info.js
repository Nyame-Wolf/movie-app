// CREATE ELEMENTS BASED ON INDEX.HTML
class elementInfo {
  static renderCard = (title, imgUrl, itemID) => {
    const cardContainer = document.querySelector('.grid-container');
    const card = document.createElement('div');
    card.classList.add('card');
    card.setAttribute('data-id', itemID);
    // added a dataset use to create ids

    const imageContainer = document.createElement('div');
    imageContainer.classList.add('image-container');

    const image = document.createElement('img');
    image.classList.add('item-image');
    image.src = imgUrl;

    const itemInfo = document.createElement('div');
    itemInfo.classList.add('intem-info');

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
    commentsButton.addEventListener('click', () => {
      const modal = document.querySelector('.modal');
      const popup = document.createElement('div');
      popup.classList.add('popup');

      const closeBtn = document.createElement('button');
      closeBtn.innerHTML = '&#x3A7';
      closeBtn.classList.add('close-btn');

      const popupImg = image.cloneNode(true);
      popup.classList.add('popup-img');

      popup.append(itemTitle.cloneNode(true), closeBtn, popupImg);

      modal.style.display = 'block';
      modal.appendChild(popup);

      closeBtn.addEventListener('click', () => {
        popup.remove();
        modal.style.display = 'none';
      });
    });

    cardContainer.append(card);
    card.append(imageContainer, itemInfo, commentsButton);

    imageContainer.append(image);
    itemInfo.append(itemTitle, likesContainer);
    likesContainer.append(heartIcon);
  };
}

export default elementInfo;