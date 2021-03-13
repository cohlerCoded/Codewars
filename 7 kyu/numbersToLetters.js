
///////////////////////////////PROMPT//////////////////////////////////////////////

/*
Given an array of numbers (in string format), you must return a string. The numbers correspond to the letters of the alphabet in reverse order: a=26, z=1 etc. You should also account for '!', '?' and ' ' that are represented by '27', '28' and '29' respectively.

All inputs will be valid.
*/

///////////////////////////////SOLUTION//////////////////////////////////////////////

cofunction switcher(x){
  let output = ''
  const y = x.map(el => {
    return parseInt(el) === 27 ? '!'
    : parseInt(el) === 28 ? '?'
    : parseInt(el) === 29 ? ' '
    : String.fromCharCode(26 - parseInt(el) + 97)
  })
  return y.join('')
}

///////////////////////////////TEST CASES/////////////////////////////////////////

Test.describe("Example tests",_=>{
Test.assertEquals(switcher(['24', '12', '23', '22', '4', '26', '9', '8']), 'codewars');
Test.assertEquals(switcher(['25','7','8','4','14','23','8','25','23','29','16','16','4']), 'btswmdsbd kkw'); 
Test.assertEquals(switcher(['4', '24']), 'wc'); 
});
