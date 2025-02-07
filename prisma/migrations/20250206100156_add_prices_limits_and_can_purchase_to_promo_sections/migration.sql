/*
  Warnings:

  - Added the required column `canPurchase` to the `promo_sections` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "business" ADD COLUMN     "activated_at" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "promo_sections" ADD COLUMN     "canPurchase" BOOLEAN NOT NULL,
ADD COLUMN     "limits" JSONB,
ADD COLUMN     "prices" JSONB,
ADD COLUMN     "promo_duration_days" INTEGER NOT NULL DEFAULT 30;

-- AlterTable
ALTER TABLE "promo_sections_buy" ALTER COLUMN "active_at" DROP NOT NULL,
ALTER COLUMN "expires_at" DROP NOT NULL;

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "activated_at" TIMESTAMP(3);
