/*
  Warnings:

  - You are about to alter the column `firstName` on the `customers` table. The data in that column could be lost. The data in that column will be cast from `VarChar(150)` to `VarChar(80)`.
  - You are about to alter the column `lastName` on the `customers` table. The data in that column could be lost. The data in that column will be cast from `VarChar(150)` to `VarChar(80)`.
  - You are about to alter the column `createdBy` on the `customers` table. The data in that column could be lost. The data in that column will be cast from `VarChar(150)` to `VarChar(80)`.
  - You are about to alter the column `updatedBy` on the `customers` table. The data in that column could be lost. The data in that column will be cast from `VarChar(150)` to `VarChar(80)`.
  - You are about to alter the column `createdBy` on the `documentTypes` table. The data in that column could be lost. The data in that column will be cast from `VarChar(150)` to `VarChar(80)`.
  - You are about to alter the column `updatedBy` on the `documentTypes` table. The data in that column could be lost. The data in that column will be cast from `VarChar(150)` to `VarChar(80)`.
  - You are about to alter the column `createdBy` on the `invoices` table. The data in that column could be lost. The data in that column will be cast from `VarChar(150)` to `VarChar(80)`.
  - You are about to alter the column `updatedBy` on the `invoices` table. The data in that column could be lost. The data in that column will be cast from `VarChar(150)` to `VarChar(80)`.
  - You are about to alter the column `createdBy` on the `products` table. The data in that column could be lost. The data in that column will be cast from `VarChar(150)` to `VarChar(80)`.
  - You are about to alter the column `updatedBy` on the `products` table. The data in that column could be lost. The data in that column will be cast from `VarChar(150)` to `VarChar(80)`.
  - You are about to alter the column `createdBy` on the `titles` table. The data in that column could be lost. The data in that column will be cast from `VarChar(150)` to `VarChar(80)`.
  - You are about to alter the column `updatedBy` on the `titles` table. The data in that column could be lost. The data in that column will be cast from `VarChar(150)` to `VarChar(80)`.

*/
-- AlterTable
ALTER TABLE "customers" ALTER COLUMN "firstName" SET DATA TYPE VARCHAR(80),
ALTER COLUMN "lastName" SET DATA TYPE VARCHAR(80),
ALTER COLUMN "createdBy" SET DATA TYPE VARCHAR(80),
ALTER COLUMN "updatedBy" SET DATA TYPE VARCHAR(80);

-- AlterTable
ALTER TABLE "documentTypes" ALTER COLUMN "createdBy" SET DATA TYPE VARCHAR(80),
ALTER COLUMN "updatedBy" SET DATA TYPE VARCHAR(80);

-- AlterTable
ALTER TABLE "invoices" ALTER COLUMN "createdBy" SET DATA TYPE VARCHAR(80),
ALTER COLUMN "updatedBy" SET DATA TYPE VARCHAR(80);

-- AlterTable
ALTER TABLE "products" ALTER COLUMN "createdBy" SET DATA TYPE VARCHAR(80),
ALTER COLUMN "updatedBy" SET DATA TYPE VARCHAR(80);

-- AlterTable
ALTER TABLE "titles" ALTER COLUMN "createdBy" SET DATA TYPE VARCHAR(80),
ALTER COLUMN "updatedBy" SET DATA TYPE VARCHAR(80);

-- CreateTable
CREATE TABLE "phones" (
    "phoneId" SERIAL NOT NULL,
    "number" VARCHAR(16) NOT NULL,
    "customerId" INTEGER NOT NULL,

    CONSTRAINT "phones_pkey" PRIMARY KEY ("phoneId")
);

-- AddForeignKey
ALTER TABLE "phones" ADD CONSTRAINT "phones_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "customers"("customerId") ON DELETE CASCADE ON UPDATE CASCADE;
