/*
  Warnings:

  - A unique constraint covering the columns `[documentId,documentTypeId]` on the table `customers` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "customers_documentId_documentTypeId_key" ON "customers"("documentId", "documentTypeId");
