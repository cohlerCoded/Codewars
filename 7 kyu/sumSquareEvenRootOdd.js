///////////////////////////////PROMPT//////////////////////////////////////////////

/*
Complete the function that takes a list of numbers (nums), as the only argument to the function. Take each number in the list and square it if it is even, or square root the number if it is odd. Take this new list and return the sum of it, rounded to two decimal places.

The list will never be empty and will only contain values that are greater than or equal to zero.

Good luck!
*/

///////////////////////////////SOLUTION//////////////////////////////////////////////

const sumSquareEvenRootOdd = ns => {
  const nsMap = ns.map(el => el % 2 === 0 ? el = el ** 2 : el = Math.sqrt(el))
  return Math.round(100 * nsMap.reduce((acc, curr) => acc += curr, 0)) / 100
};

///////////////////////////////TEST CASES/////////////////////////////////////////

// Since Node 10, we're using Mocha.
// You can use `chai` for assertions.
const chai = require("chai");
const expect = chai.expect;
// Uncomment the following line to disable truncating failure messages for deep equals, do:
chai.config.truncateThreshold = 0;
// Since Node 12, we no longer include assertions from our deprecated custom test framework by default.
// Uncomment the following to use the old assertions:
// const Test = require("@codewars/test-compat");

describe("Basic tests", () =>
  it("does the thing", () => {
    expect(sumSquareEvenRootOdd([4,5,7,8,1,2,3,0])).to.be.approximately(91.61, Number.EPSILON);
    expect(sumSquareEvenRootOdd([1,14,9,8,17,21])).to.be.approximately(272.71, Number.EPSILON);
  })
);
