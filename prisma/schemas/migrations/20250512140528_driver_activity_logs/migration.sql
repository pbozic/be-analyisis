-- CreateEnum
CREATE TYPE "ACTIVITY_TYPE" AS ENUM ('ONLINE', 'OFFLINE', 'LOCKED_OUT');

-- CreateTable
CREATE TABLE "driver_activity_settings" (
    "driver_activity_settings_id" UUID NOT NULL,
    "first_offline_lockout" INTEGER NOT NULL DEFAULT 30,
    "second_offline_lockout" INTEGER NOT NULL DEFAULT 120,
    "online_timeout" INTEGER NOT NULL DEFAULT 120,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "active" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "driver_activity_settings_pkey" PRIMARY KEY ("driver_activity_settings_id")
);

-- CreateTable
CREATE TABLE "driver_activity_logs" (
    "driver_activity_log_id" UUID NOT NULL,
    "driver_id" UUID NOT NULL,
    "activity_type" "ACTIVITY_TYPE" NOT NULL,
    "started_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "ended_at" TIMESTAMPTZ(6),
    "timeout_at" TIMESTAMPTZ(6),
    "lockout_until" TIMESTAMPTZ(6),

    CONSTRAINT "driver_activity_logs_pkey" PRIMARY KEY ("driver_activity_log_id")
);

-- CreateIndex
CREATE INDEX "driver_activity_logs_driver_id_activity_type_idx" ON "driver_activity_logs"("driver_id", "activity_type");

-- CreateIndex
CREATE INDEX "driver_activity_logs_started_at_idx" ON "driver_activity_logs"("started_at");

-- CreateIndex
CREATE INDEX "driver_activity_logs_ended_at_idx" ON "driver_activity_logs"("ended_at");

-- AddForeignKey
ALTER TABLE "driver_activity_logs" ADD CONSTRAINT "driver_activity_logs_driver_id_fkey" FOREIGN KEY ("driver_id") REFERENCES "drivers"("driver_id") ON DELETE RESTRICT ON UPDATE CASCADE;
