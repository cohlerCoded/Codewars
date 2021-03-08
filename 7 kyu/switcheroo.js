///////////////////////////////PROMPT//////////////////////////////////////////////

/*
Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). Leave any incidence of c untouched.

Example:

'acb' --> 'bca'
'aabacbaa' --> 'bbabcabb'
*/

///////////////////////////////SOLUTION//////////////////////////////////////////////

function switcheroo(x){
  let output = ''
  for(let i = 0; i < x.length; i++){
    x[i] === 'a' ? output += 'b'
    : x[i] === 'b' ? output += 'a'
    : output += x[i]
  }
  return output
}

///////////////////////////////TEST CASES/////////////////////////////////////////

Test.describe("Example tests",_=>{
Test.assertEquals(switcheroo('abc'), 'bac');
Test.assertEquals(switcheroo('aaabcccbaaa'), 'bbbacccabbb'); 
Test.assertEquals(switcheroo('ccccc'), 'ccccc'); 
});
