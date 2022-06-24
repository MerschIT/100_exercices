// ### Ejercicio 9

// Dados dos array devolver un array con los elementos comunes entre ambos sin duplicados

// * Input: `([1,2,3], [3,2,5,6])`
// * Output: `[2,3]`


let arrayA = [1,2,3,3,4,4,4,5,6,7,7,8,9,9,9,10,11];
let arrayB = [11,11,12,12,13,14,15,15,15,15,16,16,17,17,18,18,18,19,19]

arrayA = arrayA.concat(arrayB);

let repetidos = [];

for(i=0;i<arrayA.length;i++){
    if(arrayA[i] === arrayA[i+1]){
        repetidos.push(arrayA[i]);

    }
}


// ELIMINA LOS ELEMENTOS REPETIDOS
let repetidosSinSuplicados = new Set(repetidos);

console.log([...repetidosSinSuplicados]);