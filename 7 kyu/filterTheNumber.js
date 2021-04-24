///////////////////////////////PROMPT//////////////////////////////////////////////

/*
Oh no! The number has been mixed up with the text. Your goal is to retreive the number from the text, can you return the number back to it's original state?

Task
Your task is to return a number from a string.

Details
You will be given a string of numbers and letters mixed up, you have to return all the numbers in that string in the order they occur.
Make sure you cover the cases where certain words do not show up with correct capitalization. For example, the input "pOLitiCIaN" should still return "Your tax dollars"..
*/

///////////////////////////////SOLUTION//////////////////////////////////////////////

var FilterString = function(value) {
  let output = ''
  for(let i = 0; i < value.length; i++){
    if('1234567890'.includes(value[i])) output += value[i]
  }
  return parseInt(output)
}

///////////////////////////////TEST CASES/////////////////////////////////////////

describe('Fixed Tests', _ => {
  Test.assertEquals(FilterString("123"), 123, 'Just return the numbers');
  Test.assertEquals(FilterString("a1b2c3"), 123, 'Just return the numbers');
  Test.assertEquals(FilterString("aa1bb2cc3dd"), 123, 'Just return the numbers');
});
