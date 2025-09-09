/*
  Warnings:

  - You are about to drop the column `stripe_subscription_id` on the `reservation_module` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "reservation_module" DROP COLUMN "stripe_subscription_id",
ADD COLUMN     "stripe_subscription_schedule_id" TEXT;
