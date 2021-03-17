///////////////////////////////PROMPT//////////////////////////////////////////////

/*
Write a program to determine if a string contains only unique characters. Return true if it does and false otherwise.

The string may contain any of the 128 ASCII characters. Characters are case-sensitive, e.g. 'a' and 'A' are considered different characters.
*/

///////////////////////////////SOLUTION//////////////////////////////////////////////

function hasUniqueChars(str){
  const letters = {}
  for(let i = 0; i < str.length; i++){
    if(letters[str[i]]) return false
    else letters[str[i]] = 1
  }
  return true
}

///////////////////////////////TEST CASES/////////////////////////////////////////

Test.assertEquals(hasUniqueChars("  nAa"),false) // because there are two spaces ' '
Test.assertEquals(hasUniqueChars("abcdef"),true)
Test.assertEquals(hasUniqueChars("aA"),true) // case - sensitivity
Test.assertEquals(hasUniqueChars("++-"),false) // because there are two '+'
