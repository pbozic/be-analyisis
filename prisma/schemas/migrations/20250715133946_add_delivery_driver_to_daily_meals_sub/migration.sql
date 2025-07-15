-- AlterTable
ALTER TABLE "daily_meal_subscriptions" ADD COLUMN     "delivery_driver_id" UUID;

-- AddForeignKey
ALTER TABLE "daily_meal_subscriptions" ADD CONSTRAINT "daily_meal_subscriptions_delivery_driver_id_fkey" FOREIGN KEY ("delivery_driver_id") REFERENCES "delivery_drivers"("delivery_driver_id") ON DELETE SET NULL ON UPDATE CASCADE;
