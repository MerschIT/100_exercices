const esPalindromo = function(string){
    if (string === string.split('').reverse().join('')){
        alert('Es un palindromo')
    } else {
        alert('No es un palindromo. Verifique si lo escribió correctamente.')
    }

}

let string = prompt('Ingrese el texto');
esPalindromo(string);