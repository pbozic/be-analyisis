-- CreateEnum
CREATE TYPE "PROMO_TYPE" AS ENUM ('AD', 'SECTION', 'WORD');

-- CreateEnum
CREATE TYPE "ANALYTICS_TYPE" AS ENUM ('VIEW', 'CLICK', 'ORDER_START', 'ORDER_CREATE', 'ORDER_FINISH');

-- CreateTable
CREATE TABLE "promo_analytics" (
    "promo_analytics_id" UUID NOT NULL,
    "promo_ads_id" UUID NOT NULL,
    "promo_sections_id" UUID NOT NULL,
    "word_id" UUID NOT NULL,
    "order_id" UUID NOT NULL,
    "business_id" UUID NOT NULL,
    "user_id" UUID NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "promo_type" "PROMO_TYPE" NOT NULL,
    "type" "ANALYTICS_TYPE" NOT NULL,

    CONSTRAINT "promo_analytics_pkey" PRIMARY KEY ("promo_analytics_id")
);

-- AddForeignKey
ALTER TABLE "promo_analytics" ADD CONSTRAINT "promo_analytics_business_id_fkey" FOREIGN KEY ("business_id") REFERENCES "business"("business_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "promo_analytics" ADD CONSTRAINT "promo_analytics_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "promo_analytics" ADD CONSTRAINT "promo_analytics_promo_ads_id_fkey" FOREIGN KEY ("promo_ads_id") REFERENCES "promo_ads"("promo_ads_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "promo_analytics" ADD CONSTRAINT "promo_analytics_promo_sections_id_fkey" FOREIGN KEY ("promo_sections_id") REFERENCES "promo_sections"("promo_sections_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "promo_analytics" ADD CONSTRAINT "promo_analytics_word_id_fkey" FOREIGN KEY ("word_id") REFERENCES "words"("word_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "promo_analytics" ADD CONSTRAINT "promo_analytics_order_id_fkey" FOREIGN KEY ("order_id") REFERENCES "delivery_orders"("order_id") ON DELETE RESTRICT ON UPDATE CASCADE;
