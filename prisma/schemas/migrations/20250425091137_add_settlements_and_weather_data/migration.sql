-- CreateTable
CREATE TABLE "settelments" (
    "settelments_id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "municipalities_id" UUID NOT NULL,
    "eid_naselje" TEXT,
    "feature_id" TEXT,
    "geojson" JSON NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "settelments_pkey" PRIMARY KEY ("settelments_id")
);

-- CreateTable
CREATE TABLE "weather_data" (
    "weather_data_id" UUID NOT NULL,
    "time_epoch" BIGINT NOT NULL,
    "time" TIMESTAMP(3) NOT NULL,
    "temp_c" DOUBLE PRECISION NOT NULL,
    "is_day" BOOLEAN NOT NULL,
    "condition_text" TEXT NOT NULL,
    "condition_icon" TEXT NOT NULL,
    "condition_code" INTEGER NOT NULL,
    "wind_kph" DOUBLE PRECISION NOT NULL,
    "wind_degree" INTEGER NOT NULL,
    "wind_dir" TEXT NOT NULL,
    "pressure_mb" DOUBLE PRECISION NOT NULL,
    "precip_mm" DOUBLE PRECISION NOT NULL,
    "snow_cm" DOUBLE PRECISION NOT NULL,
    "humidity" INTEGER NOT NULL,
    "cloud" INTEGER NOT NULL,
    "feelslike_c" DOUBLE PRECISION NOT NULL,
    "windchill_c" DOUBLE PRECISION NOT NULL,
    "heatindex_c" DOUBLE PRECISION NOT NULL,
    "dewpoint_c" DOUBLE PRECISION NOT NULL,
    "will_it_rain" BOOLEAN NOT NULL,
    "chance_of_rain" INTEGER NOT NULL,
    "will_it_snow" BOOLEAN NOT NULL,
    "chance_of_snow" INTEGER NOT NULL,
    "vis_km" DOUBLE PRECISION NOT NULL,
    "gust_kph" DOUBLE PRECISION NOT NULL,
    "uv" DOUBLE PRECISION NOT NULL,
    "icon" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "municipalities_id" UUID NOT NULL,
    "settelments_id" UUID,

    CONSTRAINT "weather_data_pkey" PRIMARY KEY ("weather_data_id")
);

-- CreateIndex
CREATE INDEX "settelments_name_idx" ON "settelments"("name");

-- CreateIndex
CREATE INDEX "settelments_eid_naselje_idx" ON "settelments"("eid_naselje");

-- CreateIndex
CREATE INDEX "settelments_feature_id_idx" ON "settelments"("feature_id");

-- CreateIndex
CREATE INDEX "weather_data_time_epoch_idx" ON "weather_data"("time_epoch");

-- CreateIndex
CREATE INDEX "weather_data_municipalities_id_idx" ON "weather_data"("municipalities_id");

-- CreateIndex
CREATE INDEX "weather_data_settelments_id_idx" ON "weather_data"("settelments_id");

-- CreateIndex
CREATE INDEX "weather_data_time_idx" ON "weather_data"("time");

-- CreateIndex
CREATE UNIQUE INDEX "weather_data_time_epoch_settelments_id_key" ON "weather_data"("time_epoch", "settelments_id");

-- AddForeignKey
ALTER TABLE "settelments" ADD CONSTRAINT "settelments_municipalities_id_fkey" FOREIGN KEY ("municipalities_id") REFERENCES "municipalities"("municipalities_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "weather_data" ADD CONSTRAINT "weather_data_municipalities_id_fkey" FOREIGN KEY ("municipalities_id") REFERENCES "municipalities"("municipalities_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "weather_data" ADD CONSTRAINT "weather_data_settelments_id_fkey" FOREIGN KEY ("settelments_id") REFERENCES "settelments"("settelments_id") ON DELETE SET NULL ON UPDATE CASCADE;

ALTER TABLE "settelments"
ADD COLUMN "geom_generated" geometry GENERATED ALWAYS AS (
  ST_SetSRID(ST_GeomFromGeoJSON("geojson"::text), 4326)
) STORED;

-- Dodamo prostorski indeks na generirani stolpec
CREATE INDEX "settelments_geom_generated_idx"
ON "settelments"
USING GIST ("geom_generated");