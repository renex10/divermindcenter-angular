import { Component, OnInit } from '@angular/core';
import { User, UserResponse } from './interfaces/user/user-response.interface';
import { UsersService } from '../../../services/users.service';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [NgFor, RouterLink],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent implements OnInit {
  users: User[] = [];
  currentPage = 0;
  totalPages = 0;

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.usersService.getUsers().subscribe({
      next: (response: UserResponse) => {
        this.users = response.users;
        this.currentPage = response.currentPage;
        this.totalPages = response.totalPages;
      },
      error: (err) => {
        console.error('Error al cargar usuarios:', err);
      }
    });
  }

  // Método para generar el array de páginas
  getPages(): number[] {
    return Array.from({ length: this.totalPages }, (_, index) => index + 1);
  }
}