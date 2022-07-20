/*
Dado un numero mostrar a cuantos años, meses y dias equivale.

* Input: `912`
* Output: `2 años, 6 meses y 2 dias`
*/

let numero = 912;
let año = 0;
let meses = 0;
let dias = 0;

while (numero > 0){
    if (numero - 365 >= 0){
        numero -= 365;
        año += 1;
    } else if (numero - 30 >= 0){
        numero -= 30;
        meses += 1;
    } else {
        dias = numero;
        break;
    }
};

console.log(`Años ${año}, meses ${meses}, días ${dias}`)

// NOTA AL PIE: Este sistema no tiene en cuenta los años bisiestos, y considera que todos los meses tienen 30 dias.
// Se podría usar alguna librería de fechas pero no era mi objetivo. Será mejorado más adelante.