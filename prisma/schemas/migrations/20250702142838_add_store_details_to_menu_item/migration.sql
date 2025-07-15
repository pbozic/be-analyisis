-- AlterTable
ALTER TABLE "menu_items" ADD COLUMN     "alergens_text" JSONB,
ADD COLUMN     "ingredients_text" JSONB,
ADD COLUMN     "isWeighted" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "origin_text" JSONB,
ADD COLUMN     "usage_text" JSONB,
ADD COLUMN     "weightQuantity" DOUBLE PRECISION,
ALTER COLUMN "spicy_level" DROP NOT NULL,
ALTER COLUMN "unit_size" DROP NOT NULL;
