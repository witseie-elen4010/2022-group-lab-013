/* eslint-env jest */
'use strict'

// const func = require('../Private/Script/databaseHandler')

test.skip('Check if user is in database', () => {
  func.ConnectToDatabase()
  expect(func.UserExits('Guest')).toBeTruthy()
})

<<<<<<< HEAD
test.skip('Check if login is valid', () => {
  func.ConnectToDatabase()
  expect(func.ValidLogin('Guest', 'Guest')).toBeTruthy()
})
=======
  test('Check if login is valid', () => {
    func.ConnectToDatabase()
    expect(func.ValidLogin('Guest','Guest')).toBeTruthy();;
  });



>>>>>>> parent of b7db574 (added game statistics for single player)
