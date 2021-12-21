// me va a permitir realizar una conexión a la base de datos
// voy a requerir la constante mongoose que tendrá los datos del módulo mongoose

const mongoose = require('mongoose');

// creo una conexión
mongoose
    .connect('mongodb://localhost/tareas-angular')
    .then(db => console.log('db is connected'))
    .catch(err => console.error(err));