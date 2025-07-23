-- AlterTable
ALTER TABLE "delivery_orders" ADD COLUMN     "business_local_location_id" UUID;

-- AddForeignKey
ALTER TABLE "delivery_orders" ADD CONSTRAINT "delivery_orders_business_local_location_id_fkey" FOREIGN KEY ("business_local_location_id") REFERENCES "business_local_locations"("business_local_location_id") ON DELETE SET NULL ON UPDATE CASCADE;
