export interface User {
  id: number;
  firstName: string;
  email: string;
  role: string;
  rut: string;
  practiceType: string;
  rehabilitationCenterId: number;
  creationDate: string;
  creationTime: string;
}

export interface UserResponse {
  users: User[];
  currentPage: number;
  totalPages: number;
  totalUsers: number;
}