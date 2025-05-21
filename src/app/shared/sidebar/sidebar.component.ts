import { Component, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SidebarService } from '../../services/sidebar.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink, NgIf],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  menuItems = this.sidebarService.menu;
  isCollapsed = false;
  showOverlay = false;
  isMobile = false;

  constructor(private sidebarService: SidebarService) {
    this.checkMobileView();
  }

  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;
    
    // Solo mostrar overlay en móviles cuando se expande
    if (this.isMobile) {
      this.showOverlay = !this.isCollapsed;
    }
  }

  onSubmenuToggle(event: Event) {
    if (this.isCollapsed && this.isMobile) {
      event.preventDefault();
    }
  }

  @HostListener('window:resize')
  checkMobileView() {
    this.isMobile = window.innerWidth <= 768;
    
    // Resetear estado si cambia de móvil a desktop
    if (!this.isMobile) {
      this.showOverlay = false;
    }
  }

  @HostListener('document:keydown.escape')
  onEscapePress() {
    if (this.isMobile && !this.isCollapsed) {
      this.toggleSidebar();
    }
  }
}