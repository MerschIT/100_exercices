/*
Dado un String, devolver cuantas consonantes y vocales tiene.

* Input: `casa`
* Output: `Consonantes: 2 Vocales: 2`


*/

let palabra = 'Abracadabra'.toLowerCase(); // 5 VOCALES, 6 CONSONANTES
let vocales = 0;
let consonantes = 0;

for (i=0; i<palabra.length;i++){
    if(palabra[i] === 'a' || palabra[i] === 'e' || palabra[i] === 'i' || palabra[i] === 'o' || palabra[i] === 'u'){
        vocales += 1;
    } else{
        consonantes += 1;
    }
};

console.log(`Hay ${vocales} vocales y ${consonantes} consonantes.`);
