-- DropForeignKey
ALTER TABLE "service_assignment" DROP CONSTRAINT "service_assignment_service_id_fkey";

-- AddForeignKey
ALTER TABLE "service_assignment" ADD CONSTRAINT "service_assignment_service_id_fkey" FOREIGN KEY ("service_id") REFERENCES "service"("service_id") ON DELETE CASCADE ON UPDATE CASCADE;
