/*
  Warnings:

  - The primary key for the `_blog_posts_in_tag` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `_word_bundlesTowords` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - A unique constraint covering the columns `[A,B]` on the table `_blog_posts_in_tag` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[A,B]` on the table `_word_bundlesTowords` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "menu_categories" DROP CONSTRAINT "menu_categories_menu_id_fkey";

-- DropForeignKey
ALTER TABLE "menu_items" DROP CONSTRAINT "menu_items_menu_category_id_fkey";

-- AlterTable
ALTER TABLE "_blog_posts_in_tag" DROP CONSTRAINT "_blog_posts_in_tag_AB_pkey";

-- AlterTable
ALTER TABLE "_word_bundlesTowords" DROP CONSTRAINT "_word_bundlesTowords_AB_pkey";

-- CreateIndex
CREATE UNIQUE INDEX "_blog_posts_in_tag_AB_unique" ON "_blog_posts_in_tag"("A", "B");

-- CreateIndex
CREATE UNIQUE INDEX "_word_bundlesTowords_AB_unique" ON "_word_bundlesTowords"("A", "B");

-- AddForeignKey
ALTER TABLE "menu_categories" ADD CONSTRAINT "menu_categories_menu_id_fkey" FOREIGN KEY ("menu_id") REFERENCES "menus"("menu_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "menu_items" ADD CONSTRAINT "menu_items_menu_category_id_fkey" FOREIGN KEY ("menu_category_id") REFERENCES "menu_categories"("menu_category_id") ON DELETE CASCADE ON UPDATE CASCADE;
