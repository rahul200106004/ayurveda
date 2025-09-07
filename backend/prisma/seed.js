const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');
const prisma = new PrismaClient();
async function main() {
  const password = await bcrypt.hash("admin123", 10);
  await prisma.user.upsert({
    where: { email: "admin@clinic.com" },
    update: {},
    create: { email: "admin@clinic.com", password, role: "ADMIN" }
  });
}
main().finally(() => prisma.$disconnect());