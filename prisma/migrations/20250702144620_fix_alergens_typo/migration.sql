/*
  Warnings:

  - You are about to drop the column `alergens_text` on the `menu_items` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "menu_items" DROP COLUMN "alergens_text",
ADD COLUMN     "allergens_text" JSONB;
