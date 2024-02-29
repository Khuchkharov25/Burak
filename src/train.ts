/* Project standarts
  -Logging standarts
  -Naming standarts
     function, method, variable => CAMEL case   goHome
     class => PASCAL                            MemberSevices
     folder => KEBAB
     Css => SNAKE                                button_style
  -Error handling

*/


// H Task 

const arr = [1, -4, 2];
const arr_1 = arr.filter(getPositive);

function getPositive(arr: number) {
    return arr >= 0;
}

const javob = arr_1.join('');
console.log(javob);