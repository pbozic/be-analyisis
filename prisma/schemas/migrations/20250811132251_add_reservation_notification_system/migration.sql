-- CreateEnum
CREATE TYPE "NOTIFICATION_CHANNEL" AS ENUM ('EMAIL', 'SMS', 'PUSH', 'INAPP');

-- CreateEnum
CREATE TYPE "TEMPLATE_VERSION_STATUS" AS ENUM ('DRAFT', 'PUBLISHED', 'ARCHIVED');

-- CreateEnum
CREATE TYPE "MESSAGE_STATUS" AS ENUM ('QUEUED', 'SENT', 'DELIVERED', 'BOUNCED', 'FAILED', 'SUPPRESSED');

-- CreateTable
CREATE TABLE "notification_event" (
    "notification_event_id" UUID NOT NULL,
    "key" TEXT NOT NULL,
    "name" JSONB NOT NULL,
    "description" JSONB,

    CONSTRAINT "notification_event_pkey" PRIMARY KEY ("notification_event_id")
);

-- CreateTable
CREATE TABLE "notification_template" (
    "notification_template_id" UUID NOT NULL,
    "reservation_module_id" UUID NOT NULL,
    "key" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "notification_template_pkey" PRIMARY KEY ("notification_template_id")
);

-- CreateTable
CREATE TABLE "notification_template_version" (
    "notification_template_version_id" UUID NOT NULL,
    "notification_template_id" UUID NOT NULL,
    "version" INTEGER NOT NULL,
    "status" "TEMPLATE_VERSION_STATUS" NOT NULL DEFAULT 'DRAFT',
    "variables_json_schema" JSONB NOT NULL,
    "default_locale" TEXT,
    "compiled_artifacts" JSONB,
    "created_by_user_id" UUID,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "notification_template_version_pkey" PRIMARY KEY ("notification_template_version_id")
);

-- CreateTable
CREATE TABLE "notification_template_channel_content" (
    "notification_template_channel_content_id" UUID NOT NULL,
    "notification_template_version_id" UUID NOT NULL,
    "channel" "NOTIFICATION_CHANNEL" NOT NULL,
    "locale" TEXT NOT NULL,
    "subject" TEXT,
    "body_text" TEXT,
    "body_html" TEXT,
    "metadata" JSONB,

    CONSTRAINT "notification_template_channel_content_pkey" PRIMARY KEY ("notification_template_channel_content_id")
);

-- CreateTable
CREATE TABLE "notification_mapping" (
    "notification_mapping_id" UUID NOT NULL,
    "reservation_module_id" UUID NOT NULL,
    "notification_event_id" UUID NOT NULL,
    "notification_template_version_id" UUID NOT NULL,
    "channel" "NOTIFICATION_CHANNEL",
    "locale" TEXT,
    "conditions" JSONB,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "notification_mapping_pkey" PRIMARY KEY ("notification_mapping_id")
);

-- CreateTable
CREATE TABLE "notification_preference" (
    "notification_preference_id" UUID NOT NULL,
    "reservation_module_id" UUID NOT NULL,
    "notification_event_id" UUID NOT NULL,
    "channel" "NOTIFICATION_CHANNEL" NOT NULL,
    "enabled" BOOLEAN NOT NULL DEFAULT true,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "notification_preference_pkey" PRIMARY KEY ("notification_preference_id")
);

-- CreateTable
CREATE TABLE "notification_provider_credential" (
    "notification_provider_credential_id" UUID NOT NULL,
    "reservation_module_id" UUID NOT NULL,
    "channel" "NOTIFICATION_CHANNEL" NOT NULL,
    "provider" TEXT NOT NULL,
    "config" JSONB NOT NULL,
    "is_default" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "notification_provider_credential_pkey" PRIMARY KEY ("notification_provider_credential_id")
);

-- CreateTable
CREATE TABLE "notification_message" (
    "notification_message_id" UUID NOT NULL,
    "reservation_module_id" UUID NOT NULL,
    "notification_event_id" UUID NOT NULL,
    "channel" "NOTIFICATION_CHANNEL" NOT NULL,
    "locale" TEXT,
    "notification_template_id" UUID,
    "template_version" INTEGER,
    "to_address" TEXT,
    "subject" TEXT,
    "body_text" TEXT,
    "body_html" TEXT,
    "variables" JSONB NOT NULL,
    "rendered_at" TIMESTAMP(3) NOT NULL,
    "provider_message_id" TEXT,
    "status" "MESSAGE_STATUS" NOT NULL DEFAULT 'QUEUED',
    "error" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "notification_message_pkey" PRIMARY KEY ("notification_message_id")
);

-- CreateTable
CREATE TABLE "notification_message_event" (
    "notification_message_event_id" UUID NOT NULL,
    "notification_message_id" UUID NOT NULL,
    "type" TEXT NOT NULL,
    "provider_raw" JSONB,
    "occurred_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "notification_message_event_pkey" PRIMARY KEY ("notification_message_event_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "notification_event_key_key" ON "notification_event"("key");

-- CreateIndex
CREATE UNIQUE INDEX "notification_template_reservation_module_id_key_key" ON "notification_template"("reservation_module_id", "key");

-- CreateIndex
CREATE UNIQUE INDEX "notification_template_version_notification_template_id_vers_key" ON "notification_template_version"("notification_template_id", "version");

-- CreateIndex
CREATE UNIQUE INDEX "notification_template_channel_content_notification_template_key" ON "notification_template_channel_content"("notification_template_version_id", "channel", "locale");

-- CreateIndex
CREATE INDEX "notification_mapping_reservation_module_id_notification_eve_idx" ON "notification_mapping"("reservation_module_id", "notification_event_id");

-- CreateIndex
CREATE UNIQUE INDEX "uniq_active_slot" ON "notification_mapping"("reservation_module_id", "notification_event_id", "channel", "locale");

-- CreateIndex
CREATE UNIQUE INDEX "notification_preference_reservation_module_id_notification__key" ON "notification_preference"("reservation_module_id", "notification_event_id", "channel");

-- CreateIndex
CREATE INDEX "notification_provider_credential_reservation_module_id_chan_idx" ON "notification_provider_credential"("reservation_module_id", "channel", "is_default");

-- CreateIndex
CREATE UNIQUE INDEX "notification_provider_credential_reservation_module_id_chan_key" ON "notification_provider_credential"("reservation_module_id", "channel", "provider");

-- CreateIndex
CREATE INDEX "notification_message_reservation_module_id_notification_eve_idx" ON "notification_message"("reservation_module_id", "notification_event_id", "created_at");

-- CreateIndex
CREATE INDEX "notification_message_channel_status_created_at_idx" ON "notification_message"("channel", "status", "created_at");

-- CreateIndex
CREATE INDEX "notification_message_event_notification_message_id_occurred_idx" ON "notification_message_event"("notification_message_id", "occurred_at");

-- AddForeignKey
ALTER TABLE "notification_template" ADD CONSTRAINT "notification_template_reservation_module_id_fkey" FOREIGN KEY ("reservation_module_id") REFERENCES "reservation_module"("reservation_module_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "notification_template_version" ADD CONSTRAINT "notification_template_version_notification_template_id_fkey" FOREIGN KEY ("notification_template_id") REFERENCES "notification_template"("notification_template_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "notification_template_channel_content" ADD CONSTRAINT "notification_template_channel_content_notification_templat_fkey" FOREIGN KEY ("notification_template_version_id") REFERENCES "notification_template_version"("notification_template_version_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "notification_mapping" ADD CONSTRAINT "notification_mapping_reservation_module_id_fkey" FOREIGN KEY ("reservation_module_id") REFERENCES "reservation_module"("reservation_module_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "notification_mapping" ADD CONSTRAINT "notification_mapping_notification_event_id_fkey" FOREIGN KEY ("notification_event_id") REFERENCES "notification_event"("notification_event_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "notification_mapping" ADD CONSTRAINT "notification_mapping_notification_template_version_id_fkey" FOREIGN KEY ("notification_template_version_id") REFERENCES "notification_template_version"("notification_template_version_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "notification_preference" ADD CONSTRAINT "notification_preference_reservation_module_id_fkey" FOREIGN KEY ("reservation_module_id") REFERENCES "reservation_module"("reservation_module_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "notification_preference" ADD CONSTRAINT "notification_preference_notification_event_id_fkey" FOREIGN KEY ("notification_event_id") REFERENCES "notification_event"("notification_event_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "notification_provider_credential" ADD CONSTRAINT "notification_provider_credential_reservation_module_id_fkey" FOREIGN KEY ("reservation_module_id") REFERENCES "reservation_module"("reservation_module_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "notification_message" ADD CONSTRAINT "notification_message_reservation_module_id_fkey" FOREIGN KEY ("reservation_module_id") REFERENCES "reservation_module"("reservation_module_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "notification_message" ADD CONSTRAINT "notification_message_notification_event_id_fkey" FOREIGN KEY ("notification_event_id") REFERENCES "notification_event"("notification_event_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "notification_message" ADD CONSTRAINT "notification_message_notification_template_id_fkey" FOREIGN KEY ("notification_template_id") REFERENCES "notification_template"("notification_template_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "notification_message_event" ADD CONSTRAINT "notification_message_event_notification_message_id_fkey" FOREIGN KEY ("notification_message_id") REFERENCES "notification_message"("notification_message_id") ON DELETE CASCADE ON UPDATE CASCADE;
