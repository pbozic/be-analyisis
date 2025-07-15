/*
  Warnings:

  - You are about to drop the column `amount` on the `local_prices` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "local_prices_local_product_id_amount_idx";

-- DropIndex
DROP INDEX "local_prices_stripe_product_id_amount_idx";

-- AlterTable
ALTER TABLE "local_prices" DROP COLUMN "amount";

-- AlterTable
ALTER TABLE "promo_sections" ADD COLUMN     "stripe_product_id" TEXT;

-- CreateIndex
CREATE INDEX "local_prices_local_product_id_idx" ON "local_prices"("local_product_id");

-- CreateIndex
CREATE INDEX "local_prices_stripe_product_id_idx" ON "local_prices"("stripe_product_id");
