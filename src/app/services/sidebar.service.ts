import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  menu: any[] = [
    {
      titulo: 'Dashboard',
      icono: 'fas fa-home',
      url: '/dashboard'
    },
    {
      titulo: 'Usuarios',
      icono: 'fa-solid fa-users',
      submenu: [
        { titulo: 'Terapeutas', url: '/dashboard/users' },
        { titulo: 'Padres', url: '/dashboard/users/padres' },
        { titulo: 'Niños', url: '/dashboard/users/children' }
      ]
    }
  ];

  constructor() { }
}