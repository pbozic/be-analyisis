/*
  Warnings:

  - The primary key for the `action` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `addon` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `addon_action` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `business_addon` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `business_usage` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `subscription` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `subscription_action` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Changed the type of `action_id` on the `action` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `addon_id` on the `addon` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `addon_action_id` on the `addon_action` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `addon_id` on the `addon_action` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `action_id` on the `addon_action` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `business_addon_id` on the `business_addon` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `addon_id` on the `business_addon` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `business_usage_id` on the `business_usage` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `action_id` on the `business_usage` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `subscription_id` on the `reservation_module` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `subscription_id` on the `subscription` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `subscription_action_id` on the `subscription_action` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `subscription_id` on the `subscription_action` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `action_id` on the `subscription_action` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "BOOKING_STATUS" AS ENUM ('reserved', 'cancelled', 'no_show');

-- CreateEnum
CREATE TYPE "CATEGORY_LEVEL" AS ENUM ('category', 'subcategory', 'sub_subcategory');

-- CreateEnum
CREATE TYPE "SCHEDULE_SLOT_EXCEPTION_TYPE" AS ENUM ('vacation', 'location_closed', 'other', 'health', 'break', 'lunch');

-- DropForeignKey
ALTER TABLE "addon_action" DROP CONSTRAINT "addon_action_action_id_fkey";

-- DropForeignKey
ALTER TABLE "addon_action" DROP CONSTRAINT "addon_action_addon_id_fkey";

-- DropForeignKey
ALTER TABLE "business_addon" DROP CONSTRAINT "business_addon_addon_id_fkey";

-- DropForeignKey
ALTER TABLE "business_usage" DROP CONSTRAINT "business_usage_action_id_fkey";

-- DropForeignKey
ALTER TABLE "reservation_module" DROP CONSTRAINT "reservation_module_subscription_id_fkey";

-- DropForeignKey
ALTER TABLE "subscription_action" DROP CONSTRAINT "subscription_action_action_id_fkey";

-- DropForeignKey
ALTER TABLE "subscription_action" DROP CONSTRAINT "subscription_action_subscription_id_fkey";

-- AlterTable
ALTER TABLE "action" DROP CONSTRAINT "action_pkey",
DROP COLUMN "action_id",
ADD COLUMN     "action_id" UUID NOT NULL,
ADD CONSTRAINT "action_pkey" PRIMARY KEY ("action_id");

-- AlterTable
ALTER TABLE "addon" DROP CONSTRAINT "addon_pkey",
DROP COLUMN "addon_id",
ADD COLUMN     "addon_id" UUID NOT NULL,
ADD CONSTRAINT "addon_pkey" PRIMARY KEY ("addon_id");

-- AlterTable
ALTER TABLE "addon_action" DROP CONSTRAINT "addon_action_pkey",
DROP COLUMN "addon_action_id",
ADD COLUMN     "addon_action_id" UUID NOT NULL,
DROP COLUMN "addon_id",
ADD COLUMN     "addon_id" UUID NOT NULL,
DROP COLUMN "action_id",
ADD COLUMN     "action_id" UUID NOT NULL,
ADD CONSTRAINT "addon_action_pkey" PRIMARY KEY ("addon_action_id");

-- AlterTable
ALTER TABLE "business_addon" DROP CONSTRAINT "business_addon_pkey",
DROP COLUMN "business_addon_id",
ADD COLUMN     "business_addon_id" UUID NOT NULL,
DROP COLUMN "addon_id",
ADD COLUMN     "addon_id" UUID NOT NULL,
ADD CONSTRAINT "business_addon_pkey" PRIMARY KEY ("business_addon_id");

-- AlterTable
ALTER TABLE "business_usage" DROP CONSTRAINT "business_usage_pkey",
DROP COLUMN "business_usage_id",
ADD COLUMN     "business_usage_id" UUID NOT NULL,
DROP COLUMN "action_id",
ADD COLUMN     "action_id" UUID NOT NULL,
ADD CONSTRAINT "business_usage_pkey" PRIMARY KEY ("business_usage_id");

-- AlterTable
ALTER TABLE "reservation_module" DROP COLUMN "subscription_id",
ADD COLUMN     "subscription_id" UUID NOT NULL;

-- AlterTable
ALTER TABLE "subscription" DROP CONSTRAINT "subscription_pkey",
DROP COLUMN "subscription_id",
ADD COLUMN     "subscription_id" UUID NOT NULL,
ADD CONSTRAINT "subscription_pkey" PRIMARY KEY ("subscription_id");

-- AlterTable
ALTER TABLE "subscription_action" DROP CONSTRAINT "subscription_action_pkey",
DROP COLUMN "subscription_action_id",
ADD COLUMN     "subscription_action_id" UUID NOT NULL,
DROP COLUMN "subscription_id",
ADD COLUMN     "subscription_id" UUID NOT NULL,
DROP COLUMN "action_id",
ADD COLUMN     "action_id" UUID NOT NULL,
ADD CONSTRAINT "subscription_action_pkey" PRIMARY KEY ("subscription_action_id");

-- CreateTable
CREATE TABLE "location" (
    "location_id" UUID NOT NULL,
    "reservation_module_id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "phone" TEXT,
    "color" TEXT,
    "accepts_online" BOOLEAN NOT NULL DEFAULT false,
    "closed_on_holidays" BOOLEAN NOT NULL DEFAULT false,
    "working_days" JSONB NOT NULL,

    CONSTRAINT "location_pkey" PRIMARY KEY ("location_id")
);

-- CreateTable
CREATE TABLE "category" (
    "category_id" UUID NOT NULL,
    "name" JSONB NOT NULL,
    "parent_id" UUID,
    "level" "CATEGORY_LEVEL" NOT NULL,
    "color" TEXT,

    CONSTRAINT "category_pkey" PRIMARY KEY ("category_id")
);

-- CreateTable
CREATE TABLE "service" (
    "service_id" UUID NOT NULL,
    "reservation_module_id" UUID NOT NULL,
    "category_id" UUID,
    "name" JSONB NOT NULL,
    "description" JSONB,
    "image_url" TEXT,
    "price_cents" INTEGER NOT NULL,
    "discount_percent" INTEGER,
    "discount_amount" INTEGER,
    "duration_minutes" INTEGER NOT NULL,
    "available_online" BOOLEAN NOT NULL DEFAULT false,
    "skd_codes" TEXT[],
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "service_pkey" PRIMARY KEY ("service_id")
);

-- CreateTable
CREATE TABLE "employee" (
    "employee_id" UUID NOT NULL,
    "reservation_module_id" UUID NOT NULL,
    "business_users_id" UUID,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deleted_at" TIMESTAMPTZ,

    CONSTRAINT "employee_pkey" PRIMARY KEY ("employee_id")
);

-- CreateTable
CREATE TABLE "customers" (
    "customer_id" UUID NOT NULL,
    "reservation_module_id" UUID NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "email" TEXT,
    "phone" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "user_id" UUID,

    CONSTRAINT "customers_pkey" PRIMARY KEY ("customer_id")
);

-- CreateTable
CREATE TABLE "service_assignment" (
    "employee_id" UUID NOT NULL,
    "service_id" UUID NOT NULL,

    CONSTRAINT "service_assignment_pkey" PRIMARY KEY ("employee_id","service_id")
);

-- CreateTable
CREATE TABLE "schedule" (
    "schedule_id" UUID NOT NULL,
    "location_id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "color" TEXT,
    "start_date" TIMESTAMP(3) NOT NULL,
    "end_date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "schedule_pkey" PRIMARY KEY ("schedule_id")
);

-- CreateTable
CREATE TABLE "schedule_employee" (
    "schedule_employee_id" UUID NOT NULL,
    "schedule_id" UUID NOT NULL,
    "employee_id" UUID NOT NULL,

    CONSTRAINT "schedule_employee_pkey" PRIMARY KEY ("schedule_employee_id")
);

-- CreateTable
CREATE TABLE "schedule_slot" (
    "schedule_slot_id" UUID NOT NULL,
    "schedule_id" UUID NOT NULL,
    "schedule_employee_id" UUID NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "start_time" TIMESTAMP(3) NOT NULL,
    "end_time" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "schedule_slot_pkey" PRIMARY KEY ("schedule_slot_id")
);

-- CreateTable
CREATE TABLE "schedule_slot_exceptions" (
    "schedule_slot_exception_id" UUID NOT NULL,
    "schedule_slot_id" UUID NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "start_time" TIMESTAMP(3) NOT NULL,
    "end_time" TIMESTAMP(3) NOT NULL,
    "reason" TEXT,
    "type" "SCHEDULE_SLOT_EXCEPTION_TYPE" NOT NULL,

    CONSTRAINT "schedule_slot_exceptions_pkey" PRIMARY KEY ("schedule_slot_exception_id")
);

-- CreateTable
CREATE TABLE "booking_slots" (
    "booking_slot_id" UUID NOT NULL,
    "schedule_slot_id" UUID NOT NULL,
    "start_time" TIMESTAMP(3) NOT NULL,
    "end_time" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "booking_slots_pkey" PRIMARY KEY ("booking_slot_id")
);

-- CreateTable
CREATE TABLE "booking" (
    "booking_id" UUID NOT NULL,
    "customer_id" UUID NOT NULL,
    "reservation_module_id" UUID NOT NULL,
    "location_id" UUID,
    "status" "BOOKING_STATUS" NOT NULL,
    "service_id" UUID NOT NULL,
    "comment" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "price_cents" INTEGER,
    "start_time" TIMESTAMP(3),
    "end_time" TIMESTAMP(3),
    "assigned_employee_id" UUID,
    "parent__booking_id" UUID,

    CONSTRAINT "booking_pkey" PRIMARY KEY ("booking_id")
);

-- CreateTable
CREATE TABLE "booking_history_log" (
    "booking_history_id" UUID NOT NULL,
    "booking_id" UUID NOT NULL,
    "status" "BOOKING_STATUS" NOT NULL,
    "comment" TEXT,
    "type" TEXT,
    "title" TEXT,
    "description" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "user_id" UUID,

    CONSTRAINT "booking_history_log_pkey" PRIMARY KEY ("booking_history_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "employee_business_users_id_key" ON "employee"("business_users_id");

-- CreateIndex
CREATE UNIQUE INDEX "customers_email_key" ON "customers"("email");

-- CreateIndex
CREATE UNIQUE INDEX "customers_phone_key" ON "customers"("phone");

-- CreateIndex
CREATE UNIQUE INDEX "schedule_slot_schedule_id_schedule_employee_id_key" ON "schedule_slot"("schedule_id", "schedule_employee_id");

-- CreateIndex
CREATE UNIQUE INDEX "business_usage_business_usage_id_action_id_key" ON "business_usage"("business_usage_id", "action_id");

-- AddForeignKey
ALTER TABLE "reservation_module" ADD CONSTRAINT "reservation_module_subscription_id_fkey" FOREIGN KEY ("subscription_id") REFERENCES "subscription"("subscription_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "location" ADD CONSTRAINT "location_reservation_module_id_fkey" FOREIGN KEY ("reservation_module_id") REFERENCES "reservation_module"("reservation_module_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "category" ADD CONSTRAINT "category_parent_id_fkey" FOREIGN KEY ("parent_id") REFERENCES "category"("category_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "service" ADD CONSTRAINT "service_reservation_module_id_fkey" FOREIGN KEY ("reservation_module_id") REFERENCES "reservation_module"("reservation_module_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "service" ADD CONSTRAINT "service_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "category"("category_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "employee" ADD CONSTRAINT "employee_reservation_module_id_fkey" FOREIGN KEY ("reservation_module_id") REFERENCES "reservation_module"("reservation_module_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "employee" ADD CONSTRAINT "employee_business_users_id_fkey" FOREIGN KEY ("business_users_id") REFERENCES "business_users"("business_users_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "customers" ADD CONSTRAINT "customers_reservation_module_id_fkey" FOREIGN KEY ("reservation_module_id") REFERENCES "reservation_module"("reservation_module_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "customers" ADD CONSTRAINT "customers_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("user_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "service_assignment" ADD CONSTRAINT "service_assignment_employee_id_fkey" FOREIGN KEY ("employee_id") REFERENCES "employee"("employee_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "service_assignment" ADD CONSTRAINT "service_assignment_service_id_fkey" FOREIGN KEY ("service_id") REFERENCES "service"("service_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "schedule" ADD CONSTRAINT "schedule_location_id_fkey" FOREIGN KEY ("location_id") REFERENCES "location"("location_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "schedule_employee" ADD CONSTRAINT "schedule_employee_schedule_id_fkey" FOREIGN KEY ("schedule_id") REFERENCES "schedule"("schedule_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "schedule_employee" ADD CONSTRAINT "schedule_employee_employee_id_fkey" FOREIGN KEY ("employee_id") REFERENCES "employee"("employee_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "schedule_slot" ADD CONSTRAINT "schedule_slot_schedule_id_fkey" FOREIGN KEY ("schedule_id") REFERENCES "schedule"("schedule_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "schedule_slot" ADD CONSTRAINT "schedule_slot_schedule_employee_id_fkey" FOREIGN KEY ("schedule_employee_id") REFERENCES "schedule_employee"("schedule_employee_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "schedule_slot_exceptions" ADD CONSTRAINT "schedule_slot_exceptions_schedule_slot_id_fkey" FOREIGN KEY ("schedule_slot_id") REFERENCES "schedule_slot"("schedule_slot_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "booking_slots" ADD CONSTRAINT "booking_slots_schedule_slot_id_fkey" FOREIGN KEY ("schedule_slot_id") REFERENCES "schedule_slot"("schedule_slot_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "booking" ADD CONSTRAINT "booking_parent__booking_id_fkey" FOREIGN KEY ("parent__booking_id") REFERENCES "booking"("booking_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "booking" ADD CONSTRAINT "booking_reservation_module_id_fkey" FOREIGN KEY ("reservation_module_id") REFERENCES "reservation_module"("reservation_module_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "booking" ADD CONSTRAINT "booking_location_id_fkey" FOREIGN KEY ("location_id") REFERENCES "location"("location_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "booking" ADD CONSTRAINT "booking_assigned_employee_id_fkey" FOREIGN KEY ("assigned_employee_id") REFERENCES "employee"("employee_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "booking" ADD CONSTRAINT "booking_service_id_fkey" FOREIGN KEY ("service_id") REFERENCES "service"("service_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "booking" ADD CONSTRAINT "booking_customer_id_fkey" FOREIGN KEY ("customer_id") REFERENCES "customers"("customer_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "booking_history_log" ADD CONSTRAINT "booking_history_log_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("user_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "booking_history_log" ADD CONSTRAINT "booking_history_log_booking_id_fkey" FOREIGN KEY ("booking_id") REFERENCES "booking"("booking_id") ON DELETE RESTRICT ON UPDATE CASCADE;

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
ALTER TABLE "business_usage" ADD CONSTRAINT "business_usage_action_id_fkey" FOREIGN KEY ("action_id") REFERENCES "action"("action_id") ON DELETE RESTRICT ON UPDATE CASCADE;
