import { Component, OnInit } from "@angular/core";

import { TareaService } from "../../services/tarea.service";
import { NgForm } from "@angular/forms";
import { Tarea } from "../../models/tarea";

@Component({
  selector: "app-tarea",
  templateUrl: "./tareas.component.html",
  styleUrls: ["./tareas.component.html"],
  providers: [TareaService],
})
export class TareaComponent implements OnInit {
  constructor(public tareaService: TareaService) {}

  //Lo primero que se ejecuta:
  ngOnInit() {
    this.getTareas();
  }

  addTarea(form?: NgForm) {
    if (form.value._id) {
      this.tareaService.putTarea(form.value).subscribe((res) => {
        this.resetForm(form);
        this.getTareas();
      });
    } else {
      this.tareaService.postTarea(form.value).subscribe((res) => {
        this.getTareas();
        this.resetForm(form);
      });
    }
  }

  getTareas() {
    this.tareaService.getTareas().subscribe((res) => {
      this.tareaService.tareas = res;
    });
  }

  editTarea(tarea: Tarea) {
    this.tareaService.selectedTarea = tarea;
  }

  deleteTarea(_id: string, form: NgForm) {
    if (confirm("Are you sure you want to delete it?")) {
      this.tareaService.deleteTarea(_id).subscribe((res) => {
        this.getTareas();
        this.resetForm(form);
      });
    }
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.tareaService.selectedTarea = new Tarea();
    }
  }
}