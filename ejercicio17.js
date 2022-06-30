/*
### Ejercicio 17

Dado un numero, mostrar los numeros de 1 hasta el numero. Para multiplos de tres, escribir "fizz" en lugar del numero, para los multiplos de cinco, "buzz", y si es multiplo de tres y cinco, "fizzbuzz"

* Input: `6`
* Output: `1 2 fizz 4 buzz fizz`
*/

let numero = 15;

for(i=1;i<=numero;i++){
    if(i%3 === 0 && i%5 === 0){
        console.log('fizzbuzz')
    } else if(i%3 === 0 ){
        console.log('fizz')
    } else if(i%5 === 0){
        console.log('buzz')
    } else{
        console.log(i);
    }
}