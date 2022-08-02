/*
Dados dos numeros, devolver los resultados de las operaciones basicas entre ellos (suma, resta, multiplicacion, division)

* Input: `(2,2)`
* Output:

```javascript
2 + 2 = 4
2 - 2 = 0
2 * 2 = 4
2 / 2 = 1
```
*/

let numeroA = 5;
let numeroB = 5;

const operacionesBasicas = function(numeroA, numeroB){
    let resta = numeroA - numeroB;
    let suma = numeroA + numeroB;
    let multiplicacion = numeroA * numeroB;
    let division = numeroA / numeroB;

    return console.log(`Resultados: \n
     ${numeroA} + ${numeroB} = ${suma} \n
     ${numeroA} - ${numeroB} = ${resta} \n
     ${numeroA} * ${numeroB} = ${multiplicacion} \n
     ${numeroA} / ${numeroB} = ${division}     
     `)
}

operacionesBasicas(numeroA, numeroB);