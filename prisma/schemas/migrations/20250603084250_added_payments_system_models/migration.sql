-- CreateEnum
CREATE TYPE "PAYMENT_METHOD" AS ENUM ('CARD', 'CASH', 'WALLET', 'PLATFORM');

-- CreateEnum
CREATE TYPE "PAYMENT_STATUS" AS ENUM ('PENDING', 'SUCCEEDED', 'FAILED', 'REFUNDED');

-- CreateEnum
CREATE TYPE "SPLIT_DESTINATION_TYPE" AS ENUM ('PLATFORM', 'MERCHANT', 'DRIVER');

-- CreateEnum
CREATE TYPE "SPLIT_STATUS" AS ENUM ('RESERVED', 'TRANSFERED', 'CANCELED', 'REFUNDED');

-- CreateEnum
CREATE TYPE "SUBSCRIPTION_STATUS" AS ENUM ('AWAITING_PAYMENT', 'ACTIVE', 'CANCELED', 'EXPIRED', 'FAILED');

-- AlterTable
ALTER TABLE "daily_meals_subscriptions" ADD COLUMN     "status" "SUBSCRIPTION_STATUS" NOT NULL DEFAULT 'AWAITING_PAYMENT';

-- CreateTable
CREATE TABLE "payments" (
    "payment_id" UUID NOT NULL,
    "amount" INTEGER NOT NULL,
    "credits_amount" INTEGER NOT NULL DEFAULT 0,
    "payment_method" "PAYMENT_METHOD" NOT NULL,
    "payment_intent_id" TEXT,
    "status" "PAYMENT_STATUS" NOT NULL DEFAULT 'PENDING',
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "order_type" TEXT,
    "payment_type" TEXT,
    "subscription_grouped_id" UUID,
    "user_id" UUID NOT NULL,

    CONSTRAINT "payments_pkey" PRIMARY KEY ("payment_id")
);

-- CreateTable
CREATE TABLE "payment_splits" (
    "split_id" UUID NOT NULL,
    "status" "SPLIT_STATUS" NOT NULL DEFAULT 'RESERVED',
    "payment_id" UUID NOT NULL,
    "destination_type" "SPLIT_DESTINATION_TYPE" NOT NULL,
    "destination_id" TEXT NOT NULL,
    "amount" INTEGER NOT NULL,
    "metadata" JSONB NOT NULL,
    "is_credits" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "payment_splits_pkey" PRIMARY KEY ("split_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "payments_payment_intent_id_key" ON "payments"("payment_intent_id");

-- CreateIndex
CREATE UNIQUE INDEX "payments_subscription_grouped_id_key" ON "payments"("subscription_grouped_id");

-- AddForeignKey
ALTER TABLE "daily_meals_subscriptions" ADD CONSTRAINT "daily_meals_subscriptions_grouped_id_fkey" FOREIGN KEY ("grouped_id") REFERENCES "payments"("subscription_grouped_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "payments" ADD CONSTRAINT "payments_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "payment_splits" ADD CONSTRAINT "payment_splits_payment_id_fkey" FOREIGN KEY ("payment_id") REFERENCES "payments"("payment_id") ON DELETE RESTRICT ON UPDATE CASCADE;
