import { baseUrl, appId } from '../api.js';

const getComments = async (id) => {
  const response = await fetch(`${baseUrl}/${appId}/comments?item_id=${id}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  });
  if (response.status === 200) {
    return response.json();
  }
  const jsonResponse = await response.json();

  return Promise.reject(jsonResponse);
};

export default getComments;