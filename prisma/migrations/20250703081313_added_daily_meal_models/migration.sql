-- CreateEnum
CREATE TYPE "SUBSCRIPTION_TYPE" AS ENUM ('DATED', 'RECURRING');

-- CreateEnum
CREATE TYPE "DAILY_MEAL_INSTANCE_STATUS" AS ENUM ('PLANNED', 'CANCELED', 'SKIPPED', 'DELIVERED');

-- AlterTable
ALTER TABLE "menu_categories" ADD COLUMN     "daily_meal_category_id" UUID;

-- CreateTable
CREATE TABLE "daily_meal_subscriptions" (
    "id" UUID NOT NULL,
    "user_id" UUID NOT NULL,
    "business_id" UUID NOT NULL,
    "delivery_address_id" UUID NOT NULL,
    "start_date" TIMESTAMP(3) NOT NULL,
    "end_date" TIMESTAMP(3),
    "type" "SUBSCRIPTION_TYPE" NOT NULL,
    "status" "SUBSCRIPTION_STATUS" NOT NULL DEFAULT 'AWAITING_PAYMENT',
    "courier_comment" TEXT,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "daily_meal_subscriptions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "daily_meal_subscription_customers" (
    "id" UUID NOT NULL,
    "subscription_id" UUID NOT NULL,
    "daily_meal_category_id" UUID NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "telephone" TEXT NOT NULL,
    "restaurant_comment" TEXT,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "daily_meal_subscription_customers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "daily_meal_subscription_days" (
    "id" UUID NOT NULL,
    "subscription_id" UUID NOT NULL,
    "intended_date" TIMESTAMP(3) NOT NULL,
    "delivery_date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "daily_meal_subscription_days_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "daily_meal_subscription_weekdays" (
    "id" UUID NOT NULL,
    "subscription_id" UUID NOT NULL,
    "intended_weekday" INTEGER NOT NULL,
    "delivery_weekday" INTEGER NOT NULL,

    CONSTRAINT "daily_meal_subscription_weekdays_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "daily_meal_instances" (
    "id" UUID NOT NULL,
    "subscription_id" UUID NOT NULL,
    "subscription_customer_id" UUID NOT NULL,
    "menu_category_id" UUID NOT NULL,
    "status" "DAILY_MEAL_INSTANCE_STATUS" NOT NULL DEFAULT 'PLANNED',
    "intended_date" TIMESTAMP(3) NOT NULL,
    "delivery_date" TIMESTAMP(3) NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "daily_meal_instances_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "daily_meal_subscription_days_delivery_date_idx" ON "daily_meal_subscription_days"("delivery_date");

-- CreateIndex
CREATE INDEX "daily_meal_subscription_days_intended_date_idx" ON "daily_meal_subscription_days"("intended_date");

-- CreateIndex
CREATE UNIQUE INDEX "daily_meal_subscription_days_subscription_id_intended_date_key" ON "daily_meal_subscription_days"("subscription_id", "intended_date");

-- CreateIndex
CREATE INDEX "daily_meal_subscription_weekdays_intended_weekday_idx" ON "daily_meal_subscription_weekdays"("intended_weekday");

-- CreateIndex
CREATE INDEX "daily_meal_subscription_weekdays_delivery_weekday_idx" ON "daily_meal_subscription_weekdays"("delivery_weekday");

-- CreateIndex
CREATE UNIQUE INDEX "daily_meal_subscription_weekdays_subscription_id_intended_w_key" ON "daily_meal_subscription_weekdays"("subscription_id", "intended_weekday");

-- CreateIndex
CREATE INDEX "daily_meal_instances_delivery_date_idx" ON "daily_meal_instances"("delivery_date");

-- CreateIndex
CREATE INDEX "daily_meal_instances_intended_date_idx" ON "daily_meal_instances"("intended_date");

-- CreateIndex
CREATE INDEX "daily_meal_instances_status_idx" ON "daily_meal_instances"("status");

-- CreateIndex
CREATE UNIQUE INDEX "daily_meal_instances_subscription_customer_id_intended_date_key" ON "daily_meal_instances"("subscription_customer_id", "intended_date");

-- AddForeignKey
ALTER TABLE "menu_categories" ADD CONSTRAINT "menu_categories_daily_meal_category_id_fkey" FOREIGN KEY ("daily_meal_category_id") REFERENCES "daily_meal_categories"("daily_meal_category_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "daily_meal_subscriptions" ADD CONSTRAINT "daily_meal_subscriptions_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "daily_meal_subscriptions" ADD CONSTRAINT "daily_meal_subscriptions_delivery_address_id_fkey" FOREIGN KEY ("delivery_address_id") REFERENCES "addresses"("address_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "daily_meal_subscriptions" ADD CONSTRAINT "daily_meal_subscriptions_business_id_fkey" FOREIGN KEY ("business_id") REFERENCES "business"("business_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "daily_meal_subscription_customers" ADD CONSTRAINT "daily_meal_subscription_customers_subscription_id_fkey" FOREIGN KEY ("subscription_id") REFERENCES "daily_meal_subscriptions"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "daily_meal_subscription_customers" ADD CONSTRAINT "daily_meal_subscription_customers_daily_meal_category_id_fkey" FOREIGN KEY ("daily_meal_category_id") REFERENCES "daily_meal_categories"("daily_meal_category_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "daily_meal_subscription_days" ADD CONSTRAINT "daily_meal_subscription_days_subscription_id_fkey" FOREIGN KEY ("subscription_id") REFERENCES "daily_meal_subscriptions"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "daily_meal_subscription_weekdays" ADD CONSTRAINT "daily_meal_subscription_weekdays_subscription_id_fkey" FOREIGN KEY ("subscription_id") REFERENCES "daily_meal_subscriptions"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "daily_meal_instances" ADD CONSTRAINT "daily_meal_instances_subscription_id_fkey" FOREIGN KEY ("subscription_id") REFERENCES "daily_meal_subscriptions"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "daily_meal_instances" ADD CONSTRAINT "daily_meal_instances_subscription_customer_id_fkey" FOREIGN KEY ("subscription_customer_id") REFERENCES "daily_meal_subscription_customers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "daily_meal_instances" ADD CONSTRAINT "daily_meal_instances_menu_category_id_fkey" FOREIGN KEY ("menu_category_id") REFERENCES "menu_categories"("menu_category_id") ON DELETE RESTRICT ON UPDATE CASCADE;
