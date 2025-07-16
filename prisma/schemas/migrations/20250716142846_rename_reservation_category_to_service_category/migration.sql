/*
  Warnings:

  - You are about to drop the `category` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "category" DROP CONSTRAINT "category_parent_id_fkey";

-- DropForeignKey
ALTER TABLE "service" DROP CONSTRAINT "service_category_id_fkey";

-- AlterTable
ALTER TABLE "word_buy" ADD COLUMN     "pending_stripe_price_id" TEXT;

-- DropTable
DROP TABLE "category";

-- CreateTable
CREATE TABLE "service_category" (
    "category_id" UUID NOT NULL,
    "name" JSONB NOT NULL,
    "parent_id" UUID,
    "level" "CATEGORY_LEVEL" NOT NULL,
    "color" TEXT,

    CONSTRAINT "service_category_pkey" PRIMARY KEY ("category_id")
);

-- AddForeignKey
ALTER TABLE "service_category" ADD CONSTRAINT "service_category_parent_id_fkey" FOREIGN KEY ("parent_id") REFERENCES "service_category"("category_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "service" ADD CONSTRAINT "service_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "service_category"("category_id") ON DELETE SET NULL ON UPDATE CASCADE;
