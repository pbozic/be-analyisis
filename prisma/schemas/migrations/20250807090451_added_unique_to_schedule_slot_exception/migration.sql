/*
  Warnings:

  - A unique constraint covering the columns `[schedule_slot_id,date,start_time,end_time,type]` on the table `schedule_slot_exceptions` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "schedule_slot_exceptions_schedule_slot_id_date_start_time_e_key" ON "schedule_slot_exceptions"("schedule_slot_id", "date", "start_time", "end_time", "type");
