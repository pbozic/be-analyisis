/*
  Warnings:

  - You are about to drop the `credits` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "credits" DROP CONSTRAINT "credits_referral_id_fkey";

-- DropForeignKey
ALTER TABLE "credits" DROP CONSTRAINT "credits_user_id_fkey";

-- AlterTable
ALTER TABLE "wallet_funds" ADD COLUMN     "expires_at" TIMESTAMPTZ(6),
ADD COLUMN     "referral_id" UUID,
ADD COLUMN     "status" "CREDIT_STATUS" DEFAULT 'ACTIVE',
ADD COLUMN     "type" "CREDIT_TYPE";

-- DropTable
DROP TABLE "credits";

-- AddForeignKey
ALTER TABLE "wallet_funds" ADD CONSTRAINT "wallet_funds_referral_id_fkey" FOREIGN KEY ("referral_id") REFERENCES "referrals"("referral_id") ON DELETE SET NULL ON UPDATE CASCADE;
