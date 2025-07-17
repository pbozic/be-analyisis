/*
  Warnings:

  - You are about to drop the column `category_id` on the `service` table. All the data in the column will be lost.
  - The primary key for the `service_category` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `category_id` on the `service_category` table. All the data in the column will be lost.
  - The required column `service_category_id` was added to the `service_category` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- AlterEnum
ALTER TYPE "BUSINESS_TYPE" ADD VALUE 'RESERVATION';

-- DropForeignKey
ALTER TABLE "service" DROP CONSTRAINT "service_category_id_fkey";

-- DropForeignKey
ALTER TABLE "service_category" DROP CONSTRAINT "service_category_parent_id_fkey";

-- AlterTable
ALTER TABLE "business" ALTER COLUMN "minimum_order" SET DEFAULT 0;

-- AlterTable
ALTER TABLE "menu_items" ALTER COLUMN "stock" SET DEFAULT 1;

-- AlterTable
ALTER TABLE "service" DROP COLUMN "category_id",
ADD COLUMN     "service_category_id" UUID;

-- AlterTable
ALTER TABLE "service_category" DROP CONSTRAINT "service_category_pkey",
DROP COLUMN "category_id",
ADD COLUMN     "service_category_id" UUID NOT NULL,
ADD CONSTRAINT "service_category_pkey" PRIMARY KEY ("service_category_id");

-- AddForeignKey
ALTER TABLE "service_category" ADD CONSTRAINT "service_category_parent_id_fkey" FOREIGN KEY ("parent_id") REFERENCES "service_category"("service_category_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "service" ADD CONSTRAINT "service_service_category_id_fkey" FOREIGN KEY ("service_category_id") REFERENCES "service_category"("service_category_id") ON DELETE SET NULL ON UPDATE CASCADE;
