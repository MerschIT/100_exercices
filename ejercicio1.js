/* ### Ejercicio 1

Dado un numero devolver su tabla de multiplicar completa. Por ejemplo:

* Input: `5`
* Output:

```javascript
Tabla del 5
5 x 1 = 5
5 x 2 = 10
(...)
```
*/

let numero = prompt('Ingrese un número');
const multiplicador = function(numero){
    for (i=0; i<=10; i++){
        let result = numero * i;
        console.log(`${numero} por ${i} es ${result}`);
    }
}

multiplicador(numero);

