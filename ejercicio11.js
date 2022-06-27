// ### Ejercicio 11

// Dado un String y una busqueda, censurar las coincidencias de la busqueda en el String con [-CENSURADO-]
// Si ambos llegan vacios, devolver un "No se puede leer el texto y la busqueda". Y si llega un solo parametro,
// devolver "No se puede hacer la busqueda"

// * Input: `('holi como va', 'holi)` -- Frase y palabra a censurar
// * Output: `[-CENSURADO-] como va`

let frase = prompt('Ingrese la frase');
let palabraProhibida = prompt('Ingrese la palabra a censurar');
frase = frase.split(' ');

frase = frase.map(function(element){
    if (element === palabraProhibida){
       return element = '[-CENSURADO-]';
    } else {
        return element;
    }
});

frase = frase.join(' ');

console.log(frase);

// POR HACER: Convertir en una funcion que reciba los parametros