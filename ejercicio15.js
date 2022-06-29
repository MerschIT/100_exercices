/*
### Ejercicio 15

Dado un String devolver el caracter mas usado.

* Input: `denuuu`
* Output: `u`
*/

let unString = 'aaaabbbb';
unString = unString.split('').sort();
let letra = '';
let letraMasRepetida = '';
let maximo = 0;
let contador = 1;

// aaann
console.log(unString);

for(i=0; i<unString.length; i++){
   
    if(unString[i] === unString[i+1]){
        contador += 1;
        if(contador > maximo){
            letraMasRepetida = unString[i];
            maximo = contador;
        }
        } else{
            contador = 1;
        };


    
}

console.log(`La letra más repetida es la "${letraMasRepetida}" y se repite ${maximo} veces`);

// CUMPLE CON LO SOLICITADO.
// EL INCOVENIENTE ES QUE SI HAY 2 LETRAS QUE SE REPITEN LA MISMA CANTIDAD DE VECES, 
// EL PROGRAMA SOLO IMPRIME LA PRIMERA.