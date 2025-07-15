/*
  Warnings:

  - You are about to drop the column `allowance` on the `group_users` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "order_lobbies" DROP CONSTRAINT "order_lobbies_delivery_orders_id_fkey";

-- AlterTable
ALTER TABLE "business" ADD COLUMN     "sales_representative_id" TEXT;

-- AlterTable
ALTER TABLE "group_users" DROP COLUMN "allowance";

-- AlterTable
ALTER TABLE "order_lobbies" ALTER COLUMN "delivery_orders_id" DROP NOT NULL;

-- AlterTable
ALTER TABLE "promo_ads" ADD COLUMN     "active" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "active_at" TIMESTAMP(3),
ADD COLUMN     "active_until" TIMESTAMP(3),
ADD COLUMN     "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "promo_sections" ADD COLUMN     "active" BOOLEAN NOT NULL DEFAULT true;

-- AlterTable
ALTER TABLE "promo_sections_buy" ALTER COLUMN "stripe_subscription_id" DROP NOT NULL;

-- CreateTable
CREATE TABLE "allowances" (
    "allowance_id" UUID NOT NULL,
    "group_user_id" UUID NOT NULL,
    "amount_taxi" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "amount_transfer" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "amount_delivery" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "amount_any" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "allowances_pkey" PRIMARY KEY ("allowance_id")
);

-- CreateTable
CREATE TABLE "word_bundles" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "word_bundles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_word_bundlesTowords" (
    "A" UUID NOT NULL,
    "B" UUID NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "allowances_group_user_id_key" ON "allowances"("group_user_id");

-- CreateIndex
CREATE UNIQUE INDEX "_word_bundlesTowords_AB_unique" ON "_word_bundlesTowords"("A", "B");

-- CreateIndex
CREATE INDEX "_word_bundlesTowords_B_index" ON "_word_bundlesTowords"("B");

-- AddForeignKey
ALTER TABLE "allowances" ADD CONSTRAINT "allowances_group_user_id_fkey" FOREIGN KEY ("group_user_id") REFERENCES "group_users"("group_user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "order_lobbies" ADD CONSTRAINT "order_lobbies_delivery_orders_id_fkey" FOREIGN KEY ("delivery_orders_id") REFERENCES "delivery_orders"("order_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_word_bundlesTowords" ADD CONSTRAINT "_word_bundlesTowords_A_fkey" FOREIGN KEY ("A") REFERENCES "word_bundles"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_word_bundlesTowords" ADD CONSTRAINT "_word_bundlesTowords_B_fkey" FOREIGN KEY ("B") REFERENCES "words"("word_id") ON DELETE CASCADE ON UPDATE CASCADE;
