/**
 * Interfaz que representa la información de un terapeuta en el sistema.
 */
export interface Therapist {
    /** Identificador único del terapeuta */
    id: number;

    /** Nombre del terapeuta */
    firstName: string;

    /** Correo electrónico del terapeuta */
    email: string;

    /** Rol dentro del sistema */
    role: string; // Puede ser 'THERAPIST', 'ADMIN', etc.

    /** RUT del terapeuta (identificación en Chile) */
    rut: string;

    /** Tipo de práctica del terapeuta (ejemplo: CENTRO_AFILIADO) */
    practiceType: string;

    /** ID del centro de rehabilitación asociado */
    rehabilitationCenterId: number;

    /** ID de la universidad donde estudió */
    universityId: number;

    /** Fecha de creación del terapeuta en el sistema (DD/MM/YYYY) */
    creationDate: string;

    /** Hora de creación del terapeuta en el sistema (HH:MM) */
    creationTime: string;
}