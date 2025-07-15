/*
  Warnings:

  - Changed the type of `service_type` on the `promo_ads` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `service_type` on the `promo_sections` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "PROMO_SERVICE_TYPES" AS ENUM ('TAXI', 'DELIVERY');

-- AlterTable
ALTER TABLE "promo_ads" DROP COLUMN "service_type",
ADD COLUMN     "service_type" "PROMO_SERVICE_TYPES" NOT NULL;

-- AlterTable
ALTER TABLE "promo_sections" DROP COLUMN "service_type",
ADD COLUMN     "service_type" "PROMO_SERVICE_TYPES" NOT NULL;
