/*
  Warnings:

  - You are about to drop the column `stripe_subscription_id` on the `promo_sections_buy` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "promo_sections_buy" DROP COLUMN "stripe_subscription_id",
ADD COLUMN     "paid" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "payment_intent_id" TEXT;
