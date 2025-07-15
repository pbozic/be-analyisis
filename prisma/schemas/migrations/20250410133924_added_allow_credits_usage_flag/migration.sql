-- AlterTable
ALTER TABLE "delivery_orders" ADD COLUMN     "allow_credits_usage" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "taxi_orders" ADD COLUMN     "allow_credits_usage" BOOLEAN NOT NULL DEFAULT false;
