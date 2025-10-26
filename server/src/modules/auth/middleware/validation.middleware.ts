import { Request, Response, NextFunction } from "express";
import { validateData } from "../validators";
import { ValidationError } from "../types";

/**
 * Middleware genérico para validación de datos
 */
export const validateRequest = (
  schema: any,
  target: "body" | "query" | "params" = "body"
) => {
  return (req: Request, res: Response, next: NextFunction): void => {
    const data = req[target];
    const { error, value } = validateData(schema, data);

    if (error) {
      res.status(400).json({
        success: false,
        message: "Validation error",
        errors: [error],
        code: "VALIDATION_ERROR",
      });
      return;
    }

    // Reemplazar los datos con los validados y sanitizados
    req[target] = value;
    next();
  };
};

/**
 * Middleware específico para validar registro
 */
export const validateRegister = validateRequest(
  require("../validators").registerSchema,
  "body"
);

/**
 * Middleware específico para validar login
 */
export const validateLogin = validateRequest(
  require("../validators").loginSchema,
  "body"
);

/**
 * Middleware específico para validar actualización de perfil
 */
export const validateUpdateProfile = validateRequest(
  require("../validators").updateProfileSchema,
  "body"
);

/**
 * Middleware específico para validar cambio de contraseña
 */
export const validateChangePassword = validateRequest(
  require("../validators").changePasswordSchema,
  "body"
);

/**
 * Middleware específico para validar verificación de email
 */
export const validateEmailCheck = validateRequest(
  require("../validators").emailCheckSchema,
  "body"
);

/**
 * Middleware específico para validar userId en parámetros
 */
export const validateUserId = validateRequest(
  require("../validators").userIdSchema,
  "params"
);

/**
 * Middleware para validar paginación
 */
export const validatePagination = validateRequest(
  require("../validators").paginationSchema,
  "query"
);

/**
 * Middleware para sanitizar datos de entrada
 */
export const sanitizeInput = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  // Sanitizar strings en body
  if (req.body && typeof req.body === "object") {
    req.body = sanitizeObject(req.body);
  }

  // Sanitizar strings en query
  if (req.query && typeof req.query === "object") {
    req.query = sanitizeObject(req.query);
  }

  next();
};

/**
 * Función helper para sanitizar un objeto recursivamente
 */
const sanitizeObject = (obj: any): any => {
  if (obj === null || obj === undefined) {
    return obj;
  }

  if (typeof obj === "string") {
    return obj.trim();
  }

  if (Array.isArray(obj)) {
    return obj.map(sanitizeObject);
  }

  if (typeof obj === "object") {
    const sanitized: any = {};
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        sanitized[key] = sanitizeObject(obj[key]);
      }
    }
    return sanitized;
  }

  return obj;
};

/**
 * Middleware para validar headers requeridos
 */
export const validateHeaders = (requiredHeaders: string[]) => {
  return (req: Request, res: Response, next: NextFunction): void => {
    const missingHeaders: string[] = [];

    for (const header of requiredHeaders) {
      if (!req.headers[header.toLowerCase()]) {
        missingHeaders.push(header);
      }
    }

    if (missingHeaders.length > 0) {
      res.status(400).json({
        success: false,
        message: "Missing required headers",
        missingHeaders,
        code: "MISSING_HEADERS",
      });
      return;
    }

    next();
  };
};

/**
 * Middleware para validar Content-Type
 */
export const validateContentType = (
  expectedType: string = "application/json"
) => {
  return (req: Request, res: Response, next: NextFunction): void => {
    const contentType = req.headers["content-type"];

    if (!contentType || !contentType.includes(expectedType)) {
      res.status(400).json({
        success: false,
        message: `Content-Type must be ${expectedType}`,
        code: "INVALID_CONTENT_TYPE",
      });
      return;
    }

    next();
  };
};

/**
 * Middleware para validar tamaño de request
 */
export const validateRequestSize = (maxSize: number = 1024 * 1024) => {
  // 1MB por defecto
  return (req: Request, res: Response, next: NextFunction): void => {
    const contentLength = parseInt(req.headers["content-length"] || "0", 10);

    if (contentLength > maxSize) {
      res.status(413).json({
        success: false,
        message: `Request too large. Maximum size is ${maxSize} bytes`,
        code: "REQUEST_TOO_LARGE",
      });
      return;
    }

    next();
  };
};

/**
 * Middleware para validar que el request no esté vacío
 */
export const validateNotEmpty = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  if (req.method === "POST" || req.method === "PUT" || req.method === "PATCH") {
    if (!req.body || Object.keys(req.body).length === 0) {
      res.status(400).json({
        success: false,
        message: "Request body cannot be empty",
        code: "EMPTY_REQUEST_BODY",
      });
      return;
    }
  }

  next();
};

/**
 * Middleware para validar formato de email en tiempo real
 */
export const validateEmailFormat = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const email = req.body?.email;

  if (email && typeof email === "string") {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      res.status(400).json({
        success: false,
        message: "Invalid email format",
        code: "INVALID_EMAIL_FORMAT",
      });
      return;
    }
  }

  next();
};

/**
 * Middleware para validar que las contraseñas coincidan
 */
export const validatePasswordMatch = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const { password, confirmPassword } = req.body;

  if (password && confirmPassword && password !== confirmPassword) {
    res.status(400).json({
      success: false,
      message: "Passwords do not match",
      code: "PASSWORDS_DO_NOT_MATCH",
    });
    return;
  }

  next();
};
