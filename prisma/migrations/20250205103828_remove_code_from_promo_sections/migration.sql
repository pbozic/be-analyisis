/*
  Warnings:

  - You are about to drop the column `code` on the `promo_sections` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "promo_sections_code_key";

-- AlterTable
ALTER TABLE "promo_sections" DROP COLUMN "code";
