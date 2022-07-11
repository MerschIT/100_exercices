/*

### Ejercicio 21

Dada un String y un numero, cortar el string mostrando X cantidad de caracteres dependiendo del numero enviado.

* Input: `(Denu, 2)`
* Output: `De`

*/


let texto1 = 'Holamicompadre'.split('');
let textoRecortado = [];
let cantCaracteres = prompt('¿De cuántos caracteres quiere que sea el texto?');


textoRecortado = texto1.slice(0,cantCaracteres).join('');

console.log(textoRecortado);
