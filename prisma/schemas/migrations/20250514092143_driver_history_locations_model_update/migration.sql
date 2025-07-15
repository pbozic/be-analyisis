/*
  Warnings:

  - You are about to drop the column `order_id` on the `driver_history_locations` table. All the data in the column will be lost.
  - The `status` column on the `driver_history_locations` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- DropForeignKey
ALTER TABLE "driver_history_locations" DROP CONSTRAINT "driver_history_locations_order_id_fkey";

-- AlterTable
ALTER TABLE "driver_history_locations" DROP COLUMN "order_id",
ADD COLUMN     "delivery_order_id" UUID,
ADD COLUMN     "taxi_order_id" UUID,
DROP COLUMN "status",
ADD COLUMN     "status" TEXT;

-- AddForeignKey
ALTER TABLE "driver_history_locations" ADD CONSTRAINT "driver_history_locations_taxi_order_id_fkey" FOREIGN KEY ("taxi_order_id") REFERENCES "taxi_orders"("order_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "driver_history_locations" ADD CONSTRAINT "driver_history_locations_delivery_order_id_fkey" FOREIGN KEY ("delivery_order_id") REFERENCES "delivery_orders"("order_id") ON DELETE CASCADE ON UPDATE CASCADE;
