import { inject, Injectable } from "@angular/core";
import { environment } from "../../../../../envioronment.development";
import { HttpClient } from "@angular/common/http";
import { Observable, tap } from "rxjs";
import { Therapist } from "../therapits.interface";

// Interface para la respuesta paginada
export interface TherapistsResponse {
    users: Therapist[];
    currentPage: number;
    totalPages: number;
    totalUsers: number;
}

@Injectable({
    providedIn: 'root' // Corregido de 'provideIn' a 'providedIn'
})
export class TherapistService {
    private http = inject(HttpClient);
    private baseUrl = environment.baseUrl

    /**
     * Obtiene una lista paginada de terapeutas
     * @param page Número de página (base 0)
     * @param size Tamaño de la página (número de elementos por página)
     * @returns Observable con la respuesta paginada de terapeutas
     */
    getTherapists(page: number = 0, size: number = 10): Observable<TherapistsResponse> {
        return this.http
            .get<TherapistsResponse>(`${this.baseUrl}/users`, {
                params: {
                    page: page.toString(),
                    size: size.toString()
                }
            })
            .pipe(
                tap(resp => console.log('Respuesta de la API:', resp))
            );
    }
}
