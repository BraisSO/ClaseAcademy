"use strict";
//METODOS PARA ARRAY
let nombres = ["Brais", "Martin", "Estrella"];
let nombres2 = ["Brais", "Martin", "Estrella", "Pepe", "Josefa"];
let numeros = [2, 100, 120, 130];
//1) forEach -> Recorrer arrays
nombres.forEach((nombre) => {
    console.log(nombre);
});
nombres.forEach(function (nombre2) {
    console.log(nombre2);
});
numeros.forEach(numero => {
    if (numero >= 100) {
        console.log(numero);
    }
});
numeros.forEach((value, index) => {
    console.log(index + " " + value);
});
//2) concat() - Concatenar arrays
console.log(nombres.concat(nombres2));
//3) filter() - Devuelve un array filtrado bajo unas condiciones
console.log(numeros.filter(numero => numero >= 100));
//4) push() - Añadir a un array
numeros.push(12, 23, 14);
//5) join() - Modificar el separador que viene por defecto en los arrays
console.log(numeros.join('|'));
//6) slice() - Devuelve un array segmentado bajo unas condiciones
console.log(nombres.slice(2, 4));
//7) splice() - Elimina elementos en las posiciones dadas
nombres.splice(0, nombres.length);
console.log(nombres);
//8) pop() - Eliminar elementos al final del array
nombres.pop();
//8) pop() - Eliminar elementos al principio del array
nombres.shift();
