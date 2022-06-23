
/* USANDO EL METODO REVERSE:

let palabra = 'hola';
palabra = palabra.split('').reverse();
console.log(palabra);

*/
// ------------------------------------ //

// SIN USAR EL METODO REVERSE

let palabra = prompt('Ingrese la palabra a revertir');
palabra = palabra.split('');

const revertirPalabra = function(palabra){
    let x = palabra.length-1;
    let nuevaPalabra = [];
    // console.log(x);
    palabra.forEach(element => {
        nuevaPalabra += palabra[x];
        x -= 1;
    })
    
    console.log(nuevaPalabra);
}

revertirPalabra(palabra);
