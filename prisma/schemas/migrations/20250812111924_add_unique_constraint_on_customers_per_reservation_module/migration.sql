/*
  Warnings:

  - A unique constraint covering the columns `[reservation_module_id,email]` on the table `customers` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[reservation_module_id,telephone]` on the table `customers` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "customers_email_key";

-- DropIndex
DROP INDEX "customers_telephone_key";

-- CreateIndex
CREATE UNIQUE INDEX "customers_reservation_module_id_email_key" ON "customers"("reservation_module_id", "email");

-- CreateIndex
CREATE UNIQUE INDEX "customers_reservation_module_id_telephone_key" ON "customers"("reservation_module_id", "telephone");
