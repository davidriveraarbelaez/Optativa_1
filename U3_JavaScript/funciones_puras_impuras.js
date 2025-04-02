// Funciones puras e impuras.

/* 
Función pura: no tiene efectos secundarios y siempre devuelve el mismo 
resultado para los mismos argumentos.

Ejemplo de función pura:
function suma(a, b) {
    return a + b;
}

Función impura: tiene efectos secundarios o devuelve resultados diferentes

para los mismos argumentos.
Ejemplo de función impura:
function suma(a, b) {
    console.log(a + b); // Efecto secundario: imprime en la consola
    return a + b;
}
function suma(a, b) {
    return a + b + Math.random(); // Devuelve un resultado diferente cada vez
}

*/

// Ejemplo de función pura
function suma(a, b) {
    return a + b;
}

console.log(suma(2, 3)); // 5

// Función impura

let contador = 0;

function incrementar() {
    contador++;
    return contador;
}

incrementar(); // 1
console.log(incrementar()); // 2