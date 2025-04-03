let numeroConDecimales = 3.14159;
let numeroConDecimalesRedondeo = numeroConDecimales.toFixed(3); // Redondea a 2 decimales
console.log(numeroConDecimalesRedondeo); // "3.142"

const redondeoNumeroAbajo = Math.floor(numeroConDecimales); // Redondea hacia abajo
console.log(redondeoNumeroAbajo); // 3

const redondeoNumeroArriba = Math.ceil(numeroConDecimales); // Redondea hacia arriba
console.log(redondeoNumeroArriba); // 4

let numeroAleatorio = Math.random(); // Genera un número aleatorio entre 0 y 1
console.log(numeroAleatorio); // Ejemplo: 0.123456789