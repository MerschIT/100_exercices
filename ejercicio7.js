let numeroA = 1;
let numeroB = 100;
let contador = 0;
let numerosPares = [];

for(numeroA+1; numeroA<numeroB; numeroA++){
    if (numeroA % 2 === 0){
        contador += 1;
        numerosPares.push(' '+numeroA);
    }


}

console.log(contador);
console.log(`Hay ${contador} número pares entre el ${numeroA} y el ${numeroB}. Estos son: ${numerosPares}`);