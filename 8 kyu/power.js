///////////////////////////////PROMPT//////////////////////////////////////////////

/*
The goal is to create a function 'numberToPower(number, power)' that "raises" the number up to power (ie multiplies number by itself power times).

Examples
numberToPower(3,2)  // -> 9 ( = 3 * 3 )
numberToPower(2,3)  // -> 8 ( = 2 * 2 * 2 )
numberToPower(10,6) // -> 1000000
*/

///////////////////////////////SOLUTION//////////////////////////////////////////////

const numberToPower = (number, power) =>{
  let output = 1
  for(let i = 0; i < power; i++){
    output *=number
  }
  return output
}

///////////////////////////////TEST CASES/////////////////////////////////////////

Test.assertEquals(numberToPower(4, 2), 16);
Test.assertEquals(numberToPower(10, 4), 10000);
Test.assertEquals(numberToPower(10, 0), 1);
