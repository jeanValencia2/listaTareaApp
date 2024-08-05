import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { TareasService } from './services/tareas.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  listaTareas: string[] = [];
  nuevaTarea = '';

  private _tareasServicec = inject(TareasService);

  ngOnInit(): void {
    this.listaTareas = this._tareasServicec.getTareas();
  }

  agregarTarea() {
    this._tareasServicec.agregarTarea(this.nuevaTarea);
    this.nuevaTarea = '';
    this.listaTareas = this._tareasServicec.getTareas();
  }

  eliminarTarea(index: number) {
    this._tareasServicec.eliminarTarea(index);
    this.listaTareas = this._tareasServicec.getTareas();
  }
}
