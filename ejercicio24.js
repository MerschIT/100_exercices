/*
Dado un array de enteros y un numero, detectar si esa lista de numeros 
es una permutacion del 1 al numero aportado.

Permutacion: Secuencia de numeros en orden sin que falte ninguno entre ellos

* Input: `([1,2,3,4,5], 5)`
* Output: `true`

*/

let numero = 6;
let numeros = [1,2,2,3,4,5,6];
let contador = 0;

let verCorrelativos = function(numeros, numero){
    for (i = 1; i <= numeros.length; i++){
        // console.log(i);
        // console.log(numeros[i-1]);
        if (numeros[i-1] === i){
            contador += 1;
        }
    }
    if (contador === numero){
        console.log(`${contador} y ${numero} Es correlativo`)
    } else {
        console.log(`${contador} y ${numero} No es correlativo`)
    }


}

verCorrelativos(numeros, numero);

