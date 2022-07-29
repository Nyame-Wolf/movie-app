import getCommentsCount from '../commentModal/comments-count.js';
import commentsT from './comments.js';

describe('comments mock data', () => {
  let previousHtml;
  beforeAll(() => {
    previousHtml = document.body.innerHTML;
    document.body.innerHTML = commentsT;
  });
  afterAll(() => { document.body.innerHTML = previousHtml; });
  describe('test comment counter', () => {
    test('Shoud return the number of comments displayed!', () => {
      expect(getCommentsCount()).toBe(7);
    });
  });
});