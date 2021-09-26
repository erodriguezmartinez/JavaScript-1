'use strict'
//Esperanza Rodríguez Martínez
//EJER 15: Escribir un programa que escriba en pantalla los divisores de un número dado

let numero = prompt('Escribe un número: ')

console.log('Numeros divisores de '+numero+':')

for (let i=1;i <= numero; i++) {
  if (numero % i == 0) {
    console.log(i)
  }
}
