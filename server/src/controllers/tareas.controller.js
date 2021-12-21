const tareasController = {}

// todas estas funciones son las que me permiten enteractuar con la base de datos

const Tarea = require('../models/Tareas');

// GET -> Nos devuelve todos los tareas 
// GET http://localhost:4000/api/tareas 
tareasController.getTareas = async(req, res) => {
    // nos devuelve todos los tareas guardados en la base de datos
    const tareas = await Tarea.find();
    res.json(tareas);
}

// POST -> Crea un nuevo tarea y devuelve al cliente el mensaje "Tarea Created"
// POST http://localhost:4000/api/tareas 
tareasController.createTarea = async(req, res) => {

    const newTarea = new Tarea(req.body);

    await newTarea.save();

    res.send({ message: 'Tarea Created' });
}

// GET -> Obtenemos un tarea
// GET http://localhost:4000/api/tareas/61b78e5923bb78df4be7cb34  
tareasController.getTarea = async(req, res) => {

    // desde el modelo busco un dato que tenga por id req.params.id
    const tarea = await Tarea.findById(req.params.id);

    res.send(tarea);

}

tareasController.editTarea = async(req, res) => {
    //desde el modelo busco un dato que tenga por id req.params.id y los datos que tengo que actualizar (req.body)
    const tarea = await Tarea.findByIdAndUpdate(req.params.id, req.body);

    res.json({ status: 'Tarea updated' });
}

// DELETE -> http://localhost:4000/api/tareas/61b78e5923bb78df4be7cb34   
tareasController.deleteTarea = async(req, res) => {

    //desde el modelo busco un dato que tenga por id req.params.id y lo borra
    const tarea = await Tarea.findByIdAndDelete(req.params.id);

    res.json({ status: 'Tarea deleted' });
}

// tareasController es un objeto que contiene todos los metodos del CRUD
module.exports = tareasController;