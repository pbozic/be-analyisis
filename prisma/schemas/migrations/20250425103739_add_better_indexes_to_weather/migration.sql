-- DropIndex
DROP INDEX "weather_data_time_idx";

-- CreateIndex
CREATE INDEX "weather_data_settlement_id_time_idx" ON "weather_data"("settlement_id", "time");

-- CreateIndex
CREATE INDEX "weather_data_settlement_id_time_epoch_idx" ON "weather_data"("settlement_id", "time_epoch");

-- CreateIndex
CREATE INDEX "weather_data_municipalities_id_time_epoch_idx" ON "weather_data"("municipalities_id", "time_epoch");

-- CreateIndex
CREATE INDEX "weather_data_municipalities_id_time_idx" ON "weather_data"("municipalities_id", "time");
