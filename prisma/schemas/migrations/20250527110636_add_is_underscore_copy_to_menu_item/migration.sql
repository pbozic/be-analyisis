-- AlterTable
ALTER TABLE "menu_items" ADD COLUMN     "is_copy" BOOLEAN NOT NULL DEFAULT false;

-- AddForeignKey
ALTER TABLE "drivers" ADD CONSTRAINT "drivers_business_id_fkey" FOREIGN KEY ("business_id") REFERENCES "business"("business_id") ON DELETE SET NULL ON UPDATE CASCADE;
