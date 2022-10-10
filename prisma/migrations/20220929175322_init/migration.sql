/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `documentTypes` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `createdBy` to the `documentTypes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `documentTypes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedBy` to the `documentTypes` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "documentTypes" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "createdBy" VARCHAR(150) NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "updatedBy" VARCHAR(150) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "documentTypes_name_key" ON "documentTypes"("name");
