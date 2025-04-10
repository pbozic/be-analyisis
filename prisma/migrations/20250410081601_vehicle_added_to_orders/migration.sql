-- AlterTable
ALTER TABLE "delivery_orders" ADD COLUMN     "vehicle_id" UUID;

-- AlterTable
ALTER TABLE "taxi_orders" ADD COLUMN     "vehicle_id" UUID;

-- AddForeignKey
ALTER TABLE "taxi_orders" ADD CONSTRAINT "taxi_orders_vehicle_id_fkey" FOREIGN KEY ("vehicle_id") REFERENCES "vehicles"("vehicle_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "delivery_orders" ADD CONSTRAINT "delivery_orders_vehicle_id_fkey" FOREIGN KEY ("vehicle_id") REFERENCES "vehicles"("vehicle_id") ON DELETE SET NULL ON UPDATE CASCADE;
