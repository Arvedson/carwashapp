import { Request, Response } from "express";
import { AuthUser } from "./auth.types";

// Extensión de Request para incluir usuario autenticado
export interface AuthenticatedRequest extends Request {
  user?: AuthUser;
  token?: string;
}

// Tipos de respuesta estándar
export interface ApiResponse<T = any> {
  success: boolean;
  message: string;
  data?: T;
  errors?: string[];
}

// Tipos para requests de autenticación
export interface LoginRequest extends Request {
  body: {
    email: string;
    password: string;
  };
}

export interface RegisterRequest extends Request {
  body: {
    email: string;
    password: string;
    name: string;
    phone?: string;
  };
}

export interface UpdateProfileRequest extends AuthenticatedRequest {
  body: {
    name?: string;
    phone?: string;
  };
}

// Tipos para responses de autenticación
export interface LoginResponse extends Response {
  json: (
    body: ApiResponse<{
      user: AuthUser;
      token: string;
    }>
  ) => this;
}

export interface RegisterResponse extends Response {
  json: (
    body: ApiResponse<{
      user: AuthUser;
      token: string;
    }>
  ) => this;
}

export interface ProfileResponse extends Response {
  json: (body: ApiResponse<AuthUser>) => this;
}

export interface LogoutResponse extends Response {
  json: (body: ApiResponse) => this;
}

// Tipos para middleware
export interface AuthMiddleware {
  (req: AuthenticatedRequest, res: Response, next: Function): void;
}

export interface ValidationMiddleware {
  (req: Request, res: Response, next: Function): void;
}

// Tipos para controladores
export type AuthController = {
  register: (req: RegisterRequest, res: RegisterResponse) => Promise<void>;
  login: (req: LoginRequest, res: LoginResponse) => Promise<void>;
  logout: (req: AuthenticatedRequest, res: LogoutResponse) => Promise<void>;
  getProfile: (
    req: AuthenticatedRequest,
    res: ProfileResponse
  ) => Promise<void>;
  updateProfile: (
    req: UpdateProfileRequest,
    res: ProfileResponse
  ) => Promise<void>;
  changePassword: (req: AuthenticatedRequest, res: Response) => Promise<void>;
  checkEmailAvailability: (req: Request, res: Response) => Promise<void>;
  deactivateAccount: (
    req: AuthenticatedRequest,
    res: Response
  ) => Promise<void>;
  verifyToken: (req: Request, res: Response) => Promise<void>;
  getTokenInfo: (req: AuthenticatedRequest, res: Response) => Promise<void>;
};

// Tipos para validación de rutas
export interface RouteValidation {
  body?: any;
  query?: any;
  params?: any;
}

// Tipos para manejo de errores
export interface ErrorHandler {
  (error: Error, req: Request, res: Response, next: Function): void;
}

// Tipos para logging
export interface AuthLogger {
  info: (message: string, meta?: any) => void;
  error: (message: string, error?: Error, meta?: any) => void;
  warn: (message: string, meta?: any) => void;
  debug: (message: string, meta?: any) => void;
}
