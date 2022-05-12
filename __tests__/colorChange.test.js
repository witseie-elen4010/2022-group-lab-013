/* eslint-env jest */
'use strict'
const changeColor = require('../colorChange')

//jest.spyon(document, 'getElementById')
describe('Color Change Function', () => {

  test('Color Changes Green for matched letter', () => {
  let testWord = document.createElement('div') 
  testWord.className = 'row-number'

  for(let i = 0;i<5;i++){
    const box = document.createElement('div')
    box.className = 'letter-box'
    testWord.appendChild(box)
  }
    
    const input = 'lions'
    const output = 'lions'
    
    const letters = Array.from(testWord.children)
    for (let i = 0; i < 5; i++) {
      const target = letters[i]
      if (input[i] === output[i]) {
        changeColor(target, 'correct')
      }
    }
    
    for (let i = 0; i < letters.length; i++) {
      expect(letters[i].style.backgroundColor).toEqual('Green')
    }
  })

    test('Color Changes Orange for wrong placement right letter', () => {
      let testWord = document.createElement('div') 
      testWord.className = 'row-number'

      for(let i = 0;i<5;i++){
        const box = document.createElement('div')
        box.className = 'letter-box'
        testWord.appendChild(box)
      }

      const input = 'lions'
      const output = 'olnsi'
      
      const letters = Array.from(testWord.children)
      for (let i = 0; i < 5; i++) {
        const target = letters[i]
        if (input.includes(output[i]) && input[i]!==output[i]) {
          changeColor(target, 'wrongPosition')
        }
      }
      
      for (let i = 0; i < letters.length; i++) {
        expect(letters[i].style.backgroundColor).toEqual('Orange')
      }

    })
  test('Color Changes Grey for wrong letter', () => {
    let testWord = document.createElement('div') 
    testWord.className = 'row-number'
    for(let i = 0;i<5;i++){
      const box = document.createElement('div')
      box.className = 'letter-box'
      testWord.appendChild(box)
    }
    const input = 'lions'
    const output = 'ppppp'
    
    const letters = Array.from(testWord.children)
    for (let i = 0; i < 5; i++) {
      const target = letters[i]
      if (input[i] !== output[i] && !input.includes(output[i])) {
        changeColor(target, 'wrong')
      }
    }
    
    for (let i = 0; i < letters.length; i++) {
      expect(letters[i].style.backgroundColor).toEqual('Grey')
    }
  })

  test('Throws no object to change color error', () => {
    const input = null
        expect(() => {
            changeColor(input,"")
             }).toThrow(new Error("No Object to change color"))
  })

  test('Throws no status tag error', () => {
    let testWord = document.createElement('div') 
    testWord.className = 'row-number'
 
    const box = document.createElement('div')
    box.className = 'letter-box'
    testWord.appendChild(box)
    
    const input = testWord.childNodes
        expect(() => {
            changeColor(input,"")
             }).toThrow(new Error("no status tag error"))
  })
  
  test('Color Changes According to rightness', () => {
  
    let testWord = document.createElement('div') 
    testWord.className = 'row-number'
  
    for(let i = 0;i<5;i++){
      const box = document.createElement('div')
      box.className = 'letter-box'
      testWord.appendChild(box)
    }
    const input = 'lions'
    const output = 'lxnss'
    
    const letters = Array.from(testWord.children)
    for (let i = 0; i < 5; i++) {
      const target = letters[i]
      if (input[i] === output[i]) {
        changeColor(target, 'correct')
      }else if (input[i] !== output[i]) {

        if (input.includes(output[i])) {
        changeColor(target, 'wrongPosition')
        }else if(!input.includes(output[i])){
          changeColor(target, 'wrong')
        }
      }
    }
    
    expect(letters[0].style.backgroundColor).toEqual('Green')
    expect(letters[1].style.backgroundColor).toEqual('Grey')
    expect(letters[2].style.backgroundColor).toEqual('Orange')
    expect(letters[3].style.backgroundColor).toEqual('Orange')
    expect(letters[4].style.backgroundColor).toEqual('Green')
    
  })

})

