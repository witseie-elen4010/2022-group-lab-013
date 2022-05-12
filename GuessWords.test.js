/* eslint-env jest */
const words = require('./GuessWords');
const Turn = require('./Turn');

test('Check if length of random guess word is 5', () => {
    expect(words().length).toBe(5);
  });


  test('Check the number of starting turns is 6', () => {
    let player = new Turn()
    expect(player.getRemainingTurns()).toBe(6);
    player.CompleteTurn()
  });

  test('Check the number of turns decreases when player completes a single turn', () => {
    let player = new Turn()
    player.CompleteTurn()
    expect(player.getRemainingTurns()).toBe(5);
  });


  test('Check the number of turns decreases when player completes a multiple turns', () => {
    let player = new Turn()
    player.CompleteTurn()
    player.CompleteTurn()
    player.CompleteTurn()
    expect(player.getRemainingTurns()).toBe(3);
  });