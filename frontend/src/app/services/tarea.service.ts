import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Tarea } from "../models/tarea";

@Injectable({
  providedIn: 'root'
})
export class TareaService {

  selectedTarea: Tarea;
  tareas: Tarea[];
  readonly URL_API = "http://localhost:5000/api/tareas";

  constructor(private http: HttpClient) {
    this.selectedTarea = new Tarea();
  }

  postTarea(tarea: Tarea) {
    return this.http.post(this.URL_API, tarea);
  }

  getTareas() {
    return this.http.get<Tarea[]>(this.URL_API);
  }

  putTarea(tarea: Tarea) {
    return this.http.put(this.URL_API + `/${tarea._id}`, tarea);
  }

  deleteTarea(_id: string) {
    return this.http.delete(this.URL_API + `/${_id}`);
  }

}
