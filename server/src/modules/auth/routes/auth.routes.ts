import { Router } from "express";
import { authController } from "../controllers";
import {
  authenticateToken,
  optionalAuth,
  requireActiveUser,
  rateLimit,
  logAuthenticatedRequest,
} from "../middleware";
import {
  validateRegister,
  validateLogin,
  validateUpdateProfile,
  validateChangePassword,
  validateEmailCheck,
  validateContentType,
  validateRequestSize,
  validateNotEmpty,
  sanitizeInput,
} from "../middleware";

const router = Router();

// Aplicar middleware global a todas las rutas
router.use(sanitizeInput);
router.use(validateContentType());
router.use(validateRequestSize());

// ===== RUTAS PÚBLICAS =====

/**
 * POST /api/auth/register
 * Registro de nuevo usuario
 */
router.post(
  "/register",
  rateLimit(3, 60 * 60 * 1000), // 3 registros por hora
  validateNotEmpty,
  validateRegister,
  authController.register
);

/**
 * POST /api/auth/login
 * Login de usuario
 */
router.post(
  "/login",
  rateLimit(5, 15 * 60 * 1000), // 5 intentos por 15 minutos
  validateNotEmpty,
  validateLogin,
  authController.login
);

/**
 * POST /api/auth/check-email
 * Verificar disponibilidad de email
 */
router.post(
  "/check-email",
  rateLimit(10, 5 * 60 * 1000), // 10 verificaciones por 5 minutos
  validateNotEmpty,
  validateEmailCheck,
  authController.checkEmailAvailability
);

/**
 * GET /api/auth/verify-token
 * Verificar si un token es válido (opcional auth)
 */
router.get("/verify-token", optionalAuth, authController.verifyToken);

// ===== RUTAS PROTEGIDAS =====

/**
 * POST /api/auth/logout
 * Logout de usuario (principalmente para logging)
 */
router.post(
  "/logout",
  authenticateToken,
  requireActiveUser,
  logAuthenticatedRequest,
  authController.logout
);

/**
 * GET /api/auth/profile
 * Obtener perfil del usuario autenticado
 */
router.get(
  "/profile",
  authenticateToken,
  requireActiveUser,
  logAuthenticatedRequest,
  authController.getProfile
);

/**
 * PUT /api/auth/profile
 * Actualizar perfil del usuario autenticado
 */
router.put(
  "/profile",
  authenticateToken,
  requireActiveUser,
  logAuthenticatedRequest,
  validateNotEmpty,
  validateUpdateProfile,
  authController.updateProfile
);

/**
 * POST /api/auth/change-password
 * Cambiar contraseña del usuario autenticado
 */
router.post(
  "/change-password",
  authenticateToken,
  requireActiveUser,
  logAuthenticatedRequest,
  validateNotEmpty,
  validateChangePassword,
  authController.changePassword
);

/**
 * GET /api/auth/token-info
 * Obtener información del token actual
 */
router.get(
  "/token-info",
  authenticateToken,
  requireActiveUser,
  authController.getTokenInfo
);

/**
 * DELETE /api/auth/deactivate
 * Desactivar cuenta del usuario autenticado
 */
router.delete(
  "/deactivate",
  authenticateToken,
  requireActiveUser,
  logAuthenticatedRequest,
  authController.deactivateAccount
);

// ===== RUTAS DE DESARROLLO/TESTING =====

// Solo en desarrollo, exponer información adicional
if (process.env.NODE_ENV === "development") {
  /**
   * GET /api/auth/debug/user
   * Información de debug del usuario (solo desarrollo)
   */
  router.get("/debug/user", authenticateToken, (req: any, res: any) => {
    res.json({
      success: true,
      message: "Debug user info",
      data: {
        user: req.user,
        token: req.token ? "Present" : "Missing",
        headers: {
          authorization: req.headers.authorization ? "Present" : "Missing",
          userAgent: req.headers["user-agent"],
        },
      },
    });
  });

  /**
   * GET /api/auth/debug/token
   * Información de debug del token (solo desarrollo)
   */
  router.get("/debug/token", authenticateToken, (req: any, res: any) => {
    const { jwtService } = require("../services");

    try {
      const decoded = jwtService.decodeToken(req.token);
      const timeRemaining = jwtService.getTokenTimeRemaining(req.token);
      const isExpiringSoon = jwtService.isTokenExpiringSoon(req.token, 30);

      res.json({
        success: true,
        message: "Debug token info",
        data: {
          decoded,
          timeRemaining,
          isExpiringSoon,
          rawToken: req.token,
        },
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: "Error decoding token",
        error: error instanceof Error ? error.message : "Unknown error",
      });
    }
  });
}

// ===== MANEJO DE ERRORES =====

// Middleware para manejar rutas no encontradas
router.use("*", (req, res) => {
  res.status(404).json({
    success: false,
    message: "Auth endpoint not found",
    code: "ENDPOINT_NOT_FOUND",
    availableEndpoints: [
      "POST /register",
      "POST /login",
      "POST /check-email",
      "GET /verify-token",
      "POST /logout",
      "GET /profile",
      "PUT /profile",
      "POST /change-password",
      "GET /token-info",
      "DELETE /deactivate",
    ],
  });
});

export default router;
