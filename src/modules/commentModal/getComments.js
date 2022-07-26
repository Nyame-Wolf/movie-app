'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/yOdv0JXV8ssnN9f9thVW/comments';

// const getCount = (id) => comments.length;

const getComments = async (id) => {
  const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/yOdv0JXV8ssnN9f9thVW/comments?item_id=${id}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  });
  const jsonResponse = await response.json();
  return jsonResponse;
};

export default getComments;