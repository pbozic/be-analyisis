/*
  Warnings:

  - The primary key for the `payment_splits` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `amount` on the `payment_splits` table. All the data in the column will be lost.
  - You are about to drop the column `is_credits` on the `payment_splits` table. All the data in the column will be lost.
  - You are about to drop the column `split_id` on the `payment_splits` table. All the data in the column will be lost.
  - Added the required column `amount_regular` to the `payment_splits` table without a default value. This is not possible if the table is not empty.
  - The required column `payment_split_id` was added to the `payment_splits` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- AlterTable
ALTER TABLE "payment_splits" DROP CONSTRAINT "payment_splits_pkey",
DROP COLUMN "amount",
DROP COLUMN "is_credits",
DROP COLUMN "split_id",
ADD COLUMN     "amount_credits" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "amount_regular" INTEGER NOT NULL,
ADD COLUMN     "payment_split_id" UUID NOT NULL,
ADD CONSTRAINT "payment_splits_pkey" PRIMARY KEY ("payment_split_id");
