import dotenv from "dotenv";

// Cargar variables de entorno
dotenv.config();

export const config = {
  // Database
  DATABASE_URL: process.env.DATABASE_URL || "",

  // Server
  NODE_ENV: process.env.NODE_ENV || "development",
  PORT: parseInt(process.env.PORT || "3000", 10),

  // JWT
  JWT_SECRET: process.env.JWT_SECRET || "dev_jwt_secret",
  JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN || "7d",

  // CORS
  CORS_ORIGIN: process.env.CORS_ORIGIN || "*",
};

// Validar variables requeridas
if (!config.DATABASE_URL) {
  throw new Error("DATABASE_URL is required");
}
