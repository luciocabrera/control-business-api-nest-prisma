-- DropForeignKey
ALTER TABLE "addresses" DROP CONSTRAINT "addresses_customerId_fkey";

-- DropForeignKey
ALTER TABLE "invoicesDetails" DROP CONSTRAINT "invoicesDetails_invoiceId_fkey";

-- AddForeignKey
ALTER TABLE "addresses" ADD CONSTRAINT "addresses_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "customers"("customerId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "invoicesDetails" ADD CONSTRAINT "invoicesDetails_invoiceId_fkey" FOREIGN KEY ("invoiceId") REFERENCES "invoices"("invoiceId") ON DELETE CASCADE ON UPDATE CASCADE;
