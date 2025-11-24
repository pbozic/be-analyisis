/*
  Warnings:

  - You are about to drop the column `allergies_preferences` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `daily_meal_day_preferences` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `daily_meal_preferences` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `details` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `review_complete` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `spoken_languages` on the `users` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "business" ALTER COLUMN "public_link_hash" SET DEFAULT 'BU' || substr(md5((random())::text), 1, 14);

-- AlterTable
ALTER TABLE "crm_module" ALTER COLUMN "public_link_hash" SET DEFAULT 'CM' || substr(md5((random())::text), 1, 14);

-- AlterTable
ALTER TABLE "daily_meals_module" ALTER COLUMN "public_link_hash" SET DEFAULT 'DM' || substr(md5((random())::text), 1, 14);

-- AlterTable
ALTER TABLE "food_drinks_module" ALTER COLUMN "public_link_hash" SET DEFAULT 'FD' || substr(md5((random())::text), 1, 14);

-- AlterTable
ALTER TABLE "reservation_module" ALTER COLUMN "public_link_hash" SET DEFAULT 'RM' || substr(md5((random())::text), 1, 14);

-- AlterTable
ALTER TABLE "stores_module" ALTER COLUMN "public_link_hash" SET DEFAULT 'SM' || substr(md5((random())::text), 1, 14);

-- AlterTable
ALTER TABLE "table_reservations_module" ALTER COLUMN "public_link_hash" SET DEFAULT 'TR' || substr(md5((random())::text), 1, 14);

-- AlterTable
ALTER TABLE "transport_module" ALTER COLUMN "public_link_hash" SET DEFAULT 'TM' || substr(md5((random())::text), 1, 14);

-- AlterTable
ALTER TABLE "users" DROP COLUMN "allergies_preferences",
DROP COLUMN "daily_meal_day_preferences",
DROP COLUMN "daily_meal_preferences",
DROP COLUMN "details",
DROP COLUMN "review_complete",
DROP COLUMN "spoken_languages";
