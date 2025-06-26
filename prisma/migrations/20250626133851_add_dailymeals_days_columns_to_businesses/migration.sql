/*
  Warnings:

  - You are about to drop the column `offers_daily_meals_on_weekend` on the `business` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "DAY_OF_WEEK" AS ENUM ('MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN');

-- AlterEnum
ALTER TYPE "BUSINESS_TYPE" ADD VALUE 'STORE';

-- AlterTable
ALTER TABLE "business" DROP COLUMN "offers_daily_meals_on_weekend",
ADD COLUMN     "daily_meals_days" "DAY_OF_WEEK"[] DEFAULT ARRAY[]::"DAY_OF_WEEK"[],
ADD COLUMN     "maximum_daily_meals_subscribers" INTEGER;

-- AddForeignKey
ALTER TABLE "order_lobby_items" ADD CONSTRAINT "order_lobby_items_menu_item_id_fkey" FOREIGN KEY ("menu_item_id") REFERENCES "menu_items"("menu_item_id") ON DELETE RESTRICT ON UPDATE CASCADE;
