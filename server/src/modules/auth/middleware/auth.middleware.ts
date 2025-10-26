import { Request, Response, NextFunction } from "express";
import { jwtService } from "../services";
import { authService } from "../services";
import { AuthenticatedRequest, AuthError } from "../types";

/**
 * Middleware para verificar autenticación JWT
 */
export const authenticateToken = async (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    // Extraer token del header Authorization
    const authHeader = req.headers.authorization;
    const token = jwtService.extractTokenFromHeader(authHeader);

    if (!token) {
      throw new AuthError("Access token required", 401, "MISSING_TOKEN");
    }

    // Verificar token
    const payload = jwtService.verifyToken(token);

    if (!payload) {
      throw new AuthError("Invalid token", 401, "INVALID_TOKEN");
    }

    // Obtener usuario completo de la base de datos
    const user = await authService.getProfile(payload.userId);

    // Agregar usuario y token al request
    req.user = user;
    req.token = token;

    next();
  } catch (error) {
    if (error instanceof AuthError) {
      res.status(error.statusCode).json({
        success: false,
        message: error.message,
        code: error.code,
      });
      return;
    }

    res.status(500).json({
      success: false,
      message: "Authentication error",
      code: "AUTH_ERROR",
    });
  }
};

/**
 * Middleware opcional para verificar autenticación (no falla si no hay token)
 */
export const optionalAuth = async (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const authHeader = req.headers.authorization;
    const token = jwtService.extractTokenFromHeader(authHeader);

    if (token) {
      try {
        const payload = jwtService.verifyToken(token);
        if (payload) {
          const user = await authService.getProfile(payload.userId);
          req.user = user;
          req.token = token;
        }
      } catch (error) {
        // Si hay error con el token, simplemente continuar sin usuario
        console.warn(
          "Optional auth failed:",
          error instanceof Error ? error.message : "Unknown error"
        );
      }
    }

    next();
  } catch (error) {
    // En caso de error, continuar sin autenticación
    next();
  }
};

/**
 * Middleware para verificar roles de usuario (para futuras implementaciones)
 */
export const requireRole = (roles: string[]) => {
  return (
    req: AuthenticatedRequest,
    res: Response,
    next: NextFunction
  ): void => {
    if (!req.user) {
      res.status(401).json({
        success: false,
        message: "Authentication required",
        code: "AUTH_REQUIRED",
      });
      return;
    }

    // Por ahora todos los usuarios tienen el mismo rol
    // En el futuro se puede implementar un sistema de roles
    next();
  };
};

/**
 * Middleware para verificar que el usuario está activo
 */
export const requireActiveUser = (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
): void => {
  if (!req.user) {
    res.status(401).json({
      success: false,
      message: "Authentication required",
      code: "AUTH_REQUIRED",
    });
    return;
  }

  if (!req.user.isActive) {
    res.status(403).json({
      success: false,
      message: "Account is deactivated",
      code: "ACCOUNT_DEACTIVATED",
    });
    return;
  }

  next();
};

/**
 * Middleware para verificar que el usuario puede acceder a su propio recurso
 */
export const requireOwnership = (paramName: string = "userId") => {
  return (
    req: AuthenticatedRequest,
    res: Response,
    next: NextFunction
  ): void => {
    if (!req.user) {
      res.status(401).json({
        success: false,
        message: "Authentication required",
        code: "AUTH_REQUIRED",
      });
      return;
    }

    const resourceUserId = req.params[paramName];

    if (req.user.id !== resourceUserId) {
      res.status(403).json({
        success: false,
        message: "Access denied: You can only access your own resources",
        code: "ACCESS_DENIED",
      });
      return;
    }

    next();
  };
};

/**
 * Middleware para verificar que el token no está próximo a expirar
 */
export const checkTokenExpiration = (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
): void => {
  if (!req.token) {
    next();
    return;
  }

  const isExpiringSoon = jwtService.isTokenExpiringSoon(req.token, 30); // 30 minutos

  if (isExpiringSoon) {
    res.setHeader("X-Token-Expiring-Soon", "true");
    res.setHeader(
      "X-Token-Time-Remaining",
      jwtService.getTokenTimeRemaining(req.token).toString()
    );
  }

  next();
};

/**
 * Middleware para logging de requests autenticados
 */
export const logAuthenticatedRequest = (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
): void => {
  if (req.user) {
    console.log(
      `[AUTH] ${req.method} ${req.path} - User: ${req.user.email} (${req.user.id})`
    );
  }
  next();
};

/**
 * Middleware para verificar rate limiting (implementación básica)
 */
const requestCounts = new Map<string, { count: number; resetTime: number }>();

export const rateLimit = (
  maxRequests: number = 100,
  windowMs: number = 15 * 60 * 1000
) => {
  return (req: Request, res: Response, next: NextFunction): void => {
    const key = req.ip || "unknown";
    const now = Date.now();
    const windowStart = now - windowMs;

    // Limpiar entradas expiradas
    for (const [ip, data] of requestCounts.entries()) {
      if (data.resetTime < now) {
        requestCounts.delete(ip);
      }
    }

    const current = requestCounts.get(key);

    if (!current) {
      requestCounts.set(key, { count: 1, resetTime: now + windowMs });
      next();
      return;
    }

    if (current.count >= maxRequests) {
      res.status(429).json({
        success: false,
        message: "Too many requests, please try again later",
        code: "RATE_LIMIT_EXCEEDED",
        retryAfter: Math.ceil((current.resetTime - now) / 1000),
      });
      return;
    }

    current.count++;
    next();
  };
};
