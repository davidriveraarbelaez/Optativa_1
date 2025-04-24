const express = require('express'); // Importa el módulo express
const app = express(); // Crea una instancia de la aplicación Express
const port = 4000; // Define el puerto en el que se ejecutará el servidor (4000)

// Sistema de rutas (operaciones) de la calculadora
app.get('/calcular/:operacion/:num1/:num2', (req, res) => {
    const operacion = req.params.operacion; // Obtiene la operación de los parámetros de la URL
    const num1 = parseFloat(req.params.num1); // Convierte el primer número a float
    const num2 = parseFloat(req.params.num2); // Convierte el segundo número a float
    let resultado; // Variable para almacenar el resultado de la operación

    switch (operacion) {
        case 'suma':
            resultado = num1 + num2;
            break;
        case 'resta':
            resultado = num1 - num2;
            break;
        case 'multiplicacion':
            resultado = num1 * num2;
            break;
        case 'division':
            resultado = num1 / num2;
            break;
        default:
            return res.status(400).send('Operación no válida');
    }

    res.send(`El resultado de la ${operacion} es: ${resultado}`);
})

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`); // Mensaje de confirmación al iniciar el servidor
});