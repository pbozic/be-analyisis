/*
  Warnings:

  - Added the required column `email` to the `employee` table without a default value. This is not possible if the table is not empty.
  - Added the required column `first_name` to the `employee` table without a default value. This is not possible if the table is not empty.
  - Added the required column `last_name` to the `employee` table without a default value. This is not possible if the table is not empty.
  - Added the required column `telephone` to the `employee` table without a default value. This is not possible if the table is not empty.
  - Added the required column `telephone_code` to the `employee` table without a default value. This is not possible if the table is not empty.
  - Added the required column `telephone_number` to the `employee` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "employee"
  ADD COLUMN "email" TEXT,
  ADD COLUMN "first_name" TEXT,
  ADD COLUMN "last_name" TEXT,
  ADD COLUMN "telephone" TEXT,
  ADD COLUMN "telephone_code" TEXT,
  ADD COLUMN "telephone_number" TEXT;
