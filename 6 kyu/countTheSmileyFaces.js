///////////////////////////////PROMPT//////////////////////////////////////////////

/*
Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

Rules for a smiling face:

Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
Every smiling face must have a smiling mouth that should be marked with either ) or D
No additional characters are allowed except for those mentioned.

Valid smiley face examples: :) :D ;-D :~)
Invalid smiley faces: ;( :> :} :]

Example
countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;
Note
In case of an empty array return 0. You will not be tested with invalid input (input will always be an array). Order of the face (eyes, nose, mouth) elements will always be the same.
*/

///////////////////////////////SOLUTION//////////////////////////////////////////////

function countSmileys(arr) {
  if (!arr[0]) return 0
  return arr.filter(el => isSmile(el)).length
  function isSmile(str){
    if (str[0] === ':' || str[0] === ';'){
      if (str[2] && str[1] === '~' || str[1] === '-'){
        if (str[2] === ')' || str[2] === 'D') return true
        if (str[2] === ')' || str[2] === 'D') return true
        else return false
      } else { 
        if (str[1] === ')' || str[1] === 'D')return true
        //else return false
      }
    }
    return false
  }
}

///////////////////////////////TEST CASES/////////////////////////////////////////

Test.describe("Basic testing", function() {
  it("", _ => {
    Test.assertEquals(countSmileys([]), 0);
    Test.assertEquals(countSmileys([':D',':~)',';~D',':)']), 4);
    Test.assertEquals(countSmileys([':)',':(',':D',':O',':;']), 2);
    Test.assertEquals(countSmileys([';]', ':[', ';*', ':$', ';-D']), 1);
  });
});
