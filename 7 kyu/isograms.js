///////////////////////////////PROMPT//////////////////////////////////////////////

/*
An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

isIsogram("Dermatoglyphics") == true
isIsogram("aba") == false
isIsogram("moOse") == false // -- ignore letter case
*/

///////////////////////////////SOLUTION//////////////////////////////////////////////

const isIsogram = (str) => {
  const obj = {}
  const nStr = str.toLowerCase()
  for (let i = 0; i < str.length; i++) nStr[i] in obj ? obj[nStr[i]]++ : obj[nStr[i]] = 1
  for (let key in obj){ if (obj[key] > 1) return false }
  return true
}

///////////////////////////////TEST CASES/////////////////////////////////////////

Test.assertSimilar( isIsogram("Dermatoglyphics"), true );
Test.assertSimilar( isIsogram("isogram"), true );
Test.assertSimilar( isIsogram("aba"), false, "same chars may not be adjacent" );
Test.assertSimilar( isIsogram("moOse"), false, "same chars may not be same case" );
Test.assertSimilar( isIsogram("isIsogram"), false );
Test.assertSimilar( isIsogram(""), true, "an empty string is a valid isogram" );
