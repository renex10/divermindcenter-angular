import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

/**
 * Componente para gestión de padres/madres/tutores
 * 
 * Funcionalidades:
 * - Listado completo de padres
 * - Vinculación con niños
 * - Datos de contacto
 */
@Component({
  selector: 'app-parents',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './parents.component.html',
  styleUrls: ['./parents.component.scss']
})
export class ParentsComponent {
  // Datos de ejemplo - integrar con servicio real
  parents = [
    { id: 1, name: 'Laura Martínez', email: 'laura@example.com', children: ['Juan Pérez'] },
    { id: 2, name: 'Pedro Sánchez', email: 'pedro@example.com', children: ['Ana López'] }
  ];

  // Método para enviar notificación (ejemplo)
  sendNotification(parentId: number) {
    console.log(`Enviar notificación a padre con ID: ${parentId}`);
  }
}