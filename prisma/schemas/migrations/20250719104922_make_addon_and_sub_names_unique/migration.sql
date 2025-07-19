/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `addon` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `subscription` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "reservation_module" ADD COLUMN     "subscription_active_until" TIMESTAMP(3);

-- CreateIndex
CREATE UNIQUE INDEX "addon_name_key" ON "addon"("name");

-- CreateIndex
CREATE UNIQUE INDEX "subscription_name_key" ON "subscription"("name");
