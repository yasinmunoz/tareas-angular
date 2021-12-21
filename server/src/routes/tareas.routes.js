// nosotros queremos empezar a escuchar peticiones que llegan de angular
// para eso tenemos que crear una API

// Requereimos el enrutador de express
// es un objeto que nos permite guardar rutas.
// esas rutas son las URLs que va a tener nuestro servidor
const { Router } = require ('express');

// Para poder utilizar el enrutador lo ejecutamos
const router = Router();

const tareasController = require ('../controllers/tareas.controller.js');

// Voy hacer un CRUD
// CREATE - READ - UPDATE - DELETE 

router.get('/', tareasController.getTareas);
router.post('/', tareasController.createTarea);
router.get('/:id', tareasController.getTarea);
router.put('/:id', tareasController.editTarea);
router.delete('/:id', tareasController.deleteTarea);

// el objeto que nos devuelva al ejecutar Router() es lo que vamos a utilizar 
// por tanto lo exportamos
module.exports = router;