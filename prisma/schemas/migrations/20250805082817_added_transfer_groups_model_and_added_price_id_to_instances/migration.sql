/*
  Warnings:

  - A unique constraint covering the columns `[external_id]` on the table `payment_splits` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `daily_meal_category_price_id` to the `daily_meal_instances` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "TRANSFER_GROUP_STATUS" AS ENUM ('PENDING', 'SUCCEEDED', 'FAILED');

-- CreateEnum
CREATE TYPE "TRANSFER_GROUP_TYPE" AS ENUM ('REFUND', 'TRANSFER');

-- AlterEnum
-- This migration adds more than one value to an enum.
-- With PostgreSQL versions 11 and earlier, this is not possible
-- in a single migration. This can be worked around by creating
-- multiple migrations, each migration adding only one value to
-- the enum.


ALTER TYPE "SPLIT_STATUS" ADD VALUE 'PENDING';
ALTER TYPE "SPLIT_STATUS" ADD VALUE 'FAILED';
ALTER TYPE "SPLIT_STATUS" ADD VALUE 'PARTIAL_FAILURE';

-- AlterTable
ALTER TABLE "daily_meal_instances" ADD COLUMN     "daily_meal_category_price_id" UUID NOT NULL;

-- AlterTable
ALTER TABLE "payment_splits" ADD COLUMN     "external_id" TEXT,
ADD COLUMN     "payment_transfer_group_id" UUID;

-- CreateTable
CREATE TABLE "payment_transfer_groups" (
    "payment_transfer_group_id" UUID NOT NULL,
    "status" "TRANSFER_GROUP_STATUS" NOT NULL DEFAULT 'PENDING',
    "type" "TRANSFER_GROUP_TYPE" NOT NULL,
    "amount" INTEGER NOT NULL,
    "metadata" JSONB,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "payment_transfer_groups_pkey" PRIMARY KEY ("payment_transfer_group_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "payment_splits_external_id_key" ON "payment_splits"("external_id");

-- AddForeignKey
ALTER TABLE "daily_meal_instances" ADD CONSTRAINT "daily_meal_instances_daily_meal_category_price_id_fkey" FOREIGN KEY ("daily_meal_category_price_id") REFERENCES "daily_meal_category_prices"("daily_meal_category_prices_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "payment_splits" ADD CONSTRAINT "payment_splits_payment_transfer_group_id_fkey" FOREIGN KEY ("payment_transfer_group_id") REFERENCES "payment_transfer_groups"("payment_transfer_group_id") ON DELETE CASCADE ON UPDATE CASCADE;
