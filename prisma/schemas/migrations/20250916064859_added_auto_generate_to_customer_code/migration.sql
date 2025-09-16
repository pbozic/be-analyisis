/*
  Warnings:

  - Made the column `code` on table `customers` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "customers" ALTER COLUMN "code" SET NOT NULL,
ALTER COLUMN "code" SET DEFAULT substr(md5(random()::text), 1, 16);
