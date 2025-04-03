/*
find y findIndex

find(): Devuelve el primer elemento del array que cumple con la función de prueba
findIndex(): Devuelve el índice del primer elemento que cumple con la función de prueba
*/

const numeros = [5, 12, 8, 130, 44, 150];
const esMayorQue10 = (elemento) => elemento > 10;
console.log(numeros.find(esMayorQue10)); // 12

console.log(numeros.findIndex(esMayorQue10)); // 1
console.log(numeros.findIndex((elemento) => elemento > 100)); // 3