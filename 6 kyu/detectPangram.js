///////////////////////////////PROMPT//////////////////////////////////////////////

/*
A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.
*/

///////////////////////////////SOLUTION//////////////////////////////////////////////

const isPangram = str =>{
  const letters = {}
  str.toLowerCase()
    .split('')
      .forEach(el=>{
        if (el.match(/^[A-Za-z]+$/)) letters[el] = true
      })
  return Object.keys(letters).length === 26
}

///////////////////////////////TEST CASES/////////////////////////////////////////

var string = "The quick brown fox jumps over the lazy dog."
Test.assertEquals(isPangram(string), true)
var string = "This is not a pangram."
Test.assertEquals(isPangram(string), false)
