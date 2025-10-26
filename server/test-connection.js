#!/usr/bin/env node

// Script simple para probar SOLO la conexión a Neon DB
const { PrismaClient } = require("@prisma/client");

async function testConnection() {
  const prisma = new PrismaClient();

  try {
    console.log("🔍 Probando conexión básica a Neon DB...");

    // Solo probar conexión básica con una consulta simple
    await prisma.$queryRaw`SELECT 1 as test`;
    console.log("✅ Conexión exitosa a Neon DB!");

    // Probar que podemos hacer consultas SQL directas
    const result =
      await prisma.$queryRaw`SELECT current_database() as db_name, current_user as user_name`;
    console.log("📊 Información de la base de datos:", result[0]);

    console.log("🎉 ¡Conexión a Neon DB funcionando correctamente!");
  } catch (error) {
    console.error("❌ Error de conexión:", error.message);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

testConnection();
