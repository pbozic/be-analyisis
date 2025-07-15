-- DropForeignKey
ALTER TABLE "categories" DROP CONSTRAINT "categories_translatable_id_fkey";

-- DropForeignKey
ALTER TABLE "translations" DROP CONSTRAINT "translations_translatable_id_fkey";

-- AddForeignKey
ALTER TABLE "categories" ADD CONSTRAINT "categories_translatable_id_fkey" FOREIGN KEY ("translatable_id") REFERENCES "translatable"("translatable_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "translations" ADD CONSTRAINT "translations_translatable_id_fkey" FOREIGN KEY ("translatable_id") REFERENCES "translatable"("translatable_id") ON DELETE CASCADE ON UPDATE CASCADE;
