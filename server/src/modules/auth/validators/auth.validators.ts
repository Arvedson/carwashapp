import Joi from "joi";
import {
  emailConfig,
  nameConfig,
  phoneConfig,
  passwordConfig,
} from "../config";

// Esquema para registro de usuario
export const registerSchema = Joi.object({
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .min(emailConfig.minLength)
    .max(emailConfig.maxLength)
    .lowercase()
    .trim()
    .required()
    .messages({
      "string.email": "Please provide a valid email address",
      "string.min": `Email must be at least ${emailConfig.minLength} characters long`,
      "string.max": `Email must be no more than ${emailConfig.maxLength} characters long`,
      "any.required": "Email is required",
      "string.empty": "Email cannot be empty",
    }),

  password: Joi.string()
    .min(passwordConfig.minLength)
    .max(passwordConfig.maxLength)
    .required()
    .messages({
      "string.min": `Password must be at least ${passwordConfig.minLength} characters long`,
      "string.max": `Password must be no more than ${passwordConfig.maxLength} characters long`,
      "any.required": "Password is required",
      "string.empty": "Password cannot be empty",
    }),

  name: Joi.string()
    .min(nameConfig.minLength)
    .max(nameConfig.maxLength)
    .pattern(nameConfig.allowedCharacters)
    .trim()
    .required()
    .messages({
      "string.min": `Name must be at least ${nameConfig.minLength} characters long`,
      "string.max": `Name must be no more than ${nameConfig.maxLength} characters long`,
      "string.pattern.base": "Name can only contain letters and spaces",
      "any.required": "Name is required",
      "string.empty": "Name cannot be empty",
    }),

  phone: Joi.string()
    .pattern(phoneConfig.pattern)
    .min(phoneConfig.minLength)
    .max(phoneConfig.maxLength)
    .trim()
    .optional()
    .allow(null, "")
    .messages({
      "string.pattern.base":
        "Please provide a valid phone number (e.g., +1234567890)",
      "string.min": `Phone number must be at least ${phoneConfig.minLength} digits`,
      "string.max": `Phone number must be no more than ${phoneConfig.maxLength} digits`,
    }),
});

// Esquema para login
export const loginSchema = Joi.object({
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .lowercase()
    .trim()
    .required()
    .messages({
      "string.email": "Please provide a valid email address",
      "any.required": "Email is required",
      "string.empty": "Email cannot be empty",
    }),

  password: Joi.string().required().messages({
    "any.required": "Password is required",
    "string.empty": "Password cannot be empty",
  }),
});

// Esquema para actualización de perfil
export const updateProfileSchema = Joi.object({
  name: Joi.string()
    .min(nameConfig.minLength)
    .max(nameConfig.maxLength)
    .pattern(nameConfig.allowedCharacters)
    .trim()
    .optional()
    .messages({
      "string.min": `Name must be at least ${nameConfig.minLength} characters long`,
      "string.max": `Name must be no more than ${nameConfig.maxLength} characters long`,
      "string.pattern.base": "Name can only contain letters and spaces",
      "string.empty": "Name cannot be empty",
    }),

  phone: Joi.string()
    .pattern(phoneConfig.pattern)
    .min(phoneConfig.minLength)
    .max(phoneConfig.maxLength)
    .trim()
    .optional()
    .allow(null, "")
    .messages({
      "string.pattern.base":
        "Please provide a valid phone number (e.g., +1234567890)",
      "string.min": `Phone number must be at least ${phoneConfig.minLength} digits`,
      "string.max": `Phone number must be no more than ${phoneConfig.maxLength} digits`,
    }),
})
  .min(1)
  .messages({
    "object.min": "At least one field must be provided for update",
  });

// Esquema para cambio de contraseña
export const changePasswordSchema = Joi.object({
  currentPassword: Joi.string().required().messages({
    "any.required": "Current password is required",
    "string.empty": "Current password cannot be empty",
  }),

  newPassword: Joi.string()
    .min(passwordConfig.minLength)
    .max(passwordConfig.maxLength)
    .required()
    .messages({
      "string.min": `New password must be at least ${passwordConfig.minLength} characters long`,
      "string.max": `New password must be no more than ${passwordConfig.maxLength} characters long`,
      "any.required": "New password is required",
      "string.empty": "New password cannot be empty",
    }),

  confirmPassword: Joi.string()
    .valid(Joi.ref("newPassword"))
    .required()
    .messages({
      "any.only": "Confirm password must match new password",
      "any.required": "Confirm password is required",
      "string.empty": "Confirm password cannot be empty",
    }),
});

// Esquema para verificación de email
export const emailCheckSchema = Joi.object({
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .lowercase()
    .trim()
    .required()
    .messages({
      "string.email": "Please provide a valid email address",
      "any.required": "Email is required",
      "string.empty": "Email cannot be empty",
    }),
});

// Esquema para validación de contraseña (solo)
export const passwordValidationSchema = Joi.object({
  password: Joi.string()
    .min(passwordConfig.minLength)
    .max(passwordConfig.maxLength)
    .required()
    .messages({
      "string.min": `Password must be at least ${passwordConfig.minLength} characters long`,
      "string.max": `Password must be no more than ${passwordConfig.maxLength} characters long`,
      "any.required": "Password is required",
      "string.empty": "Password cannot be empty",
    }),
});

// Esquema para parámetros de URL (como userId)
export const userIdSchema = Joi.object({
  userId: Joi.string()
    .pattern(/^[a-zA-Z0-9_-]+$/)
    .required()
    .messages({
      "string.pattern.base": "Invalid user ID format",
      "any.required": "User ID is required",
      "string.empty": "User ID cannot be empty",
    }),
});

// Esquema para query parameters comunes
export const paginationSchema = Joi.object({
  page: Joi.number().integer().min(1).default(1).optional().messages({
    "number.base": "Page must be a number",
    "number.integer": "Page must be an integer",
    "number.min": "Page must be at least 1",
  }),

  limit: Joi.number()
    .integer()
    .min(1)
    .max(100)
    .default(10)
    .optional()
    .messages({
      "number.base": "Limit must be a number",
      "number.integer": "Limit must be an integer",
      "number.min": "Limit must be at least 1",
      "number.max": "Limit cannot exceed 100",
    }),

  sortBy: Joi.string()
    .valid("createdAt", "updatedAt", "name", "email")
    .default("createdAt")
    .optional()
    .messages({
      "any.only": "Sort by must be one of: createdAt, updatedAt, name, email",
    }),

  sortOrder: Joi.string()
    .valid("asc", "desc")
    .default("desc")
    .optional()
    .messages({
      "any.only": "Sort order must be either asc or desc",
    }),
});

// Función helper para validar datos
export const validateData = <T>(
  schema: Joi.ObjectSchema,
  data: any
): { error?: string; value?: T } => {
  const { error, value } = schema.validate(data, {
    abortEarly: false,
    stripUnknown: true,
    convert: true,
  });

  if (error) {
    const errorMessage = error.details
      .map((detail) => detail.message)
      .join(", ");

    return { error: errorMessage };
  }

  return { value };
};

// Función helper para validar contraseña con reglas personalizadas
export const validatePasswordWithRules = (
  password: string
): { isValid: boolean; errors: string[] } => {
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

  return {
    isValid: errors.length === 0,
    errors,
  };
};
