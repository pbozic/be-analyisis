/*
  Warnings:

  - You are about to drop the column `payment_id` on the `daily_meal_subscriptions` table. All the data in the column will be lost.
  - You are about to drop the column `subscription_grouped_id` on the `payments` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[daily_meal_subscription_id]` on the table `payments` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "daily_meal_subscriptions" DROP CONSTRAINT "daily_meal_subscriptions_payment_id_fkey";

-- DropIndex
DROP INDEX "payments_subscription_grouped_id_key";

-- AlterTable
ALTER TABLE "daily_meal_subscriptions" DROP COLUMN "payment_id";

-- AlterTable
ALTER TABLE "payments" DROP COLUMN "subscription_grouped_id",
ADD COLUMN     "daily_meal_subscription_id" UUID;

-- CreateIndex
CREATE UNIQUE INDEX "payments_daily_meal_subscription_id_key" ON "payments"("daily_meal_subscription_id");

-- AddForeignKey
ALTER TABLE "payments" ADD CONSTRAINT "payments_daily_meal_subscription_id_fkey" FOREIGN KEY ("daily_meal_subscription_id") REFERENCES "daily_meal_subscriptions"("id") ON DELETE CASCADE ON UPDATE CASCADE;
