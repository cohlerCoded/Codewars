///////////////////////////////PROMPT//////////////////////////////////////////////

/*
Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.
*/

///////////////////////////////SOLUTION//////////////////////////////////////////////

const solution = (nums) => (!nums) ? [] : nums.sort((a,b)=> a-b)

///////////////////////////////TEST CASES/////////////////////////////////////////

const { assert } = require("chai")

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.deepEqual(solution([1,2,3,10,5]), [1,2,3,5,10])
    assert.deepEqual(solution(null), [])
    assert.deepEqual(solution([]), [])
    assert.deepEqual(solution([20, 2, 10]), [2,10,20])
    assert.deepEqual(solution([2, 20, 10]), [2,10,20])
  })
})
