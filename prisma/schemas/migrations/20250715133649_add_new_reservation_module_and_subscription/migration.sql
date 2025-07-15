-- CreateEnum
CREATE TYPE "MODULE_TYPE" AS ENUM ('reservations');

-- AlterTable
ALTER TABLE "menu_items" ALTER COLUMN "stock" SET DEFAULT 0;

-- CreateTable
CREATE TABLE "reservation_module" (
    "reservation_module_id" UUID NOT NULL,
    "business_id" UUID NOT NULL,
    "subscription_id" TEXT NOT NULL,

    CONSTRAINT "reservation_module_pkey" PRIMARY KEY ("reservation_module_id")
);

-- CreateTable
CREATE TABLE "subscription" (
    "subscription_id" TEXT NOT NULL,
    "module" "MODULE_TYPE" NOT NULL,
    "name" TEXT NOT NULL,
    "price_cents" INTEGER NOT NULL,
    "stripe_price_id" TEXT NOT NULL,

    CONSTRAINT "subscription_pkey" PRIMARY KEY ("subscription_id")
);

-- CreateTable
CREATE TABLE "addon" (
    "addon_id" TEXT NOT NULL,
    "module" "MODULE_TYPE" NOT NULL,
    "name" TEXT NOT NULL,
    "price_cents" INTEGER NOT NULL,
    "stripe_price_id" TEXT NOT NULL,

    CONSTRAINT "addon_pkey" PRIMARY KEY ("addon_id")
);

-- CreateTable
CREATE TABLE "action" (
    "action_id" TEXT NOT NULL,
    "module" "MODULE_TYPE" NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "action_pkey" PRIMARY KEY ("action_id")
);

-- CreateTable
CREATE TABLE "subscription_action" (
    "subscription_action_id" TEXT NOT NULL,
    "subscription_id" TEXT NOT NULL,
    "action_id" TEXT NOT NULL,
    "module" "MODULE_TYPE" NOT NULL,
    "limit" INTEGER,

    CONSTRAINT "subscription_action_pkey" PRIMARY KEY ("subscription_action_id")
);

-- CreateTable
CREATE TABLE "addon_action" (
    "addon_action_id" TEXT NOT NULL,
    "addon_id" TEXT NOT NULL,
    "action_id" TEXT NOT NULL,
    "module" "MODULE_TYPE" NOT NULL,
    "limit" INTEGER,

    CONSTRAINT "addon_action_pkey" PRIMARY KEY ("addon_action_id")
);

-- CreateTable
CREATE TABLE "business_addon" (
    "business_addon_id" TEXT NOT NULL,
    "addon_id" TEXT NOT NULL,
    "reservation_module_id" UUID,
    "sms_module_id" TEXT,
    "ads_module_id" TEXT,

    CONSTRAINT "business_addon_pkey" PRIMARY KEY ("business_addon_id")
);

-- CreateTable
CREATE TABLE "business_usage" (
    "business_usage_id" TEXT NOT NULL,
    "action_id" TEXT NOT NULL,
    "used" INTEGER NOT NULL,
    "reset_date" TIMESTAMP(3),
    "reservation_module_id" UUID,

    CONSTRAINT "business_usage_pkey" PRIMARY KEY ("business_usage_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "reservation_module_business_id_key" ON "reservation_module"("business_id");

-- CreateIndex
CREATE UNIQUE INDEX "action_name_key" ON "action"("name");

-- CreateIndex
CREATE UNIQUE INDEX "business_usage_business_usage_id_action_id_key" ON "business_usage"("business_usage_id", "action_id");

-- AddForeignKey
ALTER TABLE "reservation_module" ADD CONSTRAINT "reservation_module_business_id_fkey" FOREIGN KEY ("business_id") REFERENCES "business"("business_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "reservation_module" ADD CONSTRAINT "reservation_module_subscription_id_fkey" FOREIGN KEY ("subscription_id") REFERENCES "subscription"("subscription_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "subscription_action" ADD CONSTRAINT "subscription_action_subscription_id_fkey" FOREIGN KEY ("subscription_id") REFERENCES "subscription"("subscription_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "subscription_action" ADD CONSTRAINT "subscription_action_action_id_fkey" FOREIGN KEY ("action_id") REFERENCES "action"("action_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "addon_action" ADD CONSTRAINT "addon_action_addon_id_fkey" FOREIGN KEY ("addon_id") REFERENCES "addon"("addon_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "addon_action" ADD CONSTRAINT "addon_action_action_id_fkey" FOREIGN KEY ("action_id") REFERENCES "action"("action_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "business_addon" ADD CONSTRAINT "business_addon_addon_id_fkey" FOREIGN KEY ("addon_id") REFERENCES "addon"("addon_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "business_addon" ADD CONSTRAINT "business_addon_reservation_module_id_fkey" FOREIGN KEY ("reservation_module_id") REFERENCES "reservation_module"("reservation_module_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "business_usage" ADD CONSTRAINT "business_usage_action_id_fkey" FOREIGN KEY ("action_id") REFERENCES "action"("action_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "business_usage" ADD CONSTRAINT "business_usage_reservation_module_id_fkey" FOREIGN KEY ("reservation_module_id") REFERENCES "reservation_module"("reservation_module_id") ON DELETE SET NULL ON UPDATE CASCADE;
