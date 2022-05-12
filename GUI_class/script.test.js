/* eslint-env jest */
/*
import 'script.js'

test('console.log the text "hello"', () => {
  const logSpy = jest.spyOn(console, 'log')
  console.initBoard()

  expect(logSpy).toHaveBeenCalledWith('done')
})
*/
let outputData = ''
let storeLog = inputs => (outputData += inputs)
test('Board inililized', () => {
  console['log'] = jest.fn(storeLog)
  require('./script.js')
  expect(outputData).toBe('done')
})
