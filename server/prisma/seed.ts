import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Starting database seeding...");

  // Verificar si ya existen usuarios
  const existingUsers = await prisma.user.count();
  if (existingUsers > 0) {
    console.log(
      `⚠️  Database already has ${existingUsers} users. Skipping seed.`
    );
    return;
  }

  // Crear usuario de prueba
  const testUser = {
    email: "test@example.com",
    password: "password123", // Será hasheada
    name: "Test User",
    phone: "+1234567890",
  };

  // Hashear contraseña
  const hashedPassword = await bcrypt.hash(testUser.password, 12);

  // Crear usuario en la base de datos
  const user = await prisma.user.create({
    data: {
      email: testUser.email,
      password: hashedPassword,
      name: testUser.name,
      phone: testUser.phone,
    },
  });

  console.log("✅ Test user created successfully:");
  console.log(`   ID: ${user.id}`);
  console.log(`   Email: ${user.email}`);
  console.log(`   Name: ${user.name}`);
  console.log(`   Phone: ${user.phone}`);
  console.log(`   Created: ${user.createdAt}`);
  console.log("");
  console.log("🔐 Login credentials:");
  console.log(`   Email: ${testUser.email}`);
  console.log(`   Password: ${testUser.password}`);
  console.log("");
  console.log("📝 You can now test the auth endpoints:");
  console.log("   POST /api/auth/login");
  console.log("   GET /api/auth/profile (with token)");
  console.log("   PUT /api/auth/profile (with token)");
}

main()
  .catch((e) => {
    console.error("❌ Error during seeding:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
    console.log("🔌 Database connection closed.");
  });
