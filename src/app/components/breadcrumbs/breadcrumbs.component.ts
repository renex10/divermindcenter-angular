// Importación de herramientas necesarias de Angular
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { filter, distinctUntilChanged, map } from 'rxjs/operators';

/**
 * Componente Breadcrumbs (Migajas de Pan)
 * 
 * ¿Qué hace este componente?
 * Muestra una barra de navegación que indica la ubicación actual en la aplicación
 * y permite volver a secciones anteriores.
 * 
 * Ejemplo visual:
 * [Inicio] > [Usuarios] > [Terapeutas]
 * 
 * Cada parte es clickeable para volver atrás, excepto la última.
 */
@Component({
  selector: 'app-breadcrumbs', // Nombre con el que usaremos este componente en HTML
  standalone: true, // Indica que es un componente independiente (no necesita módulo)
  imports: [CommonModule, RouterModule], // Herramientas que necesita para funcionar
  templateUrl: './breadcrumbs.component.html', // Archivo HTML asociado
  styleUrls: ['./breadcrumbs.component.scss'] // Archivo de estilos asociado
})
export class BreadcrumbsComponent implements OnInit {
  /**
   * breadcrumbs$ es como una "caja" donde guardaremos la información
   * de las rutas por las que pasamos.
   * El símbolo $ al final es una convención para indicar que es un Observable
   * (una fuente de datos que puede cambiar con el tiempo)
   */
  breadcrumbs$ = this.router.events.pipe(
    // Filtramos solo los eventos de navegación completada
    filter(event => event instanceof NavigationEnd),
    // Evitamos procesar eventos duplicados
    distinctUntilChanged(),
    // Transformamos el evento en la lista de breadcrumbs
    map(() => this.buildBreadcrumbs(this.activatedRoute.root))
  );

  /**
   * Constructor - Donde "inyectamos" las herramientas que necesitamos
   * @param activatedRoute Herramienta para examinar la ruta actual
   * @param router Herramienta para manejar la navegación
   */
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  // Función que Angular ejecuta cuando el componente está listo
  ngOnInit() {}

  /**
   * Construye la lista de breadcrumbs (migajas de pan)
   * 
   * @param route La ruta actual que estamos examinando
   * @param url Acumulador para la URL construida
   * @param breadcrumbs Acumulador para los breadcrumbs
   * @returns Lista completa de breadcrumbs
   * 
   * ¿Cómo funciona?
   * 1. Recorre todas las rutas hijas (como un árbol genealógico)
   * 2. Para cada ruta, mira si tiene un "breadcrumb" definido
   * 3. Si lo tiene, lo agrega a la lista
   * 4. Repite el proceso con las rutas hijas
   */
  private buildBreadcrumbs(
    route: ActivatedRoute, 
    url: string = '', 
    breadcrumbs: Array<{label: string, url: string}> = []
  ): Array<{label: string, url: string}> {
    // Obtenemos todas las rutas hijas de la ruta actual
    const children: ActivatedRoute[] = route.children;

    // Si no hay más rutas hijas, devolvemos lo acumulado
    if (children.length === 0) {
      return breadcrumbs;
    }

    // Examinamos cada ruta hija
    for (const child of children) {
      // Construimos la parte de la URL correspondiente a esta ruta
      const routeURL: string = child.snapshot.url.map(segment => segment.path).join('/');
      if (routeURL !== '') {
        url += `/${routeURL}`;
      }

      // Obtenemos el texto para el breadcrumb (definido en app.routes.ts)
      const label = child.snapshot.data['breadcrumb'];
      if (label) {
        // Agregamos a la lista
        breadcrumbs.push({ label, url });
      }

      // Llamada recursiva para examinar las rutas hijas
      return this.buildBreadcrumbs(child, url, breadcrumbs);
    }

    return breadcrumbs;
  }
}