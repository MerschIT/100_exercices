/*
Dados dos numeros indicar cual es mayor y cual es menor.

* Input: `(2, 5)`
* Output: `2 is less than 5`

*/

let numeroA = Number(prompt('Ingrese el primer número'));
let numeroB = Number(prompt('Ingrese el segundo número'));



if(isNaN(numeroA) || isNaN(numeroB)){
    alert('Ingresaste algo que no es un número')
}else{
    if(numeroA === numeroB){
        alert('Ambos son iguales')
    } else if(numeroA > numeroB){
        alert(`El ${numeroA} es mayor al ${numeroB}` )
    } else{
        alert(`El ${numeroB} es mayor al ${numeroA}`)
    };
};