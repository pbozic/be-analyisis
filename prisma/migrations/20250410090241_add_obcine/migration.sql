-- AlterTable
ALTER TABLE "drivers" ADD COLUMN     "come_to_work_last_sent_at" TIMESTAMPTZ(6);

-- CreateTable
CREATE TABLE "municipalities" (
    "municipality_id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "geojson" JSON NOT NULL,
    "requires_license" BOOLEAN NOT NULL DEFAULT false,
    "gis_sifra" TEXT,
    "eid_obcina" TEXT,
    "feature_id" TEXT,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "municipalities_pkey" PRIMARY KEY ("municipality_id")
);


ALTER TABLE "municipalities"
ADD COLUMN "geom_generated" geometry GENERATED ALWAYS AS (
  ST_SetSRID(ST_GeomFromGeoJSON("geojson"::text), 4326)
) STORED;

-- Dodamo prostorski indeks na generirani stolpec
CREATE INDEX "municipalities_geom_generated_idx"
ON "municipalities"
USING GIST ("geom_generated");