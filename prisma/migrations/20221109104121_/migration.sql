/*
  Warnings:

  - A unique constraint covering the columns `[date,invoiceId,productId,description]` on the table `invoicesDetails` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `date` to the `invoicesDetails` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "invoicesDetails_invoiceId_productId_description_key";

-- AlterTable
ALTER TABLE "invoicesDetails" ADD COLUMN     "date" TIMESTAMP(3) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "invoicesDetails_date_invoiceId_productId_description_key" ON "invoicesDetails"("date", "invoiceId", "productId", "description");
