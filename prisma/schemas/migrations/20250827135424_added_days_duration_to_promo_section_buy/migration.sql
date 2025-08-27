/*
  Warnings:

  - Added the required column `duration` to the `promo_sections_buy` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "promo_sections_buy" ADD COLUMN     "duration" INTEGER NOT NULL;
