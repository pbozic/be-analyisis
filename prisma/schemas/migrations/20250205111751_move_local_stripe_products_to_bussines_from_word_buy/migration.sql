/*
  Warnings:

  - You are about to drop the column `stripe_price_id` on the `word_buy` table. All the data in the column will be lost.
  - You are about to drop the column `stripe_product_id` on the `word_buy` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[business_id]` on the table `local_products` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `business_id` to the `local_products` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "word_buy" DROP CONSTRAINT "word_buy_stripe_price_id_fkey";

-- DropForeignKey
ALTER TABLE "word_buy" DROP CONSTRAINT "word_buy_stripe_product_id_fkey";

-- DropIndex
DROP INDEX "word_buy_stripe_price_id_key";

-- DropIndex
DROP INDEX "word_buy_stripe_product_id_key";

-- AlterTable
ALTER TABLE "business" ADD COLUMN     "word_buy_stripe_product_id" TEXT;

-- AlterTable
ALTER TABLE "local_products" ADD COLUMN     "business_id" UUID NOT NULL;

-- AlterTable
ALTER TABLE "word_buy" DROP COLUMN "stripe_price_id",
DROP COLUMN "stripe_product_id";

-- CreateIndex
CREATE UNIQUE INDEX "local_products_business_id_key" ON "local_products"("business_id");

-- AddForeignKey
ALTER TABLE "local_products" ADD CONSTRAINT "local_products_business_id_fkey" FOREIGN KEY ("business_id") REFERENCES "business"("business_id") ON DELETE RESTRICT ON UPDATE CASCADE;
