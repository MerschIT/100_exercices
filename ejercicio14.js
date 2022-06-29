/* ### Ejercicio 14

Dado un String y un numero, repetir el String las veces que diga el numero

* Input: `('denu', 2)` -- Palabra y veces que se debe repetir
* Output: `'denu' 'denu'`
*/

let palabra = prompt('Ingrese la palabra a repetir');
repeticiones = prompt('Cuantas veces quiere que se repita');
let texto = '';


for(i=0;i<repeticiones;i++){
    texto += palabra + ' ';
    
}

console.log(texto);