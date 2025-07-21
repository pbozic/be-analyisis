/*
  Warnings:

  - Added the required column `reservation_module_id` to the `service_category` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "service_category" ADD COLUMN     "reservation_module_id" UUID NOT NULL;

-- AddForeignKey
ALTER TABLE "service_category" ADD CONSTRAINT "service_category_reservation_module_id_fkey" FOREIGN KEY ("reservation_module_id") REFERENCES "reservation_module"("reservation_module_id") ON DELETE RESTRICT ON UPDATE CASCADE;
