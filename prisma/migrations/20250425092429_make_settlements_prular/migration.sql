/*
  Warnings:

  - You are about to drop the `settlement` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "settlement" DROP CONSTRAINT "settlement_municipalities_id_fkey";

-- DropForeignKey
ALTER TABLE "weather_data" DROP CONSTRAINT "weather_data_settlement_id_fkey";

-- DropTable
DROP TABLE "settlement";

-- CreateTable
CREATE TABLE "settlements" (
    "settlement_id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "municipalities_id" UUID NOT NULL,
    "eid_naselje" TEXT,
    "feature_id" TEXT,
    "geojson" JSON NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "settlements_pkey" PRIMARY KEY ("settlement_id")
);

-- CreateIndex
CREATE INDEX "settlements_name_idx" ON "settlements"("name");

-- CreateIndex
CREATE INDEX "settlements_eid_naselje_idx" ON "settlements"("eid_naselje");

-- CreateIndex
CREATE INDEX "settlements_feature_id_idx" ON "settlements"("feature_id");

-- AddForeignKey
ALTER TABLE "settlements" ADD CONSTRAINT "settlements_municipalities_id_fkey" FOREIGN KEY ("municipalities_id") REFERENCES "municipalities"("municipalities_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "weather_data" ADD CONSTRAINT "weather_data_settlement_id_fkey" FOREIGN KEY ("settlement_id") REFERENCES "settlements"("settlement_id") ON DELETE SET NULL ON UPDATE CASCADE;


ALTER TABLE "settlements"
ADD COLUMN "geom_generated" geometry GENERATED ALWAYS AS (
  ST_SetSRID(ST_GeomFromGeoJSON("geojson"::text), 4326)
) STORED;

-- Dodamo prostorski indeks na generirani stolpec
CREATE INDEX "settlements_geom_generated_idx"
ON "settlements"
USING GIST ("geom_generated");