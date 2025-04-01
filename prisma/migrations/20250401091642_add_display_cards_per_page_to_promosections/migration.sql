-- AlterTable
ALTER TABLE "promo_sections" ADD COLUMN     "display_cards_per_page" INTEGER;

-- CreateTable
CREATE TABLE "scoring_points" (
    "scoring_points_id" UUID NOT NULL,
    "business_id" UUID NOT NULL,
    "user_id" UUID NOT NULL,
    "order_id" UUID NOT NULL,
    "points" INTEGER NOT NULL,
    "isPenalty" BOOLEAN NOT NULL,

    CONSTRAINT "scoring_points_pkey" PRIMARY KEY ("scoring_points_id")
);
