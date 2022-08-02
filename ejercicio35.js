/*
Dado un array, crear otro array con el primer y ultimo elemento del array original

* Input: `[100,200,500,600]`
* Output: `[100,600]`

*/

let arrayDeNumeros = [100, 200, 500, 600];
let primerYUltimoElemento = [];

primerYUltimoElemento[0] = arrayDeNumeros[0];
primerYUltimoElemento[1] = arrayDeNumeros[arrayDeNumeros.length-1];

console.log(primerYUltimoElemento);