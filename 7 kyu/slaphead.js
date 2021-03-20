///////////////////////////////PROMPT//////////////////////////////////////////////

/*
Being a bald man myself, I know the feeling of needing to keep it clean shaven. Nothing worse that a stray hair waving in the wind.

You will be given a string(x). Clean shaved head is shown as "-" and stray hairs are shown as "/". Your task is to check the head for stray hairs and get rid of them.

You should return the original string, but with any stray hairs removed. Keep count ot them though, as there is a second element you need to return:

0 hairs --> "Clean!"
1 hair --> "Unicorn!"
2 hairs --> "Homer!"
3-5 hairs --> "Careless!"
>5 hairs --> "Hobo!"

So for this head: "------/------" you shoud return:

["-------------", "Unicorn"]
*/

///////////////////////////////SOLUTION//////////////////////////////////////////////

function bald(x){
  let hairs = 0
  let cut = ''
  for(let i = 0; i < x.length; i++){
    if(x[i] === '/'){
      hairs++
    }
    cut += '-'
  }
  return 0 === hairs ? [cut, "Clean!"]
  : hairs === 1 ? [cut, "Unicorn!"]
  : hairs === 2 ? [cut,"Homer!"]
  : hairs > 2 && hairs < 6 ? [cut, "Careless!"]
  : [cut, "Hobo!"]
}

///////////////////////////////TEST CASES/////////////////////////////////////////

Test.describe("Example tests",_=>{
Test.assertSimilar(bald('/---------'), ['----------', 'Unicorn!']);
Test.assertSimilar(bald('/-----/-'), ['--------', 'Homer!']);
Test.assertSimilar(bald('--/--/---/-/---'), ['---------------', 'Careless!']);
});
