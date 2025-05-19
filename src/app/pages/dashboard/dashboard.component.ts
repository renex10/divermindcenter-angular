import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NgFor],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  // Función para generar alturas aleatorias para las barras del gráfico
  getRandomHeight(): string {
    return Math.floor(Math.random() * 100) + '%';
  }

  // Datos de ejemplo para la tabla de usuarios recientes
  recentUsers = [
    {
      id: 1,
      name: 'Juan Pérez',
      email: 'juan@example.com',
      rut: '12.345.678-9',
      type: 'Terapeuta',
      registrationDate: '15/05/2023'
    },
    {
      id: 2,
      name: 'María González',
      email: 'maria@example.com',
      rut: '98.765.432-1',
      type: 'Administrador',
      registrationDate: '10/05/2023'
    },
    {
      id: 3,
      name: 'Carlos López',
      email: 'carlos@example.com',
      rut: '11.223.344-5',
      type: 'Terapeuta',
      registrationDate: '05/05/2023'
    }
  ];
}