/*
  Warnings:

  - You are about to alter the column `code` on the `customers` table. The data in that column could be lost. The data in that column will be cast from `VarChar(10)` to `VarChar(8)`.

*/
-- AlterTable
ALTER TABLE "customers" ALTER COLUMN "code" SET DATA TYPE VARCHAR(8);
