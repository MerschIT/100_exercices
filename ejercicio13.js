/*
### Ejercicio 13

Dado un array, dividirlo en tantos sub-arrays como sea necesario basandonos en un numero que indique su tamaño.

* Input: `([1,2,3,4], 2)` -- Array y tamaño de divisiones
* Output: `([1,2], [3,4])`
*/

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let cantidad = prompt('En cuantas partes quiere dividir el array');
let divididos = [];
let partes = numeros.length/cantidad;

console.log(partes);

let inicio = 0;
let fin = 0;

if( numeros.length%cantidad !== 0){
    alert(`No se puede dividir en ${cantidad} porque se pierden elementos`)
}else{
    for(i=0;i<cantidad;i++){
        inicio = fin;
        fin += partes;
        divididos[i] = numeros.slice(inicio, fin);
    }
}

console.log(divididos);