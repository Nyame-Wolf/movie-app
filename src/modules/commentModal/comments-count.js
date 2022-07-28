const getCommentsCount = () => {
  const comments = document.querySelectorAll('.comments-count');
  return comments.length;
};

export default getCommentsCount;