/*
  Warnings:

  - You are about to drop the column `assigned_employee_id` on the `booking` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "booking" DROP CONSTRAINT "booking_assigned_employee_id_fkey";

-- AlterTable
ALTER TABLE "booking" DROP COLUMN "assigned_employee_id",
ADD COLUMN     "employee_id" UUID;

-- AddForeignKey
ALTER TABLE "booking" ADD CONSTRAINT "booking_employee_id_fkey" FOREIGN KEY ("employee_id") REFERENCES "employee"("employee_id") ON DELETE SET NULL ON UPDATE CASCADE;
