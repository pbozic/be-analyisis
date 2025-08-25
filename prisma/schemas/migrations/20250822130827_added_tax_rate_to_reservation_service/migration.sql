-- AlterTable
ALTER TABLE "service" ADD COLUMN     "tax_rates_id" UUID;

-- AddForeignKey
ALTER TABLE "service" ADD CONSTRAINT "service_tax_rates_id_fkey" FOREIGN KEY ("tax_rates_id") REFERENCES "tax_rates"("tax_rates_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- RenameIndex
ALTER INDEX "notification_mapping_reservation_module_id_notification_eve_idx" RENAME TO "idx_module_event";
