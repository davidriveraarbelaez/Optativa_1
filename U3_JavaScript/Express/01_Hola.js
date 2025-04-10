// Importar express
const express = require('express');

// Crear una instancia de express
const app = express();

// Definir el puerto en el que el servidor escuchará las peticiones
const PORT = 3000;

// Definir una ruta para la raíz ('/')
app.get('/', (req, res) => {
    
})

// Iniciar el servidor en el puerto especificado
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});


