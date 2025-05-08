-- AddForeignKey
ALTER TABLE "daily_meals_subscriptions" ADD CONSTRAINT "daily_meals_subscriptions_address_id_fkey" FOREIGN KEY ("address_id") REFERENCES "addresses"("address_id") ON DELETE RESTRICT ON UPDATE CASCADE;
