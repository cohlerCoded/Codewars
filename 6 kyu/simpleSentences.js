///////////////////////////////PROMPT//////////////////////////////////////////////

/*
Implement a function, so it will produce a sentence out of the given parts.

Array of parts could contain:

words;
commas in the middle;
multiple periods at the end.
Sentence making rules:

there must always be a space between words;
there must not be a space between a comma and word on the left;
there must always be one and only one period at the end of a sentence.
Example:

makeSentence(['hello', ',', 'my', 'dear']) // returns 'hello, my dear.'
*/

///////////////////////////////SOLUTION//////////////////////////////////////////////

const makeSentence = arr =>{
  let result = ''
  for(let i = 0; i < arr.length; i++){
    arr[i + 1] === ',' || arr[i + 1] === '.' || !arr[i + 1] ? result += `${arr[i]}` : result += `${arr[i]} ` 
    if(arr[i] === '.') return result
  }
  if (result[result.length - 1] !== '.') result += '.'
  return result
}

///////////////////////////////TEST CASES/////////////////////////////////////////

Test.assertEquals(makeSentence(['hello', 'world']), 'hello world.')
