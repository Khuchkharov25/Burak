// I Task 
function getDigits(str: string){
  const num = str.match(/\d/g);
  if (num) return num.join('');
  else return 0;

}
const str = "m14i1t";
const answer = getDigits(str);
console.log("Stringda qatnashgan raqamlar:", answer)

/* Project standarts
  -Logging standarts
  -Naming standarts
     function, method, variable => CAMEL case   goHome
     class => PASCAL                            MemberSevices
     folder => KEBAB
     Css => SNAKE                                button_style
  -Error handling

*/

/* Application Programming Interface API
  traditional API
  REST API
  GraphQL API
  ... 

*/


// H Task 

// const arr = [1, -4, 2];
// const arr_1 = arr.filter(getPositive);

// function getPositive(arr: number) {
//     return arr >= 0;
// }

// const javob = arr_1.join('');
// console.log(javob);