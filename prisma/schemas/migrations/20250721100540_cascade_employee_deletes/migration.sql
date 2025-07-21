-- DropForeignKey
ALTER TABLE "booking_slots" DROP CONSTRAINT "booking_slots_schedule_slot_id_fkey";

-- DropForeignKey
ALTER TABLE "schedule_employee" DROP CONSTRAINT "schedule_employee_employee_id_fkey";

-- DropForeignKey
ALTER TABLE "schedule_slot" DROP CONSTRAINT "schedule_slot_schedule_id_fkey";

-- DropForeignKey
ALTER TABLE "schedule_slot_exceptions" DROP CONSTRAINT "schedule_slot_exceptions_schedule_slot_id_fkey";

-- DropForeignKey
ALTER TABLE "service_assignment" DROP CONSTRAINT "service_assignment_employee_id_fkey";

-- AddForeignKey
ALTER TABLE "service_assignment" ADD CONSTRAINT "service_assignment_employee_id_fkey" FOREIGN KEY ("employee_id") REFERENCES "employee"("employee_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "schedule_employee" ADD CONSTRAINT "schedule_employee_employee_id_fkey" FOREIGN KEY ("employee_id") REFERENCES "employee"("employee_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "schedule_slot" ADD CONSTRAINT "schedule_slot_schedule_id_fkey" FOREIGN KEY ("schedule_id") REFERENCES "schedule"("schedule_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "schedule_slot_exceptions" ADD CONSTRAINT "schedule_slot_exceptions_schedule_slot_id_fkey" FOREIGN KEY ("schedule_slot_id") REFERENCES "schedule_slot"("schedule_slot_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "booking_slots" ADD CONSTRAINT "booking_slots_schedule_slot_id_fkey" FOREIGN KEY ("schedule_slot_id") REFERENCES "schedule_slot"("schedule_slot_id") ON DELETE CASCADE ON UPDATE CASCADE;
