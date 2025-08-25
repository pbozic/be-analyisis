/*
  Warnings:

  - You are about to drop the column `tax_rates_id` on the `service` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "service" DROP CONSTRAINT "service_tax_rates_id_fkey";

-- AlterTable
ALTER TABLE "service" DROP COLUMN "tax_rates_id",
ADD COLUMN     "tax_rate_id" UUID;

-- AddForeignKey
ALTER TABLE "service" ADD CONSTRAINT "service_tax_rate_id_fkey" FOREIGN KEY ("tax_rate_id") REFERENCES "tax_rates"("tax_rates_id") ON DELETE SET NULL ON UPDATE CASCADE;
