const postComments = async (id, username, comment, creationDate) => {
  const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/yOdv0JXV8ssnN9f9thVW/comments', {
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
  const jsonResponse = await response.json();
  return jsonResponse;
};
export default postComments;