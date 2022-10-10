/*
  Warnings:

  - You are about to drop the column `titlesTitleId` on the `customers` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "customers" DROP CONSTRAINT "customers_titlesTitleId_fkey";

-- AlterTable
ALTER TABLE "customers" DROP COLUMN "titlesTitleId",
ADD COLUMN     "titleId" INTEGER;

-- AddForeignKey
ALTER TABLE "customers" ADD CONSTRAINT "customers_titleId_fkey" FOREIGN KEY ("titleId") REFERENCES "titles"("titleId") ON DELETE SET NULL ON UPDATE CASCADE;
