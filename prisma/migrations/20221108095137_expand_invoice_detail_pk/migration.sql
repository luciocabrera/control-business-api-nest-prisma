/*
  Warnings:

  - A unique constraint covering the columns `[invoiceId,productId,description]` on the table `invoicesDetails` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "invoicesDetails_invoiceId_productId_key";

-- CreateIndex
CREATE UNIQUE INDEX "invoicesDetails_invoiceId_productId_description_key" ON "invoicesDetails"("invoiceId", "productId", "description");
