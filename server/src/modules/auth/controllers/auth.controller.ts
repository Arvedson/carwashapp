import { Request, Response } from "express";
import { authService } from "../services";
import {
  RegisterRequest,
  LoginRequest,
  UpdateProfileRequest,
  AuthenticatedRequest,
  AuthController,
  ApiResponse,
} from "../types";

/**
 * Controlador para registro de usuarios
 */
const register = async (req: RegisterRequest, res: Response): Promise<void> => {
  try {
    const { email, password, name, phone } = req.body;

    const result = await authService.register({
      email,
      password,
      name,
      phone,
    });

    res.status(201).json({
      success: true,
      message: "User registered successfully",
      data: result.data,
    });
  } catch (error: any) {
    console.error("Register error:", error);

    const statusCode = error.statusCode || 500;
    const message = error.message || "Registration failed";
    const code = error.code || "REGISTRATION_ERROR";

    res.status(statusCode).json({
      success: false,
      message,
      code,
    });
  }
};

/**
 * Controlador para login de usuarios
 */
const login = async (req: LoginRequest, res: Response): Promise<void> => {
  try {
    const { email, password } = req.body;

    const result = await authService.login({
      email,
      password,
    });

    res.status(200).json({
      success: true,
      message: "Login successful",
      data: result.data,
    });
  } catch (error: any) {
    console.error("Login error:", error);

    const statusCode = error.statusCode || 500;
    const message = error.message || "Login failed";
    const code = error.code || "LOGIN_ERROR";

    res.status(statusCode).json({
      success: false,
      message,
      code,
    });
  }
};

/**
 * Controlador para logout (opcional, principalmente client-side)
 */
const logout = async (
  req: AuthenticatedRequest,
  res: Response
): Promise<void> => {
  try {
    // En un sistema JWT stateless, el logout se maneja principalmente en el cliente
    // Aquí podríamos implementar una blacklist de tokens si fuera necesario

    res.status(200).json({
      success: true,
      message: "Logout successful",
    });
  } catch (error: any) {
    console.error("Logout error:", error);

    res.status(500).json({
      success: false,
      message: "Logout failed",
      code: "LOGOUT_ERROR",
    });
  }
};

/**
 * Controlador para obtener perfil del usuario
 */
const getProfile = async (
  req: AuthenticatedRequest,
  res: Response
): Promise<void> => {
  try {
    if (!req.user) {
      res.status(401).json({
        success: false,
        message: "Authentication required",
        code: "AUTH_REQUIRED",
      });
      return;
    }

    const user = await authService.getProfile(req.user.id);

    res.status(200).json({
      success: true,
      message: "Profile retrieved successfully",
      data: user,
    });
  } catch (error: any) {
    console.error("Get profile error:", error);

    const statusCode = error.statusCode || 500;
    const message = error.message || "Failed to get profile";
    const code = error.code || "PROFILE_ERROR";

    res.status(statusCode).json({
      success: false,
      message,
      code,
    });
  }
};

/**
 * Controlador para actualizar perfil del usuario
 */
const updateProfile = async (
  req: UpdateProfileRequest,
  res: Response
): Promise<void> => {
  try {
    if (!req.user) {
      res.status(401).json({
        success: false,
        message: "Authentication required",
        code: "AUTH_REQUIRED",
      });
      return;
    }

    const { name, phone } = req.body;

    const updatedUser = await authService.updateProfile(req.user.id, {
      name,
      phone,
    });

    res.status(200).json({
      success: true,
      message: "Profile updated successfully",
      data: updatedUser,
    });
  } catch (error: any) {
    console.error("Update profile error:", error);

    const statusCode = error.statusCode || 500;
    const message = error.message || "Failed to update profile";
    const code = error.code || "UPDATE_PROFILE_ERROR";

    res.status(statusCode).json({
      success: false,
      message,
      code,
    });
  }
};

/**
 * Controlador para cambiar contraseña
 */
const changePassword = async (
  req: AuthenticatedRequest,
  res: Response
): Promise<void> => {
  try {
    if (!req.user) {
      res.status(401).json({
        success: false,
        message: "Authentication required",
        code: "AUTH_REQUIRED",
      });
      return;
    }

    const { currentPassword, newPassword } = req.body;

    await authService.changePassword(req.user.id, currentPassword, newPassword);

    res.status(200).json({
      success: true,
      message: "Password changed successfully",
    });
  } catch (error: any) {
    console.error("Change password error:", error);

    const statusCode = error.statusCode || 500;
    const message = error.message || "Failed to change password";
    const code = error.code || "CHANGE_PASSWORD_ERROR";

    res.status(statusCode).json({
      success: false,
      message,
      code,
    });
  }
};

/**
 * Controlador para verificar disponibilidad de email
 */
const checkEmailAvailability = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { email } = req.body;

    const isAvailable = await authService.isEmailAvailable(email);

    res.status(200).json({
      success: true,
      message: "Email availability checked",
      data: {
        email,
        available: isAvailable,
      },
    });
  } catch (error: any) {
    console.error("Check email availability error:", error);

    const statusCode = error.statusCode || 500;
    const message = error.message || "Failed to check email availability";
    const code = error.code || "EMAIL_CHECK_ERROR";

    res.status(statusCode).json({
      success: false,
      message,
      code,
    });
  }
};

/**
 * Controlador para desactivar cuenta
 */
const deactivateAccount = async (
  req: AuthenticatedRequest,
  res: Response
): Promise<void> => {
  try {
    if (!req.user) {
      res.status(401).json({
        success: false,
        message: "Authentication required",
        code: "AUTH_REQUIRED",
      });
      return;
    }

    await authService.deactivateAccount(req.user.id);

    res.status(200).json({
      success: true,
      message: "Account deactivated successfully",
    });
  } catch (error: any) {
    console.error("Deactivate account error:", error);

    const statusCode = error.statusCode || 500;
    const message = error.message || "Failed to deactivate account";
    const code = error.code || "DEACTIVATE_ACCOUNT_ERROR";

    res.status(statusCode).json({
      success: false,
      message,
      code,
    });
  }
};

/**
 * Controlador para verificar token
 */
const verifyToken = async (
  req: AuthenticatedRequest,
  res: Response
): Promise<void> => {
  try {
    if (!req.user) {
      res.status(401).json({
        success: false,
        message: "Invalid or expired token",
        code: "INVALID_TOKEN",
      });
      return;
    }

    res.status(200).json({
      success: true,
      message: "Token is valid",
      data: {
        user: req.user,
        valid: true,
      },
    });
  } catch (error: any) {
    console.error("Verify token error:", error);

    res.status(401).json({
      success: false,
      message: "Invalid or expired token",
      code: "INVALID_TOKEN",
    });
  }
};

/**
 * Controlador para obtener información del token
 */
const getTokenInfo = async (
  req: AuthenticatedRequest,
  res: Response
): Promise<void> => {
  try {
    if (!req.user || !req.token) {
      res.status(401).json({
        success: false,
        message: "Authentication required",
        code: "AUTH_REQUIRED",
      });
      return;
    }

    const { jwtService } = require("../services");
    const timeRemaining = jwtService.getTokenTimeRemaining(req.token);
    const isExpiringSoon = jwtService.isTokenExpiringSoon(req.token, 30);

    res.status(200).json({
      success: true,
      message: "Token information retrieved",
      data: {
        timeRemaining,
        isExpiringSoon,
        expiresIn: timeRemaining,
      },
    });
  } catch (error: any) {
    console.error("Get token info error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to get token information",
      code: "TOKEN_INFO_ERROR",
    });
  }
};

// Exportar el controlador
export const authController: AuthController = {
  register,
  login,
  logout,
  getProfile,
  updateProfile,
  changePassword,
  checkEmailAvailability,
  deactivateAccount,
  verifyToken,
  getTokenInfo,
};
