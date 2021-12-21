export class Tarea {

    // con el id inicializado a "" a veces da fallos. 
    // mejor quitarlo y dejarlo sin inicializar 
    
    constructor(titulo = "", descripcion = "") {        
        this.titulo = titulo;
        this.descripcion = descripcion;
    }
    
    _id: string;
    titulo: string;
    descripcion: string;

}