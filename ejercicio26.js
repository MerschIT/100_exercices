/*
Dado un numero mostrar la serie de fibonacci y el resultado de la misma

* Input: `10`
* Output: `Serie completa: 0,1,1,2,3,5,8,13,21,34,55) Resultado: 55`
*/

let fibonacci = [];
let repetir = 10;
fibonacci[0] = 0;
fibonacci[1] = 1;

for (i = 2; i <= repetir ; i++){
    fibonacci[i] = fibonacci[i-2] + fibonacci[i-1];
}

console.log(`La serie completa: ${fibonacci.join(', ')}. Y el resultado es: ${fibonacci.pop()}`);