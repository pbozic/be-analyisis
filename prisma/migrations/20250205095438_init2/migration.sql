/*
  Warnings:

  - The primary key for the `transactions` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `transactions` table. All the data in the column will be lost.
  - You are about to drop the column `push_notification_preferences` on the `users` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[order_id,driver_id]` on the table `delivery_order_sent` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[referral_code]` on the table `users` will be added. If there are existing duplicate values, this will fail.
  - The required column `transaction_id` was added to the `transactions` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Made the column `telephone_code` on table `users` required. This step will fail if there are existing NULL values in that column.
  - Made the column `telephone_number` on table `users` required. This step will fail if there are existing NULL values in that column.

*/
-- CreateEnum
CREATE TYPE "ORDER_TYPE" AS ENUM ('TAXI', 'TRANSFER_PRIVATE', 'TRANSFER_SHUTTLE', 'VEHICLE_TRANSFER', 'VEHICLE_TRANSFER_COMBO');

-- CreateEnum
CREATE TYPE "ORDER_SUBTYPE" AS ENUM ('CREATED_BY_USER', 'CREATED_BY_DISPATCHER', 'CREATED_BY_BUSINESS');

-- CreateEnum
CREATE TYPE "SORTING_TYPE" AS ENUM ('AUTOMATIC', 'MANUAL');

-- CreateEnum
CREATE TYPE "LOST_FOUND_STATUS" AS ENUM ('REPORTED', 'RESOLVED');

-- CreateEnum
CREATE TYPE "CASHBACK_TYPE" AS ENUM ('TAXI', 'DELIVERY');

-- CreateEnum
CREATE TYPE "CASHBACK_SOURCE" AS ENUM ('REFERRAL', 'ORDER', 'PROMOTIONAL', 'SYSTEM_GRANT');

-- CreateEnum
CREATE TYPE "CASHBACK_STATUS" AS ENUM ('ACTIVE', 'USED', 'EXPIRED');

-- AlterEnum
-- This migration adds more than one value to an enum.
-- With PostgreSQL versions 11 and earlier, this is not possible
-- in a single migration. This can be worked around by creating
-- multiple migrations, each migration adding only one value to
-- the enum.


ALTER TYPE "DOCUMENT_TYPE" ADD VALUE 'LOST_ITEM';
ALTER TYPE "DOCUMENT_TYPE" ADD VALUE 'HEALTH_DECLARATION';
ALTER TYPE "DOCUMENT_TYPE" ADD VALUE 'DAILY_MEALS_MENU';

-- AlterEnum
-- This migration adds more than one value to an enum.
-- With PostgreSQL versions 11 and earlier, this is not possible
-- in a single migration. This can be worked around by creating
-- multiple migrations, each migration adding only one value to
-- the enum.


ALTER TYPE "TAXI_ORDER_STATUS" ADD VALUE 'TRANSFER_ACCEPTED';
ALTER TYPE "TAXI_ORDER_STATUS" ADD VALUE 'TRANSFER_COMPLETED';

-- AlterEnum
ALTER TYPE "USER_ROLES" ADD VALUE 'DISPATCHER';

-- DropForeignKey
ALTER TABLE "delivery_order_sent" DROP CONSTRAINT "delivery_order_sent_delivery_driver_id_fkey";

-- DropIndex
DROP INDEX "users_email_key";

-- AlterTable
ALTER TABLE "business" ADD COLUMN     "daily_users_sorted" JSONB DEFAULT '[]',
ADD COLUMN     "daily_users_sorting_type" "SORTING_TYPE" NOT NULL DEFAULT 'AUTOMATIC',
ADD COLUMN     "offers_daily_meals" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "restaurant_overwhelmed" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "stripe_customer_id" TEXT,
ADD COLUMN     "word_buy_stripe_subscription_id" TEXT,
ALTER COLUMN "telephone" DROP NOT NULL;

-- AlterTable
ALTER TABLE "delivery_drivers" ADD COLUMN     "delivers_daily_meals" BOOLEAN DEFAULT false,
ADD COLUMN     "delivery_timeline" JSONB DEFAULT '[]',
ADD COLUMN     "is_inactive" BOOLEAN DEFAULT false,
ADD COLUMN     "last_ping_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "on_daily_meals" BOOLEAN DEFAULT false,
ADD COLUMN     "partner_cash_balance" DOUBLE PRECISION DEFAULT 0,
ADD COLUMN     "regions" TEXT[],
ADD COLUMN     "scheduled_meals_route" JSONB DEFAULT '[]';

-- AlterTable
ALTER TABLE "delivery_order_sent" ADD COLUMN     "driver_id" UUID,
ALTER COLUMN "delivery_driver_id" DROP NOT NULL;

-- AlterTable
ALTER TABLE "delivery_orders" ADD COLUMN     "driver_id" UUID,
ADD COLUMN     "find_drivers_attempts" INTEGER DEFAULT 0,
ADD COLUMN     "flags" JSONB,
ADD COLUMN     "is_daily_meal" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "documents" ADD COLUMN     "lost_item_id" UUID,
ADD COLUMN     "promo_banner_id" UUID,
ADD COLUMN     "transaction_id" UUID;

-- AlterTable
ALTER TABLE "drivers" ADD COLUMN     "delivery_orders_toggled" BOOLEAN DEFAULT false,
ADD COLUMN     "delivery_timeline" JSONB DEFAULT '[]',
ADD COLUMN     "handles_delivery_orders" BOOLEAN DEFAULT false,
ADD COLUMN     "handles_taxi_orders" BOOLEAN DEFAULT false,
ADD COLUMN     "handles_transfer_orders" BOOLEAN DEFAULT false,
ADD COLUMN     "is_inactive" BOOLEAN DEFAULT false,
ADD COLUMN     "last_ping_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "partner_cash_balance" DOUBLE PRECISION DEFAULT 0,
ADD COLUMN     "regions" TEXT[],
ADD COLUMN     "taxi_orders_toggled" BOOLEAN DEFAULT false,
ADD COLUMN     "transfer_orders_toggled" BOOLEAN DEFAULT false,
ADD COLUMN     "transfer_requirements" JSONB;

-- AlterTable
ALTER TABLE "reservations" ADD COLUMN     "datetime" TIMESTAMPTZ(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "date" SET DATA TYPE TIMESTAMPTZ(6);

-- AlterTable
ALTER TABLE "reviews" ADD COLUMN     "feedback" JSONB,
ALTER COLUMN "rating" DROP NOT NULL;

-- AlterTable
ALTER TABLE "taxi_order_sent" ADD COLUMN     "rejected" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "taxi_orders" ADD COLUMN     "cancellation_reason" TEXT,
ADD COLUMN     "cargo_preferences" JSONB,
ADD COLUMN     "creating_user_id" UUID,
ADD COLUMN     "customer_note" TEXT,
ADD COLUMN     "find_drivers_attempts" INTEGER DEFAULT 0,
ADD COLUMN     "first_name" TEXT,
ADD COLUMN     "flags" JSONB,
ADD COLUMN     "is_scheduled" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "last_name" TEXT,
ADD COLUMN     "parent_order_id" UUID,
ADD COLUMN     "parent_user_type" TEXT DEFAULT '',
ADD COLUMN     "subtype" "ORDER_SUBTYPE" NOT NULL DEFAULT 'CREATED_BY_USER',
ADD COLUMN     "telephone" TEXT,
ADD COLUMN     "type" "ORDER_TYPE" NOT NULL DEFAULT 'TAXI',
ALTER COLUMN "delivery_location" DROP NOT NULL;

-- AlterTable
ALTER TABLE "transactions" DROP CONSTRAINT "transactions_pkey",
DROP COLUMN "id",
ADD COLUMN     "taxi_order_id" UUID,
ADD COLUMN     "transaction_id" UUID NOT NULL,
ADD COLUMN     "wallet_fund_id" UUID,
ADD CONSTRAINT "transactions_pkey" PRIMARY KEY ("transaction_id");

-- AlterTable
ALTER TABLE "users" DROP COLUMN "push_notification_preferences",
ADD COLUMN     "active" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "apple_id" TEXT,
ADD COLUMN     "daily_meal_day_preferences" JSONB DEFAULT '[]',
ADD COLUMN     "daily_meal_preferences" JSONB,
ADD COLUMN     "delivery_credits" INTEGER DEFAULT 0,
ADD COLUMN     "delivery_push_notification_preferences" JSONB,
ADD COLUMN     "details" JSONB,
ADD COLUMN     "disabled" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "google_id" TEXT,
ADD COLUMN     "language" TEXT DEFAULT 'en',
ADD COLUMN     "referral_code" CHAR(6) DEFAULT upper(substring(md5(random()::text), 1, 6)),
ADD COLUMN     "spoken_languages" JSONB,
ADD COLUMN     "subscribed_to_daily_meals" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "taxi_credits" INTEGER DEFAULT 0,
ADD COLUMN     "taxi_push_notification_preferences" JSONB,
ADD COLUMN     "transfer_push_notification_preferences" JSONB,
ALTER COLUMN "email" DROP NOT NULL,
ALTER COLUMN "telephone_code" SET NOT NULL,
ALTER COLUMN "telephone_number" SET NOT NULL;

-- CreateTable
CREATE TABLE "cashback" (
    "credit_id" UUID NOT NULL,
    "user_id" UUID NOT NULL,
    "amount" INTEGER NOT NULL,
    "type" "CASHBACK_TYPE" NOT NULL,
    "source" "CASHBACK_SOURCE" NOT NULL,
    "status" "CASHBACK_STATUS" NOT NULL DEFAULT 'ACTIVE',
    "description" TEXT,
    "earned_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "expires_at" TIMESTAMPTZ(6) NOT NULL,
    "used_at" TIMESTAMPTZ(6),
    "taxi_order_id" UUID,
    "delivery_order_id" UUID,
    "referral_id" UUID,

    CONSTRAINT "cashback_pkey" PRIMARY KEY ("credit_id")
);

-- CreateTable
CREATE TABLE "referrals" (
    "referral_id" UUID NOT NULL,
    "referral_code" CHAR(6) NOT NULL,
    "referrer_user_id" UUID NOT NULL,
    "referred_user_id" UUID NOT NULL,
    "conditions_met" BOOLEAN NOT NULL DEFAULT false,
    "reward_claimed" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "referrals_pkey" PRIMARY KEY ("referral_id")
);

-- CreateTable
CREATE TABLE "group_users" (
    "group_user_id" UUID NOT NULL,
    "parent_user_id" UUID NOT NULL,
    "child_user_id" UUID NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "allowance" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "enabled" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "group_users_pkey" PRIMARY KEY ("group_user_id")
);

-- CreateTable
CREATE TABLE "lost_items" (
    "lost_item_id" UUID NOT NULL,
    "user_id" UUID,
    "status" "LOST_FOUND_STATUS" NOT NULL DEFAULT 'REPORTED',
    "description" TEXT NOT NULL,
    "found" BOOLEAN DEFAULT false,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "lost_items_pkey" PRIMARY KEY ("lost_item_id")
);

-- CreateTable
CREATE TABLE "flags" (
    "flag_id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "status" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "flags_pkey" PRIMARY KEY ("flag_id")
);

-- CreateTable
CREATE TABLE "flag_history" (
    "flag_history_id" UUID NOT NULL,
    "flag_id" UUID NOT NULL,
    "user_id" UUID NOT NULL,
    "status" BOOLEAN NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "flag_history_pkey" PRIMARY KEY ("flag_history_id")
);

-- CreateTable
CREATE TABLE "driver_history_locations" (
    "driver_history_location_id" UUID NOT NULL,
    "driver_id" UUID NOT NULL,
    "order_id" UUID,
    "status" "TAXI_ORDER_STATUS",
    "location" JSONB,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "driver_history_locations_pkey" PRIMARY KEY ("driver_history_location_id")
);

-- CreateTable
CREATE TABLE "delivery_driver_history_locations" (
    "delivery_driver_history_location_id" UUID NOT NULL,
    "delivery_driver_id" UUID NOT NULL,
    "order_id" UUID,
    "status" "DELIVERY_ORDER_STATUS",
    "location" JSONB,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "delivery_driver_history_locations_pkey" PRIMARY KEY ("delivery_driver_history_location_id")
);

-- CreateTable
CREATE TABLE "wallet_transfer_history" (
    "wallet_transfer_history_id" UUID NOT NULL,
    "order_id" UUID NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "success" BOOLEAN NOT NULL,

    CONSTRAINT "wallet_transfer_history_pkey" PRIMARY KEY ("wallet_transfer_history_id")
);

-- CreateTable
CREATE TABLE "wallet_funds" (
    "wallet_funds_id" UUID NOT NULL,
    "user_id" UUID NOT NULL,
    "charge_id" TEXT,
    "amount" DOUBLE PRECISION NOT NULL,
    "reserved_order" UUID,
    "reserved_business" UUID,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "wallet_funds_pkey" PRIMARY KEY ("wallet_funds_id")
);

-- CreateTable
CREATE TABLE "local_products" (
    "local_product_id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "currency" TEXT NOT NULL,
    "stripe_product_id" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "local_products_pkey" PRIMARY KEY ("local_product_id")
);

-- CreateTable
CREATE TABLE "local_prices" (
    "local_prices_id" UUID NOT NULL,
    "local_product_id" UUID NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "currency" TEXT NOT NULL,
    "stripe_price_id" TEXT NOT NULL,
    "stripe_product_id" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "local_prices_pkey" PRIMARY KEY ("local_prices_id")
);

-- CreateTable
CREATE TABLE "categories" (
    "category_id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "translations" JSONB,
    "parent_category_id" UUID,
    "code" SMALLINT NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deleted_at" TIMESTAMPTZ(6),

    CONSTRAINT "categories_pkey" PRIMARY KEY ("category_id")
);

-- CreateTable
CREATE TABLE "menu_categories_categories" (
    "menu_category_id" UUID NOT NULL,
    "category_id" UUID NOT NULL,

    CONSTRAINT "menu_categories_categories_pkey" PRIMARY KEY ("menu_category_id","category_id")
);

-- CreateTable
CREATE TABLE "promo_sections" (
    "promo_section_id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "tag" TEXT NOT NULL,
    "service_type" TEXT NOT NULL,
    "code" SMALLINT NOT NULL,

    CONSTRAINT "promo_sections_pkey" PRIMARY KEY ("promo_section_id")
);

-- CreateTable
CREATE TABLE "promo_banners" (
    "promo_banner_id" UUID NOT NULL,
    "type" TEXT NOT NULL,
    "size" TEXT,
    "title" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "promo_section_buy_id" UUID NOT NULL,

    CONSTRAINT "promo_banners_pkey" PRIMARY KEY ("promo_banner_id")
);

-- CreateTable
CREATE TABLE "promo_sections_buy" (
    "promo_section_buy_id" UUID NOT NULL,
    "promo_section_id" UUID NOT NULL,
    "active_at" TIMESTAMP(3) NOT NULL,
    "expires_at" TIMESTAMP(3) NOT NULL,
    "tier" INTEGER NOT NULL,

    CONSTRAINT "promo_sections_buy_pkey" PRIMARY KEY ("promo_section_buy_id")
);

-- CreateTable
CREATE TABLE "promo_ads" (
    "promo_ad_id" UUID NOT NULL,
    "title" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "tag" TEXT NOT NULL,
    "service_type" TEXT NOT NULL,
    "discount" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "banner_id" UUID NOT NULL,
    "code" SMALLINT NOT NULL,

    CONSTRAINT "promo_ads_pkey" PRIMARY KEY ("promo_ad_id")
);

-- CreateTable
CREATE TABLE "promo_ads_category" (
    "promo_ads_category_id" UUID NOT NULL,
    "promo_ad_id" UUID NOT NULL,
    "category_id" UUID NOT NULL,

    CONSTRAINT "promo_ads_category_pkey" PRIMARY KEY ("promo_ads_category_id")
);

-- CreateTable
CREATE TABLE "words" (
    "word_id" UUID NOT NULL,
    "word" TEXT NOT NULL,
    "popularity" INTEGER NOT NULL,
    "category_id" UUID NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "words_pkey" PRIMARY KEY ("word_id")
);

-- CreateTable
CREATE TABLE "word_buy" (
    "word_buy_id" UUID NOT NULL,
    "word_id" UUID NOT NULL,
    "stripe_product_id" TEXT NOT NULL,
    "stripe_price_id" TEXT NOT NULL,
    "stripe_subscription_id" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "active_at" TIMESTAMP(3) NOT NULL,
    "expires_at" TIMESTAMP(3) NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deleted_at" TIMESTAMPTZ(6),

    CONSTRAINT "word_buy_pkey" PRIMARY KEY ("word_buy_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "cashback_credit_id_key" ON "cashback"("credit_id");

-- CreateIndex
CREATE INDEX "cashback_user_id_type_status_idx" ON "cashback"("user_id", "type", "status");

-- CreateIndex
CREATE INDEX "cashback_expires_at_idx" ON "cashback"("expires_at");

-- CreateIndex
CREATE UNIQUE INDEX "referrals_referred_user_id_key" ON "referrals"("referred_user_id");

-- CreateIndex
CREATE UNIQUE INDEX "group_users_child_user_id_key" ON "group_users"("child_user_id");

-- CreateIndex
CREATE UNIQUE INDEX "wallet_funds_wallet_funds_id_key" ON "wallet_funds"("wallet_funds_id");

-- CreateIndex
CREATE UNIQUE INDEX "local_products_stripe_product_id_key" ON "local_products"("stripe_product_id");

-- CreateIndex
CREATE INDEX "local_products_stripe_product_id_idx" ON "local_products"("stripe_product_id");

-- CreateIndex
CREATE UNIQUE INDEX "local_prices_stripe_price_id_key" ON "local_prices"("stripe_price_id");

-- CreateIndex
CREATE INDEX "local_prices_local_product_id_amount_idx" ON "local_prices"("local_product_id", "amount");

-- CreateIndex
CREATE INDEX "local_prices_stripe_product_id_amount_idx" ON "local_prices"("stripe_product_id", "amount");

-- CreateIndex
CREATE INDEX "local_prices_currency_idx" ON "local_prices"("currency");

-- CreateIndex
CREATE UNIQUE INDEX "categories_code_key" ON "categories"("code");

-- CreateIndex
CREATE UNIQUE INDEX "promo_sections_code_key" ON "promo_sections"("code");

-- CreateIndex
CREATE UNIQUE INDEX "promo_ads_code_key" ON "promo_ads"("code");

-- CreateIndex
CREATE UNIQUE INDEX "word_buy_stripe_product_id_key" ON "word_buy"("stripe_product_id");

-- CreateIndex
CREATE UNIQUE INDEX "word_buy_stripe_price_id_key" ON "word_buy"("stripe_price_id");

-- CreateIndex
CREATE UNIQUE INDEX "word_buy_stripe_subscription_id_key" ON "word_buy"("stripe_subscription_id");

-- CreateIndex
CREATE UNIQUE INDEX "delivery_order_sent_order_id_driver_id_key" ON "delivery_order_sent"("order_id", "driver_id");

-- CreateIndex
CREATE UNIQUE INDEX "users_referral_code_key" ON "users"("referral_code");

-- AddForeignKey
ALTER TABLE "cashback" ADD CONSTRAINT "cashback_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cashback" ADD CONSTRAINT "cashback_taxi_order_id_fkey" FOREIGN KEY ("taxi_order_id") REFERENCES "taxi_orders"("order_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cashback" ADD CONSTRAINT "cashback_delivery_order_id_fkey" FOREIGN KEY ("delivery_order_id") REFERENCES "delivery_orders"("order_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cashback" ADD CONSTRAINT "cashback_referral_id_fkey" FOREIGN KEY ("referral_id") REFERENCES "referrals"("referral_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "referrals" ADD CONSTRAINT "referrals_referrer_user_id_fkey" FOREIGN KEY ("referrer_user_id") REFERENCES "users"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "referrals" ADD CONSTRAINT "referrals_referred_user_id_fkey" FOREIGN KEY ("referred_user_id") REFERENCES "users"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "group_users" ADD CONSTRAINT "group_users_parent_user_id_fkey" FOREIGN KEY ("parent_user_id") REFERENCES "users"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "group_users" ADD CONSTRAINT "group_users_child_user_id_fkey" FOREIGN KEY ("child_user_id") REFERENCES "users"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "documents" ADD CONSTRAINT "documents_lost_item_id_fkey" FOREIGN KEY ("lost_item_id") REFERENCES "lost_items"("lost_item_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "documents" ADD CONSTRAINT "documents_transaction_id_fkey" FOREIGN KEY ("transaction_id") REFERENCES "transactions"("transaction_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "documents" ADD CONSTRAINT "documents_promo_banner_id_fkey" FOREIGN KEY ("promo_banner_id") REFERENCES "promo_banners"("promo_banner_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "taxi_orders" ADD CONSTRAINT "taxi_orders_parent_order_id_fkey" FOREIGN KEY ("parent_order_id") REFERENCES "taxi_orders"("order_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "delivery_orders" ADD CONSTRAINT "delivery_orders_driver_id_fkey" FOREIGN KEY ("driver_id") REFERENCES "drivers"("driver_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "delivery_order_sent" ADD CONSTRAINT "delivery_order_sent_delivery_driver_id_fkey" FOREIGN KEY ("delivery_driver_id") REFERENCES "delivery_drivers"("delivery_driver_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "delivery_order_sent" ADD CONSTRAINT "delivery_order_sent_driver_id_fkey" FOREIGN KEY ("driver_id") REFERENCES "drivers"("driver_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "transactions" ADD CONSTRAINT "transactions_taxi_order_id_fkey" FOREIGN KEY ("taxi_order_id") REFERENCES "taxi_orders"("order_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "transactions" ADD CONSTRAINT "transactions_wallet_fund_id_fkey" FOREIGN KEY ("wallet_fund_id") REFERENCES "wallet_funds"("wallet_funds_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "lost_items" ADD CONSTRAINT "lost_items_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("user_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "flag_history" ADD CONSTRAINT "flag_history_flag_id_fkey" FOREIGN KEY ("flag_id") REFERENCES "flags"("flag_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "flag_history" ADD CONSTRAINT "flag_history_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "driver_history_locations" ADD CONSTRAINT "driver_history_locations_driver_id_fkey" FOREIGN KEY ("driver_id") REFERENCES "drivers"("driver_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "driver_history_locations" ADD CONSTRAINT "driver_history_locations_order_id_fkey" FOREIGN KEY ("order_id") REFERENCES "taxi_orders"("order_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "delivery_driver_history_locations" ADD CONSTRAINT "delivery_driver_history_locations_delivery_driver_id_fkey" FOREIGN KEY ("delivery_driver_id") REFERENCES "delivery_drivers"("delivery_driver_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "delivery_driver_history_locations" ADD CONSTRAINT "delivery_driver_history_locations_order_id_fkey" FOREIGN KEY ("order_id") REFERENCES "delivery_orders"("order_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "wallet_transfer_history" ADD CONSTRAINT "wallet_transfer_history_order_id_fkey" FOREIGN KEY ("order_id") REFERENCES "delivery_orders"("order_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "wallet_transfer_history" ADD CONSTRAINT "wallet_transfer_history_taxi_order_id_fkey" FOREIGN KEY ("order_id") REFERENCES "taxi_orders"("order_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "wallet_funds" ADD CONSTRAINT "wallet_funds_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "local_prices" ADD CONSTRAINT "local_prices_local_product_id_fkey" FOREIGN KEY ("local_product_id") REFERENCES "local_products"("local_product_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "categories" ADD CONSTRAINT "categories_parent_category_id_fkey" FOREIGN KEY ("parent_category_id") REFERENCES "categories"("category_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "menu_categories_categories" ADD CONSTRAINT "menu_categories_categories_menu_category_id_fkey" FOREIGN KEY ("menu_category_id") REFERENCES "menu_categories"("menu_category_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "menu_categories_categories" ADD CONSTRAINT "menu_categories_categories_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "categories"("category_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "promo_sections_buy" ADD CONSTRAINT "promo_sections_buy_promo_section_id_fkey" FOREIGN KEY ("promo_section_id") REFERENCES "promo_sections"("promo_section_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "promo_ads" ADD CONSTRAINT "promo_ads_banner_id_fkey" FOREIGN KEY ("banner_id") REFERENCES "promo_banners"("promo_banner_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "promo_ads_category" ADD CONSTRAINT "promo_ads_category_promo_ad_id_fkey" FOREIGN KEY ("promo_ad_id") REFERENCES "promo_ads"("promo_ad_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "promo_ads_category" ADD CONSTRAINT "promo_ads_category_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "categories"("category_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "words" ADD CONSTRAINT "words_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "categories"("category_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "word_buy" ADD CONSTRAINT "word_buy_word_id_fkey" FOREIGN KEY ("word_id") REFERENCES "words"("word_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "word_buy" ADD CONSTRAINT "word_buy_stripe_product_id_fkey" FOREIGN KEY ("stripe_product_id") REFERENCES "local_products"("stripe_product_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "word_buy" ADD CONSTRAINT "word_buy_stripe_price_id_fkey" FOREIGN KEY ("stripe_price_id") REFERENCES "local_prices"("stripe_price_id") ON DELETE RESTRICT ON UPDATE CASCADE;
