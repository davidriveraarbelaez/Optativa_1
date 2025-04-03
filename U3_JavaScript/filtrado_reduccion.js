/*
filter y reduce

filter: Crea un nuevo array con todos los elementos que cumplan la
condición implementada por la función proporcionada.
reduce: Aplica una función contra un acumulador y cada elemento del 
array (de izquierda a derecha) para reducirlo a un único valor.
*/

// Ejemplo de filter
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numerosPares = numeros.filter(numero => numero % 2 === 0);
const numerosImpares = numeros.filter(numero => numero % 2 !== 0);
console.log(numerosPares); // [2, 4, 6, 8, 10]
console.log(numerosImpares); // [1, 3, 5, 7, 9]

// Ejemplo de reduce
const Numeros = [1, 2, 3, 4, 5];
const sumaTotal = numeros.reduce((acumulador, numero) => acumulador + numero, 0);
console.log(sumaTotal); // 15