// el modelo de datos 

// requiero mongoose. Pero solo el Esquema y el Modelo
// El Schema es lo que nosotros queremos guardar en Mongo DB
// El modelo es básicamente lo que vamos a estar manipulando para poder buscar, eliminar, actualizar, etc.
// El modelo es como una forma de interactuar con ese esquema en la base de datos. 

const { Schema, model }= require ('mongoose');

// Voy a crear un nuevo Schema. Este esquema tiene la estructura de los datos que vamos a guardar.
// ¿que vamos a guardar en nuestra base de datos?
const tareaSchema = new Schema ({
    titulo: { type: String, required: true },
    descripcion: { type: String, required: true },
}, 

// cuando creemos un nuevo datos, ademas de los datos de arriba...
// le va a añadir un dato de cuando fue creado y actualizado por ultima vez.
// versionKey: false -> para que no añada un campo _v que es generico cuando creamos un objeto

{
    timestamps: true,
    versionKey: false
});

// creamos un modelo a partir del esquema y lo exportamos
module.exports = model('Tarea', tareaSchema);


