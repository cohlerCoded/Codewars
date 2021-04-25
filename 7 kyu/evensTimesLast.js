///////////////////////////////PROMPT//////////////////////////////////////////////

/*
Given a sequence of integers, return the sum of all the integers that have an even index, multiplied by the integer at the last index.

Indexes in sequence start from 0.

If the sequence is empty, you should return 0.
*/

///////////////////////////////SOLUTION//////////////////////////////////////////////

function evenLast(numbers) {
  if (!numbers.length) return 0
  return numbers[numbers.length - 1] * numbers.reduce((acc,curr, i) =>{
    if(i % 2 === 0) acc += curr
    return acc
  }, 0)
}

///////////////////////////////TEST CASES/////////////////////////////////////////

Test.assertEquals(evenLast([2, 3, 4, 5]), 30)
