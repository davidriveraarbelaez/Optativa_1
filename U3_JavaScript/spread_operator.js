/*

Operador de dispersion (spread operator)

Se representa con tres puntos (...) y se utiliza para expandir 
un iterable (como un array o un objeto) en lugares donde se esperan 
cero o más argumentos (en el caso de funciones) o elementos 
(en el caso de arrays).
Se utiliza para combinar arrays, clonar objetos, pasar argumentos 
a funciones y más.
*/

// Copiar un array

const arrayOriginal = [1, 2, 3];
const arrayCopia = [...arrayOriginal]; // Copia el array original
console.log(arrayCopia); // [1, 2, 3]
console.log(arrayCopia === arrayOriginal); // false, son diferentes referencias

// Concatenar arrays
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const arrayConcatenado = [...array1, ...array2]; // Combina ambos arrays