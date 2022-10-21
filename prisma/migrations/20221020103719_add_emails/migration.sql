/*
  Warnings:

  - Added the required column `description` to the `invoicesDetails` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "invoicesDetails" ADD COLUMN     "description" VARCHAR(160) NOT NULL;

-- CreateTable
CREATE TABLE "emails" (
    "emailId" SERIAL NOT NULL,
    "email" VARCHAR(120) NOT NULL,
    "customerId" INTEGER NOT NULL,

    CONSTRAINT "emails_pkey" PRIMARY KEY ("emailId")
);

-- AddForeignKey
ALTER TABLE "emails" ADD CONSTRAINT "emails_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "customers"("customerId") ON DELETE CASCADE ON UPDATE CASCADE;
