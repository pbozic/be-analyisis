/*
  Warnings:

  - Added the required column `employee_id` to the `schedule_slot` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "schedule_slot" ADD COLUMN     "employee_id" UUID NOT NULL;

-- AddForeignKey
ALTER TABLE "schedule_slot" ADD CONSTRAINT "schedule_slot_employee_id_fkey" FOREIGN KEY ("employee_id") REFERENCES "employee"("employee_id") ON DELETE RESTRICT ON UPDATE CASCADE;
