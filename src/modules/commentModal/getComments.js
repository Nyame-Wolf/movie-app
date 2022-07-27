import { baseUrl, appId } from '../api.js';

// const getCount = (id) => comments.length;

const getComments = async (id) => {
  const response = await fetch(`${baseUrl}/${appId}/comments?item_id=${id}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  });
  const jsonResponse = await response.json();
  return jsonResponse;
};

export default getComments;