/*
  Warnings:

  - The values [DAILY] on the enum `CATEGORY_TYPE` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "CATEGORY_TYPE_new" AS ENUM ('MENU', 'CUISINE');
ALTER TABLE "categories" ALTER COLUMN "category_type" TYPE "CATEGORY_TYPE_new" USING ("category_type"::text::"CATEGORY_TYPE_new");
ALTER TYPE "CATEGORY_TYPE" RENAME TO "CATEGORY_TYPE_old";
ALTER TYPE "CATEGORY_TYPE_new" RENAME TO "CATEGORY_TYPE";
DROP TYPE "CATEGORY_TYPE_old";
COMMIT;
