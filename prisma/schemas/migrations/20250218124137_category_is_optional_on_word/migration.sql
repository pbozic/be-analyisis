-- DropForeignKey
ALTER TABLE "words" DROP CONSTRAINT "words_categories_id_fkey";

-- AlterTable
ALTER TABLE "words" ALTER COLUMN "categories_id" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "words" ADD CONSTRAINT "words_categories_id_fkey" FOREIGN KEY ("categories_id") REFERENCES "categories"("categories_id") ON DELETE SET NULL ON UPDATE CASCADE;
