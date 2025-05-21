import { Component, OnInit } from '@angular/core';
import { TherapistService } from './service/therapits.service';
import { Therapist } from './therapits.interface';
import { TherapistsResponse } from './service/therapits.service';
import { 
  faEye, 
  faEdit, 
  faTrashAlt, 
  faPlus,
  faChevronLeft,
  faChevronRight
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-therapits-component',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule],
  templateUrl: './therapits-component.component.html',
  styleUrls: ['./therapits-component.component.scss']
})
export class TherapitsComponentComponent implements OnInit {
  // Iconos de Font Awesome
  faEye = faEye;
  faEdit = faEdit;
  faTrashAlt = faTrashAlt;
  faPlus = faPlus;
  faChevronLeft = faChevronLeft;
  faChevronRight = faChevronRight;

  therapists: Therapist[] = [];
  currentPage = 0;
  totalPages = 0;
  pageSize = 10;

  constructor(private therapistService: TherapistService) {}

  ngOnInit(): void {
    this.loadTherapists();
  }

  loadTherapists(): void {
    this.therapistService.getTherapists(this.currentPage, this.pageSize)
      .subscribe({
        next: (response: TherapistsResponse) => {
          this.therapists = response.users;
          this.currentPage = response.currentPage;
          this.totalPages = response.totalPages;
        },
        error: (err) => {
          console.error('Error al cargar terapeutas:', err);
        }
      });
  }

  onPageChange(newPage: number): void {
    this.currentPage = newPage;
    this.loadTherapists();
  }

  viewTherapist(id: number): void {
    console.log('Ver terapeuta:', id);
    // Lógica para ver detalles
  }

  editTherapist(id: number): void {
    console.log('Editar terapeuta:', id);
    // Lógica para editar
  }

  deleteTherapist(id: number): void {
    if (confirm('¿Está seguro de eliminar este terapeuta?')) {
      console.log('Eliminar terapeuta:', id);
      // Lógica para eliminar
    }
  }
}