'use strict'
//Esperanza Rodríguez Martínez
//EJER 16: Escribir un programa que escriba en pantalla los divisores comunes de dos números dados

let numero1 = prompt('Escribe número 1: ')
let numero2 = prompt('Escribe número 2: ')
let menor =0

console.log('Numeros divisores de '+numero1+' y '+numero2+':')

if (numero1 < numero2) {
  menor = numero1;
} else {
  menor = numero2;
}

for (let i=1;i <= menor; i++) {
  if (numero1 % i == 0 && numero2 % i == 0) {
    console.log(i)
  }
}
