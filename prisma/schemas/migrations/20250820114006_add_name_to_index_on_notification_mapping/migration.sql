/*
  Warnings:

  - You are about to drop the column `channel` on the `notification_mapping` table. All the data in the column will be lost.
  - You are about to drop the column `locale` on the `notification_mapping` table. All the data in the column will be lost.
  - You are about to drop the column `locale` on the `notification_message` table. All the data in the column will be lost.
  - You are about to drop the column `default_locale` on the `notification_template_version` table. All the data in the column will be lost.
  - You are about to drop the `notification_template_channel_content` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[reservation_module_id,notification_event_id]` on the table `notification_mapping` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "notification_template_channel_content" DROP CONSTRAINT "notification_template_channel_content_notification_templat_fkey";

-- DropIndex
DROP INDEX "uniq_active_slot";

-- AlterTable
ALTER TABLE "notification_event" ALTER COLUMN "name" SET DATA TYPE TEXT,
ALTER COLUMN "description" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "notification_mapping" DROP COLUMN "channel",
DROP COLUMN "locale";

-- AlterTable
ALTER TABLE "notification_message" DROP COLUMN "locale";

-- AlterTable
ALTER TABLE "notification_template_version" DROP COLUMN "default_locale",
ADD COLUMN     "body_text" TEXT,
ADD COLUMN     "subject" TEXT;

-- DropTable
DROP TABLE "notification_template_channel_content";

-- CreateIndex
CREATE UNIQUE INDEX "uniq_active_slot_no_locale" ON "notification_mapping"("reservation_module_id", "notification_event_id");
