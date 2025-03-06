/*
  Warnings:

  - A unique constraint covering the columns `[user_id,charge_id,reserved_order,reserved_business,type,status,referral_id,expires_at]` on the table `wallet_funds` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "wallet_funds_user_id_charge_id_reserved_order_reserved_busi_key" ON "wallet_funds"("user_id", "charge_id", "reserved_order", "reserved_business", "type", "status", "referral_id", "expires_at");
