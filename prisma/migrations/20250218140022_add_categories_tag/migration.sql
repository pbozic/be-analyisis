/*
  Warnings:

  - A unique constraint covering the columns `[tag]` on the table `categories` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `tag` to the `categories` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "categories" ADD COLUMN     "tag" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "categories_tag_key" ON "categories"("tag");
