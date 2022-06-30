/*
### Ejercicio 16

Dado una cadena de texto, devolver cuantas vocales tiene la misma.

* Input: `denu`
* Output: `2`
*/

let texto = 'Este es un texto con muchas vocales';
let vocales = 0;
texto = texto.toLowerCase().split('');

for(i=0;i<texto.length;i++){
    if(texto[i] === 'a' ||texto[i] === 'e'||texto[i] === 'i'||texto[i] === 'o'||texto[i] === 'u'){
        vocales += 1;
    }

}

console.log(`El texto tiene ${vocales}.`)