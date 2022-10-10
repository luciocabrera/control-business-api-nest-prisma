/*
  Warnings:

  - You are about to drop the column `addressId` on the `Customers` table. All the data in the column will be lost.
  - Added the required column `customerId` to the `Addresses` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Customers" DROP CONSTRAINT "Customers_addressId_fkey";

-- AlterTable
ALTER TABLE "Addresses" ADD COLUMN     "customerId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Customers" DROP COLUMN "addressId";

-- AddForeignKey
ALTER TABLE "Addresses" ADD CONSTRAINT "Addresses_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "Customers"("customerId") ON DELETE RESTRICT ON UPDATE RESTRICT;
