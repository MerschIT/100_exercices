/*
Dado un numero, indicar que tipo de angulo es (recto, agudo, obtuso, etc..)

**Referencia**

* Agudos < 90
* Recto == 90
* Obtuso > 90
* Llano == 180
* Completo == 360
* Mayor a 180 < 180

* Input: `90`
* Output: `Angulo Recto`

*/

let angulo = 360;

const determinarAngulo = function(angulo){
    if (angulo < 90){
        console.log('Es un ángulo agúdo')
    } else if (angulo == 90){
        console.log('Es un águnlo recto')
    } else if (angulo > 90 && angulo < 180 ){
        console.log('Es un ángul Obstuso')
    } else if (angulo === 180){
        console.log('Es un ángul Llano')
    } else if (angulo > 180 && angulo <360){
        console.log('Es un ángul mayor a 180º')
    } else if (angulo == 360 ){
        console.log('Es un ángul Completo')
    }
};

determinarAngulo(angulo);