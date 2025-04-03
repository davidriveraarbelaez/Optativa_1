/*
Los array son una colección ordenada de elementos, son muy útiles para
almacenar y manipular grandes cantidades de datos de manera eficiente
y estructurada.
*/

// Crear un array vacío
let miArray = [];
console.log(miArray); // []

// Array con elementos predefinidos
let frutas = ["manzana", "banana", "naranja"];
console.log(frutas); // ["manzana", "banana", "naranja"]

console.log(frutas[0]); // "manzana"

// Modificar un elemento, uva por banana
frutas[1] = "uva";
console.log(frutas); // ["manzana", "uva", "naranja"]

let longitud = frutas.length;
console.log(longitud); // 3

// pop: Elimina el último elemento del array y lo devuelve
frutas.pop();
console.log(frutas); // ["manzana", "uva"]

// push: Agrega un nuevo elemento al final del array y lo devuelve
frutas.push("mango");
console.log(frutas); // ["manzana", "uva", "mango"]

// shift: Elimina el primer elemento del array y lo devuelve
frutas.shift();
console.log(frutas); // ["uva"]

// unshift: Agrega un nuevo elemento al inicio del array y lo devuelve
frutas.unshift("kiwi"); 
console.log(frutas); // ["kiwi", "uva"]

// splice: Cambia el contenido de un array eliminando o reemplazando
frutas.splice(1, 1, "sandía", "piña"); // Elimina 1 elemento en la posición 1 y agrega sandía y piña
console.log(frutas); // ["kiwi", "sandía", "piña"]

// slice: Extrae una sección de un array y devuelve un nuevo array
// sin modificar el original
let frutasExtraidas = frutas.slice(1, 3); // Extrae del índice 1 al 3 (sin incluir el 3)
console.log(frutasExtraidas); // ["sandía", "piña"]