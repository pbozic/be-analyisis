-- DropForeignKey
ALTER TABLE "payment_splits" DROP CONSTRAINT "payment_splits_payment_id_fkey";

-- AddForeignKey
ALTER TABLE "payment_splits" ADD CONSTRAINT "payment_splits_payment_id_fkey" FOREIGN KEY ("payment_id") REFERENCES "payments"("payment_id") ON DELETE CASCADE ON UPDATE CASCADE;
