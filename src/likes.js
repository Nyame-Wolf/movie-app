import { baseUrl, appId } from './modules/api.js';

const addLike = async (id) => {
  const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/yOdv0JXV8ssnN9f9thVW/likes', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      item_id: id,
    }),
  });
  const jsonResponse = await response.json();
  return jsonResponse;
};

const getTotalLikes = async () => {
  const response = await fetch(`${baseUrl}/${appId}/likes`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  });
  const data = await response.json();
  // const results = data.find((item) => +item.item_id === +id);
  return data;
};

export { addLike, getTotalLikes };