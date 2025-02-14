/*
  Warnings:

  - A unique constraint covering the columns `[translatable_id,language]` on the table `translations` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `category_type` to the `categories` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "CATEGORY_TYPE" AS ENUM ('MENU', 'DAILY');

-- AlterTable
ALTER TABLE "categories" ADD COLUMN     "category_type" "CATEGORY_TYPE" NOT NULL,
ADD COLUMN     "icon_file_id" UUID;

-- CreateIndex
CREATE UNIQUE INDEX "translations_translatable_id_language_key" ON "translations"("translatable_id", "language");

-- AddForeignKey
ALTER TABLE "categories" ADD CONSTRAINT "categories_icon_file_id_fkey" FOREIGN KEY ("icon_file_id") REFERENCES "files"("file_id") ON DELETE SET NULL ON UPDATE CASCADE;
