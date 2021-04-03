///////////////////////////////PROMPT//////////////////////////////////////////////

/*
Given: an array containing hashes of names

Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.

Example:

list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
// returns 'Bart, Lisa & Maggie'

list([ {name: 'Bart'}, {name: 'Lisa'} ])
// returns 'Bart & Lisa'

list([ {name: 'Bart'} ])
// returns 'Bart'

list([])
// returns ''
Note: all the hashes are pre-validated and will only contain A-Z, a-z, '-' and '.'.
*/

///////////////////////////////SOLUTION//////////////////////////////////////////////

function list(names){
  let output = ''
  for(let [i, name] of names.entries()){
    if (names.length === 1) return name.name
    else if (i === names.length - 2) output += `${names[i].name} & `
    else if (i === names.length - 1) output += `${names[i].name}`
    else output += `${names[i].name}, `
  }
  return output
}
///////////////////////////////TEST CASES/////////////////////////////////////////

Test.assertEquals(list([{name: 'Bart'},{name: 'Lisa'},{name: 'Maggie'},{name: 'Homer'},{name: 'Marge'}]), 'Bart, Lisa, Maggie, Homer & Marge',
"Must work with many names")
Test.assertEquals(list([{name: 'Bart'},{name: 'Lisa'},{name: 'Maggie'}]), 'Bart, Lisa & Maggie',
"Must work with many names")
Test.assertEquals(list([{name: 'Bart'},{name: 'Lisa'}]), 'Bart & Lisa', 
"Must work with two names")
Test.assertEquals(list([{name: 'Bart'}]), 'Bart', "Wrong output for a single name")
Test.assertEquals(list([]), '', "Must work with no names")
