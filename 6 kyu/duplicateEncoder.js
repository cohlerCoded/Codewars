///////////////////////////////PROMPT//////////////////////////////////////////////

/*
The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

Examples
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 
Notes

Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!
*/

///////////////////////////////SOLUTION//////////////////////////////////////////////

function duplicateEncode(word){
  const wordCopy = word.slice().toLowerCase()
  //declare output var
  let output = ''
  //build an obj of occurences
  const obj = {}
  //loop thru word
  for(let i = 0; i < wordCopy.length; i++){
    wordCopy[i] in obj ? obj[wordCopy[i]]++ : obj[wordCopy[i]] = 1  
  }
  //loop thru word
  for(let i = 0; i < wordCopy.length; i++){
    //if curr letter in obj value is greater than one replace with ) else (
   obj[wordCopy[i]] > 1 ? output += ')': output += '('
  }
  //return output
  return output
}

///////////////////////////////TEST CASES/////////////////////////////////////////

Test.assertEquals(duplicateEncode("din"),"(((");
Test.assertEquals(duplicateEncode("recede"),"()()()");
Test.assertEquals(duplicateEncode("Success"),")())())","should ignore case");
Test.assertEquals(duplicateEncode("(( @"),"))((");
