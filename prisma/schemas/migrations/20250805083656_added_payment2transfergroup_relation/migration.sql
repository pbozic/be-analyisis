/*
  Warnings:

  - Added the required column `payment_id` to the `payment_transfer_groups` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "payment_transfer_groups" ADD COLUMN     "payment_id" UUID NOT NULL;

-- AddForeignKey
ALTER TABLE "payment_transfer_groups" ADD CONSTRAINT "payment_transfer_groups_payment_id_fkey" FOREIGN KEY ("payment_id") REFERENCES "payments"("payment_id") ON DELETE CASCADE ON UPDATE CASCADE;
