/*
  Warnings:

  - A unique constraint covering the columns `[tag,category_type]` on the table `categories` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "categories_tag_key";

-- CreateIndex
CREATE UNIQUE INDEX "categories_tag_category_type_key" ON "categories"("tag", "category_type");
