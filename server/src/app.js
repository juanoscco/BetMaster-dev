const express = require('express');
const app = express();
const port = 8080; // Puerto en el que se ejecutará el servidor

// Ruta de ejemplo
app.get('/', (req, res) => {
  res.send('¡Hola, mundo desde Express!');
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor de Express escuchando en http://localhost:${port}`);
});
