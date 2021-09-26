'use strict'
//Esperanza Rodríguez Martínez
//EJER 14: Añadir al ejercicio anterior que nos diga por cual de los cuatro es divisible
//(hay que decir todos por los que es divisible)

let numero = prompt('Escribe un número: ')

if (numero % 2 === 0 || numero % 3 === 0 || numero % 5 === 0 || numero % 7 === 0) {
    if (numero % 2 === 0) {
      console.log(numero+' es divisible por 2.')
    }
    if (numero % 3 === 0) {
      console.log(numero+' es divisible por 3.')
    }
    if (numero % 5 === 0) {
      console.log(numero+' es divisible por 5.')
    }
    if (numero % 7 === 0) {
      console.log(numero+' es divisible por 7.')
    }
}else{
    console.log(numero+' NO es divisible por 2, 3, 5 o 7.')
}
