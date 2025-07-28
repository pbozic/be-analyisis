-- DropForeignKey
ALTER TABLE "daily_meal_subscriptions" DROP CONSTRAINT "daily_meal_subscriptions_id_fkey";

-- AlterTable
ALTER TABLE "daily_meal_subscriptions" ADD COLUMN     "payment_id" UUID;

-- AddForeignKey
ALTER TABLE "daily_meal_subscriptions" ADD CONSTRAINT "daily_meal_subscriptions_payment_id_fkey" FOREIGN KEY ("payment_id") REFERENCES "payments"("subscription_grouped_id") ON DELETE SET NULL ON UPDATE CASCADE;
