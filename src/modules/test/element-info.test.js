/**
 * @jest-environment jsdom
 */

import elementInfo from '../element-info.js';
import shows from './shows.js';

describe('api mock data', () => {
  let previousHtml;
  beforeAll(() => { previousHtml = document.body.innerHTML; });
  afterAll(() => { document.body.innerHTML = previousHtml; });
  describe('test item counter', () => {
    test('Shoud return the number of shows displayed!', () => {
      elementInfo.showCount(shows);
      expect(document.querySelector('.item-counter').innerText).toBe(240);
    });
  });
});