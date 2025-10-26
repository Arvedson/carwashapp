import bcrypt from "bcryptjs";
import { authConfig, passwordConfig } from "../config";
import { IPasswordService, ValidationResult } from "../types";

export class PasswordService implements IPasswordService {
  private readonly rounds: number;

  constructor() {
    this.rounds = authConfig.bcryptRounds;
  }

  /**
   * Hashea una contraseña usando bcrypt
   */
  async hashPassword(password: string): Promise<string> {
    try {
      const salt = await bcrypt.genSalt(this.rounds);
      return await bcrypt.hash(password, salt);
    } catch (error) {
      throw new Error(
        `Error hashing password: ${
          error instanceof Error ? error.message : "Unknown error"
        }`
      );
    }
  }

  /**
   * Verifica una contraseña contra su hash
   */
  async verifyPassword(
    password: string,
    hashedPassword: string
  ): Promise<boolean> {
    try {
      return await bcrypt.compare(password, hashedPassword);
    } catch (error) {
      throw new Error(
        `Error verifying password: ${
          error instanceof Error ? error.message : "Unknown error"
        }`
      );
    }
  }

  /**
   * Valida una contraseña según las reglas de seguridad
   */
  validatePassword(password: string): ValidationResult {
    const errors: string[] = [];

    // Longitud mínima
    if (password.length < passwordConfig.minLength) {
      errors.push(
        `Password must be at least ${passwordConfig.minLength} characters long`
      );
    }

    // Longitud máxima
    if (password.length > passwordConfig.maxLength) {
      errors.push(
        `Password must be no more than ${passwordConfig.maxLength} characters long`
      );
    }

    // Mayúsculas
    if (passwordConfig.requireUppercase && !/[A-Z]/.test(password)) {
      errors.push("Password must contain at least one uppercase letter");
    }

    // Minúsculas
    if (passwordConfig.requireLowercase && !/[a-z]/.test(password)) {
      errors.push("Password must contain at least one lowercase letter");
    }

    // Números
    if (passwordConfig.requireNumbers && !/\d/.test(password)) {
      errors.push("Password must contain at least one number");
    }

    // Caracteres especiales
    if (
      passwordConfig.requireSpecialChars &&
      !/[!@#$%^&*(),.?":{}|<>]/.test(password)
    ) {
      errors.push("Password must contain at least one special character");
    }

    // Contraseñas prohibidas
    if (passwordConfig.forbiddenPasswords.includes(password.toLowerCase())) {
      errors.push("This password is too common, please choose a different one");
    }

    // Verificar que no sea solo espacios
    if (password.trim().length === 0) {
      errors.push("Password cannot be empty or only spaces");
    }

    return {
      isValid: errors.length === 0,
      errors: errors.length > 0 ? errors : undefined,
    };
  }

  /**
   * Genera una contraseña aleatoria segura
   */
  generateSecurePassword(length: number = 16): string {
    const charset =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*";
    let password = "";

    // Asegurar al menos un carácter de cada tipo requerido
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const special = "!@#$%^&*";

    password += lowercase[Math.floor(Math.random() * lowercase.length)];
    password += uppercase[Math.floor(Math.random() * uppercase.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += special[Math.floor(Math.random() * special.length)];

    // Completar con caracteres aleatorios
    for (let i = 4; i < length; i++) {
      password += charset[Math.floor(Math.random() * charset.length)];
    }

    // Mezclar la contraseña
    return password
      .split("")
      .sort(() => Math.random() - 0.5)
      .join("");
  }

  /**
   * Verifica si una contraseña es lo suficientemente fuerte
   */
  isPasswordStrong(password: string): boolean {
    const validation = this.validatePassword(password);
    return validation.isValid;
  }

  /**
   * Obtiene el nivel de fortaleza de una contraseña (1-5)
   */
  getPasswordStrength(password: string): number {
    let strength = 0;

    // Longitud
    if (password.length >= 8) strength++;
    if (password.length >= 12) strength++;

    // Complejidad
    if (/[a-z]/.test(password)) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/\d/.test(password)) strength++;
    if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) strength++;

    return Math.min(strength, 5);
  }
}

// Instancia singleton del servicio
export const passwordService = new PasswordService();
