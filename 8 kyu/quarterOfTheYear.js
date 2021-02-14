///////////////////////////////PROMPT//////////////////////////////////////////////

/*
Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.
*/

///////////////////////////////SOLUTION//////////////////////////////////////////////

const quarterOf = (month) => month > 9 ? 4 : month > 6 ? 3 : month > 3 ? 2 : 1 

///////////////////////////////TEST CASES/////////////////////////////////////////

Test.describe("Basic Tests", () =>{
  Test.assertEquals(quarterOf(3), 1)
  Test.assertEquals(quarterOf(8), 3)
  Test.assertEquals(quarterOf(11), 4)
});
