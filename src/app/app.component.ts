import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router'; // Solo necesitas RouterOutlet

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet], // Elimina RouterModule
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'divermindcenter';
}