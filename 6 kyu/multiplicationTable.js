///////////////////////////////PROMPT//////////////////////////////////////////////

/*
Your task, is to create NxN multiplication table, of size provided in parameter.

for example, when given size is 3:

1 2 3
2 4 6
3 6 9
for given example, the return value should be: [[1,2,3],[2,4,6],[3,6,9]]
*/

///////////////////////////////SOLUTION//////////////////////////////////////////////

multiplicationTable = function(size) {
  const output = []
  const baseArr = []
  for(let i = 1; i <= size; i++){
    baseArr.push(i)    
  }
  output.push(baseArr)
  for(let i = 2; i <= size; i++){
    output.push(baseArr.map(el => el * i))    
  }
  return output
}

///////////////////////////////TEST CASES/////////////////////////////////////////

Test.assertSimilar(multiplicationTable(3), [[1,2,3], [2,4,6], [3,6,9]]);
