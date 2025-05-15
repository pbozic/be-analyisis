/*
  Warnings:

  - You are about to drop the column `amount_any` on the `allowances` table. All the data in the column will be lost.
  - You are about to drop the column `amount_delivery` on the `allowances` table. All the data in the column will be lost.
  - You are about to drop the column `amount_taxi` on the `allowances` table. All the data in the column will be lost.
  - You are about to drop the column `amount_transfer` on the `allowances` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[business_users_id]` on the table `allowances` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "allowances" DROP COLUMN "amount_any",
DROP COLUMN "amount_delivery",
DROP COLUMN "amount_taxi",
DROP COLUMN "amount_transfer",
ADD COLUMN     "amount_any_purchase_order" DOUBLE PRECISION,
ADD COLUMN     "amount_any_wallet" DOUBLE PRECISION NOT NULL DEFAULT 0,
ADD COLUMN     "amount_delivery_purchase_order" DOUBLE PRECISION,
ADD COLUMN     "amount_delivery_wallet" DOUBLE PRECISION NOT NULL DEFAULT 0,
ADD COLUMN     "amount_taxi_purchase_order" DOUBLE PRECISION,
ADD COLUMN     "amount_taxi_wallet" DOUBLE PRECISION NOT NULL DEFAULT 0,
ADD COLUMN     "amount_transfer_purchase_order" DOUBLE PRECISION,
ADD COLUMN     "amount_transfer_wallet" DOUBLE PRECISION NOT NULL DEFAULT 0,
ADD COLUMN     "business_users_id" UUID,
ALTER COLUMN "group_user_id" DROP NOT NULL;

-- AlterTable
ALTER TABLE "business" ADD COLUMN     "purchase_order_limit_amount" DOUBLE PRECISION;

-- AlterTable
ALTER TABLE "taxi_orders" ADD COLUMN     "business_clients_id" UUID,
ADD COLUMN     "business_users_id" UUID;

-- CreateTable
CREATE TABLE "business_clients" (
    "business_clients_id" UUID NOT NULL,
    "online" BOOLEAN DEFAULT false,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "business_id" UUID NOT NULL,
    "first_name" TEXT,
    "last_name" TEXT,
    "email" TEXT,
    "telephone" TEXT NOT NULL,
    "telephone_code" TEXT NOT NULL,
    "telephone_number" TEXT NOT NULL,

    CONSTRAINT "business_clients_pkey" PRIMARY KEY ("business_clients_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "allowances_business_users_id_key" ON "allowances"("business_users_id");

-- AddForeignKey
ALTER TABLE "business_clients" ADD CONSTRAINT "business_clients_business_id_fkey" FOREIGN KEY ("business_id") REFERENCES "business"("business_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "allowances" ADD CONSTRAINT "allowances_business_users_id_fkey" FOREIGN KEY ("business_users_id") REFERENCES "business_users"("business_users_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "taxi_orders" ADD CONSTRAINT "taxi_orders_business_users_id_fkey" FOREIGN KEY ("business_users_id") REFERENCES "business_users"("business_users_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "taxi_orders" ADD CONSTRAINT "taxi_orders_business_clients_id_fkey" FOREIGN KEY ("business_clients_id") REFERENCES "business_clients"("business_clients_id") ON DELETE SET NULL ON UPDATE CASCADE;
