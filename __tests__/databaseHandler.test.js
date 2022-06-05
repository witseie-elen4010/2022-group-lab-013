/* eslint-env jest */
'use strict'

//const func = require('../Private/Script/databaseHandler')

test.skip('Check if user is in database', () => {
    func.ConnectToDatabase()
    expect(func.UserExits('Guest')).toBeTruthy();;
  });  

  test.skip('Check if login is valid', () => {
    func.ConnectToDatabase()
    expect(func.ValidLogin('Guest','Guest')).toBeTruthy();;
  });


<<<<<<< HEAD
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
=======
>>>>>>> parent of c05a0f5 (added coding conventions and coding guide,applied standard to all file)
