/*
  Warnings:

  - A unique constraint covering the columns `[public_link_hash]` on the table `reservation_module` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "reservation_module" ADD COLUMN     "hours_before_cancel" INTEGER,
ADD COLUMN     "hours_before_reschedule" INTEGER,
ADD COLUMN     "public_link_hash" TEXT,
ADD COLUMN     "publicly_visible" BOOLEAN NOT NULL DEFAULT false;

-- CreateIndex
CREATE UNIQUE INDEX "reservation_module_public_link_hash_key" ON "reservation_module"("public_link_hash");
