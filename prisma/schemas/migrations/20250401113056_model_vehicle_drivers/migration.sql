/*
  Warnings:

  - You are about to drop the column `driver_id` on the `vehicles` table. All the data in the column will be lost.
  - You are about to drop the `scoring_points` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "vehicles" DROP CONSTRAINT "vehicles_driver_id_fkey";

-- AlterTable
ALTER TABLE "vehicles" DROP COLUMN "driver_id",
ADD COLUMN     "vehicle_drivers_id" UUID;

-- CreateTable
CREATE TABLE "vehicle_drivers" (
    "vehicle_drivers_id" UUID NOT NULL,
    "vehicle_id" UUID NOT NULL,
    "driver_id" UUID NOT NULL,
    "can_drive" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "vehicle_drivers_pkey" PRIMARY KEY ("vehicle_drivers_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "vehicle_drivers_vehicle_drivers_id_key" ON "vehicle_drivers"("vehicle_drivers_id");

-- CreateIndex
CREATE INDEX "vehicle_drivers_driver_id_can_drive_idx" ON "vehicle_drivers"("driver_id", "can_drive");

-- CreateIndex
CREATE INDEX "vehicle_drivers_vehicle_id_can_drive_idx" ON "vehicle_drivers"("vehicle_id", "can_drive");

-- CreateIndex
CREATE UNIQUE INDEX "vehicle_drivers_vehicle_id_driver_id_key" ON "vehicle_drivers"("vehicle_id", "driver_id");

-- AddForeignKey
ALTER TABLE "vehicle_drivers" ADD CONSTRAINT "vehicle_drivers_vehicle_id_fkey" FOREIGN KEY ("vehicle_id") REFERENCES "vehicles"("vehicle_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "vehicle_drivers" ADD CONSTRAINT "vehicle_drivers_driver_id_fkey" FOREIGN KEY ("driver_id") REFERENCES "drivers"("driver_id") ON DELETE RESTRICT ON UPDATE CASCADE;
