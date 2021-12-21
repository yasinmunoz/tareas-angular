// aquí está toda la lógica del servidor
// lo añadimos a parte porque para cualquier lógica que luego voy a estar requiriendo de la aplicación
// se que solo tengo que venir a app.js y encontrarlo. Así no se entremezcla en el index.js
// por tanto aquí tendremos el código de app o los módulos relacionados con app.

// necesitamos nuestro modulo de express para poder crear un servidor
// express es un módulo que nos permite poder crear todas las rutas que necesita nuestro servidor
// o incluso podemos manipular con código que es lo que vamos a estar recibiendo desde Angular

const express = require('express');

// voy a requerir el modulo morgan

const morgan = require('morgan');

// requerimos el módulo del CORS. 
// Este módulo nos permitirá aceptar otras peticiones que vienen de otro servidor
const cors = require('cors');

// para poder utilizar express tenemos que ejecutarlo... 
// con la constante app podremos manipular el servidor

const app = express();

//voy a establecer una constante llamada port que tendrá el valor 4000

//app.set('port', 4000);

// puedo decirle tmb que en vez del 4000 utilice un process.end.PORT (enviroment variables)
// lo que hace process.end.PORT es decir: si en el so existe un puerto definido para esta aplicación...
// ... tómalo. Si no existe, utilice el 4000.

app.set('port', process.env.PORT || 5000);

// usamos el cors
// si no le colocamos el orgin como parametro, acepta cualquier petición
app.use(cors());

//para poder ver en la consola las peticiones que realizamos 

app.use(morgan('dev'));

// para que express entienda json
// app quiero que utilices desde express su método json para que pueda entender objetos json

app.use(express.json());

// app quiero que entiendas lo que viene de urlencode 

app.use(express.urlencoded({ extended: false }));

// vamos a utilizar las rutas que están en employees
// vamos a usar un prefijo. para todas las rutas que estoy importando, ...
// tendran el prefijo /api/employees
app.use('/api/tareas', require('./routes/tareas.routes'));

// lo exporto
module.exports = app;