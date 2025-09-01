/*
  Warnings:

  - You are about to drop the column `is_daily_meal` on the `promo_analytics` table. All the data in the column will be lost.

*/
-- AlterEnum
-- This migration adds more than one value to an enum.
-- With PostgreSQL versions 11 and earlier, this is not possible
-- in a single migration. This can be worked around by creating
-- multiple migrations, each migration adding only one value to
-- the enum.


ALTER TYPE "ANALYTICS_TYPE" ADD VALUE 'DAILY_MEAL_SUBSCRIPTION_START';
ALTER TYPE "ANALYTICS_TYPE" ADD VALUE 'DAILY_MEAL_SUBSCRIPTION_CREATE';

-- AlterTable
ALTER TABLE "promo_analytics" DROP COLUMN "is_daily_meal",
ADD COLUMN     "daily_meal_subscription_id" UUID;

-- AddForeignKey
ALTER TABLE "promo_analytics" ADD CONSTRAINT "promo_analytics_daily_meal_subscription_id_fkey" FOREIGN KEY ("daily_meal_subscription_id") REFERENCES "daily_meal_subscriptions"("id") ON DELETE SET NULL ON UPDATE CASCADE;
