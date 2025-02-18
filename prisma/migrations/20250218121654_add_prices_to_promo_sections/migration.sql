/*
  Warnings:

  - Added the required column `translatable_id` to the `promo_sections` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "files" ALTER COLUMN "url" DROP NOT NULL;

-- AlterTable
ALTER TABLE "menu_categories" ADD COLUMN     "order" INTEGER;

-- AlterTable
ALTER TABLE "menus" ADD COLUMN     "isDailyMeal" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "promo_sections" ADD COLUMN     "t1price" DOUBLE PRECISION,
ADD COLUMN     "t2price" DOUBLE PRECISION,
ADD COLUMN     "t3price" DOUBLE PRECISION,
ADD COLUMN     "translatable_id" UUID NOT NULL;

-- AddForeignKey
ALTER TABLE "promo_sections" ADD CONSTRAINT "promo_sections_translatable_id_fkey" FOREIGN KEY ("translatable_id") REFERENCES "translatable"("translatable_id") ON DELETE RESTRICT ON UPDATE CASCADE;
