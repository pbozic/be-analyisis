/*
  Warnings:

  - You are about to drop the column `isWeighted` on the `menu_items` table. All the data in the column will be lost.
  - You are about to drop the column `weightQuantity` on the `menu_items` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "menu_items" DROP COLUMN "isWeighted",
DROP COLUMN "weightQuantity",
ADD COLUMN     "is_weighted" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "weight_quantity" DOUBLE PRECISION;
