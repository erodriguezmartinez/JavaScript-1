'use strict'

//EJER 10: Escribe un programa que pida una frase y escriba las vocales que aparecen

let frase = prompt('Dime una frase: ')
let vocales=''

for(let y=0; y<=frase.length;y++){
    if (frase.charAt(y).toLowerCase()=='a' || frase.charAt(y).toLowerCase()=='e' ||
    frase.charAt(y).toLowerCase()=='i' || frase.charAt(y).toLowerCase()=='o' || frase.charAt(y).toLowerCase()=='u') {
       vocales=vocales+frase.charAt(y)
    }
}
console.log('Frase introducida: '+frase)
console.log('Vocales de la frase: '+vocales)
