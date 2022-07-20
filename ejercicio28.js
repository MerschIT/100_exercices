/* 
Dado un numero devolver su factorial (La multiplifacion de todos los numeros hasta llegar a el)

* Input: `3`
* Output: `6 (1x2x3)`

*/

let numero = 5;
let factorial = 1;


for (i = 1; i <=numero; i++){
    factorial = factorial*i;
};

console.log(factorial);