/*
  Warnings:

  - You are about to drop the column `settelments_id` on the `weather_data` table. All the data in the column will be lost.
  - You are about to drop the `settelments` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[time_epoch,settlement_id]` on the table `weather_data` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "settelments" DROP CONSTRAINT "settelments_municipalities_id_fkey";

-- DropForeignKey
ALTER TABLE "weather_data" DROP CONSTRAINT "weather_data_settelments_id_fkey";

-- DropIndex
DROP INDEX "weather_data_settelments_id_idx";

-- DropIndex
DROP INDEX "weather_data_time_epoch_settelments_id_key";

-- AlterTable
ALTER TABLE "weather_data" DROP COLUMN "settelments_id",
ADD COLUMN     "settlement_id" UUID;

-- DropTable
DROP TABLE "settelments";

-- CreateTable
CREATE TABLE "settlement" (
    "settlement_id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "municipalities_id" UUID NOT NULL,
    "eid_naselje" TEXT,
    "feature_id" TEXT,
    "geojson" JSON NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "settlement_pkey" PRIMARY KEY ("settlement_id")
);

-- CreateIndex
CREATE INDEX "settlement_name_idx" ON "settlement"("name");

-- CreateIndex
CREATE INDEX "settlement_eid_naselje_idx" ON "settlement"("eid_naselje");

-- CreateIndex
CREATE INDEX "settlement_feature_id_idx" ON "settlement"("feature_id");

-- CreateIndex
CREATE INDEX "weather_data_settlement_id_idx" ON "weather_data"("settlement_id");

-- CreateIndex
CREATE UNIQUE INDEX "weather_data_time_epoch_settlement_id_key" ON "weather_data"("time_epoch", "settlement_id");

-- AddForeignKey
ALTER TABLE "settlement" ADD CONSTRAINT "settlement_municipalities_id_fkey" FOREIGN KEY ("municipalities_id") REFERENCES "municipalities"("municipalities_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "weather_data" ADD CONSTRAINT "weather_data_settlement_id_fkey" FOREIGN KEY ("settlement_id") REFERENCES "settlement"("settlement_id") ON DELETE SET NULL ON UPDATE CASCADE;
