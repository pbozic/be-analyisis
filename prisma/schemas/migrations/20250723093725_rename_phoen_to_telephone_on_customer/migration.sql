/*
  Warnings:

  - You are about to drop the column `phone` on the `customers` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[telephone]` on the table `customers` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "customers_phone_key";

-- AlterTable
ALTER TABLE "customers" DROP COLUMN "phone",
ADD COLUMN     "telephone" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "customers_telephone_key" ON "customers"("telephone");
