import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

/**
 * Componente para gestión de niños/niñas
 * 
 * Características:
 * - Muestra listado de niños registrados
 * - Permite filtrar y buscar
 * - Soporta paginación
 */
@Component({
  selector: 'app-children',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './children.component.html',
  styleUrls: ['./children.component.scss']
})
export class ChildrenComponent {
  // Ejemplo de datos - reemplazar con servicio real
  children = [
    { id: 1, name: 'Juan Pérez', age: 8, therapist: 'María González' },
    { id: 2, name: 'Ana López', age: 7, therapist: 'Carlos Martínez' }
  ];

  // Método para eliminar un niño (ejemplo)
  deleteChild(id: number) {
    console.log(`Eliminar niño con ID: ${id}`);
    // Lógica para eliminar aquí
  }
}