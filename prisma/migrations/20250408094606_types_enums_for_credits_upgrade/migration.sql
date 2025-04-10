/*
  Warnings:

  - Added the required column `type` to the `wallet_funds` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "FUNDS_TYPE" AS ENUM ('FUNDS', 'CREDITS_ANY', 'CREDITS_TAXI', 'CREDITS_TRANSFER', 'CREDITS_DELIVERY');

-- AlterTable
ALTER TABLE "wallet_funds" DROP COLUMN "type",
ADD COLUMN     "type" "FUNDS_TYPE" NOT NULL;

-- DropEnum
DROP TYPE "CREDIT_TYPE";

-- CreateIndex
CREATE UNIQUE INDEX "wallet_funds_user_id_charge_id_reserved_order_reserved_busi_key" ON "wallet_funds"("user_id", "charge_id", "reserved_order", "reserved_business", "type", "status", "referral_id", "expires_at");
