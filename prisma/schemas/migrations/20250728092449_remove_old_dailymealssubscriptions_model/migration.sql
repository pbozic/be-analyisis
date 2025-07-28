/*
  Warnings:

  - You are about to drop the `daily_meals_subscriptions` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "daily_meals_subscriptions" DROP CONSTRAINT "daily_meals_subscriptions_address_id_fkey";

-- DropForeignKey
ALTER TABLE "daily_meals_subscriptions" DROP CONSTRAINT "daily_meals_subscriptions_business_id_fkey";

-- DropForeignKey
ALTER TABLE "daily_meals_subscriptions" DROP CONSTRAINT "daily_meals_subscriptions_grouped_id_fkey";

-- DropForeignKey
ALTER TABLE "daily_meals_subscriptions" DROP CONSTRAINT "daily_meals_subscriptions_menu_categories_id_fkey";

-- DropForeignKey
ALTER TABLE "daily_meals_subscriptions" DROP CONSTRAINT "daily_meals_subscriptions_menu_id_fkey";

-- DropForeignKey
ALTER TABLE "daily_meals_subscriptions" DROP CONSTRAINT "daily_meals_subscriptions_user_id_fkey";

-- DropTable
DROP TABLE "daily_meals_subscriptions";

-- AddForeignKey
ALTER TABLE "daily_meal_subscriptions" ADD CONSTRAINT "daily_meal_subscriptions_id_fkey" FOREIGN KEY ("id") REFERENCES "payments"("subscription_grouped_id") ON DELETE RESTRICT ON UPDATE CASCADE;
