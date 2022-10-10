/*
  Warnings:

  - You are about to drop the `Addresses` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Customers` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `DocumentTypes` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Addresses" DROP CONSTRAINT "Addresses_customerId_fkey";

-- DropForeignKey
ALTER TABLE "Customers" DROP CONSTRAINT "Customers_documentTypeId_fkey";

-- DropTable
DROP TABLE "Addresses";

-- DropTable
DROP TABLE "Customers";

-- DropTable
DROP TABLE "DocumentTypes";

-- CreateTable
CREATE TABLE "documentTypes" (
    "documentTypeId" SERIAL NOT NULL,
    "name" VARCHAR(36) NOT NULL,

    CONSTRAINT "documentTypes_pkey" PRIMARY KEY ("documentTypeId")
);

-- CreateTable
CREATE TABLE "customers" (
    "customerId" SERIAL NOT NULL,
    "firstName" VARCHAR(150) NOT NULL,
    "lastName" VARCHAR(150),
    "documentId" VARCHAR(24) NOT NULL,
    "documentTypeId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdBy" VARCHAR(150) NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "updatedBy" VARCHAR(150) NOT NULL,

    CONSTRAINT "customers_pkey" PRIMARY KEY ("customerId")
);

-- CreateTable
CREATE TABLE "addresses" (
    "addressId" SERIAL NOT NULL,
    "country" VARCHAR(80) NOT NULL,
    "state" VARCHAR(80) NOT NULL,
    "city" VARCHAR(80) NOT NULL,
    "line1" VARCHAR(80) NOT NULL,
    "line2" VARCHAR(80),
    "postalCode" VARCHAR(16) NOT NULL,
    "customerId" INTEGER NOT NULL,

    CONSTRAINT "addresses_pkey" PRIMARY KEY ("addressId")
);

-- AddForeignKey
ALTER TABLE "customers" ADD CONSTRAINT "customers_documentTypeId_fkey" FOREIGN KEY ("documentTypeId") REFERENCES "documentTypes"("documentTypeId") ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE "addresses" ADD CONSTRAINT "addresses_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "customers"("customerId") ON DELETE RESTRICT ON UPDATE RESTRICT;
