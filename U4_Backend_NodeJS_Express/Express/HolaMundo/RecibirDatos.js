const express = require('express'); // Importa el módulo express
const bodyParser = require('body-parser'); // Importa el módulo body-parser para manejar datos del cuerpo de las solicitudes
const app = express(); // Crea una instancia de la aplicación Express
const port = 6000; // Define el puerto en el que se ejecutará el servidor (6000)

app.use(bodyParser.json()); // Configura body-parser para analizar el cuerpo de las solicitudes en formato JSON

app.post('/usuarios', (req, res) => {
    const nuevoUsuario = req.body; // Obtiene el nuevo usuario del cuerpo de la solicitud
    console.log('Nuevo usuario recibido:', nuevoUsuario); // Imprime el nuevo usuario en la consola
    res.send('Usuario creado exitosamente'); // Envía una respuesta de éxito al cliente
})

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`); // Mensaje de confirmación al iniciar el servidor
});
