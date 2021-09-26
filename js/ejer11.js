'use strict'
//Esperanza Rodríguez Martínez
//EJER 11: Escribe un programa que pida una frase y escriba cuántas de las letras que tiene son vocales

let frase = prompt('Dime una frase: ')
let vocales=0
let letras=0

for(let y=0; y<=frase.length;y++){
  if(frase.charAt(y).toLowerCase()!='' && frase.charAt(y).toLowerCase()!=' '){
      letras=letras+1
      if (frase.charAt(y).toLowerCase()=='a' || frase.charAt(y).toLowerCase()=='e' ||
      frase.charAt(y).toLowerCase()=='i' || frase.charAt(y).toLowerCase()=='o' || frase.charAt(y).toLowerCase()=='u') {
         vocales=vocales+1
      }
    }
}
console.log('Frase introducida: '+frase)
console.log('De: '+letras+' letras, '+vocales+' son vocales.')
