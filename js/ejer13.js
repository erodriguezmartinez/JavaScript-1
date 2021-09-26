'use strict'
//Esperanza Rodríguez Martínez
//EJER 13: Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7
//(sólo hay que comprobar si lo es por uno de los cuatro)

let numero = prompt('Escribe un número: ')

if (numero % 2 === 0 || numero % 3 === 0 || numero % 5 === 0 || numero % 7 === 0) {
   console.log(numero+' Es divisible por 2, 3, 5 o 7.')
}else{
    console.log(numero+' NO es divisible por 2, 3, 5 o 7.')
}
