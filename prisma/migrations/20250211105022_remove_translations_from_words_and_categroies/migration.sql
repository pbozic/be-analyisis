/*
  Warnings:

  - You are about to drop the column `translations` on the `categories` table. All the data in the column will be lost.
  - You are about to drop the column `translations` on the `words` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "categories" DROP COLUMN "translations";

-- AlterTable
ALTER TABLE "words" DROP COLUMN "translations";
