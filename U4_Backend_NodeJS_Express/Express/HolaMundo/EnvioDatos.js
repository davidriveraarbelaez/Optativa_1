const express = require('express'); // Importa el módulo express
const app = express(); // Crea una instancia de la aplicación Express
const port = 5000; // Define el puerto en el que se ejecutará el servidor (5000)

app.get('/usuarios', (req, res) => {
    const usuarios = [
        { id: 1, nombre: 'Juan', edad: 25 },
        { id: 2, nombre: 'Ana', edad: 30 },
        { id: 3, nombre: 'Pedro', edad: 28 }
    ];
    res.json(usuarios); // Envía la lista de usuarios como respuesta en formato JSON
});

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`); // Mensaje de confirmación al iniciar el servidor
});
