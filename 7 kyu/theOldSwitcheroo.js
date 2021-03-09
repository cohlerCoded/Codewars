///////////////////////////////PROMPT//////////////////////////////////////////////

/*
Write a function

vowel2index(str)
that takes in a string and replaces all the vowels [a,e,i,o,u] with their respective positions within that string.
E.g:

vowel2index('this is my string') == 'th3s 6s my str15ng'
vowel2index('Codewars is the best site in the world') == 'C2d4w6rs 10s th15 b18st s23t25 27n th32 w35rld'
vowel2index('') == ''
Your function should be case insensitive to the vowels.
*/

///////////////////////////////SOLUTION//////////////////////////////////////////////

function vowel2index(str) {
  let output = ''
   for(let i = 0; i < str.length; i++){
      if(['a', 'e', 'i', 'o', 'u'].includes(str[i].toLowerCase())) output += i + 1
      else output += str[i]
   }
  return output
}

///////////////////////////////TEST CASES/////////////////////////////////////////

describe('Initial test',_ => {
  Test.assertEquals(vowel2index('this is my string'),'th3s 6s my str15ng');
  Test.assertEquals(vowel2index('Codewars is the best site in the world'),'C2d4w6rs 10s th15 b18st s23t25 27n th32 w35rld');
  Test.assertEquals(vowel2index('Tomorrow is going to be raining'), 'T2m4rr7w 10s g1415ng t20 b23 r2627n29ng');
  Test.assertEquals(vowel2index(''), '');
});
