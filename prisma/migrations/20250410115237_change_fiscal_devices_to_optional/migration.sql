-- DropForeignKey
ALTER TABLE "business" DROP CONSTRAINT "business_fiscal_devices_id_fkey";

-- AlterTable
ALTER TABLE "business" ALTER COLUMN "fiscal_devices_id" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "business" ADD CONSTRAINT "business_fiscal_devices_id_fkey" FOREIGN KEY ("fiscal_devices_id") REFERENCES "fiscal_devices"("fiscal_devices_id") ON DELETE SET NULL ON UPDATE CASCADE;
