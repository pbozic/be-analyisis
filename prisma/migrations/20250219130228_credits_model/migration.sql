/*
  Warnings:

  - The values [REFERRAL] on the enum `CASHBACK_SOURCE` will be removed. If these variants are still used in the database, this will fail.
  - The values [ACTIVE,USED] on the enum `CASHBACK_STATUS` will be removed. If these variants are still used in the database, this will fail.
  - The primary key for the `cashback` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `credit_id` on the `cashback` table. All the data in the column will be lost.
  - You are about to drop the column `referral_id` on the `cashback` table. All the data in the column will be lost.
  - You are about to drop the column `used_at` on the `cashback` table. All the data in the column will be lost.
  - You are about to drop the column `delivery_credits` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `taxi_credits` on the `users` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[cashback_id]` on the table `cashback` will be added. If there are existing duplicate values, this will fail.
  - The required column `cashback_id` was added to the `cashback` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- CreateEnum
CREATE TYPE "CREDIT_STATUS" AS ENUM ('ACTIVE', 'USED', 'EXPIRED');

-- CreateEnum
CREATE TYPE "CREDIT_TYPE" AS ENUM ('TAXI', 'DELIVERY');

-- AlterEnum
BEGIN;
CREATE TYPE "CASHBACK_SOURCE_new" AS ENUM ('ORDER', 'PROMOTIONAL', 'SYSTEM_GRANT');
ALTER TABLE "cashback" ALTER COLUMN "source" TYPE "CASHBACK_SOURCE_new" USING ("source"::text::"CASHBACK_SOURCE_new");
ALTER TYPE "CASHBACK_SOURCE" RENAME TO "CASHBACK_SOURCE_old";
ALTER TYPE "CASHBACK_SOURCE_new" RENAME TO "CASHBACK_SOURCE";
DROP TYPE "CASHBACK_SOURCE_old";
COMMIT;

-- AlterEnum
BEGIN;
CREATE TYPE "CASHBACK_STATUS_new" AS ENUM ('PENDING', 'CONVERTED', 'EXPIRED');
ALTER TABLE "cashback" ALTER COLUMN "status" DROP DEFAULT;
ALTER TABLE "cashback" ALTER COLUMN "status" TYPE "CASHBACK_STATUS_new" USING ("status"::text::"CASHBACK_STATUS_new");
ALTER TYPE "CASHBACK_STATUS" RENAME TO "CASHBACK_STATUS_old";
ALTER TYPE "CASHBACK_STATUS_new" RENAME TO "CASHBACK_STATUS";
DROP TYPE "CASHBACK_STATUS_old";
ALTER TABLE "cashback" ALTER COLUMN "status" SET DEFAULT 'PENDING';
COMMIT;

-- DropForeignKey
ALTER TABLE "cashback" DROP CONSTRAINT "cashback_referral_id_fkey";

-- DropIndex
DROP INDEX "cashback_credit_id_key";

-- AlterTable
ALTER TABLE "cashback" DROP CONSTRAINT "cashback_pkey",
DROP COLUMN "credit_id",
DROP COLUMN "referral_id",
DROP COLUMN "used_at",
ADD COLUMN     "cashback_id" UUID NOT NULL,
ADD COLUMN     "converted_at" TIMESTAMPTZ(6),
ALTER COLUMN "amount" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "status" SET DEFAULT 'PENDING',
ALTER COLUMN "expires_at" DROP NOT NULL,
ADD CONSTRAINT "cashback_pkey" PRIMARY KEY ("cashback_id");

-- AlterTable
ALTER TABLE "users" DROP COLUMN "delivery_credits",
DROP COLUMN "taxi_credits";

-- CreateTable
CREATE TABLE "credits" (
    "credit_id" UUID NOT NULL,
    "user_id" UUID NOT NULL,
    "referral_id" UUID,
    "amount" DOUBLE PRECISION NOT NULL,
    "type" "CREDIT_TYPE" NOT NULL,
    "status" "CREDIT_STATUS" NOT NULL DEFAULT 'ACTIVE',
    "earned_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "expires_at" TIMESTAMPTZ(6) NOT NULL,
    "used_at" TIMESTAMPTZ(6),

    CONSTRAINT "credits_pkey" PRIMARY KEY ("credit_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "credits_credit_id_key" ON "credits"("credit_id");

-- CreateIndex
CREATE INDEX "credits_user_id_type_status_idx" ON "credits"("user_id", "type", "status");

-- CreateIndex
CREATE INDEX "credits_expires_at_idx" ON "credits"("expires_at");

-- CreateIndex
CREATE UNIQUE INDEX "cashback_cashback_id_key" ON "cashback"("cashback_id");

-- AddForeignKey
ALTER TABLE "credits" ADD CONSTRAINT "credits_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "credits" ADD CONSTRAINT "credits_referral_id_fkey" FOREIGN KEY ("referral_id") REFERENCES "referrals"("referral_id") ON DELETE SET NULL ON UPDATE CASCADE;
