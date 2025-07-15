-- AlterTable
ALTER TABLE "menu_categories" ADD COLUMN     "menu_order_index" INTEGER;

-- AlterTable
ALTER TABLE "menu_items" ADD COLUMN     "menu_category_order_index" INTEGER;
