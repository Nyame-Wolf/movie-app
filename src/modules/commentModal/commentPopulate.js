const tableData = (d) => {
  const td = document.createElement('td');
  td.textContent = d;
  return td;
};

const createComment = (data) => {
  const dataRow = document.createElement('tr');
  dataRow.classList.add('comments-count');
  const dateD = tableData(`${data.creation_date}`);
  const user = tableData(`${data.username}`);
  const comment = tableData(`${data.comment}`);
  dataRow.append(dateD, user, comment);
  return dataRow;
};
const createComments = (comments) => {
  const commentT = document.querySelector('.tbody');
  let child = commentT.lastElementChild;
  while (child) {
    commentT.removeChild(child);
    child = commentT.lastElementChild;
  }
  comments.forEach((comment) => {
    const aComment = createComment(comment);
    commentT.appendChild(aComment);
  });
};

export default createComments;