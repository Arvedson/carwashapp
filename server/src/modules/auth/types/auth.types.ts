import { User } from "@prisma/client";

// Tipos base para autenticación
export interface AuthUser {
  id: string;
  email: string;
  name: string;
  phone?: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

// Credenciales de login
export interface LoginCredentials {
  email: string;
  password: string;
}

// Datos de registro
export interface RegisterData {
  email: string;
  password: string;
  name: string;
  phone?: string;
}

// Datos de actualización de perfil
export interface UpdateProfileData {
  name?: string;
  phone?: string;
}

// Respuesta de autenticación
export interface AuthResponse {
  success: boolean;
  message: string;
  data?: {
    user: AuthUser;
    token: string;
  };
}

// Payload del JWT
export interface JWTPayload {
  userId: string;
  email: string;
  iat: number;
  exp: number;
}

// Configuración de autenticación
export interface AuthConfig {
  jwtSecret: string;
  jwtExpiresIn: string;
  bcryptRounds: number;
}

// Tipos para servicios (interfaces)
export interface IPasswordService {
  hashPassword(password: string): Promise<string>;
  verifyPassword(password: string, hashedPassword: string): Promise<boolean>;
  validatePassword(password: string): { isValid: boolean; errors?: string[] };
}

export interface IJWTService {
  generateToken(payload: Omit<JWTPayload, "iat" | "exp">): string;
  verifyToken(token: string): JWTPayload | null;
  decodeToken(token: string): JWTPayload | null;
}

// Tipos para validación
export interface ValidationResult {
  isValid: boolean;
  errors?: string[];
}

// Tipos para middleware
export interface AuthRequest extends Request {
  user?: AuthUser;
  token?: string;
}

// Tipos de error personalizados
export class AuthError extends Error {
  public statusCode: number;
  public code: string;

  constructor(
    message: string,
    statusCode: number = 400,
    code: string = "AUTH_ERROR"
  ) {
    super(message);
    this.name = "AuthError";
    this.statusCode = statusCode;
    this.code = code;
  }
}

export class ValidationError extends Error {
  public statusCode: number = 400;
  public code: string = "VALIDATION_ERROR";

  constructor(message: string) {
    super(message);
    this.name = "ValidationError";
  }
}

// Utilidad para convertir User de Prisma a AuthUser
export const mapPrismaUserToAuthUser = (user: User): AuthUser => ({
  id: user.id,
  email: user.email,
  name: user.name,
  phone: user.phone || undefined,
  isActive: user.isActive,
  createdAt: user.createdAt,
  updatedAt: user.updatedAt,
});
