/*
  Warnings:

  - A unique constraint covering the columns `[schedule_id,schedule_employee_id,date]` on the table `schedule_slot` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "schedule_slot_schedule_id_schedule_employee_id_key";

-- CreateIndex
CREATE UNIQUE INDEX "schedule_slot_schedule_id_schedule_employee_id_date_key" ON "schedule_slot"("schedule_id", "schedule_employee_id", "date");
