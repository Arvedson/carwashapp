// ===== TIPOS DE AUTENTICACIÓN UNIFICADOS =====

/**
 * Usuario autenticado - Versión completa del backend
 */
export interface AuthUser {
  id: string;
  email: string;
  name: string;
  phone?: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

/**
 * Usuario básico - Compatible con frontend existente
 */
export interface User {
  id: string;
  email: string;
  name: string;
  phone?: string;
}

/**
 * Credenciales de login
 */
export interface LoginCredentials {
  email: string;
  password: string;
}

/**
 * Datos de registro
 */
export interface RegisterData {
  email: string;
  password: string;
  name: string;
  phone?: string;
}

/**
 * Estado de autenticación
 */
export interface AuthState {
  token: string | null;
  user: User | null;
  isAuthenticated: boolean;
}

/**
 * Respuesta de la API de autenticación
 */
export interface AuthResponse {
  success: boolean;
  message: string;
  data: {
    user: AuthUser;
    token: string;
  };
}

/**
 * Respuesta de verificación de email
 */
export interface EmailCheckResponse {
  success: boolean;
  message: string;
  data: {
    email: string;
    available: boolean;
  };
}

/**
 * Configuración de autenticación
 */
export interface AuthConfig {
  useMockAuth: boolean;
  apiUrl: string;
  tokenKey: string;
  userDataKey: string;
}

/**
 * Error de autenticación
 */
export interface AuthError {
  code: string;
  message: string;
  statusCode: number;
}
