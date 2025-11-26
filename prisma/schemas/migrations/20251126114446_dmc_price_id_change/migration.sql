/*
  Warnings:

  - The primary key for the `daily_meal_category_prices` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `daily_meal_category_prices_id` on the `daily_meal_category_prices` table. All the data in the column will be lost.
  - The required column `id` was added to the `daily_meal_category_prices` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- DropForeignKey
ALTER TABLE "daily_meal_instances" DROP CONSTRAINT "daily_meal_instances_daily_meal_category_price_id_fkey";

-- DropForeignKey
ALTER TABLE "daily_meal_subscription_customers" DROP CONSTRAINT "daily_meal_subscription_customers_daily_meal_category_pric_fkey";

-- DropForeignKey
ALTER TABLE "menu_categories" DROP CONSTRAINT "menu_categories_daily_meal_category_price_id_fkey";

-- AlterTable
ALTER TABLE "business" ALTER COLUMN "public_link_hash" SET DEFAULT 'BU' || substr(md5((random())::text), 1, 14);

-- AlterTable
ALTER TABLE "crm_module" ALTER COLUMN "public_link_hash" SET DEFAULT 'CM' || substr(md5((random())::text), 1, 14);

-- AlterTable
ALTER TABLE "daily_meal_category_prices" DROP CONSTRAINT "daily_meal_category_prices_pkey",
DROP COLUMN "daily_meal_category_prices_id",
ADD COLUMN     "id" UUID NOT NULL,
ADD CONSTRAINT "daily_meal_category_prices_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "daily_meals_module" ALTER COLUMN "public_link_hash" SET DEFAULT 'DM' || substr(md5((random())::text), 1, 14);

-- AlterTable
ALTER TABLE "delivery_orders" ALTER COLUMN "delivery_location" DROP NOT NULL;

-- AlterTable
ALTER TABLE "food_drinks_module" ALTER COLUMN "public_link_hash" SET DEFAULT 'FD' || substr(md5((random())::text), 1, 14);

-- AlterTable
ALTER TABLE "reservation_module" ALTER COLUMN "public_link_hash" SET DEFAULT 'RM' || substr(md5((random())::text), 1, 14);

-- AlterTable
ALTER TABLE "stores_module" ALTER COLUMN "public_link_hash" SET DEFAULT 'SM' || substr(md5((random())::text), 1, 14);

-- AlterTable
ALTER TABLE "table_reservations_module" ALTER COLUMN "public_link_hash" SET DEFAULT 'TR' || substr(md5((random())::text), 1, 14);

-- AlterTable
ALTER TABLE "transport_module" ALTER COLUMN "public_link_hash" SET DEFAULT 'TM' || substr(md5((random())::text), 1, 14);

-- AddForeignKey
ALTER TABLE "menu_categories" ADD CONSTRAINT "menu_categories_daily_meal_category_price_id_fkey" FOREIGN KEY ("daily_meal_category_price_id") REFERENCES "daily_meal_category_prices"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "daily_meal_subscription_customers" ADD CONSTRAINT "daily_meal_subscription_customers_daily_meal_category_pric_fkey" FOREIGN KEY ("daily_meal_category_price_id") REFERENCES "daily_meal_category_prices"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "daily_meal_instances" ADD CONSTRAINT "daily_meal_instances_daily_meal_category_price_id_fkey" FOREIGN KEY ("daily_meal_category_price_id") REFERENCES "daily_meal_category_prices"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
