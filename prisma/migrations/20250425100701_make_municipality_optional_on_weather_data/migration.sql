/*
  Warnings:

  - You are about to drop the column `geom_generated` on the `settlements` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "weather_data" DROP CONSTRAINT "weather_data_municipalities_id_fkey";

-- DropIndex
DROP INDEX "settlements_geom_generated_idx";

-- AlterTable
ALTER TABLE "settlements" DROP COLUMN "geom_generated";

-- AlterTable
ALTER TABLE "weather_data" ALTER COLUMN "municipalities_id" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "weather_data" ADD CONSTRAINT "weather_data_municipalities_id_fkey" FOREIGN KEY ("municipalities_id") REFERENCES "municipalities"("municipalities_id") ON DELETE SET NULL ON UPDATE CASCADE;
