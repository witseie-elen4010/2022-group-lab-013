/* eslint-env jest */
/*
import 'script.js'

test('console.log the text "hello"', () => {
  const logSpy = jest.spyOn(console, 'log')
  console.initBoard()

  expect(logSpy).toHaveBeenCalledWith('done')
})
*/
/*
let outputData = ''
let storeLog = inputs => (outputData += inputs)
test('Board inililized', () => {
  console['log'] = jest.fn(storeLog)
  require('./script.js')
  expect(outputData).toBe('done')
})
/**/
/*
import initBoard from './script.js'
const logSpy = jest.spyOn(console, 'log').mockImplementation()

describe('Unit tests board initilization', () => {
  beforeEach(() => {
    logSpy.mockClear()
  })
  test('Board is created', () => {
    initBoard()
    expect(console.log).toBeCalledTimes(1)
    expect(console.log).toHaveBeenLastCalledWith('done')
  })
})
*/
