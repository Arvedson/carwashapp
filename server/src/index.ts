import express from "express";
import cors from "cors";
import { config } from "./shared/config/env";
import { prisma } from "./shared/config/prisma";
import { authRoutes } from "./modules/auth";

const app = express();

// Middleware
app.use(
  cors({
    origin: config.CORS_ORIGIN,
    credentials: true,
  })
);
app.use(express.json());

// Health check endpoint
app.get("/health", (req, res) => {
  res.json({
    status: "OK",
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    environment: config.NODE_ENV,
  });
});

// Test de conexión a Neon DB
app.get("/api/test-db", async (req, res) => {
  try {
    // Probar conexión con una consulta simple
    await prisma.$queryRaw`SELECT 1 as test`;

    // Obtener información básica de la base de datos
    const dbInfo =
      (await prisma.$queryRaw`SELECT current_database() as db_name, current_user as user_name`) as Array<{
        db_name: string;
        user_name: string;
      }>;

    res.json({
      success: true,
      message: "Conexión a Neon DB exitosa",
      database: dbInfo[0],
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error("Error de conexión a Neon DB:", error);
    res.status(500).json({
      success: false,
      message: "Error de conexión a Neon DB",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
});

// ===== RUTAS DE AUTENTICACIÓN =====
app.use("/api/auth", authRoutes);

// Iniciar servidor
const PORT = config.PORT;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 Servidor ejecutándose en puerto ${PORT}`);
  console.log(`📊 Health check: http://localhost:${PORT}/health`);
  console.log(`🔗 Test DB: http://localhost:${PORT}/api/test-db`);
  console.log(`🔐 Auth API: http://localhost:${PORT}/api/auth`);
  console.log(`📝 Available endpoints:`);
  console.log(`   POST /api/auth/register`);
  console.log(`   POST /api/auth/login`);
  console.log(`   POST /api/auth/check-email`);
  console.log(`   GET  /api/auth/verify-token`);
  console.log(`   POST /api/auth/logout`);
  console.log(`   GET  /api/auth/profile`);
  console.log(`   PUT  /api/auth/profile`);
  console.log(`   POST /api/auth/change-password`);
  console.log(`   GET  /api/auth/token-info`);
  console.log(`   DELETE /api/auth/deactivate`);
});

// Manejo de errores no capturados
process.on("unhandledRejection", (reason, promise) => {
  console.error("Unhandled Rejection at:", promise, "reason:", reason);
});

process.on("uncaughtException", (error) => {
  console.error("Uncaught Exception:", error);
  process.exit(1);
});
