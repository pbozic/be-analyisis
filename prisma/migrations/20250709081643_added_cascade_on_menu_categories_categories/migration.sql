-- DropForeignKey
ALTER TABLE "menu_categories_categories" DROP CONSTRAINT "menu_categories_categories_menu_categories_id_fkey";

-- AddForeignKey
ALTER TABLE "menu_categories_categories" ADD CONSTRAINT "menu_categories_categories_menu_categories_id_fkey" FOREIGN KEY ("menu_categories_id") REFERENCES "menu_categories"("menu_category_id") ON DELETE CASCADE ON UPDATE CASCADE;
