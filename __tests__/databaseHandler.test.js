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


