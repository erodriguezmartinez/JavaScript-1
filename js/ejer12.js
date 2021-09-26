'use strict'
//Esperanza Rodríguez Martínez
//EJER 12: Escribe un programa que pida una frase y escriba cuántas veces aparecen cada una de las vocales

let frase = prompt('Dime una frase: ')

let a=0
let e=0
let i=0
let o=0
let u=0

for(let y=0; y<=frase.length;y++){
    switch (frase.charAt(y).toLowerCase()) {
      case 'a':
          a=a+1
        break;
      case 'e':
          e=e+1
        break;
      case 'i':
          i=i+1
        break;
      case 'o':
          o=o+1
        break;
      case 'u':
          u=u+1
        break;
      default:

    }
}
console.log('Frase introducida: '+frase)

console.log('Cantidad de a : '+a)
console.log('Cantidad de e : '+e)
console.log('Cantidad de i : '+i)
console.log('Cantidad de o : '+o)
console.log('Cantidad de u : '+u)
