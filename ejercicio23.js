let oracion = 'Cada palabra debe empezar con una mayúscula';
let palabras = oracion.split(' ');

/// UTILIZANDO UN FOR ///

// for (let i=0; i < palabras.length; i++){
//     palabras[i] = palabras[i][0].toUpperCase() + palabras[i].substr(1);
// }
// palabras = palabras.join(' ');

// console.log(palabras);

/// UTILIZANDO MAP ///

palabras = palabras.map(function(element){
    return element[0] = element[0].toUpperCase() + element.substr(1);
});
palabras = palabras.join(' ');

console.log(palabras);