/*
  Warnings:

  - The values [INAPP] on the enum `NOTIFICATION_CHANNEL` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `subscription_exires_at` on the `reservation_module` table. All the data in the column will be lost.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "NOTIFICATION_CHANNEL_new" AS ENUM ('EMAIL', 'SMS', 'PUSH');
ALTER TABLE "notification_template_channel_content" ALTER COLUMN "channel" TYPE "NOTIFICATION_CHANNEL_new" USING ("channel"::text::"NOTIFICATION_CHANNEL_new");
ALTER TABLE "notification_mapping" ALTER COLUMN "channel" TYPE "NOTIFICATION_CHANNEL_new" USING ("channel"::text::"NOTIFICATION_CHANNEL_new");
ALTER TABLE "notification_preference" ALTER COLUMN "channel" TYPE "NOTIFICATION_CHANNEL_new" USING ("channel"::text::"NOTIFICATION_CHANNEL_new");
ALTER TABLE "notification_provider_credential" ALTER COLUMN "channel" TYPE "NOTIFICATION_CHANNEL_new" USING ("channel"::text::"NOTIFICATION_CHANNEL_new");
ALTER TABLE "notification_message" ALTER COLUMN "channel" TYPE "NOTIFICATION_CHANNEL_new" USING ("channel"::text::"NOTIFICATION_CHANNEL_new");
ALTER TYPE "NOTIFICATION_CHANNEL" RENAME TO "NOTIFICATION_CHANNEL_old";
ALTER TYPE "NOTIFICATION_CHANNEL_new" RENAME TO "NOTIFICATION_CHANNEL";
DROP TYPE "NOTIFICATION_CHANNEL_old";
COMMIT;

-- AlterTable
ALTER TABLE "notification_template_version" ALTER COLUMN "status" SET DEFAULT 'PUBLISHED';

-- AlterTable
ALTER TABLE "reservation_module" DROP COLUMN "subscription_exires_at",
ADD COLUMN     "subscription_expires_at" TIMESTAMP(3);

-- AddForeignKey
ALTER TABLE "notification_message" ADD CONSTRAINT "notification_message_notification_template_id_template_ver_fkey" FOREIGN KEY ("notification_template_id", "template_version") REFERENCES "notification_template_version"("notification_template_id", "version") ON DELETE SET NULL ON UPDATE CASCADE;
