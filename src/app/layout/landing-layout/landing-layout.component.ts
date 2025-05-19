import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router'; // Asegúrate de que esta importación existe

@Component({
  selector: 'app-landing-layout',
  standalone: true,
  imports: [RouterOutlet], // RouterOutlet debe estar aquí
  template: `
    <div class="landing-layout">
      <router-outlet></router-outlet>
    </div>
  `,
  styles: []
})
export class LandingLayoutComponent {}