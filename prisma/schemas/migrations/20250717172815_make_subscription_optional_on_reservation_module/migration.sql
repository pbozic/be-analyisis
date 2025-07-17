-- DropForeignKey
ALTER TABLE "reservation_module" DROP CONSTRAINT "reservation_module_subscription_id_fkey";

-- AlterTable
ALTER TABLE "reservation_module" ALTER COLUMN "subscription_id" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "reservation_module" ADD CONSTRAINT "reservation_module_subscription_id_fkey" FOREIGN KEY ("subscription_id") REFERENCES "subscription"("subscription_id") ON DELETE SET NULL ON UPDATE CASCADE;
