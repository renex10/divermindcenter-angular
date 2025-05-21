/* src\app\layout\dashboard-layout\dashboard-layout.component.ts */
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router'; // Importación clave
import { HeaderComponent } from '../../shared/header/header.component';
import { SidebarComponent } from '../../shared/sidebar/sidebar.component';

@Component({
  selector: 'app-dashboard-layout',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, SidebarComponent,RouterLink], // RouterOutlet obligatorio
  template: `
    <div class="dashboard-layout">
      <app-header></app-header>
      <app-sidebar></app-sidebar>
      <main class="content">
        <router-outlet></router-outlet> <!-- Aquí se cargará DashboardComponent -->
      </main>
    </div>
  `,
  styles: [`
    .dashboard-layout {
      display: grid;
      grid-template-areas: 
        "header header"
        "sidebar content";
      grid-template-columns: 200px 1fr;
    }
    app-header {
      grid-area: header;
    }
    app-sidebar {
      grid-area: sidebar;
    }
    .content {
      grid-area: content;
      padding: 1rem;
    }
  `]
})
export class DashboardLayoutComponent {}