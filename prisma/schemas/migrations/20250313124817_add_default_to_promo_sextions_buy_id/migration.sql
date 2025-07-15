/*
  Warnings:

  - You are about to alter the column `t1price` on the `promo_sections` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.
  - You are about to alter the column `t2price` on the `promo_sections` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.
  - You are about to alter the column `t3price` on the `promo_sections` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.

*/
-- AlterTable
ALTER TABLE "promo_sections" ALTER COLUMN "t1price" SET DATA TYPE INTEGER,
ALTER COLUMN "t2price" SET DATA TYPE INTEGER,
ALTER COLUMN "t3price" SET DATA TYPE INTEGER;
