-- CreateEnum
CREATE TYPE "TRANSACTION_TYPE" AS ENUM ('DEBIT', 'CREDIT');

-- CreateEnum
CREATE TYPE "USER_ROLES" AS ENUM ('ADMIN', 'BUSINESS_OWNER', 'BUSINESS_MANAGER', 'BUSINESS_CARETAKER', 'BUSINESS_USER', 'PERSONAL', 'DRIVER', 'DELIVERY_DRIVER');

-- CreateEnum
CREATE TYPE "TokenType" AS ENUM ('EMAIL', 'PHONE_VERIFICATION', 'API', 'PASSWORD_RESET');

-- CreateEnum
CREATE TYPE "BUSINESS_TYPE" AS ENUM ('TRANSFER', 'MERCHANT', 'BUSINESS');

-- CreateEnum
CREATE TYPE "MERCHANT_TYPE" AS ENUM ('RESTAURANT', 'BAR', 'MARKET', 'STORE');

-- CreateEnum
CREATE TYPE "BUSINESS_CATEGORY" AS ENUM ('TAXI', 'TRANSFER', 'MERCHANT');

-- CreateEnum
CREATE TYPE "FILE_TYPE" AS ENUM ('IMAGE', 'DOCUMENT');

-- CreateEnum
CREATE TYPE "DOCUMENT_TYPE" AS ENUM ('NATIONAL_ID', 'PASSPORT', 'PROFILE_PICTURE', 'LOGO', 'BANNER', 'DRIVING_LICENSE', 'TAXI_LICENCE', 'PASSENGER_TRANSFER_LICENSE', 'BACKGROUND_CHECK_REPORT', 'VEHICLE_REGISTRATION', 'VEHICLE_INSURANCE', 'VEHICLE_TECHNICAL_INSPECTION', 'OPERATING_PERMIT', 'HACCP_CERTIFICATION', 'BUSINESS_LICENSE', 'MENU_ITEM_IMAGE', 'WALLET_TOPUP');

-- CreateEnum
CREATE TYPE "TAXI_ORDER_STATUS" AS ENUM ('PENDING', 'TAXI_ACCEPTED', 'TAXI_REJECTED', 'TAXI_CANCELED', 'TAXI_WAITING', 'TAXI_DRIVING', 'TAXI_ARRIVED', 'TAXI_COMPLETED', 'CUSTOMER_CANCELED');

-- CreateEnum
CREATE TYPE "DELIVERY_ORDER_STATUS" AS ENUM ('PENDING', 'DELIVERY_ACCEPTED', 'DELIVERY_REJECTED', 'DELIVERY_CANCELED', 'DELIVERY_PICKED_UP', 'DELIVERY_IN_DELIVERY', 'DELIVERY_DELAYED', 'DELIVERY_ARRIVED', 'DELIVERY_DELIVERED', 'DELIVERY_COMPLETED', 'CUSTOMER_CANCELED', 'CUSTOMER_PAYMENT_FAILED', 'CUSTOMER_PAYMENT_SUCCESSFUL', 'CUSTOMER_PAYMENT_PENDING', 'MERCHANT_ACCEPTED', 'MERCHANT_REJECTED', 'MERCHANT_CANCELED', 'MERCHANT_PREPARING', 'MERCHANT_DELAYED', 'MERCHANT_READY_FOR_PICKUP', 'MERCHANT_REFUNDED', 'MERCHANT_HIGH_DEMAND');

-- CreateEnum
CREATE TYPE "VEHICLE_CATEGORY" AS ENUM ('STANDARD', 'PREMIUM');

-- CreateEnum
CREATE TYPE "VEHICLE_CLASS" AS ENUM ('SEDAN', 'CARAVAN', 'SUV', 'MINIVAN', 'VAN', 'MINIBUS', 'BUS');

-- CreateEnum
CREATE TYPE "GENDER" AS ENUM ('MALE', 'FEMALE', 'OTHER');

-- CreateEnum
CREATE TYPE "COMPANY_ROLE" AS ENUM ('DIRECTOR', 'MANAGER', 'REPRESENTATIVE_OF_SALES', 'HEAD_OF_PROCUREMENT');

-- CreateEnum
CREATE TYPE "RESERVATION_STATUS" AS ENUM ('PENDING', 'TABLE_RESERVATION_ACCEPTED', 'TABLE_RESERVATION_REJECTED', 'TABLE_RESERVATION_CANCELED', 'TABLE_RESERVATION_COMPLETED', 'TABLE_RESERVATION_EXPIRED');

-- CreateTable
CREATE TABLE "finances" (
    "finance_id" UUID NOT NULL,
    "bank_name" TEXT NOT NULL,
    "account_holder" TEXT NOT NULL,
    "account_number" TEXT NOT NULL,
    "payment_preferences" JSONB NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "finances_pkey" PRIMARY KEY ("finance_id")
);

-- CreateTable
CREATE TABLE "business" (
    "business_id" UUID NOT NULL,
    "address_id" UUID,
    "delivery_address_id" UUID,
    "finance_id" UUID,
    "type" "BUSINESS_TYPE" NOT NULL,
    "is_business_unit" BOOLEAN NOT NULL DEFAULT false,
    "business_group_name" TEXT,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "tax_id" TEXT NOT NULL,
    "registration_id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "telephone" TEXT NOT NULL,
    "telephone_code" TEXT NOT NULL,
    "telephone_number" TEXT NOT NULL,
    "website_url" TEXT,
    "working_hours" JSONB,
    "seats" INTEGER,
    "minimum_order" INTEGER NOT NULL,
    "popular" BOOLEAN NOT NULL DEFAULT true,
    "new" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "parent_business_id" UUID,
    "reviewable_id" UUID,
    "stripe_account_id" TEXT,

    CONSTRAINT "business_pkey" PRIMARY KEY ("business_id")
);

-- CreateTable
CREATE TABLE "business_users" (
    "business_users_id" UUID NOT NULL,
    "online" BOOLEAN DEFAULT false,
    "company_role" "COMPANY_ROLE" NOT NULL DEFAULT 'DIRECTOR',
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "user_id" UUID NOT NULL,
    "business_id" UUID NOT NULL,
    "operating_address_id" UUID,

    CONSTRAINT "business_users_pkey" PRIMARY KEY ("business_users_id")
);

-- CreateTable
CREATE TABLE "users" (
    "user_id" UUID NOT NULL,
    "first_name" TEXT,
    "last_name" TEXT,
    "password" TEXT NOT NULL,
    "gender" "GENDER",
    "email" TEXT NOT NULL,
    "telephone" TEXT NOT NULL,
    "telephone_code" TEXT,
    "telephone_number" TEXT,
    "date_of_birth" DATE NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "user_role" "USER_ROLES" NOT NULL DEFAULT 'PERSONAL',
    "phone_verified" BOOLEAN NOT NULL DEFAULT false,
    "push_notification_preferences" JSONB,
    "notification_preferences" JSONB,
    "taxi_preferences" JSONB,
    "reviewable_id" UUID,
    "review_complete" BOOLEAN NOT NULL DEFAULT true,
    "one_signal_id" TEXT,
    "stripe_customer_id" TEXT,
    "wallet_balance" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "transfer_preferences" JSONB,
    "allergies_preferences" JSONB,
    "spicy_preferences" JSONB,
    "radio_preferences" JSONB,

    CONSTRAINT "users_pkey" PRIMARY KEY ("user_id")
);

-- CreateTable
CREATE TABLE "documents" (
    "document_id" UUID NOT NULL,
    "document_type" "DOCUMENT_TYPE" NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "expiration_date" TIMESTAMPTZ(6),
    "issue_date" TIMESTAMPTZ(6),
    "additional_info" JSONB,
    "driver_id" UUID,
    "delivery_driver_id" UUID,
    "business_id" UUID,
    "user_id" UUID,
    "vehicle_id" UUID,
    "menu_item_id" UUID,

    CONSTRAINT "documents_pkey" PRIMARY KEY ("document_id")
);

-- CreateTable
CREATE TABLE "files" (
    "file_id" UUID NOT NULL,
    "url" TEXT NOT NULL,
    "file_type" "FILE_TYPE" NOT NULL,
    "mime_type" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "document_id" UUID,

    CONSTRAINT "files_pkey" PRIMARY KEY ("file_id")
);

-- CreateTable
CREATE TABLE "tokens" (
    "token_id" UUID NOT NULL,
    "user_id" UUID NOT NULL,
    "type" "TokenType" NOT NULL DEFAULT 'API',
    "token" TEXT NOT NULL,
    "expires_at" TIMESTAMPTZ(6) NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "active" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "tokens_pkey" PRIMARY KEY ("token_id")
);

-- CreateTable
CREATE TABLE "addresses" (
    "address_id" UUID NOT NULL,
    "address" TEXT NOT NULL,
    "latitude" TEXT NOT NULL,
    "longitude" TEXT NOT NULL,
    "street" TEXT,
    "house_number" TEXT,
    "city" TEXT,
    "country" TEXT,
    "postal" TEXT,

    CONSTRAINT "addresses_pkey" PRIMARY KEY ("address_id")
);

-- CreateTable
CREATE TABLE "user_address" (
    "user_id" UUID NOT NULL,
    "address_id" UUID NOT NULL,
    "name" TEXT,
    "icon" TEXT,
    "primary" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "user_address_pkey" PRIMARY KEY ("user_id","address_id")
);

-- CreateTable
CREATE TABLE "delivery_drivers" (
    "delivery_driver_id" UUID NOT NULL,
    "online" BOOLEAN DEFAULT false,
    "on_order" BOOLEAN DEFAULT false,
    "working_hours" JSONB,
    "business_id" UUID,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "user_id" UUID,
    "location" JSONB,

    CONSTRAINT "delivery_drivers_pkey" PRIMARY KEY ("delivery_driver_id")
);

-- CreateTable
CREATE TABLE "drivers" (
    "driver_id" UUID NOT NULL,
    "business_id" UUID,
    "online" BOOLEAN DEFAULT false,
    "on_order" BOOLEAN DEFAULT false,
    "working_hours" JSONB,
    "ride_requirements" JSONB,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "user_id" UUID,
    "location" JSONB,

    CONSTRAINT "drivers_pkey" PRIMARY KEY ("driver_id")
);

-- CreateTable
CREATE TABLE "vehicles" (
    "vehicle_id" UUID NOT NULL,
    "business_id" UUID,
    "active" BOOLEAN DEFAULT true,
    "class" "VEHICLE_CLASS",
    "category" "VEHICLE_CATEGORY",
    "make" TEXT,
    "model" TEXT,
    "color" TEXT,
    "license_plate" TEXT,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "driver_id" UUID,
    "delivery_driver_id" UUID,
    "vehicle_specification_id" UUID,

    CONSTRAINT "vehicles_pkey" PRIMARY KEY ("vehicle_id")
);

-- CreateTable
CREATE TABLE "vehicle_specifications" (
    "vehicle_specification_id" UUID NOT NULL,
    "class" "VEHICLE_CLASS" NOT NULL,
    "category" "VEHICLE_CATEGORY" NOT NULL,
    "people" TEXT NOT NULL,
    "start_cost" TEXT NOT NULL,
    "per_kilometre" TEXT NOT NULL,
    "per_minute" TEXT NOT NULL,
    "vehicle_id" UUID,

    CONSTRAINT "vehicle_specifications_pkey" PRIMARY KEY ("vehicle_specification_id")
);

-- CreateTable
CREATE TABLE "reviewable" (
    "reviewable_id" UUID NOT NULL,

    CONSTRAINT "reviewable_pkey" PRIMARY KEY ("reviewable_id")
);

-- CreateTable
CREATE TABLE "reviews" (
    "review_id" UUID NOT NULL,
    "reviewable_id" UUID NOT NULL,
    "author_id" UUID NOT NULL,
    "rating" DOUBLE PRECISION NOT NULL,
    "comment" TEXT,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "reviews_pkey" PRIMARY KEY ("review_id")
);

-- CreateTable
CREATE TABLE "allergens" (
    "allergen_id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "code" SMALLINT NOT NULL,

    CONSTRAINT "allergens_pkey" PRIMARY KEY ("allergen_id")
);

-- CreateTable
CREATE TABLE "taxi_orders" (
    "order_id" UUID NOT NULL,
    "user_id" UUID NOT NULL,
    "driver_id" UUID,
    "route" JSONB NOT NULL,
    "pickup_location" JSONB NOT NULL,
    "delivery_location" JSONB NOT NULL,
    "payment" JSONB,
    "estimates" JSONB,
    "timeline" JSONB NOT NULL DEFAULT '[]',
    "preferences" JSONB,
    "status" "TAXI_ORDER_STATUS" NOT NULL,
    "last_sent_at" TIMESTAMPTZ(6),
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "business_id" UUID,

    CONSTRAINT "taxi_orders_pkey" PRIMARY KEY ("order_id")
);

-- CreateTable
CREATE TABLE "taxi_order_sent" (
    "taxi_order_sent_id" UUID NOT NULL,
    "order_id" UUID NOT NULL,
    "driver_id" UUID NOT NULL,
    "accepted" BOOLEAN NOT NULL DEFAULT false,
    "location" JSONB,
    "timeline" JSONB NOT NULL DEFAULT '[]',
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "taxi_order_sent_pkey" PRIMARY KEY ("taxi_order_sent_id")
);

-- CreateTable
CREATE TABLE "delivery_orders" (
    "order_id" UUID NOT NULL,
    "user_id" UUID,
    "route" JSONB NOT NULL,
    "pickup_location" JSONB NOT NULL,
    "delivery_location" JSONB NOT NULL,
    "payment" JSONB,
    "estimates" JSONB,
    "items" JSONB NOT NULL,
    "details" JSONB,
    "courier_instructions" JSONB,
    "restaurant_message" JSONB,
    "scheduled" JSONB,
    "timeline" JSONB NOT NULL DEFAULT '[]',
    "status" "DELIVERY_ORDER_STATUS" NOT NULL,
    "last_sent_at" TIMESTAMPTZ(6),
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "delivery_driver_id" UUID,
    "business_id" UUID,
    "payment_intent_id" TEXT,

    CONSTRAINT "delivery_orders_pkey" PRIMARY KEY ("order_id")
);

-- CreateTable
CREATE TABLE "delivery_order_sent" (
    "delivery_order_sent_id" UUID NOT NULL,
    "order_id" UUID NOT NULL,
    "accepted" BOOLEAN NOT NULL DEFAULT false,
    "location" JSONB NOT NULL,
    "timeline" JSONB NOT NULL DEFAULT '[]',
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "delivery_driver_id" UUID NOT NULL,

    CONSTRAINT "delivery_order_sent_pkey" PRIMARY KEY ("delivery_order_sent_id")
);

-- CreateTable
CREATE TABLE "menus" (
    "menu_id" UUID NOT NULL,
    "business_id" UUID NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "menu_categories_ordered" JSONB,

    CONSTRAINT "menus_pkey" PRIMARY KEY ("menu_id")
);

-- CreateTable
CREATE TABLE "menu_categories" (
    "menu_category_id" UUID NOT NULL,
    "names" JSONB NOT NULL,
    "description" JSONB NOT NULL,
    "categories" TEXT[],
    "business_id" UUID NOT NULL,
    "menu_id" UUID,
    "menu_items_ordered" JSONB,

    CONSTRAINT "menu_categories_pkey" PRIMARY KEY ("menu_category_id")
);

-- CreateTable
CREATE TABLE "menu_items" (
    "menu_item_id" UUID NOT NULL,
    "names" JSONB NOT NULL,
    "image" TEXT,
    "description" JSONB NOT NULL,
    "allergens" TEXT[],
    "spicy_level" INTEGER NOT NULL,
    "unit_size" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "discount" DOUBLE PRECISION,
    "sides" TEXT[],
    "extras" TEXT[],
    "ingredients" JSONB NOT NULL,
    "availability" TEXT[],
    "business_id" UUID NOT NULL,
    "menu_category_id" UUID,

    CONSTRAINT "menu_items_pkey" PRIMARY KEY ("menu_item_id")
);

-- CreateTable
CREATE TABLE "transactions" (
    "id" TEXT NOT NULL,
    "user_id" UUID NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "type" "TRANSACTION_TYPE" NOT NULL,
    "description" TEXT,
    "createdAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "delivery_order_id" UUID,

    CONSTRAINT "transactions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "reservations" (
    "reservation_id" UUID NOT NULL,
    "seats" INTEGER NOT NULL,
    "date" DATE NOT NULL,
    "time" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "business_id" UUID NOT NULL,
    "user_id" UUID NOT NULL,
    "status" "RESERVATION_STATUS" NOT NULL DEFAULT 'PENDING',
    "table" INTEGER,

    CONSTRAINT "reservations_pkey" PRIMARY KEY ("reservation_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "finances_account_number_key" ON "finances"("account_number");

-- CreateIndex
CREATE UNIQUE INDEX "business_business_id_key" ON "business"("business_id");

-- CreateIndex
CREATE UNIQUE INDEX "business_email_key" ON "business"("email");

-- CreateIndex
CREATE UNIQUE INDEX "users_user_id_key" ON "users"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "users_telephone_key" ON "users"("telephone");

-- CreateIndex
CREATE UNIQUE INDEX "tokens_token_key" ON "tokens"("token");

-- CreateIndex
CREATE UNIQUE INDEX "addresses_address_latitude_longitude_key" ON "addresses"("address", "latitude", "longitude");

-- CreateIndex
CREATE UNIQUE INDEX "delivery_drivers_user_id_key" ON "delivery_drivers"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "drivers_user_id_key" ON "drivers"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "vehicles_vehicle_id_key" ON "vehicles"("vehicle_id");

-- CreateIndex
CREATE UNIQUE INDEX "vehicles_vehicle_specification_id_key" ON "vehicles"("vehicle_specification_id");

-- CreateIndex
CREATE UNIQUE INDEX "vehicle_specifications_vehicle_specification_id_key" ON "vehicle_specifications"("vehicle_specification_id");

-- CreateIndex
CREATE UNIQUE INDEX "allergens_code_key" ON "allergens"("code");

-- CreateIndex
CREATE UNIQUE INDEX "taxi_order_sent_order_id_driver_id_key" ON "taxi_order_sent"("order_id", "driver_id");

-- CreateIndex
CREATE UNIQUE INDEX "delivery_order_sent_order_id_delivery_driver_id_key" ON "delivery_order_sent"("order_id", "delivery_driver_id");

-- CreateIndex
CREATE UNIQUE INDEX "menus_menu_id_key" ON "menus"("menu_id");

-- CreateIndex
CREATE UNIQUE INDEX "menu_categories_menu_category_id_key" ON "menu_categories"("menu_category_id");

-- CreateIndex
CREATE UNIQUE INDEX "menu_items_menu_item_id_key" ON "menu_items"("menu_item_id");

-- AddForeignKey
ALTER TABLE "business" ADD CONSTRAINT "business_address_id_fkey" FOREIGN KEY ("address_id") REFERENCES "addresses"("address_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "business" ADD CONSTRAINT "business_delivery_address_id_fkey" FOREIGN KEY ("delivery_address_id") REFERENCES "addresses"("address_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "business" ADD CONSTRAINT "business_finance_id_fkey" FOREIGN KEY ("finance_id") REFERENCES "finances"("finance_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "business" ADD CONSTRAINT "business_parent_business_id_fkey" FOREIGN KEY ("parent_business_id") REFERENCES "business"("business_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "business" ADD CONSTRAINT "business_reviewable_id_fkey" FOREIGN KEY ("reviewable_id") REFERENCES "reviewable"("reviewable_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "business_users" ADD CONSTRAINT "business_users_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "business_users" ADD CONSTRAINT "business_users_business_id_fkey" FOREIGN KEY ("business_id") REFERENCES "business"("business_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "business_users" ADD CONSTRAINT "business_users_operating_address_id_fkey" FOREIGN KEY ("operating_address_id") REFERENCES "addresses"("address_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_reviewable_id_fkey" FOREIGN KEY ("reviewable_id") REFERENCES "reviewable"("reviewable_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "documents" ADD CONSTRAINT "documents_driver_id_fkey" FOREIGN KEY ("driver_id") REFERENCES "drivers"("driver_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "documents" ADD CONSTRAINT "documents_delivery_driver_id_fkey" FOREIGN KEY ("delivery_driver_id") REFERENCES "delivery_drivers"("delivery_driver_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "documents" ADD CONSTRAINT "documents_business_id_fkey" FOREIGN KEY ("business_id") REFERENCES "business"("business_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "documents" ADD CONSTRAINT "documents_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("user_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "documents" ADD CONSTRAINT "documents_vehicle_id_fkey" FOREIGN KEY ("vehicle_id") REFERENCES "vehicles"("vehicle_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "documents" ADD CONSTRAINT "documents_menu_item_id_fkey" FOREIGN KEY ("menu_item_id") REFERENCES "menu_items"("menu_item_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "files" ADD CONSTRAINT "files_document_id_fkey" FOREIGN KEY ("document_id") REFERENCES "documents"("document_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tokens" ADD CONSTRAINT "tokens_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_address" ADD CONSTRAINT "user_address_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("user_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_address" ADD CONSTRAINT "user_address_address_id_fkey" FOREIGN KEY ("address_id") REFERENCES "addresses"("address_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "delivery_drivers" ADD CONSTRAINT "delivery_drivers_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("user_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "drivers" ADD CONSTRAINT "drivers_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("user_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "vehicles" ADD CONSTRAINT "vehicles_driver_id_fkey" FOREIGN KEY ("driver_id") REFERENCES "drivers"("driver_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "vehicles" ADD CONSTRAINT "vehicles_delivery_driver_id_fkey" FOREIGN KEY ("delivery_driver_id") REFERENCES "delivery_drivers"("delivery_driver_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "vehicles" ADD CONSTRAINT "vehicles_vehicle_specification_id_fkey" FOREIGN KEY ("vehicle_specification_id") REFERENCES "vehicle_specifications"("vehicle_specification_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "reviews" ADD CONSTRAINT "reviews_reviewable_id_fkey" FOREIGN KEY ("reviewable_id") REFERENCES "reviewable"("reviewable_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "reviews" ADD CONSTRAINT "reviews_author_id_fkey" FOREIGN KEY ("author_id") REFERENCES "users"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "taxi_orders" ADD CONSTRAINT "taxi_orders_business_id_fkey" FOREIGN KEY ("business_id") REFERENCES "business"("business_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "taxi_orders" ADD CONSTRAINT "taxi_orders_driver_id_fkey" FOREIGN KEY ("driver_id") REFERENCES "drivers"("driver_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "taxi_orders" ADD CONSTRAINT "taxi_orders_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "taxi_order_sent" ADD CONSTRAINT "taxi_order_sent_order_id_fkey" FOREIGN KEY ("order_id") REFERENCES "taxi_orders"("order_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "taxi_order_sent" ADD CONSTRAINT "taxi_order_sent_driver_id_fkey" FOREIGN KEY ("driver_id") REFERENCES "drivers"("driver_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "delivery_orders" ADD CONSTRAINT "delivery_orders_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("user_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "delivery_orders" ADD CONSTRAINT "delivery_orders_delivery_driver_id_fkey" FOREIGN KEY ("delivery_driver_id") REFERENCES "delivery_drivers"("delivery_driver_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "delivery_orders" ADD CONSTRAINT "delivery_orders_business_id_fkey" FOREIGN KEY ("business_id") REFERENCES "business"("business_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "delivery_order_sent" ADD CONSTRAINT "delivery_order_sent_order_id_fkey" FOREIGN KEY ("order_id") REFERENCES "delivery_orders"("order_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "delivery_order_sent" ADD CONSTRAINT "delivery_order_sent_delivery_driver_id_fkey" FOREIGN KEY ("delivery_driver_id") REFERENCES "delivery_drivers"("delivery_driver_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "menus" ADD CONSTRAINT "menus_business_id_fkey" FOREIGN KEY ("business_id") REFERENCES "business"("business_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "menu_categories" ADD CONSTRAINT "menu_categories_menu_id_fkey" FOREIGN KEY ("menu_id") REFERENCES "menus"("menu_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "menu_items" ADD CONSTRAINT "menu_items_menu_category_id_fkey" FOREIGN KEY ("menu_category_id") REFERENCES "menu_categories"("menu_category_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "transactions" ADD CONSTRAINT "transactions_delivery_order_id_fkey" FOREIGN KEY ("delivery_order_id") REFERENCES "delivery_orders"("order_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "transactions" ADD CONSTRAINT "transactions_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "reservations" ADD CONSTRAINT "reservations_business_id_fkey" FOREIGN KEY ("business_id") REFERENCES "business"("business_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "reservations" ADD CONSTRAINT "reservations_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;
