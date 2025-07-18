/*
  Warnings:

  - You are about to drop the column `level` on the `service_category` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "service_category" DROP COLUMN "level";

-- DropEnum
DROP TYPE "CATEGORY_LEVEL";
