/*
  Warnings:

  - A unique constraint covering the columns `[code]` on the table `customers` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "customers" ADD COLUMN     "code" VARCHAR(10);

-- CreateIndex
CREATE UNIQUE INDEX "customers_code_key" ON "customers"("code");
