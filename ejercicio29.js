/*
Dado un numero indicar si es capicua o no (se leen igual de izquierda a derecha y viceversa)

* Input: `2002`
* Output: `true`

*/

numero = 2005002;
numeroB = numero.toString().split('').reverse().join('');

console.log(numeroB == numero);
