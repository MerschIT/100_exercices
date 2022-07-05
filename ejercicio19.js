/*
### Ejercicio 19

Dado un array de objetos de peliculas (titulo, director y si fue vista), mostrar todas las peliculas indicando si la viste o no.

* Input: `[{"El señor de los novillos", "denu lemon", true}, {"avatar", "denu lemon", false}]`
* Output: `I have seen "El señor de los anillos 2" directed by Deno Lemon
I have not seen "El señor de los anillos 3" directed by Deno Lemon"`
*/

let unArray = ['Jurasic Park 1', 'Steven Spielberg', true];

const peliculero = function(pelicula, director, vista){
    if(vista === true){
        vista = 'y sí la ví.'
    } else{
        vista = 'pero no la ví.'
    };
    console.log(`La película es ${pelicula}, su director fué ${director} ${vista}`);
};

peliculero(unArray[0], unArray[1], unArray[2]);

