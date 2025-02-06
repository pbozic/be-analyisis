/*
  Warnings:

  - Added the required column `business_id` to the `promo_sections_buy` table without a default value. This is not possible if the table is not empty.
  - Added the required column `stripe_subscription_id` to the `promo_sections_buy` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "word_buy_stripe_subscription_id_key";

-- AlterTable
ALTER TABLE "promo_sections_buy" ADD COLUMN     "business_id" UUID NOT NULL,
ADD COLUMN     "stripe_subscription_id" TEXT NOT NULL;
