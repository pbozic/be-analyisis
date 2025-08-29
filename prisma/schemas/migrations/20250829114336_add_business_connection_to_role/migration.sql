-- AddForeignKey
ALTER TABLE "role" ADD CONSTRAINT "role_business_id_fkey" FOREIGN KEY ("business_id") REFERENCES "business"("business_id") ON DELETE SET NULL ON UPDATE CASCADE;
