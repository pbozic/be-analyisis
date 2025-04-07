/*
  Warnings:

  - You are about to drop the column `vehicle_drivers_id` on the `vehicles` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "vehicles" DROP COLUMN "vehicle_drivers_id";

-- CreateTable
CREATE TABLE "scoring_points" (
    "scoring_points_id" UUID NOT NULL,
    "business_id" UUID NOT NULL,
    "user_id" UUID NOT NULL,
    "delivery_order_id" UUID NOT NULL,
    "taxi_order_id" UUID NOT NULL,
    "points" INTEGER NOT NULL,
    "isPenalty" BOOLEAN NOT NULL,
    "seconds" INTEGER NOT NULL,
    "reason" TEXT NOT NULL,

    CONSTRAINT "scoring_points_pkey" PRIMARY KEY ("scoring_points_id")
);

-- AddForeignKey
ALTER TABLE "scoring_points" ADD CONSTRAINT "scoring_points_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "scoring_points" ADD CONSTRAINT "scoring_points_business_id_fkey" FOREIGN KEY ("business_id") REFERENCES "business"("business_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "scoring_points" ADD CONSTRAINT "scoring_points_delivery_order_id_fkey" FOREIGN KEY ("delivery_order_id") REFERENCES "delivery_orders"("order_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "scoring_points" ADD CONSTRAINT "scoring_points_taxi_order_id_fkey" FOREIGN KEY ("taxi_order_id") REFERENCES "taxi_orders"("order_id") ON DELETE RESTRICT ON UPDATE CASCADE;
