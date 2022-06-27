// ### Ejercicio 10

// Dado un numero mostrar una escalera con escalones de guiones usando el numero para los niveles de la escalera.

// * Input: `4`
// * Output:
  
// ```javascript
//   [-]
//   [-][-]
//   [-][-][-]
//   [-][-][-][-]
// ```

let escalon = '[-]';
let cantEscalones = 4;
let escalera = '';

for (i=0;i<cantEscalones;i++){
    escalera += escalon;
    console.log(escalera);
};

