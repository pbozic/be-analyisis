/*
  Warnings:

  - The values [STORE] on the enum `BUSINESS_TYPE` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "BUSINESS_TYPE_new" AS ENUM ('TRANSFER', 'MERCHANT', 'RESTAURANT', 'BUSINESS', 'DISPATCHER');
ALTER TABLE "business" ALTER COLUMN "type" TYPE "BUSINESS_TYPE_new" USING ("type"::text::"BUSINESS_TYPE_new");
ALTER TABLE "user_favorite_businesses" ALTER COLUMN "business_type" TYPE "BUSINESS_TYPE_new" USING ("business_type"::text::"BUSINESS_TYPE_new");
ALTER TYPE "BUSINESS_TYPE" RENAME TO "BUSINESS_TYPE_old";
ALTER TYPE "BUSINESS_TYPE_new" RENAME TO "BUSINESS_TYPE";
DROP TYPE "BUSINESS_TYPE_old";
COMMIT;
