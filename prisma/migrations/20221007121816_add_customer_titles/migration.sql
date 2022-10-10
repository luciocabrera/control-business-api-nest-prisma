-- AlterTable
ALTER TABLE "customers" ADD COLUMN     "titlesTitleId" INTEGER;

-- CreateTable
CREATE TABLE "titles" (
    "titleId" SERIAL NOT NULL,
    "name" VARCHAR(24) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdBy" VARCHAR(150) NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "updatedBy" VARCHAR(150) NOT NULL,

    CONSTRAINT "titles_pkey" PRIMARY KEY ("titleId")
);

-- CreateIndex
CREATE UNIQUE INDEX "titles_name_key" ON "titles"("name");

-- AddForeignKey
ALTER TABLE "customers" ADD CONSTRAINT "customers_titlesTitleId_fkey" FOREIGN KEY ("titlesTitleId") REFERENCES "titles"("titleId") ON DELETE SET NULL ON UPDATE CASCADE;
