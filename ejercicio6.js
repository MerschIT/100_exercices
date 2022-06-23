const dibujaCuadrado = function(){

    let mensaje = '';
    let techo = [];
    let columnas = [];
    let base = [];
    let cantidadDeAsteriscos = prompt('Ingrese el tamaño del cuadrado');

    while(cantidadDeAsteriscos < 2){
        cantidadDeAsteriscos = prompt('No puede ingresar un número menor a 2. Intente nuevamente')
    };

    for(i=0;i<cantidadDeAsteriscos;i++){
        techo[i] = '*';
        base[i] = '*';
    }
    mensaje = techo.join('')+'\n';

    columnas[0] = '*';
    columnas[cantidadDeAsteriscos] = '*';

    for(i=1;i<(cantidadDeAsteriscos-1);i++){
        columnas[i] = ' ';
    }

    for(i=2;i<cantidadDeAsteriscos;i++){
        mensaje += columnas.join('')+'\n';
        }

    mensaje += base.join('')+'\n';

    return mensaje;
    
}

console.log(dibujaCuadrado());