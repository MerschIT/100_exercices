// ### Ejercicio 12

// Dado un numero mostrar todos los numeros desde ese al 0 de 8 en 8 en una lista con guiones y cada numero debe empezar por "n"

// * Input: `100`
// * Output:

// ```javascript
// -n 100
// -n 92
// -n 84
// etc..
// ```

let numero = prompt('Ingrese un número');

while(numero >= 0){
    console.log(numero);
    numero -= 8;
};