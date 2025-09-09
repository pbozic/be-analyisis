/*
  Warnings:

  - A unique constraint covering the columns `[addon_id,reservation_module_id]` on the table `business_addon` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "business_addon" ADD COLUMN     "quantity" INTEGER NOT NULL DEFAULT 1;

-- CreateIndex
CREATE UNIQUE INDEX "business_addon_addon_id_reservation_module_id_key" ON "business_addon"("addon_id", "reservation_module_id");
