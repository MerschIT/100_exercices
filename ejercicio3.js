let textoOriginal = 'hola soy un texto, hola soy palabras, hola hol';
let palabra = 'hola';
let texto = textoOriginal.split(' ');

// console.log(texto);

// const contarRepetidos = function(texto, palabra){
//     let contador = 0;
//     for (let i = 0; i < 2; i = i++){
//             if (texto[i] === palabra){
//                 contador += 1;
//             }  else {
//                 console.log('No hay coincidencia');
//             }
//         }
//         return contador;
//         }

// console.log(contarRepetidos());

const contarRepetidos2 = function(palabra, texto){
    let contador = 0;
    texto.forEach(element => {
        if (element === palabra){
            contador += 1;
        }
    
    });
    return console.log(`La palabra ${palabra} se repite ${contador} veces en el texto.`)
}


contarRepetidos2(palabra, texto);