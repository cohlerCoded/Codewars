///////////////////////////////PROMPT//////////////////////////////////////////////

/*
Oh no, our Math object was "accidently" reset. Can you re-implement some of those functions? We can assure, that only non-negative numbers are passed as arguments. So you don't have to consider things like undefined, null, NaN, negative numbers, strings and so on.

Here is a list of functions, we need:

Math.round()
Math.ceil()
Math.floor()
*/

///////////////////////////////SOLUTION//////////////////////////////////////////////

Math.round = function(number) {
  const sub = number % 1
  if (sub === 0) return number
  return 1 - sub > 0.5 ? number - sub
  : number + 1 - sub
};

Math.ceil = function(number) {
  const sub = number % 1
  if (sub === 0) return number
  return Math.round(number + 1 - sub)
};

Math.floor = function(number) {
  const sub = number % 1
  if (sub === 0) return number
  return number - sub
};

///////////////////////////////TEST CASES/////////////////////////////////////////

Test.assertEquals(Math.round(0.4), 0, 'Math.round(0.4)');
Test.assertEquals(Math.round(0.5), 1, 'Math.round(0.5)');

Test.assertEquals(Math.ceil(0.4), 1, 'Math.ceil(0.4)');
Test.assertEquals(Math.ceil(0.5), 1, 'Math.ceil(0.5)');

Test.assertEquals(Math.floor(0.4), 0, 'Math.floor(0.4)');
Test.assertEquals(Math.floor(0.5), 0, 'Math.floor(0.5)');
