/*
  Warnings:

  - The primary key for the `municipalities` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `geom_generated` on the `municipalities` table. All the data in the column will be lost.
  - You are about to drop the column `municipality_id` on the `municipalities` table. All the data in the column will be lost.
  - The required column `municipalities_id` was added to the `municipalities` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- DropIndex
DROP INDEX "municipalities_geom_generated_idx";

-- AlterTable
ALTER TABLE "municipalities" DROP CONSTRAINT "municipalities_pkey",
DROP COLUMN "geom_generated",
DROP COLUMN "municipality_id",
ADD COLUMN     "municipalities_id" UUID NOT NULL,
ADD CONSTRAINT "municipalities_pkey" PRIMARY KEY ("municipalities_id");

-- CreateIndex
CREATE INDEX "municipalities_name_idx" ON "municipalities"("name");

-- CreateIndex
CREATE INDEX "municipalities_gis_sifra_idx" ON "municipalities"("gis_sifra");

-- CreateIndex
CREATE INDEX "municipalities_eid_obcina_idx" ON "municipalities"("eid_obcina");
