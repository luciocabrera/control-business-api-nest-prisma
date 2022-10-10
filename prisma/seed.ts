import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const createdBy = 'seed';
const updatedBy = 'seed';
async function main() {
  const documentTypes1 = await prisma.documentTypes.upsert({
    where: { documentTypeId: 1 },
    update: {},
    create: {
      name: 'Passport',
      createdBy,
      updatedBy
    }
  });
  const documentTypes2 = await prisma.documentTypes.upsert({
    where: { documentTypeId: 2 },
    update: {},
    create: {
      name: 'BSN',
      createdBy,
      updatedBy
    }
  });

  const titles1 = await prisma.titles.upsert({
    where: { titleId: 1 },
    update: {},
    create: {
      name: 'Sr',
      createdBy,
      updatedBy
    }
  });

  const titles2 = await prisma.titles.upsert({
    where: { titleId: 2 },
    update: {},
    create: {
      name: 'Sra',
      createdBy,
      updatedBy
    }
  });

  console.log({
    documentTypes1,
    documentTypes2,
    titles1,
    titles2
  });
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
