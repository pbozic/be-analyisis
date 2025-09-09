/*
  Warnings:

  - Added the required column `stripe_product_id` to the `action_bundle` table without a default value. This is not possible if the table is not empty.
  - Added the required column `stripe_product_id` to the `addon` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "action_bundle" ADD COLUMN     "stripe_product_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "addon" ADD COLUMN     "stripe_product_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "reservation_module" ADD COLUMN     "stripe_subscription_id" TEXT;
