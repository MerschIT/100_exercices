/*
Dado un String, si hay mas mayusculas, pasar todo a mayuscula, y viceversa.

* Input: `"CASa"`
* Output: `CASA`
*/

let palabra = 'CaSaaaóaaaXXXXX';
let mayusculas = 0;
let minusculas = 0;

for (i=0;i<palabra.length;i++){
    if (palabra[i] === palabra[i].toLowerCase()){
        minusculas += 1;
    }
    else{
        mayusculas += 1;
    }
}

if(mayusculas > minusculas){
    palabra = palabra.toUpperCase();
} else if (minusculas > mayusculas) {
    palabra = palabra.toLowerCase();
} else {
    console.log('Hay la misma cantidad de letras minúsculas que mayúsculas');
}

console.log(palabra);