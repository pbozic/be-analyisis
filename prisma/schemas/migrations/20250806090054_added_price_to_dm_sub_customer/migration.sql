/*
  Warnings:

  - Added the required column `daily_meal_category_price_id` to the `daily_meal_subscription_customers` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "daily_meal_subscription_customers" ADD COLUMN     "daily_meal_category_price_id" UUID NOT NULL;

-- AddForeignKey
ALTER TABLE "daily_meal_subscription_customers" ADD CONSTRAINT "daily_meal_subscription_customers_daily_meal_category_pric_fkey" FOREIGN KEY ("daily_meal_category_price_id") REFERENCES "daily_meal_category_prices"("daily_meal_category_prices_id") ON DELETE RESTRICT ON UPDATE CASCADE;
