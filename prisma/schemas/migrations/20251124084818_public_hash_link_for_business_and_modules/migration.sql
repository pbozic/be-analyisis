/*
  Warnings:

  - You are about to alter the column `public_link_hash` on the `reservation_module` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(16)`.
  - A unique constraint covering the columns `[public_link_hash]` on the table `business` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[public_link_hash]` on the table `crm_module` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[public_link_hash]` on the table `daily_meals_module` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[public_link_hash]` on the table `food_drinks_module` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[public_link_hash]` on the table `stores_module` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[public_link_hash]` on the table `table_reservations_module` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[public_link_hash]` on the table `transport_module` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "user_roles" DROP CONSTRAINT "user_roles_user_id_fkey";

-- AlterTable
ALTER TABLE "business" ADD COLUMN     "public_link_hash" VARCHAR(16) DEFAULT 'BU' || substr(md5((random())::text), 1, 14);

-- AlterTable
ALTER TABLE "crm_module" ADD COLUMN     "public_link_hash" VARCHAR(16) DEFAULT 'CM' || substr(md5((random())::text), 1, 14);

-- AlterTable
ALTER TABLE "daily_meals_module" ADD COLUMN     "public_link_hash" VARCHAR(16) DEFAULT 'DM' || substr(md5((random())::text), 1, 14);

-- AlterTable
ALTER TABLE "food_drinks_module" ADD COLUMN     "public_link_hash" VARCHAR(16) DEFAULT 'FD' || substr(md5((random())::text), 1, 14);

-- AlterTable
ALTER TABLE "reservation_module" ALTER COLUMN "public_link_hash" SET DEFAULT 'RM' || substr(md5((random())::text), 1, 14),
ALTER COLUMN "public_link_hash" SET DATA TYPE VARCHAR(16);

-- AlterTable
ALTER TABLE "stores_module" ADD COLUMN     "public_link_hash" VARCHAR(16) DEFAULT 'SM' || substr(md5((random())::text), 1, 14);

-- AlterTable
ALTER TABLE "table_reservations_module" ADD COLUMN     "public_link_hash" VARCHAR(16) DEFAULT 'TR' || substr(md5((random())::text), 1, 14);

-- AlterTable
ALTER TABLE "transport_module" ADD COLUMN     "public_link_hash" VARCHAR(16) DEFAULT 'TM' || substr(md5((random())::text), 1, 14);

-- CreateIndex
CREATE UNIQUE INDEX "business_public_link_hash_key" ON "business"("public_link_hash");

-- CreateIndex
CREATE UNIQUE INDEX "crm_module_public_link_hash_key" ON "crm_module"("public_link_hash");

-- CreateIndex
CREATE UNIQUE INDEX "daily_meals_module_public_link_hash_key" ON "daily_meals_module"("public_link_hash");

-- CreateIndex
CREATE UNIQUE INDEX "food_drinks_module_public_link_hash_key" ON "food_drinks_module"("public_link_hash");

-- CreateIndex
CREATE UNIQUE INDEX "stores_module_public_link_hash_key" ON "stores_module"("public_link_hash");

-- CreateIndex
CREATE UNIQUE INDEX "table_reservations_module_public_link_hash_key" ON "table_reservations_module"("public_link_hash");

-- CreateIndex
CREATE UNIQUE INDEX "transport_module_public_link_hash_key" ON "transport_module"("public_link_hash");

-- AddForeignKey
ALTER TABLE "user_roles" ADD CONSTRAINT "user_roles_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("user_id") ON DELETE CASCADE ON UPDATE CASCADE;
