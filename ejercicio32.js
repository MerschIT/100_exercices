/*

Dado un array de numeros, devolver el mismo con sus numeros elevados al cuadrado, y se debe eliminar cualquier contenido que no sea numerico

* Input: `[5,6,7,"casa"]`
* Output: `[25,36,49]`

*/

let arr = [2, 3, 4, 'casa'];

arr = arr.filter((x) => !isNaN(x));

let alCuadrado = arr.map(function(element){
    if (!isNaN(element)){
      return element * element;  
    } 
})

console.log(alCuadrado);