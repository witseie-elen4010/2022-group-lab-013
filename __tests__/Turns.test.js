const Turn = require('./Turn');

  test('Check the number of turns decreases when player completes a single turn', () => {
    let player = new Turn()
    player.CompleteTurn()
    expect(player.getRemainingTurns()).toBe(5);
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