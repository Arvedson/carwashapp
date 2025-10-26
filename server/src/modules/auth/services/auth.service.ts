import { prisma } from "../../../shared/config/prisma";
import { passwordService } from "./password.service";
import { jwtService } from "./jwt.service";
import {
  AuthUser,
  LoginCredentials,
  RegisterData,
  UpdateProfileData,
  AuthResponse,
  AuthError,
  mapPrismaUserToAuthUser,
} from "../types";

export class AuthService {
  /**
   * Registra un nuevo usuario
   */
  async register(data: RegisterData): Promise<AuthResponse> {
    try {
      // Validar que el email no exista
      const existingUser = await prisma.user.findUnique({
        where: { email: data.email.toLowerCase() },
      });

      if (existingUser) {
        throw new AuthError("Email already registered", 400, "EMAIL_EXISTS");
      }

      // Validar contraseña
      const passwordValidation = passwordService.validatePassword(
        data.password
      );
      if (!passwordValidation.isValid) {
        throw new AuthError(
          `Invalid password: ${passwordValidation.errors?.join(", ")}`,
          400,
          "INVALID_PASSWORD"
        );
      }

      // Hashear contraseña
      const hashedPassword = await passwordService.hashPassword(data.password);

      // Crear usuario
      const user = await prisma.user.create({
        data: {
          email: data.email.toLowerCase(),
          password: hashedPassword,
          name: data.name.trim(),
          phone: data.phone?.trim() || null,
        },
      });

      // Generar token
      const token = jwtService.generateToken({
        userId: user.id,
        email: user.email,
      });

      const authUser = mapPrismaUserToAuthUser(user);

      return {
        success: true,
        message: "User registered successfully",
        data: {
          user: authUser,
          token,
        },
      };
    } catch (error) {
      if (error instanceof AuthError) {
        throw error;
      }
      throw new AuthError(
        `Registration failed: ${
          error instanceof Error ? error.message : "Unknown error"
        }`,
        500,
        "REGISTRATION_ERROR"
      );
    }
  }

  /**
   * Autentica un usuario
   */
  async login(credentials: LoginCredentials): Promise<AuthResponse> {
    try {
      // Buscar usuario por email
      const user = await prisma.user.findUnique({
        where: { email: credentials.email.toLowerCase() },
      });

      if (!user) {
        throw new AuthError("Invalid credentials", 401, "INVALID_CREDENTIALS");
      }

      // Verificar si el usuario está activo
      if (!user.isActive) {
        throw new AuthError(
          "Account is deactivated",
          401,
          "ACCOUNT_DEACTIVATED"
        );
      }

      // Verificar contraseña
      const isPasswordValid = await passwordService.verifyPassword(
        credentials.password,
        user.password
      );

      if (!isPasswordValid) {
        throw new AuthError("Invalid credentials", 401, "INVALID_CREDENTIALS");
      }

      // Generar token
      const token = jwtService.generateToken({
        userId: user.id,
        email: user.email,
      });

      const authUser = mapPrismaUserToAuthUser(user);

      return {
        success: true,
        message: "Login successful",
        data: {
          user: authUser,
          token,
        },
      };
    } catch (error) {
      if (error instanceof AuthError) {
        throw error;
      }
      throw new AuthError(
        `Login failed: ${
          error instanceof Error ? error.message : "Unknown error"
        }`,
        500,
        "LOGIN_ERROR"
      );
    }
  }

  /**
   * Obtiene el perfil de un usuario
   */
  async getProfile(userId: string): Promise<AuthUser> {
    try {
      const user = await prisma.user.findUnique({
        where: { id: userId },
      });

      if (!user) {
        throw new AuthError("User not found", 404, "USER_NOT_FOUND");
      }

      if (!user.isActive) {
        throw new AuthError(
          "Account is deactivated",
          401,
          "ACCOUNT_DEACTIVATED"
        );
      }

      return mapPrismaUserToAuthUser(user);
    } catch (error) {
      if (error instanceof AuthError) {
        throw error;
      }
      throw new AuthError(
        `Failed to get profile: ${
          error instanceof Error ? error.message : "Unknown error"
        }`,
        500,
        "PROFILE_ERROR"
      );
    }
  }

  /**
   * Actualiza el perfil de un usuario
   */
  async updateProfile(
    userId: string,
    data: UpdateProfileData
  ): Promise<AuthUser> {
    try {
      // Verificar que el usuario existe
      const existingUser = await prisma.user.findUnique({
        where: { id: userId },
      });

      if (!existingUser) {
        throw new AuthError("User not found", 404, "USER_NOT_FOUND");
      }

      if (!existingUser.isActive) {
        throw new AuthError(
          "Account is deactivated",
          401,
          "ACCOUNT_DEACTIVATED"
        );
      }

      // Preparar datos para actualizar
      const updateData: any = {};

      if (data.name !== undefined) {
        updateData.name = data.name.trim();
      }

      if (data.phone !== undefined) {
        updateData.phone = data.phone?.trim() || null;
      }

      // Actualizar usuario
      const updatedUser = await prisma.user.update({
        where: { id: userId },
        data: updateData,
      });

      return mapPrismaUserToAuthUser(updatedUser);
    } catch (error) {
      if (error instanceof AuthError) {
        throw error;
      }
      throw new AuthError(
        `Failed to update profile: ${
          error instanceof Error ? error.message : "Unknown error"
        }`,
        500,
        "UPDATE_PROFILE_ERROR"
      );
    }
  }

  /**
   * Cambia la contraseña de un usuario
   */
  async changePassword(
    userId: string,
    currentPassword: string,
    newPassword: string
  ): Promise<void> {
    try {
      // Obtener usuario
      const user = await prisma.user.findUnique({
        where: { id: userId },
      });

      if (!user) {
        throw new AuthError("User not found", 404, "USER_NOT_FOUND");
      }

      if (!user.isActive) {
        throw new AuthError(
          "Account is deactivated",
          401,
          "ACCOUNT_DEACTIVATED"
        );
      }

      // Verificar contraseña actual
      const isCurrentPasswordValid = await passwordService.verifyPassword(
        currentPassword,
        user.password
      );

      if (!isCurrentPasswordValid) {
        throw new AuthError(
          "Current password is incorrect",
          400,
          "INVALID_CURRENT_PASSWORD"
        );
      }

      // Validar nueva contraseña
      const passwordValidation = passwordService.validatePassword(newPassword);
      if (!passwordValidation.isValid) {
        throw new AuthError(
          `Invalid new password: ${passwordValidation.errors?.join(", ")}`,
          400,
          "INVALID_NEW_PASSWORD"
        );
      }

      // Hashear nueva contraseña
      const hashedNewPassword = await passwordService.hashPassword(newPassword);

      // Actualizar contraseña
      await prisma.user.update({
        where: { id: userId },
        data: { password: hashedNewPassword },
      });
    } catch (error) {
      if (error instanceof AuthError) {
        throw error;
      }
      throw new AuthError(
        `Failed to change password: ${
          error instanceof Error ? error.message : "Unknown error"
        }`,
        500,
        "CHANGE_PASSWORD_ERROR"
      );
    }
  }

  /**
   * Desactiva una cuenta de usuario
   */
  async deactivateAccount(userId: string): Promise<void> {
    try {
      const user = await prisma.user.findUnique({
        where: { id: userId },
      });

      if (!user) {
        throw new AuthError("User not found", 404, "USER_NOT_FOUND");
      }

      await prisma.user.update({
        where: { id: userId },
        data: { isActive: false },
      });
    } catch (error) {
      if (error instanceof AuthError) {
        throw error;
      }
      throw new AuthError(
        `Failed to deactivate account: ${
          error instanceof Error ? error.message : "Unknown error"
        }`,
        500,
        "DEACTIVATE_ACCOUNT_ERROR"
      );
    }
  }

  /**
   * Verifica si un email está disponible
   */
  async isEmailAvailable(email: string): Promise<boolean> {
    try {
      const user = await prisma.user.findUnique({
        where: { email: email.toLowerCase() },
      });

      return !user;
    } catch (error) {
      throw new AuthError(
        `Failed to check email availability: ${
          error instanceof Error ? error.message : "Unknown error"
        }`,
        500,
        "EMAIL_CHECK_ERROR"
      );
    }
  }
}

// Instancia singleton del servicio
export const authService = new AuthService();
