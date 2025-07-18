/*
  Warnings:

  - You are about to drop the column `parent__booking_id` on the `booking` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "booking" DROP CONSTRAINT "booking_parent__booking_id_fkey";

-- AlterTable
ALTER TABLE "booking" DROP COLUMN "parent__booking_id",
ADD COLUMN     "parent_booking_id" UUID;

-- AddForeignKey
ALTER TABLE "booking" ADD CONSTRAINT "booking_parent_booking_id_fkey" FOREIGN KEY ("parent_booking_id") REFERENCES "booking"("booking_id") ON DELETE SET NULL ON UPDATE CASCADE;
