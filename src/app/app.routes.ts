import { Routes } from '@angular/router';

// Importación de layouts
import { LandingLayoutComponent } from './layout/landing-layout/landing-layout.component';
import { DashboardLayoutComponent } from './layout/dashboard-layout/dashboard-layout.component';

// Importación de páginas principales
import { LandingComponent } from './pages/landing/landing.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NoPagesFoundComponent } from './pages/no-pages-found/no-pages-found.component';

// Importación de componentes de usuarios
import { TherapitsComponentComponent } from './components/users/therapits-component/therapits-component.component';
import { ChildrenComponent } from './components/users/children/children.component';
import { ParentsComponent } from './components/users/parents/parents.component';
import { ConfigurationComponent } from './components/configuration/configuration.component';
import { Component } from '@angular/core';

/**
 * Configuración principal de rutas de la aplicación
 * 
 * Estructura jerárquica:
 * 1. Rutas públicas (Landing)
 * 2. Rutas privadas (Dashboard)
 * 3. Manejo de rutas no encontradas
 */
export const routes: Routes = [
  {
    path: '',
    component: LandingLayoutComponent, // Layout para páginas públicas
    children: [
      { 
        path: '', 
        component: LandingComponent, // Página de inicio pública
        data: { breadcrumb: 'Inicio' } 
      },
    ],
  },
  {
    path: 'dashboard',
    component: DashboardLayoutComponent, // Layout para área administrativa
    children: [
      { 
        path: '', 
        component: DashboardComponent, // Página principal del dashboard
        data: { breadcrumb: 'Dashboard' } 
      },
      { 
        path: 'users', 
        data: { breadcrumb: 'Usuarios' }, // Ruta padre para gestión de usuarios
        children: [
          { 
            path: '', 
            component: TherapitsComponentComponent, // Listado de terapeutas
            data: { breadcrumb: 'Terapeutas' } 
          },
          { 
            path: 'children', 
            component: ChildrenComponent, // Listado de niños
            data: { 
              breadcrumb: 'Niños',
              // Puedes añadir más metadatos específicos aquí
              requiredRole: 'admin' // Ejemplo de metadata adicional
            } 
          },
          { 
            path: 'padres', 
            component: ParentsComponent, // Listado de padres
            data: { 
              breadcrumb: 'Padres',
              requiredRole: 'admin'
            } 
          },
          
          //componente de configuraciones
          {
            path:'configuraciones',
            component:ConfigurationComponent
          }
        ]
      }
    ]
  },
  // Ruta comodín para páginas no encontradas (siempre al final)
  { 
    path: '**', 
    component: NoPagesFoundComponent,
    data: { breadcrumb: 'Página no encontrada' } 
  },
];