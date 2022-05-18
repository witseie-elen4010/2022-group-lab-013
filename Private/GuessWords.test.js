/* eslint-env jest */
const words = require('../Public/Script/GuessWords').default;


test('Check if length of random guess word is 5', () => {
    expect(words().length).toBe(5);
  });

