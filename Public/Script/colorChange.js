'use strict'

function changeColor (element, flag) {
  if (!element) { throw Error('No Object to change color') }
  if(!flag){throw Error('no status tag error')}
  if(flag !== 'correct' && flag !== 'wrongPosition' && flag !== 'wrong' ){throw Error('wrong status tag')}
  const target = element
  if (flag === 'correct') {
    target.style.backgroundColor = 'Green'
  } else if (flag === 'wrongPosition') {
    target.style.backgroundColor = 'Orange'
  } else if (flag === 'wrong') {
    target.style.backgroundColor = 'Grey'
  }
}

export {changeColor}
