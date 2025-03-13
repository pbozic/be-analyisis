-- AddForeignKey
ALTER TABLE "promo_sections_buy" ADD CONSTRAINT "promo_sections_buy_business_id_fkey" FOREIGN KEY ("business_id") REFERENCES "business"("business_id") ON DELETE RESTRICT ON UPDATE CASCADE;
