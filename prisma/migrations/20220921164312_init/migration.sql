-- CreateTable
CREATE TABLE "DocumentTypes" (
    "documentTypeId" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "DocumentTypes_pkey" PRIMARY KEY ("documentTypeId")
);

-- CreateTable
CREATE TABLE "Customers" (
    "customerId" SERIAL NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "documentId" TEXT NOT NULL,
    "documentTypeId" INTEGER NOT NULL,
    "addressId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdBy" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "updatedBy" TEXT NOT NULL,

    CONSTRAINT "Customers_pkey" PRIMARY KEY ("customerId")
);

-- CreateTable
CREATE TABLE "Adressess" (
    "addressId" SERIAL NOT NULL,
    "country" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "line1" TEXT NOT NULL,
    "line2" TEXT,
    "postalCode" TEXT NOT NULL,

    CONSTRAINT "Adressess_pkey" PRIMARY KEY ("addressId")
);

-- AddForeignKey
ALTER TABLE "Customers" ADD CONSTRAINT "Customers_documentTypeId_fkey" FOREIGN KEY ("documentTypeId") REFERENCES "DocumentTypes"("documentTypeId") ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE "Customers" ADD CONSTRAINT "Customers_addressId_fkey" FOREIGN KEY ("addressId") REFERENCES "Adressess"("addressId") ON DELETE RESTRICT ON UPDATE RESTRICT;
