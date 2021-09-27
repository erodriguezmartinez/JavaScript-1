'use strict'
//Esperanza Rodríguez Martínez
//EJER 17: Escribir un programa que nos diga si un número dado es primo
//(no es divisible por ninguno otro número que no sea él mismo o la unidad)

let numero = prompt('Escribe un número: ')
let cont=0

for(let i=1; i<=numero; i++){
   if(numero%i==0){
    cont=cont+1     //Contar las veces que es divisible
   }
}
if(cont==2){
    console.log("El número es primo")   //Si son solo dos significa que el número es divisible por él  mismo y por 1
}
else{
    console.log("El número NO es primo")
}
