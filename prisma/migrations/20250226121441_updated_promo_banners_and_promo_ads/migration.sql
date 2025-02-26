/*
  Warnings:

  - You are about to drop the column `promo_banners_id` on the `documents` table. All the data in the column will be lost.
  - You are about to drop the column `banner_id` on the `promo_ads` table. All the data in the column will be lost.
  - You are about to alter the column `amount` on the `wallet_funds` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.
  - Added the required column `file_id` to the `promo_banners` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "documents" DROP CONSTRAINT "documents_promo_banners_id_fkey";

-- DropForeignKey
ALTER TABLE "promo_ads" DROP CONSTRAINT "promo_ads_banner_id_fkey";

-- AlterTable
ALTER TABLE "documents" DROP COLUMN "promo_banners_id";

-- AlterTable
ALTER TABLE "promo_ads" DROP COLUMN "banner_id",
ALTER COLUMN "code" DROP NOT NULL;

-- AlterTable
ALTER TABLE "promo_banners" ADD COLUMN     "file_id" UUID NOT NULL,
ADD COLUMN     "promo_ads_id" UUID,
ALTER COLUMN "promo_section_buy_id" DROP NOT NULL;

-- AlterTable
ALTER TABLE "wallet_funds" ALTER COLUMN "amount" SET DATA TYPE INTEGER;

-- AddForeignKey
ALTER TABLE "promo_banners" ADD CONSTRAINT "promo_banners_file_id_fkey" FOREIGN KEY ("file_id") REFERENCES "files"("file_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "promo_banners" ADD CONSTRAINT "promo_banners_promo_ads_id_fkey" FOREIGN KEY ("promo_ads_id") REFERENCES "promo_ads"("promo_ads_id") ON DELETE SET NULL ON UPDATE CASCADE;
