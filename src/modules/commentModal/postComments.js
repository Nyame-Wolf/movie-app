import { baseUrl, appId } from '../api.js';

const postComments = async (id, username, comment, creationDate) => {
  const response = await fetch(`${baseUrl}/${appId}/comments`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      item_id: id,
      username,
      comment,
      creation_date: creationDate,
    }),
  });
  const jsonResponse = await response.text();
  return jsonResponse;
};
export default postComments;