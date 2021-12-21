// Archivo principal del proyecto
// Va a arrancar el servidor

//primero requerimos la base de datos (después la aplicación)
require('./database');

// en la constante app voy a requerir lo que está en app.js (que está exportado)
const app = require('./app');

// una vez tengo app, voy a exportarlo para empezar a escucharlo
// app quiero que escuches en el puerto port (constante definida en app.js).

app.listen(app.get('port'));

console.log ('Server on port', app.get('port'));