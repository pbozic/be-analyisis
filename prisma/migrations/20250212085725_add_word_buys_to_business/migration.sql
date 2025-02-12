/*
  Warnings:

  - Added the required column `business_id` to the `word_buy` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "word_buy" ADD COLUMN     "business_id" UUID NOT NULL;

-- AddForeignKey
ALTER TABLE "word_buy" ADD CONSTRAINT "word_buy_business_id_fkey" FOREIGN KEY ("business_id") REFERENCES "business"("business_id") ON DELETE RESTRICT ON UPDATE CASCADE;
