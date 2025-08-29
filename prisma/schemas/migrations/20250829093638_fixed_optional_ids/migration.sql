-- DropForeignKey
ALTER TABLE "promo_analytics" DROP CONSTRAINT "promo_analytics_order_id_fkey";

-- DropForeignKey
ALTER TABLE "promo_analytics" DROP CONSTRAINT "promo_analytics_promo_ads_id_fkey";

-- DropForeignKey
ALTER TABLE "promo_analytics" DROP CONSTRAINT "promo_analytics_promo_sections_id_fkey";

-- DropForeignKey
ALTER TABLE "promo_analytics" DROP CONSTRAINT "promo_analytics_user_id_fkey";

-- DropForeignKey
ALTER TABLE "promo_analytics" DROP CONSTRAINT "promo_analytics_word_id_fkey";

-- AlterTable
ALTER TABLE "promo_analytics" ALTER COLUMN "promo_ads_id" DROP NOT NULL,
ALTER COLUMN "promo_sections_id" DROP NOT NULL,
ALTER COLUMN "word_id" DROP NOT NULL,
ALTER COLUMN "order_id" DROP NOT NULL,
ALTER COLUMN "user_id" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "promo_analytics" ADD CONSTRAINT "promo_analytics_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("user_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "promo_analytics" ADD CONSTRAINT "promo_analytics_promo_ads_id_fkey" FOREIGN KEY ("promo_ads_id") REFERENCES "promo_ads"("promo_ads_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "promo_analytics" ADD CONSTRAINT "promo_analytics_promo_sections_id_fkey" FOREIGN KEY ("promo_sections_id") REFERENCES "promo_sections"("promo_sections_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "promo_analytics" ADD CONSTRAINT "promo_analytics_word_id_fkey" FOREIGN KEY ("word_id") REFERENCES "words"("word_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "promo_analytics" ADD CONSTRAINT "promo_analytics_order_id_fkey" FOREIGN KEY ("order_id") REFERENCES "delivery_orders"("order_id") ON DELETE SET NULL ON UPDATE CASCADE;
