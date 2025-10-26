import { config } from "../../../shared/config/env";
import { AuthConfig } from "../types";

// Configuración específica para autenticación
export const authConfig: AuthConfig = {
  jwtSecret: config.JWT_SECRET,
  jwtExpiresIn: config.JWT_EXPIRES_IN,
  bcryptRounds: parseInt(process.env.BCRYPT_ROUNDS || "12", 10),
};

// Validar configuración crítica
if (!authConfig.jwtSecret || authConfig.jwtSecret === "dev_jwt_secret") {
  console.warn(
    "⚠️  WARNING: Using default JWT secret. Change JWT_SECRET in production!"
  );
}

if (authConfig.bcryptRounds < 10) {
  console.warn("⚠️  WARNING: BCRYPT_ROUNDS should be at least 10 for security");
}

// Configuración de validación de contraseñas
export const passwordConfig = {
  minLength: 8,
  maxLength: 128,
  requireUppercase: true,
  requireLowercase: true,
  requireNumbers: true,
  requireSpecialChars: false, // Opcional para no ser muy restrictivo
  forbiddenPasswords: [
    "password",
    "123456",
    "12345678",
    "qwerty",
    "abc123",
    "password123",
    "admin",
    "letmein",
  ],
};

// Configuración de rate limiting para auth
export const rateLimitConfig = {
  login: {
    windowMs: 15 * 60 * 1000, // 15 minutos
    max: 5, // máximo 5 intentos por ventana
    message: "Too many login attempts, please try again later",
  },
  register: {
    windowMs: 60 * 60 * 1000, // 1 hora
    max: 3, // máximo 3 registros por hora
    message: "Too many registration attempts, please try again later",
  },
};

// Configuración de tokens
export const tokenConfig = {
  accessToken: {
    expiresIn: authConfig.jwtExpiresIn,
    type: "access",
  },
  refreshToken: {
    expiresIn: "30d", // Refresh tokens duran más
    type: "refresh",
  },
};

// Configuración de cookies (si se usan)
export const cookieConfig = {
  httpOnly: true,
  secure: config.NODE_ENV === "production",
  sameSite: "strict" as const,
  maxAge: 7 * 24 * 60 * 60 * 1000, // 7 días
};

// Configuración de CORS para auth
export const corsConfig = {
  credentials: true,
  origin: (origin: string | undefined, callback: Function) => {
    // En desarrollo, permitir localhost
    if (config.NODE_ENV === "development") {
      return callback(null, true);
    }

    // En producción, validar origins específicos
    const allowedOrigins = process.env.ALLOWED_ORIGINS?.split(",") || [];
    if (!origin || allowedOrigins.includes(origin)) {
      return callback(null, true);
    }

    return callback(new Error("Not allowed by CORS"));
  },
};

// Configuración de logging para auth
export const loggingConfig = {
  logLevel: config.NODE_ENV === "production" ? "warn" : "debug",
  logAuthAttempts: true,
  logFailedAttempts: true,
  logSuccessfulLogins: false, // Por privacidad
};

// Configuración de validación de email
export const emailConfig = {
  maxLength: 254, // RFC 5321
  minLength: 5,
  allowedDomains: [], // Vacío = todos los dominios permitidos
  blockedDomains: ["10minutemail.com", "tempmail.org", "guerrillamail.com"],
};

// Configuración de nombres de usuario
export const nameConfig = {
  minLength: 2,
  maxLength: 50,
  allowedCharacters: /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/, // Solo letras y espacios
};

// Configuración de teléfonos
export const phoneConfig = {
  pattern: /^\+?[1-9]\d{1,14}$/, // E.164 format
  maxLength: 15,
  minLength: 10,
};
