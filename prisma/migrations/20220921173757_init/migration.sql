/*
  Warnings:

  - You are about to drop the `Addressess` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Customers" DROP CONSTRAINT "Customers_addressId_fkey";

-- DropTable
DROP TABLE "Addressess";

-- CreateTable
CREATE TABLE "Addresses" (
    "addressId" SERIAL NOT NULL,
    "country" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "line1" TEXT NOT NULL,
    "line2" TEXT,
    "postalCode" TEXT NOT NULL,

    CONSTRAINT "Addresses_pkey" PRIMARY KEY ("addressId")
);

-- AddForeignKey
ALTER TABLE "Customers" ADD CONSTRAINT "Customers_addressId_fkey" FOREIGN KEY ("addressId") REFERENCES "Addresses"("addressId") ON DELETE RESTRICT ON UPDATE RESTRICT;
