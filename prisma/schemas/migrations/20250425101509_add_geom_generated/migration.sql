-- This is an empty migration.
ALTER TABLE "settlements"
ADD COLUMN "geom_generated" geometry GENERATED ALWAYS AS (
  ST_SetSRID(ST_GeomFromGeoJSON("geojson"::text), 4326)
) STORED;

CREATE INDEX "settlements_geom_generated_idx"
ON "settlements"
USING GIST ("geom_generated");

ALTER TABLE "municipalities"
ADD COLUMN "geom_generated" geometry GENERATED ALWAYS AS (
  ST_SetSRID(ST_GeomFromGeoJSON("geojson"::text), 4326)
) STORED;

CREATE INDEX "municipalities_geom_generated_idx"
ON "municipalities"
USING GIST ("geom_generated");