// M Task

function getSquareNumbers(num: number[]){
   const sqr = num.map((ele) => {
    return {number: ele, square: ele * ele };
   })
   return sqr
}

console.log(getSquareNumbers([2, 4, 6]));


// L Task 

// function reverseSentence(str: String){
//   const arr = str.split(" ");
//   let reversedWords = arr.map(function(arr) {
//     return arr.split("").reverse().join("");
// });
// let reverseSentence = reversedWords.join(" ");

// return reverseSentence;
  
// }
// const str = "we love coding";
// const answer = reverseSentence(str);
// console.log("reverse:", answer);




// K Task

// function countVowels(str: String) {
//   const vowels = ['a', 'e', 'i', 'o', 'u'];
//   let count = 0;
//   for(let ele of str){
//     if(vowels.includes(ele)) count++;
//   }
//   return count;
// }

// const str = "string";
// const answer = countVowels(str);
// console.log("vowels:", answer);












// J Task 

// function findLongestWord(str: string) {
 
//   const words = str.split(" ");
  

//   let longest = "";
//   let max = 0;
  
 
//   for (let i = 0; i < words.length; i++) {
//       const word = words[i];
//       if (word.length > max) {
//           longest = word;
//           max = word.length;
//       }
//   }
//   return longest;
// }
// const str = "I come from Uzbekistan";
// const longestWord = findLongestWord(str);
// console.log("The Longest word is:", longestWord);




// I Task 
// function getDigits(str: string){
//   const num = str.match(/\d/g);
//   if (num) return num.join('');
//   else return 0;

// }
// const str = "m14i1t";
// const answer = getDigits(str);
// console.log("Stringda qatnashgan raqamlar:", answer)

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

/* Frontend Dvelopment 
   Traditional FD => SSR => EJS
   ModernFD => SPA => REACT
*/

/* Cookies
   request join
   self destroy
*/


/* Validation
  Frontend Validation
  Backend Validation
  Database Validation
*/


// H Task 

// const arr = [1, -4, 2];
// const arr_1 = arr.filter(getPositive);

// function getPositive(arr: number) {
//     return arr >= 0;
// }

// const javob = arr_1.join('');
// console.log(javob);