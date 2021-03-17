///////////////////////////////PROMPT//////////////////////////////////////////////

/*
Write a function called repeat_string which repeats the given string str exactly count times.

repeatStr(6, "I") // "IIIIII"
repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"
*/

///////////////////////////////SOLUTION//////////////////////////////////////////////

function repeatStr (n, s, str ='') {
  if(n === 0) return str
  str += s
  return repeatStr(--n, s, str)
}

///////////////////////////////TEST CASES/////////////////////////////////////////

describe("Tests", function() {
  it ("Basic tests", function() {
    Test.assertSimilar(repeatStr(3, "*"), "***");
    Test.assertSimilar(repeatStr(5, "#"), "#####");
    Test.assertSimilar(repeatStr(2, "ha "), "ha ha ");
  });
});
