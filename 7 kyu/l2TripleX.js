///////////////////////////////PROMPT//////////////////////////////////////////////

/*
Given a string, return true if the first instance of "x" in the string is immediately followed by the string "xx".

tripleX("abraxxxas") → true
tripleX("xoxotrololololololoxxx") → false
tripleX("softX kitty, warm kitty, xxxxx") → true
tripleX("softx kitty, warm kitty, xxxxx") → false
Note :

capital X's do not count as an occurrence of "x".
if there are no "x"'s then return false
*/

///////////////////////////////SOLUTION//////////////////////////////////////////////

function tripleX(str){
  for(let i = 0; i < str.length; i++){
    if(str[i] === 'x'){
      if(str[i + 1] === 'x' && str[i + 2] === 'x') return true
      else return false
    }
  }
  return false
}

///////////////////////////////TEST CASES/////////////////////////////////////////

Test.assertEquals(tripleX("abraxxxas"),true);
Test.assertEquals(tripleX("xoxotrololololololoxxx"),false);
Test.assertEquals(tripleX("soft kitty, warm kitty, xxxxx"),true);
Test.assertEquals(tripleX("softx kitty, warm kitty, xxxxx"),false);
