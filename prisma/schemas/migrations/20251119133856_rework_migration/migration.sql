-- CreateEnum
CREATE TYPE "TUTORIAL_STATUS" AS ENUM ('NOT_SEEN', 'COMPLETED', 'DISMISSED');

-- CreateEnum
CREATE TYPE "TRANSACTION_TYPE" AS ENUM ('DEBIT', 'CREDIT');

-- CreateEnum
CREATE TYPE "PAYMENT_METHOD" AS ENUM ('CARD', 'CASH', 'WALLET', 'PLATFORM');

-- CreateEnum
CREATE TYPE "PAYMENT_STATUS" AS ENUM ('PENDING', 'SUCCEEDED', 'FAILED', 'REFUNDED');

-- CreateEnum
CREATE TYPE "SPLIT_DESTINATION_TYPE" AS ENUM ('PLATFORM', 'MERCHANT', 'DRIVER');

-- CreateEnum
CREATE TYPE "SPLIT_STATUS" AS ENUM ('RESERVED', 'PENDING', 'TRANSFERED', 'REFUNDED', 'CANCELED', 'FAILED', 'PARTIAL_FAILURE');

-- CreateEnum
CREATE TYPE "SPLIT_TYPE" AS ENUM ('TRANSFER', 'REFUND');

-- CreateEnum
CREATE TYPE "TRANSFER_GROUP_STATUS" AS ENUM ('PENDING', 'SUCCEEDED', 'FAILED');

-- CreateEnum
CREATE TYPE "TRANSFER_GROUP_TYPE" AS ENUM ('REFUND', 'TRANSFER');

-- CreateEnum
CREATE TYPE "SUBSCRIPTION_STATUS" AS ENUM ('AWAITING_PAYMENT', 'ACTIVE', 'CANCELED', 'EXPIRED', 'FAILED');

-- CreateEnum
CREATE TYPE "SUBSCRIPTION_TYPE" AS ENUM ('DATED', 'RECURRING');

-- CreateEnum
CREATE TYPE "DAILY_MEAL_INSTANCE_STATUS" AS ENUM ('PLANNED', 'PENDING_CANCELLATION', 'CANCELED', 'SKIPPED', 'DELIVERED');

-- CreateEnum
CREATE TYPE "BLOG_POST_STATUS" AS ENUM ('DRAFT', 'PUBLISHED', 'ARCHIVED');

-- CreateEnum
CREATE TYPE "ACCOUNT_ACTIONS" AS ENUM ('SUSPEND', 'UNSUSPEND', 'BAN', 'UNBAN', 'DELETE', 'CREATE');

-- CreateEnum
CREATE TYPE "ACCOUNT_ACTIONS_REASON" AS ENUM ('SUSPICIOUS_BEHAVIOUR', 'VIOLATION_OF_TERMS', 'SPAMMING_OR_SCAMMING', 'HATE_SPEECH_OR_ABUSE', 'IMPERSONATION', 'PAYMENT_FRAUD', 'SELF_DISABLE', 'APPEAL_APPROVED', 'MANUAL_REVIEW_CLEAR', 'SYSTEM_ERROR_CORRECTION', 'USER_VERIFIED', 'BUSINESS_VERIFIED', 'TERMS_ACCEPTED', 'TEMPORARY_BAN_EXPIRED');

-- CreateEnum
CREATE TYPE "CATEGORY_TYPE" AS ENUM ('MENU', 'CUISINE', 'MERCHANT', 'LOCAL');

-- CreateEnum
CREATE TYPE "PROMO_SERVICE_TYPES" AS ENUM ('TAXI', 'DELIVERY');

-- CreateEnum
CREATE TYPE "USER_ROLES" AS ENUM ('ADMIN', 'BUSINESS_OWNER', 'BUSINESS_MANAGER', 'BUSINESS_CARETAKER', 'BUSINESS_USER', 'PERSONAL', 'DRIVER', 'DISPATCHER');

-- CreateEnum
CREATE TYPE "TokenType" AS ENUM ('EMAIL', 'PHONE_VERIFICATION', 'API', 'PASSWORD_RESET', 'BUSINESS_REGISTRATION');

-- CreateEnum
CREATE TYPE "FILE_TYPE" AS ENUM ('IMAGE', 'DOCUMENT');

-- CreateEnum
CREATE TYPE "DOCUMENT_TYPE" AS ENUM ('NATIONAL_ID', 'PASSPORT', 'PROFILE_PICTURE', 'LOGO', 'BANNER', 'DRIVING_LICENSE', 'TAXI_LICENCE', 'PASSENGER_TRANSFER_LICENSE', 'BACKGROUND_CHECK_REPORT', 'VEHICLE_REGISTRATION', 'VEHICLE_INSURANCE', 'VEHICLE_TECHNICAL_INSPECTION', 'OPERATING_PERMIT', 'HACCP_CERTIFICATION', 'BUSINESS_LICENSE', 'MENU_ITEM_IMAGE', 'LOST_ITEM', 'HEALTH_DECLARATION', 'DAILY_MEALS_MENU', 'WALLET_TOPUP');

-- CreateEnum
CREATE TYPE "TAXI_ORDER_STATUS" AS ENUM ('PENDING', 'TAXI_ACCEPTED', 'TAXI_REJECTED', 'TAXI_CANCELED', 'TAXI_WAITING', 'TAXI_DRIVING', 'TAXI_ARRIVED', 'TAXI_COMPLETED', 'CUSTOMER_CANCELED', 'TRANSFER_ACCEPTED', 'TRANSFER_COMPLETED', 'AWAITING_PAYMENT');

-- CreateEnum
CREATE TYPE "DELIVERY_ORDER_STATUS" AS ENUM ('PENDING', 'CUSTOMER_PAYMENT_FAILED', 'CUSTOMER_PAYMENT_SUCCESSFUL', 'CUSTOMER_PAYMENT_PENDING', 'DISPATCHER_CANCELED', 'ORDER_FINISHED_FAIL', 'ORDER_FINISHED_SUCCESS', 'AUTO_REJECTED', 'DELIVERY_ACCEPTED', 'DELIVERY_REJECTED', 'DELIVERY_CANCELED', 'DELIVERY_PICKED_UP', 'DELIVERY_IN_DELIVERY', 'DELIVERY_DELAYED', 'DELIVERY_ARRIVED', 'DELIVERY_DELIVERED', 'DELIVERY_COMPLETED', 'CUSTOMER_CANCELED', 'MERCHANT_ACCEPTED', 'MERCHANT_REJECTED', 'MERCHANT_CANCELED', 'MERCHANT_PREPARING', 'MERCHANT_DELAYED', 'MERCHANT_READY_FOR_PICKUP', 'MERCHANT_REFUNDED', 'MERCHANT_HIGH_DEMAND', 'CUSTOMER_PICKED_UP', 'DISPATCHER_REVOKED');

-- CreateEnum
CREATE TYPE "VEHICLE_CATEGORY" AS ENUM ('ANY', 'STANDARD', 'PREMIUM');

-- CreateEnum
CREATE TYPE "VEHICLE_CLASS" AS ENUM ('ANY', 'SEDAN', 'CARAVAN', 'SUV', 'MINIVAN', 'VAN', 'MINIBUS', 'BUS', 'CARGO_VAN', 'PRIVATE_DRIVER');

-- CreateEnum
CREATE TYPE "COMPANY_ROLE" AS ENUM ('DIRECTOR', 'MANAGER', 'REPRESENTATIVE_OF_SALES', 'HEAD_OF_PROCUREMENT');

-- CreateEnum
CREATE TYPE "RESERVATION_STATUS" AS ENUM ('PENDING', 'TABLE_RESERVATION_ACCEPTED', 'TABLE_RESERVATION_REJECTED', 'TABLE_RESERVATION_CANCELED', 'TABLE_RESERVATION_COMPLETED', 'TABLE_RESERVATION_EXPIRED');

-- CreateEnum
CREATE TYPE "ORDER_TYPE" AS ENUM ('DELIVERY', 'TAXI', 'TRANSFER_PRIVATE', 'TRANSFER_SHUTTLE', 'VEHICLE_TRANSFER', 'VEHICLE_TRANSFER_COMBO');

-- CreateEnum
CREATE TYPE "ORDER_SUBTYPE" AS ENUM ('CREATED_BY_USER', 'CREATED_BY_DISPATCHER', 'CREATED_BY_BUSINESS');

-- CreateEnum
CREATE TYPE "SORTING_TYPE" AS ENUM ('AUTOMATIC', 'MANUAL');

-- CreateEnum
CREATE TYPE "LOST_FOUND_STATUS" AS ENUM ('REPORTED', 'RESOLVED');

-- CreateEnum
CREATE TYPE "CASHBACK_TYPE" AS ENUM ('TAXI', 'DELIVERY', 'TRANSFER');

-- CreateEnum
CREATE TYPE "CASHBACK_SOURCE" AS ENUM ('ORDER', 'PROMOTIONAL', 'SYSTEM_GRANT', 'CONVERSION');

-- CreateEnum
CREATE TYPE "CASHBACK_STATUS" AS ENUM ('PENDING', 'CONVERTED', 'EXPIRED');

-- CreateEnum
CREATE TYPE "CREDIT_STATUS" AS ENUM ('ACTIVE', 'USED', 'EXPIRED');

-- CreateEnum
CREATE TYPE "FUNDS_TYPE" AS ENUM ('FUNDS', 'CREDITS_ANY', 'CREDITS_TAXI', 'CREDITS_TRANSFER', 'CREDITS_DELIVERY');

-- CreateEnum
CREATE TYPE "SCORING_POINTS_REASON" AS ENUM ('IGNORED', 'REJECTED', 'CANCELED', 'AUTO_REJECTED', 'LATE', 'LARGE_DELAY', 'INSUFFICIENT_DATA');

-- CreateEnum
CREATE TYPE "ACTIVITY_TYPE" AS ENUM ('ONLINE', 'OFFLINE', 'LOCKED_OUT');

-- CreateEnum
CREATE TYPE "DAY_OF_WEEK" AS ENUM ('MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN');

-- CreateEnum
CREATE TYPE "PROMO_TYPE" AS ENUM ('AD', 'SECTION', 'WORD', 'SEARCH', 'DAILY_MEALS_SEARCH');

-- CreateEnum
CREATE TYPE "ANALYTICS_TYPE" AS ENUM ('VIEW', 'CLICK', 'ORDER_START', 'ORDER_CREATE', 'ORDER_FINISH', 'DAILY_MEAL_SUBSCRIPTION_START', 'DAILY_MEAL_SUBSCRIPTION_CREATE');

-- CreateEnum
CREATE TYPE "ADDRESS_TYPE" AS ENUM ('HOME', 'WORK', 'OTHER');

-- CreateEnum
CREATE TYPE "MODULE" AS ENUM ('STORES', 'FOOD_DRINKS', 'RESERVATIONS', 'TRANSPORT', 'DAILY_MEALS', 'TABLE_RESERVATIONS');

-- CreateEnum
CREATE TYPE "BUSINESS_TYPE" AS ENUM ('TAXI', 'TRANSFER', 'CARGO', 'DELIVERY', 'LOCAL', 'RETAIL_STORE', 'RESTAURANT', 'BAR', 'COFFEE_SHOP', 'BAKERY', 'RESERVATION', 'BUSINESS');

-- CreateEnum
CREATE TYPE "SERVICES" AS ENUM ('TRANSPORT', 'TAXI', 'TRANSFER', 'CARGO', 'DELIVERY', 'DAILY_MEALS', 'STORES', 'FOOD_DRINKS', 'LOCAL', 'RETAIL_STORES', 'RESTAURANTS', 'BARS', 'COFFEE_SHOPS', 'BAKERIES', 'RESERVATIONS', 'TABLE_RESERVATIONS', 'RESERVATION_SERVICES');

-- CreateEnum
CREATE TYPE "REVIEW_SUBJECT" AS ENUM ('USER', 'DRIVER', 'BUSINESS', 'TAXI_ORDER', 'DELIVERY_ORDER');

-- CreateEnum
CREATE TYPE "REVIEWER_ROLE" AS ENUM ('CUSTOMER', 'DRIVER');

-- CreateEnum
CREATE TYPE "REVIEW_TYPE" AS ENUM ('DEFAULT', 'OVERALL');

-- CreateEnum
CREATE TYPE "LINE_ITEM_FLAGS" AS ENUM ('NONE', 'EDITED', 'REMOVED', 'REPLACED');

-- CreateEnum
CREATE TYPE "NUMBERING_STRUCTURE" AS ENUM ('C', 'B');

-- CreateEnum
CREATE TYPE "PREMISE_TYPE" AS ENUM ('A', 'B', 'C');

-- CreateEnum
CREATE TYPE "FURS_JOB_TYPE" AS ENUM ('BUSINESS_PREMISE', 'INVOICE', 'ECHO');

-- CreateEnum
CREATE TYPE "FURS_JOB_STATUS" AS ENUM ('DRAFT', 'SIGNED', 'SENT', 'ACK', 'ERROR');

-- CreateEnum
CREATE TYPE "BOOKING_STATUS" AS ENUM ('reserved', 'cancelled', 'no_show', 'deleted');

-- CreateEnum
CREATE TYPE "SCHEDULE_SLOT_EXCEPTION_TYPE" AS ENUM ('vacation', 'location_closed', 'other', 'health', 'break', 'lunch');

-- CreateEnum
CREATE TYPE "NOTIFICATION_CHANNEL" AS ENUM ('EMAIL', 'SMS', 'PUSH');

-- CreateEnum
CREATE TYPE "TEMPLATE_VERSION_STATUS" AS ENUM ('DRAFT', 'PUBLISHED', 'ARCHIVED');

-- CreateEnum
CREATE TYPE "MESSAGE_STATUS" AS ENUM ('QUEUED', 'SENT', 'DELIVERED', 'BOUNCED', 'FAILED', 'SUPPRESSED');

-- CreateEnum
CREATE TYPE "MODULE_TYPE" AS ENUM ('reservations', 'delivery', 'crm', 'taxi');

-- CreateEnum
CREATE TYPE "VEHICLE_TYPE" AS ENUM ('CAR', 'BIKE', 'SCOOTER', 'ON_FOOT');

-- CreateEnum
CREATE TYPE "PERMISSION_SCOPE" AS ENUM ('GLOBAL', 'BUSINESS', 'USER');

-- CreateTable
CREATE TABLE "cashback" (
    "cashback_id" UUID NOT NULL,
    "user_id" UUID NOT NULL,
    "amount" INTEGER NOT NULL,
    "type" "CASHBACK_TYPE" NOT NULL,
    "source" "CASHBACK_SOURCE" NOT NULL,
    "status" "CASHBACK_STATUS" NOT NULL DEFAULT 'PENDING',
    "description" TEXT,
    "earned_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "expires_at" TIMESTAMPTZ(6),
    "converted_at" TIMESTAMPTZ(6),
    "taxi_order_id" UUID,
    "delivery_order_id" UUID,

    CONSTRAINT "cashback_pkey" PRIMARY KEY ("cashback_id")
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
CREATE TABLE "allowances" (
    "allowance_id" UUID NOT NULL,
    "group_user_id" UUID,
    "business_users_id" UUID,
    "amount_taxi_wallet" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "amount_transfer_wallet" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "amount_delivery_wallet" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "amount_any_wallet" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "amount_taxi_purchase_order" DOUBLE PRECISION,
    "amount_transfer_purchase_order" DOUBLE PRECISION,
    "amount_delivery_purchase_order" DOUBLE PRECISION,
    "amount_any_purchase_order" DOUBLE PRECISION,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "allowances_pkey" PRIMARY KEY ("allowance_id")
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
    "public" BOOLEAN NOT NULL DEFAULT false,
    "driver_id" UUID,
    "business_id" UUID,
    "vehicle_id" UUID,
    "transaction_id" UUID,
    "order_id" UUID,

    CONSTRAINT "documents_pkey" PRIMARY KEY ("document_id")
);

-- CreateTable
CREATE TABLE "files" (
    "file_id" UUID NOT NULL,
    "url" TEXT,
    "file_type" "FILE_TYPE" NOT NULL,
    "public" BOOLEAN NOT NULL DEFAULT false,
    "mime_type" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "document_id" UUID,
    "user_id" UUID,
    "driver_id" UUID,
    "lost_item_id" UUID,
    "delivery_order_id" UUID,

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
    "primary" BOOLEAN NOT NULL DEFAULT false,
    "details" JSONB,
    "type" "ADDRESS_TYPE" NOT NULL DEFAULT 'HOME',

    CONSTRAINT "user_address_pkey" PRIMARY KEY ("user_id","address_id")
);

-- CreateTable
CREATE TABLE "reviews" (
    "review_id" UUID NOT NULL,
    "author_id" UUID NOT NULL,
    "reviewer_role" "REVIEWER_ROLE" NOT NULL,
    "taxi_order_id" UUID,
    "delivery_order_id" UUID,
    "comment" TEXT,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "reviews_pkey" PRIMARY KEY ("review_id")
);

-- CreateTable
CREATE TABLE "review_items" (
    "item_id" UUID NOT NULL,
    "review_id" UUID NOT NULL,
    "subject_type" "REVIEW_SUBJECT" NOT NULL,
    "subject_id" UUID NOT NULL,
    "type" "REVIEW_TYPE" NOT NULL DEFAULT 'DEFAULT',
    "rating" DOUBLE PRECISION,
    "comment" TEXT,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "review_items_pkey" PRIMARY KEY ("item_id")
);

-- CreateTable
CREATE TABLE "transactions" (
    "transaction_id" UUID NOT NULL,
    "user_id" UUID NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "type" "TRANSACTION_TYPE" NOT NULL,
    "description" TEXT,
    "createdAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "delivery_order_id" UUID,
    "taxi_order_id" UUID,
    "wallet_fund_id" UUID,

    CONSTRAINT "transactions_pkey" PRIMARY KEY ("transaction_id")
);

-- CreateTable
CREATE TABLE "user_money_flows" (
    "balance_change_id" UUID NOT NULL,
    "user_id" UUID NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "stripe_fee" DOUBLE PRECISION NOT NULL,
    "type" "TRANSACTION_TYPE" NOT NULL,
    "payment_method" "PAYMENT_METHOD",
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "user_money_flows_pkey" PRIMARY KEY ("balance_change_id")
);

-- CreateTable
CREATE TABLE "business_money_flows" (
    "balance_change_id" UUID NOT NULL,
    "business_id" UUID NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "stripe_fee" DOUBLE PRECISION NOT NULL,
    "type" "TRANSACTION_TYPE" NOT NULL,
    "payment_method" "PAYMENT_METHOD",
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "business_money_flows_pkey" PRIMARY KEY ("balance_change_id")
);

-- CreateTable
CREATE TABLE "payment_intent_logs" (
    "payment_intent_logs_id" TEXT NOT NULL,
    "stripe_id" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "payment_intent_logs_pkey" PRIMARY KEY ("payment_intent_logs_id")
);

-- CreateTable
CREATE TABLE "lost_items" (
    "lost_item_id" UUID NOT NULL,
    "user_id" UUID,
    "status" "LOST_FOUND_STATUS" NOT NULL DEFAULT 'REPORTED',
    "description" TEXT NOT NULL,
    "image_id" UUID,
    "found" BOOLEAN DEFAULT false,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "lost_items_pkey" PRIMARY KEY ("lost_item_id")
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
    "referral_id" UUID,
    "charge_id" TEXT,
    "amount" INTEGER NOT NULL,
    "reserved_order" UUID,
    "reserved_daily_meals_subscription" UUID,
    "reserved_business" UUID,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "expires_at" TIMESTAMPTZ(6),
    "type" "FUNDS_TYPE" NOT NULL,
    "status" "CREDIT_STATUS" DEFAULT 'ACTIVE',

    CONSTRAINT "wallet_funds_pkey" PRIMARY KEY ("wallet_funds_id")
);

-- CreateTable
CREATE TABLE "promo_sections" (
    "promo_sections_id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "tag" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "description" TEXT,
    "prices" JSONB,
    "limits" JSONB,
    "stripe_product_id" TEXT,
    "canPurchase" BOOLEAN NOT NULL,
    "t1price" INTEGER,
    "t2price" INTEGER,
    "t3price" INTEGER,
    "order" SERIAL NOT NULL,
    "service_type" "PROMO_SERVICE_TYPES" NOT NULL,
    "promo_duration_days" INTEGER NOT NULL DEFAULT 30,
    "translatable_id" UUID NOT NULL,
    "display_cards_per_page" INTEGER DEFAULT 4,

    CONSTRAINT "promo_sections_pkey" PRIMARY KEY ("promo_sections_id")
);

-- CreateTable
CREATE TABLE "promo_banners" (
    "promo_banners_id" UUID NOT NULL,
    "type" TEXT NOT NULL,
    "size" TEXT,
    "title" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "promo_section_buy_id" UUID,
    "file_id" UUID NOT NULL,
    "promo_ads_id" UUID,

    CONSTRAINT "promo_banners_pkey" PRIMARY KEY ("promo_banners_id")
);

-- CreateTable
CREATE TABLE "promo_sections_buy" (
    "promo_sections_buy_id" UUID NOT NULL,
    "promo_sections_id" UUID NOT NULL,
    "payment_intent_id" TEXT,
    "business_id" UUID NOT NULL,
    "user_id" UUID,
    "paid" BOOLEAN NOT NULL DEFAULT false,
    "active_at" TIMESTAMP(3),
    "expires_at" TIMESTAMP(3),
    "tier" INTEGER NOT NULL,
    "duration" INTEGER NOT NULL DEFAULT 30,

    CONSTRAINT "promo_sections_buy_pkey" PRIMARY KEY ("promo_sections_buy_id")
);

-- CreateTable
CREATE TABLE "promo_ads" (
    "promo_ads_id" UUID NOT NULL,
    "title" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "tag" TEXT NOT NULL,
    "service_type" "PROMO_SERVICE_TYPES" NOT NULL,
    "discount" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "code" SMALLINT,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "active_at" TIMESTAMP(3),
    "active_until" TIMESTAMP(3),

    CONSTRAINT "promo_ads_pkey" PRIMARY KEY ("promo_ads_id")
);

-- CreateTable
CREATE TABLE "promo_ads_category" (
    "promo_ads_category_id" UUID NOT NULL,
    "promo_ads_id" UUID NOT NULL,
    "categories_id" UUID NOT NULL,

    CONSTRAINT "promo_ads_category_pkey" PRIMARY KEY ("promo_ads_category_id")
);

-- CreateTable
CREATE TABLE "words" (
    "word_id" UUID NOT NULL,
    "word" TEXT NOT NULL,
    "popularity" INTEGER NOT NULL DEFAULT 0,
    "categories_id" UUID,
    "translatable_id" UUID NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "words_pkey" PRIMARY KEY ("word_id")
);

-- CreateTable
CREATE TABLE "word_buy" (
    "word_buy_id" UUID NOT NULL,
    "word_id" UUID NOT NULL,
    "stripe_subscription_id" TEXT,
    "stripe_price_id" TEXT,
    "pending_stripe_price_id" TEXT,
    "price" DOUBLE PRECISION NOT NULL,
    "pending_price" DOUBLE PRECISION,
    "active_at" TIMESTAMP(3),
    "expires_at" TIMESTAMP(3),
    "paid" BOOLEAN NOT NULL DEFAULT false,
    "business_id" UUID NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deleted_at" TIMESTAMPTZ(6),

    CONSTRAINT "word_buy_pkey" PRIMARY KEY ("word_buy_id")
);

-- CreateTable
CREATE TABLE "word_bundles" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "word_bundles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "promo_analytics" (
    "promo_analytics_id" UUID NOT NULL,
    "promo_ads_id" UUID,
    "promo_sections_id" UUID,
    "word_id" UUID,
    "order_id" UUID,
    "daily_meal_subscription_id" UUID,
    "business_id" UUID NOT NULL,
    "user_id" UUID,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "promo_type" "PROMO_TYPE" NOT NULL,
    "type" "ANALYTICS_TYPE" NOT NULL,

    CONSTRAINT "promo_analytics_pkey" PRIMARY KEY ("promo_analytics_id")
);

-- CreateTable
CREATE TABLE "translatable" (
    "translatable_id" UUID NOT NULL,

    CONSTRAINT "translatable_pkey" PRIMARY KEY ("translatable_id")
);

-- CreateTable
CREATE TABLE "translations" (
    "translations_id" UUID NOT NULL,
    "translatable_id" UUID NOT NULL,
    "field" TEXT,
    "language" TEXT NOT NULL,
    "translation" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "translations_pkey" PRIMARY KEY ("translations_id")
);

-- CreateTable
CREATE TABLE "user_favorite_businesses" (
    "user_favorite_businesses_id" UUID NOT NULL,
    "user_id" UUID NOT NULL,
    "business_id" UUID NOT NULL,
    "module" "MODULE" NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "user_favorite_businesses_pkey" PRIMARY KEY ("user_favorite_businesses_id")
);

-- CreateTable
CREATE TABLE "user_favorite_drivers" (
    "user_favorite_drivers_id" UUID NOT NULL,
    "user_id" UUID NOT NULL,
    "driver_id" UUID NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "user_favorite_drivers_pkey" PRIMARY KEY ("user_favorite_drivers_id")
);

-- CreateTable
CREATE TABLE "scoring_points" (
    "scoring_points_id" UUID NOT NULL,
    "stores_id" UUID NOT NULL,
    "food_drinks_id" UUID NOT NULL,
    "user_id" UUID,
    "driver_id" UUID,
    "delivery_order_id" UUID,
    "taxi_order_id" UUID,
    "points" INTEGER NOT NULL,
    "isPenalty" BOOLEAN NOT NULL,
    "reason" "SCORING_POINTS_REASON" NOT NULL,
    "expiration_date" TIMESTAMP(3),
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "scoring_points_pkey" PRIMARY KEY ("scoring_points_id")
);

-- CreateTable
CREATE TABLE "late_events" (
    "late_events_id" UUID NOT NULL,
    "stores_id" UUID,
    "food_drinks_id" UUID,
    "driver_id" UUID NOT NULL,
    "user_id" UUID NOT NULL,
    "delivery_order_id" UUID,
    "taxi_order_id" UUID,
    "scoring_points_id" UUID,
    "seconds" INTEGER NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "late_events_pkey" PRIMARY KEY ("late_events_id")
);

-- CreateTable
CREATE TABLE "account_actions" (
    "account_action_id" UUID NOT NULL,
    "business_id" UUID,
    "user_id" UUID,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "action_creator_user_id" UUID NOT NULL,
    "reason" "ACCOUNT_ACTIONS_REASON" NOT NULL,
    "action" "ACCOUNT_ACTIONS" NOT NULL,

    CONSTRAINT "account_actions_pkey" PRIMARY KEY ("account_action_id")
);

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
    "daily_meal_subscription_id" UUID,
    "user_id" UUID NOT NULL,

    CONSTRAINT "payments_pkey" PRIMARY KEY ("payment_id")
);

-- CreateTable
CREATE TABLE "payment_splits" (
    "payment_split_id" UUID NOT NULL,
    "status" "SPLIT_STATUS" NOT NULL DEFAULT 'RESERVED',
    "type" "SPLIT_TYPE" NOT NULL DEFAULT 'TRANSFER',
    "payment_id" UUID NOT NULL,
    "destination_type" "SPLIT_DESTINATION_TYPE" NOT NULL,
    "destination_id" TEXT,
    "payment_transfer_group_id" UUID,
    "amount_regular" INTEGER NOT NULL,
    "amount_credits" INTEGER NOT NULL DEFAULT 0,
    "metadata" JSONB,
    "external_id" TEXT,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "payment_splits_pkey" PRIMARY KEY ("payment_split_id")
);

-- CreateTable
CREATE TABLE "payment_transfer_groups" (
    "payment_transfer_group_id" UUID NOT NULL,
    "status" "TRANSFER_GROUP_STATUS" NOT NULL DEFAULT 'PENDING',
    "type" "TRANSFER_GROUP_TYPE" NOT NULL,
    "amount" INTEGER NOT NULL,
    "metadata" JSONB,
    "payment_id" UUID NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "payment_transfer_groups_pkey" PRIMARY KEY ("payment_transfer_group_id")
);

-- CreateTable
CREATE TABLE "blog_tags" (
    "blog_tags_id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "blog_tags_pkey" PRIMARY KEY ("blog_tags_id")
);

-- CreateTable
CREATE TABLE "blog_tags_blog_posts" (
    "blog_tags_id" UUID NOT NULL,
    "blog_posts_id" UUID NOT NULL,

    CONSTRAINT "blog_tags_blog_posts_pkey" PRIMARY KEY ("blog_tags_id","blog_posts_id")
);

-- CreateTable
CREATE TABLE "blog_categories" (
    "blog_categories_id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "blog_categories_pkey" PRIMARY KEY ("blog_categories_id")
);

-- CreateTable
CREATE TABLE "blog_posts" (
    "blog_posts_id" UUID NOT NULL,
    "slug" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "short_content" TEXT,
    "image_file_id" UUID,
    "content" JSONB NOT NULL,
    "status" "BLOG_POST_STATUS" NOT NULL DEFAULT 'PUBLISHED',
    "author_id" UUID NOT NULL,
    "category_id" UUID,
    "publish_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "blog_posts_pkey" PRIMARY KEY ("blog_posts_id")
);

-- CreateTable
CREATE TABLE "municipalities" (
    "municipalities_id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "geojson" JSON NOT NULL,
    "requires_license" BOOLEAN NOT NULL DEFAULT false,
    "gis_sifra" TEXT,
    "eid_obcina" TEXT,
    "feature_id" TEXT,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "municipalities_pkey" PRIMARY KEY ("municipalities_id")
);

-- CreateTable
CREATE TABLE "settlements" (
    "settlement_id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "municipalities_id" UUID NOT NULL,
    "eid_naselje" TEXT,
    "feature_id" TEXT,
    "geojson" JSON NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "settlements_pkey" PRIMARY KEY ("settlement_id")
);

-- CreateTable
CREATE TABLE "weather_data" (
    "weather_data_id" UUID NOT NULL,
    "time_epoch" BIGINT NOT NULL,
    "time" TIMESTAMP(3) NOT NULL,
    "temp_c" DOUBLE PRECISION NOT NULL,
    "is_day" BOOLEAN NOT NULL,
    "condition_text" TEXT NOT NULL,
    "condition_icon" TEXT NOT NULL,
    "condition_code" INTEGER NOT NULL,
    "wind_kph" DOUBLE PRECISION NOT NULL,
    "wind_degree" INTEGER NOT NULL,
    "wind_dir" TEXT NOT NULL,
    "pressure_mb" DOUBLE PRECISION NOT NULL,
    "precip_mm" DOUBLE PRECISION NOT NULL,
    "snow_cm" DOUBLE PRECISION NOT NULL,
    "humidity" INTEGER NOT NULL,
    "cloud" INTEGER NOT NULL,
    "feelslike_c" DOUBLE PRECISION NOT NULL,
    "windchill_c" DOUBLE PRECISION NOT NULL,
    "heatindex_c" DOUBLE PRECISION NOT NULL,
    "dewpoint_c" DOUBLE PRECISION NOT NULL,
    "will_it_rain" BOOLEAN NOT NULL,
    "chance_of_rain" INTEGER NOT NULL,
    "will_it_snow" BOOLEAN NOT NULL,
    "chance_of_snow" INTEGER NOT NULL,
    "vis_km" DOUBLE PRECISION NOT NULL,
    "gust_kph" DOUBLE PRECISION NOT NULL,
    "uv" DOUBLE PRECISION NOT NULL,
    "icon" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "municipalities_id" UUID,
    "settlement_id" UUID,

    CONSTRAINT "weather_data_pkey" PRIMARY KEY ("weather_data_id")
);

-- CreateTable
CREATE TABLE "tax_rates" (
    "tax_rates_id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "country" TEXT,
    "rate" DOUBLE PRECISION NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "valid_from" TIMESTAMPTZ(6) NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "activated_at" TIMESTAMPTZ(6),

    CONSTRAINT "tax_rates_pkey" PRIMARY KEY ("tax_rates_id")
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
CREATE TABLE "allergens_to_menu_items" (
    "allergen_id" UUID NOT NULL,
    "menu_item_id" UUID NOT NULL,

    CONSTRAINT "allergens_to_menu_items_pkey" PRIMARY KEY ("allergen_id","menu_item_id")
);

-- CreateTable
CREATE TABLE "user_allergens" (
    "allergen_id" UUID NOT NULL,
    "user_id" UUID NOT NULL,

    CONSTRAINT "user_allergens_pkey" PRIMARY KEY ("allergen_id","user_id")
);

-- CreateTable
CREATE TABLE "tutorial" (
    "tutorial_id" UUID NOT NULL,
    "key" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "version" INTEGER NOT NULL DEFAULT 1,
    "mandatory" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "retiredAt" TIMESTAMP(3),

    CONSTRAINT "tutorial_pkey" PRIMARY KEY ("tutorial_id")
);

-- CreateTable
CREATE TABLE "user_tutorial_state" (
    "id" UUID NOT NULL,
    "user_id" UUID NOT NULL,
    "epoch" INTEGER NOT NULL DEFAULT 1,
    "updatedAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "user_tutorial_state_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_tutorials" (
    "user_id" UUID NOT NULL,
    "tutorial_id" UUID NOT NULL,
    "epoch" INTEGER NOT NULL,
    "status" "TUTORIAL_STATUS" NOT NULL,
    "versionSeen" INTEGER NOT NULL,
    "firstSeenAt" TIMESTAMP(3),
    "completedAt" TIMESTAMP(3),
    "dismissedAt" TIMESTAMP(3),

    CONSTRAINT "user_tutorials_pkey" PRIMARY KEY ("user_id","tutorial_id","epoch")
);

-- CreateTable
CREATE TABLE "business" (
    "business_id" UUID NOT NULL,
    "address_id" UUID,
    "is_business_unit" BOOLEAN NOT NULL DEFAULT false,
    "business_group_name" TEXT,
    "tax_id" TEXT NOT NULL,
    "registration_id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "telephone" TEXT NOT NULL,
    "telephone_code" TEXT NOT NULL,
    "website_url" TEXT,
    "working_hours" JSONB,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "parent_business_id" UUID,
    "stripe_account_id" TEXT,
    "stripe_customer_id" TEXT,
    "word_buy_stripe_subscription_id" TEXT,
    "first_activated_at" TIMESTAMP(3),
    "active" BOOLEAN NOT NULL DEFAULT false,
    "sales_representative_id" TEXT,
    "types" "BUSINESS_TYPE"[],
    "business_details_id" UUID,

    CONSTRAINT "business_pkey" PRIMARY KEY ("business_id")
);

-- CreateTable
CREATE TABLE "business_details" (
    "business_details_id" UUID NOT NULL,
    "business_id" UUID NOT NULL,
    "name" TEXT,
    "description" TEXT,
    "logo_id" UUID,
    "banner_id" UUID,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "business_details_pkey" PRIMARY KEY ("business_details_id")
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
CREATE TABLE "business_teams" (
    "business_teams_id" UUID NOT NULL,
    "team_name" TEXT NOT NULL,
    "business_id" UUID NOT NULL,
    "limit_per_person" DOUBLE PRECISION NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "business_teams_pkey" PRIMARY KEY ("business_teams_id")
);

-- CreateTable
CREATE TABLE "crm_module" (
    "crm_module_id" UUID NOT NULL,
    "business_id" UUID NOT NULL,
    "purchase_order_limit_amount" DOUBLE PRECISION,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "crm_module_pkey" PRIMARY KEY ("crm_module_id")
);

-- CreateTable
CREATE TABLE "business_clients" (
    "business_clients_id" UUID NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "crm_module_id" UUID NOT NULL,
    "first_name" TEXT,
    "last_name" TEXT,
    "email" TEXT,
    "telephone" TEXT NOT NULL,
    "telephone_code" TEXT NOT NULL,

    CONSTRAINT "business_clients_pkey" PRIMARY KEY ("business_clients_id")
);

-- CreateTable
CREATE TABLE "stores_module" (
    "stores_id" UUID NOT NULL,
    "business_id" UUID NOT NULL,
    "enabled" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "delivery_address_id" UUID,
    "minimum_order" INTEGER NOT NULL DEFAULT 0,
    "overwhelmed" BOOLEAN NOT NULL DEFAULT false,
    "online" BOOLEAN NOT NULL DEFAULT false,
    "business_details_id" UUID,
    "working_hours" JSONB,

    CONSTRAINT "stores_module_pkey" PRIMARY KEY ("stores_id")
);

-- CreateTable
CREATE TABLE "food_drinks_module" (
    "food_drinks_id" UUID NOT NULL,
    "business_id" UUID NOT NULL,
    "enabled" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "delivery_address_id" UUID,
    "minimum_order" INTEGER NOT NULL DEFAULT 0,
    "overwhelmed" BOOLEAN NOT NULL DEFAULT false,
    "online" BOOLEAN NOT NULL DEFAULT false,
    "business_details_id" UUID,
    "working_hours" JSONB,

    CONSTRAINT "food_drinks_module_pkey" PRIMARY KEY ("food_drinks_id")
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
    "details" JSONB,
    "courier_instructions" TEXT,
    "restaurant_message" TEXT,
    "rejection_reason" TEXT,
    "scheduled_at" TIMESTAMP(3),
    "timeline" JSONB NOT NULL DEFAULT '[]',
    "status" "DELIVERY_ORDER_STATUS" NOT NULL,
    "last_sent_at" TIMESTAMPTZ(6),
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "vehicle_id" UUID,
    "driver_id" UUID,
    "payment_intent_id" TEXT,
    "find_drivers_attempts" INTEGER DEFAULT 0,
    "is_daily_meal" BOOLEAN NOT NULL DEFAULT false,
    "allow_credits_usage" BOOLEAN NOT NULL DEFAULT false,
    "order_number" INTEGER NOT NULL DEFAULT 0,
    "business_local_location_id" UUID,
    "stores_id" UUID,
    "food_drinks_id" UUID,
    "file_id" UUID,

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
    "driver_id" UUID,

    CONSTRAINT "delivery_order_sent_pkey" PRIMARY KEY ("delivery_order_sent_id")
);

-- CreateTable
CREATE TABLE "daily_meals_module" (
    "id" UUID NOT NULL,
    "business_id" UUID NOT NULL,
    "delivery_address_id" UUID,
    "daily_meals_days" "DAY_OF_WEEK"[] DEFAULT ARRAY[]::"DAY_OF_WEEK"[],
    "daily_meals_delivery_mapping" JSONB DEFAULT '{"0": 0, "1": 1, "2": 2, "3": 3, "4": 4, "5": 5, "6": 6}',
    "maximum_daily_meals_subscribers" INTEGER,
    "daily_users_sorted" JSONB DEFAULT '[]',
    "daily_users_sorting_type" "SORTING_TYPE" NOT NULL DEFAULT 'AUTOMATIC',
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "business_details_id" UUID,

    CONSTRAINT "daily_meals_module_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "daily_meals_drivers" (
    "id" UUID NOT NULL,
    "daily_meals_module_id" UUID NOT NULL,
    "driver_id" UUID NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "daily_meals_drivers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "business_local_locations" (
    "business_local_location_id" UUID NOT NULL,
    "stores_id" UUID NOT NULL,
    "local_location_id" UUID NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "time" TIMESTAMPTZ(6) NOT NULL,

    CONSTRAINT "business_local_locations_pkey" PRIMARY KEY ("business_local_location_id")
);

-- CreateTable
CREATE TABLE "local_locations" (
    "local_location_id" UUID NOT NULL,
    "address_id" UUID NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "local_locations_pkey" PRIMARY KEY ("local_location_id")
);

-- CreateTable
CREATE TABLE "categories" (
    "categories_id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "tag" TEXT NOT NULL,
    "icon_file_id" UUID,
    "category_type" "CATEGORY_TYPE" NOT NULL,
    "parent_categories_id" UUID,
    "translatable_id" UUID NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deleted_at" TIMESTAMPTZ(6),

    CONSTRAINT "categories_pkey" PRIMARY KEY ("categories_id")
);

-- CreateTable
CREATE TABLE "menu_categories_categories" (
    "menu_categories_id" UUID NOT NULL,
    "categories_id" UUID NOT NULL,

    CONSTRAINT "menu_categories_categories_pkey" PRIMARY KEY ("menu_categories_id","categories_id")
);

-- CreateTable
CREATE TABLE "menus" (
    "menu_id" UUID NOT NULL,
    "stores_id" UUID,
    "food_drinks_id" UUID,
    "menu_categories_ordered" JSONB,

    CONSTRAINT "menus_pkey" PRIMARY KEY ("menu_id")
);

-- CreateTable
CREATE TABLE "daily_meal_menus" (
    "daily_meal_menu_id" UUID NOT NULL,
    "daily_meals_module_id" UUID NOT NULL,
    "date" TIMESTAMPTZ(0) NOT NULL,

    CONSTRAINT "daily_meal_menus_pkey" PRIMARY KEY ("daily_meal_menu_id")
);

-- CreateTable
CREATE TABLE "menu_categories" (
    "menu_category_id" UUID NOT NULL,
    "name_translatable_id" UUID NOT NULL,
    "description_translatable_id" UUID NOT NULL,
    "categories" TEXT[],
    "stores_id" UUID,
    "food_drinks_id" UUID,
    "menu_id" UUID,
    "daily_meal_menu_id" UUID,
    "order" INTEGER,
    "price" DOUBLE PRECISION,
    "menu_items_ordered" JSONB,
    "menu_order_index" INTEGER,
    "daily_meal_category_id" UUID,
    "daily_meal_category_price_id" UUID,

    CONSTRAINT "menu_categories_pkey" PRIMARY KEY ("menu_category_id")
);

-- CreateTable
CREATE TABLE "menu_items" (
    "menu_item_id" UUID NOT NULL,
    "name_translatable_id" UUID NOT NULL,
    "description_translatable_id" UUID NOT NULL,
    "spicy_level" INTEGER,
    "unit_size" TEXT,
    "price" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "discount" DOUBLE PRECISION,
    "sides" TEXT[],
    "extras" TEXT[],
    "ingredients" JSONB NOT NULL,
    "availability" TEXT[],
    "stores_id" UUID,
    "food_drinks_id" UUID,
    "menu_category_id" UUID,
    "daily_date" TIMESTAMPTZ(6),
    "image_file_id" UUID,
    "requires_id_check" BOOLEAN NOT NULL DEFAULT false,
    "is_enabled" BOOLEAN NOT NULL DEFAULT true,
    "is_copy" BOOLEAN NOT NULL DEFAULT false,
    "menu_category_order_index" INTEGER,
    "allergens_text" JSONB,
    "ingredients_text" JSONB,
    "usage_text" JSONB,
    "origin_text" JSONB,
    "is_weighted" BOOLEAN NOT NULL DEFAULT false,
    "weight_quantity" DOUBLE PRECISION,
    "stock" DOUBLE PRECISION DEFAULT 1,
    "latest_version_id" UUID,
    "tax_rates_id" UUID,

    CONSTRAINT "menu_items_pkey" PRIMARY KEY ("menu_item_id")
);

-- CreateTable
CREATE TABLE "line_items" (
    "line_item_id" UUID NOT NULL,
    "menu_item_version_id" UUID NOT NULL,
    "order_id" UUID NOT NULL,
    "quantity" INTEGER NOT NULL,
    "comment" TEXT,
    "replacement_id" UUID,
    "replaces_id" UUID,
    "parent_side_id" UUID,
    "parent_extra_id" UUID,
    "removed" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "line_items_pkey" PRIMARY KEY ("line_item_id")
);

-- CreateTable
CREATE TABLE "menu_item_versions" (
    "menu_item_version_id" UUID NOT NULL,
    "menu_item_id" UUID NOT NULL,
    "version" INTEGER NOT NULL,
    "snapshot" JSONB NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "menu_item_versions_pkey" PRIMARY KEY ("menu_item_version_id")
);

-- CreateTable
CREATE TABLE "menu_item_stock_change" (
    "id" UUID NOT NULL,
    "menu_item_id" UUID NOT NULL,
    "quantity" DOUBLE PRECISION NOT NULL,
    "reason" TEXT NOT NULL,
    "order_id" UUID,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "menu_item_stock_change_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "table_reservations_module" (
    "id" UUID NOT NULL,
    "business_id" UUID NOT NULL,
    "seats" INTEGER,
    "business_details_id" UUID,

    CONSTRAINT "table_reservations_module_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "reservations" (
    "reservation_id" UUID NOT NULL,
    "seats" INTEGER NOT NULL,
    "datetime" TIMESTAMPTZ(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "user_id" UUID NOT NULL,
    "status" "RESERVATION_STATUS" NOT NULL DEFAULT 'PENDING',
    "table" INTEGER,
    "table_reservation_id" UUID NOT NULL,
    "delivery_order_id" UUID,

    CONSTRAINT "reservations_pkey" PRIMARY KEY ("reservation_id")
);

-- CreateTable
CREATE TABLE "daily_meal_subscriptions" (
    "id" UUID NOT NULL,
    "user_id" UUID NOT NULL,
    "daily_meals_id" UUID NOT NULL,
    "delivery_address_id" UUID NOT NULL,
    "driver_id" UUID,
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
    "daily_meal_category_price_id" UUID NOT NULL,
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
    "intended_date" TIMESTAMP(0) NOT NULL,
    "delivery_date" TIMESTAMP(0) NOT NULL,

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
    "intended_date" TIMESTAMP(0) NOT NULL,
    "delivery_date" TIMESTAMP(0) NOT NULL,
    "daily_meal_category_price_id" UUID NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "daily_meal_instances_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "daily_meal_categories" (
    "daily_meal_category_id" UUID NOT NULL,
    "daily_meals_id" UUID NOT NULL,
    "category_id" UUID NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "start_date" TIMESTAMPTZ(6) NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "daily_meal_categories_pkey" PRIMARY KEY ("daily_meal_category_id")
);

-- CreateTable
CREATE TABLE "daily_meal_category_prices" (
    "daily_meal_category_prices_id" UUID NOT NULL,
    "daily_meal_category_id" UUID NOT NULL,
    "price" INTEGER NOT NULL,
    "valid_from" TIMESTAMPTZ(6) NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "daily_meal_category_prices_pkey" PRIMARY KEY ("daily_meal_category_prices_id")
);

-- CreateTable
CREATE TABLE "order_lobbies" (
    "order_lobbies_id" UUID NOT NULL,
    "lobby_name" TEXT NOT NULL,
    "lobby_description" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "delivery_location" JSONB,
    "courier_note" TEXT,
    "restaurant_message" TEXT,
    "stores_id" UUID,
    "food_drinks_id" UUID,
    "creator_id" UUID NOT NULL,
    "delivery_orders_id" UUID,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "creating_business_id" UUID NOT NULL,

    CONSTRAINT "order_lobbies_pkey" PRIMARY KEY ("order_lobbies_id")
);

-- CreateTable
CREATE TABLE "order_lobby_items" (
    "order_lobby_items_id" UUID NOT NULL,
    "order_lobbies_id" UUID NOT NULL,
    "menu_item_id" UUID NOT NULL,
    "menu_item_version_id" UUID NOT NULL,
    "user_id" UUID,
    "sides" TEXT[],
    "extras" TEXT[],
    "quantity" INTEGER NOT NULL,
    "customer_note" TEXT,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "order_lobby_items_pkey" PRIMARY KEY ("order_lobby_items_id")
);

-- CreateTable
CREATE TABLE "order_lobby_users" (
    "order_lobby_users_id" UUID NOT NULL,
    "user_id" UUID NOT NULL,
    "order_lobbies_id" UUID NOT NULL,
    "limit" DOUBLE PRECISION NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "order_lobby_users_pkey" PRIMARY KEY ("order_lobby_users_id")
);

-- CreateTable
CREATE TABLE "business_premise" (
    "business_premise_id" UUID NOT NULL,
    "transport_module_id" UUID NOT NULL,
    "name" VARCHAR(120),
    "premise_type" "PREMISE_TYPE" NOT NULL DEFAULT 'A',
    "validity_date" TIMESTAMP(3),
    "special_notes" VARCHAR(255),
    "is_registered" BOOLEAN NOT NULL DEFAULT false,
    "registered_at" TIMESTAMP(3),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "business_premise_pkey" PRIMARY KEY ("business_premise_id")
);

-- CreateTable
CREATE TABLE "electronic_device" (
    "business_premise_id" UUID NOT NULL,
    "electronic_device_id" UUID NOT NULL,
    "name" VARCHAR(120),
    "active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "electronic_device_pkey" PRIMARY KEY ("business_premise_id","electronic_device_id")
);

-- CreateTable
CREATE TABLE "device_assignment" (
    "device_assignment_id" UUID NOT NULL,
    "driver_id" UUID NOT NULL,
    "business_premise_id" UUID NOT NULL,
    "electronic_device_id" UUID NOT NULL,
    "valid_from" TIMESTAMP(3) NOT NULL,
    "valid_to" TIMESTAMP(3),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "device_assignment_pkey" PRIMARY KEY ("device_assignment_id")
);

-- CreateTable
CREATE TABLE "invoice" (
    "invoice_id" UUID NOT NULL,
    "driver_id" UUID NOT NULL,
    "business_id" UUID,
    "vehicle_id" UUID,
    "tax_number" VARCHAR(8) NOT NULL,
    "taxi_order_id" UUID,
    "delivery_order_id" UUID,
    "numbering_structure" "NUMBERING_STRUCTURE" NOT NULL,
    "business_premise_id" UUID NOT NULL,
    "electronic_device_id" UUID NOT NULL,
    "invoice_number" VARCHAR(20) NOT NULL,
    "issue_datetime" TIMESTAMP(3) NOT NULL,
    "issue_datetime_local" VARCHAR(19),
    "invoice_amount" DECIMAL(14,2) NOT NULL,
    "returns_amount" DECIMAL(14,2),
    "payment_amount" DECIMAL(14,2) NOT NULL,
    "zoi" CHAR(32) NOT NULL,
    "eor" CHAR(36),
    "is_subsequent_submit" BOOLEAN NOT NULL DEFAULT false,
    "operator_tax_number" VARCHAR(8),
    "foreign_operator" BOOLEAN DEFAULT false,
    "furs_request_json" JSONB,
    "furs_response_json" JSONB,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "invoice_pkey" PRIMARY KEY ("invoice_id")
);

-- CreateTable
CREATE TABLE "invoice_item" (
    "invoice_item_id" UUID NOT NULL,
    "invoice_id" UUID NOT NULL,
    "description" VARCHAR(256) NOT NULL,
    "qty" DECIMAL(12,3) NOT NULL,
    "unit" VARCHAR(12),
    "unit_price" DECIMAL(14,4) NOT NULL,
    "tax_rate" DECIMAL(5,2) NOT NULL,
    "line_total" DECIMAL(14,2) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "invoice_item_pkey" PRIMARY KEY ("invoice_item_id")
);

-- CreateTable
CREATE TABLE "invoice_tax" (
    "invoice_tax_id" UUID NOT NULL,
    "invoice_id" UUID NOT NULL,
    "tax_rate" DECIMAL(5,2) NOT NULL,
    "taxable_amount" DECIMAL(14,2) NOT NULL,
    "tax_amount" DECIMAL(14,2) NOT NULL,
    "other_taxes_amount" DECIMAL(14,2),
    "exempt_taxable_amount" DECIMAL(14,2),
    "reverse_vat_taxable_amount" DECIMAL(14,2),
    "nontaxable_amount" DECIMAL(14,2),
    "special_tax_rules_amount" DECIMAL(14,2),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "invoice_tax_pkey" PRIMARY KEY ("invoice_tax_id")
);

-- CreateTable
CREATE TABLE "certificate_metadata" (
    "certificate_metadata_id" UUID NOT NULL,
    "driver_id" UUID NOT NULL,
    "subject_dn" VARCHAR(512) NOT NULL,
    "serial_number" VARCHAR(64) NOT NULL,
    "sha256_thumbprint" VARCHAR(64) NOT NULL,
    "valid_from" TIMESTAMP(3) NOT NULL,
    "valid_to" TIMESTAMP(3) NOT NULL,
    "ca_chain_pinned" VARCHAR(256),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "certificate_metadata_pkey" PRIMARY KEY ("certificate_metadata_id")
);

-- CreateTable
CREATE TABLE "submission_log" (
    "submission_log_id" UUID NOT NULL,
    "invoice_id" UUID NOT NULL,
    "message_id" VARCHAR(64) NOT NULL,
    "sent_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "http_status" INTEGER,
    "transport" VARCHAR(16),
    "tls_version" VARCHAR(16),
    "mtls_cn" VARCHAR(256),
    "eor" CHAR(36),
    "error_code" VARCHAR(32),
    "error_message" VARCHAR(512),
    "request_payload" JSONB,
    "response_payload" JSONB,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "submission_log_pkey" PRIMARY KEY ("submission_log_id")
);

-- CreateTable
CREATE TABLE "furs_job" (
    "furs_job_id" UUID NOT NULL,
    "type" "FURS_JOB_TYPE" NOT NULL,
    "status" "FURS_JOB_STATUS" NOT NULL DEFAULT 'DRAFT',
    "business_id" UUID,
    "business_premise_id" UUID,
    "invoice_id" UUID,
    "driver_id" UUID,
    "request_url" VARCHAR(255),
    "message_id" VARCHAR(64) NOT NULL,
    "request_payload" JSONB,
    "request_token" TEXT,
    "response_token" TEXT,
    "http_status" INTEGER,
    "error_code" VARCHAR(32),
    "error_message" VARCHAR(512),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "furs_job_pkey" PRIMARY KEY ("furs_job_id")
);

-- CreateTable
CREATE TABLE "reservation_module" (
    "reservation_module_id" UUID NOT NULL,
    "public_link_hash" TEXT,
    "business_id" UUID NOT NULL,
    "action_bundle_id" UUID,
    "subscription_active_until" TIMESTAMP(3),
    "subscription_expires_at" TIMESTAMP(3),
    "stripe_subscription_schedule_id" TEXT,
    "hours_before_reschedule" INTEGER,
    "hours_before_cancel" INTEGER,
    "publicly_visible" BOOLEAN NOT NULL DEFAULT false,
    "business_details_id" UUID,

    CONSTRAINT "reservation_module_pkey" PRIMARY KEY ("reservation_module_id")
);

-- CreateTable
CREATE TABLE "location" (
    "location_id" UUID NOT NULL,
    "reservation_module_id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "address_id" UUID,
    "phone" TEXT,
    "color" TEXT,
    "accepts_online" BOOLEAN NOT NULL DEFAULT false,
    "closed_on_holidays" BOOLEAN NOT NULL DEFAULT false,
    "working_days" JSONB NOT NULL,

    CONSTRAINT "location_pkey" PRIMARY KEY ("location_id")
);

-- CreateTable
CREATE TABLE "service_category" (
    "service_category_id" UUID NOT NULL,
    "reservation_module_id" UUID NOT NULL,
    "name" JSONB NOT NULL,
    "parent_id" UUID,
    "color" TEXT,

    CONSTRAINT "service_category_pkey" PRIMARY KEY ("service_category_id")
);

-- CreateTable
CREATE TABLE "service" (
    "service_id" UUID NOT NULL,
    "reservation_module_id" UUID NOT NULL,
    "service_category_id" UUID,
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
    "tax_rate_id" UUID,
    "course" BOOLEAN NOT NULL DEFAULT false,
    "people_allowed" INTEGER DEFAULT 1,

    CONSTRAINT "service_pkey" PRIMARY KEY ("service_id")
);

-- CreateTable
CREATE TABLE "service_location" (
    "service_location_id" UUID NOT NULL,
    "service_id" UUID NOT NULL,
    "location_id" UUID NOT NULL,

    CONSTRAINT "service_location_pkey" PRIMARY KEY ("service_location_id")
);

-- CreateTable
CREATE TABLE "employee" (
    "employee_id" UUID NOT NULL,
    "reservation_module_id" UUID NOT NULL,
    "first_name" TEXT,
    "last_name" TEXT,
    "email" TEXT,
    "telephone" TEXT,
    "telephone_code" TEXT,
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
    "telephone" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "code" VARCHAR(16) NOT NULL DEFAULT substr(md5(random()::text), 1, 16),
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
    "employee_id" UUID NOT NULL,
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
    "customer_id" UUID,
    "reservation_module_id" UUID NOT NULL,
    "location_id" UUID,
    "status" "BOOKING_STATUS" NOT NULL,
    "service_id" UUID NOT NULL,
    "comment" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "price_cents" INTEGER,
    "discount_percent" INTEGER,
    "discount_amount" INTEGER,
    "start_time" TIMESTAMP(3),
    "end_time" TIMESTAMP(3),
    "deleted_at" TIMESTAMP(3),
    "employee_id" UUID,
    "parent_booking_id" UUID,
    "course" BOOLEAN NOT NULL DEFAULT false,
    "people_allowed" INTEGER DEFAULT 1,
    "people_booked" INTEGER DEFAULT 1,

    CONSTRAINT "booking_pkey" PRIMARY KEY ("booking_id")
);

-- CreateTable
CREATE TABLE "booking_course_time" (
    "booking_course_time_id" UUID NOT NULL,
    "reservation_module_id" UUID NOT NULL,
    "booking_id" UUID NOT NULL,
    "start_time" TIMESTAMP(3) NOT NULL,
    "end_time" TIMESTAMP(3) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "booking_course_time_pkey" PRIMARY KEY ("booking_course_time_id")
);

-- CreateTable
CREATE TABLE "booking_course_participant" (
    "booking_course_participant_id" UUID NOT NULL,
    "reservation_module_id" UUID NOT NULL,
    "status" "BOOKING_STATUS" NOT NULL,
    "booking_id" UUID NOT NULL,
    "customer_id" UUID NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "booking_course_participant_pkey" PRIMARY KEY ("booking_course_participant_id")
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

-- CreateTable
CREATE TABLE "notification_event" (
    "notification_event_id" UUID NOT NULL,
    "key" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "notification_event_pkey" PRIMARY KEY ("notification_event_id")
);

-- CreateTable
CREATE TABLE "notification_template" (
    "notification_template_id" UUID NOT NULL,
    "reservation_module_id" UUID NOT NULL,
    "key" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "notification_template_pkey" PRIMARY KEY ("notification_template_id")
);

-- CreateTable
CREATE TABLE "notification_template_version" (
    "notification_template_version_id" UUID NOT NULL,
    "notification_template_id" UUID NOT NULL,
    "version" INTEGER NOT NULL,
    "status" "TEMPLATE_VERSION_STATUS" NOT NULL DEFAULT 'PUBLISHED',
    "subject" TEXT,
    "body_text" TEXT,
    "variables_json_schema" JSONB NOT NULL,
    "compiled_artifacts" JSONB,
    "created_by_user_id" UUID,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "notification_template_version_pkey" PRIMARY KEY ("notification_template_version_id")
);

-- CreateTable
CREATE TABLE "notification_mapping" (
    "notification_mapping_id" UUID NOT NULL,
    "reservation_module_id" UUID NOT NULL,
    "notification_event_id" UUID NOT NULL,
    "notification_template_version_id" UUID NOT NULL,
    "conditions" JSONB,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "notification_mapping_pkey" PRIMARY KEY ("notification_mapping_id")
);

-- CreateTable
CREATE TABLE "notification_preference" (
    "notification_preference_id" UUID NOT NULL,
    "reservation_module_id" UUID NOT NULL,
    "notification_event_id" UUID NOT NULL,
    "channel" "NOTIFICATION_CHANNEL" NOT NULL,
    "enabled" BOOLEAN NOT NULL DEFAULT true,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "notification_preference_pkey" PRIMARY KEY ("notification_preference_id")
);

-- CreateTable
CREATE TABLE "notification_provider_credential" (
    "notification_provider_credential_id" UUID NOT NULL,
    "reservation_module_id" UUID NOT NULL,
    "channel" "NOTIFICATION_CHANNEL" NOT NULL,
    "provider" TEXT NOT NULL,
    "config" JSONB NOT NULL,
    "is_default" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "notification_provider_credential_pkey" PRIMARY KEY ("notification_provider_credential_id")
);

-- CreateTable
CREATE TABLE "notification_message" (
    "notification_message_id" UUID NOT NULL,
    "reservation_module_id" UUID NOT NULL,
    "notification_event_id" UUID NOT NULL,
    "channel" "NOTIFICATION_CHANNEL" NOT NULL,
    "notification_template_id" UUID,
    "template_version" INTEGER,
    "to_address" TEXT,
    "subject" TEXT,
    "body_text" TEXT,
    "body_html" TEXT,
    "variables" JSONB NOT NULL,
    "rendered_at" TIMESTAMP(3) NOT NULL,
    "provider_message_id" TEXT,
    "status" "MESSAGE_STATUS" NOT NULL DEFAULT 'QUEUED',
    "error" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "notification_message_pkey" PRIMARY KEY ("notification_message_id")
);

-- CreateTable
CREATE TABLE "notification_message_event" (
    "notification_message_event_id" UUID NOT NULL,
    "notification_message_id" UUID NOT NULL,
    "type" TEXT NOT NULL,
    "provider_raw" JSONB,
    "occurred_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "notification_message_event_pkey" PRIMARY KEY ("notification_message_event_id")
);

-- CreateTable
CREATE TABLE "action_bundle" (
    "action_bundle_id" UUID NOT NULL,
    "module" "MODULE_TYPE" NOT NULL,
    "name" TEXT NOT NULL,
    "price_cents" INTEGER NOT NULL,
    "stripe_price_id" TEXT NOT NULL,
    "stripe_product_id" TEXT NOT NULL,

    CONSTRAINT "action_bundle_pkey" PRIMARY KEY ("action_bundle_id")
);

-- CreateTable
CREATE TABLE "addon" (
    "addon_id" UUID NOT NULL,
    "module" "MODULE_TYPE" NOT NULL,
    "name" TEXT NOT NULL,
    "price_cents" INTEGER NOT NULL,
    "stripe_price_id" TEXT NOT NULL,
    "stripe_product_id" TEXT NOT NULL,

    CONSTRAINT "addon_pkey" PRIMARY KEY ("addon_id")
);

-- CreateTable
CREATE TABLE "action" (
    "action_id" UUID NOT NULL,
    "module" "MODULE_TYPE" NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "action_pkey" PRIMARY KEY ("action_id")
);

-- CreateTable
CREATE TABLE "action_bundle_action" (
    "action_bundle_action_id" UUID NOT NULL,
    "action_bundle_id" UUID NOT NULL,
    "action_id" UUID NOT NULL,
    "module" "MODULE_TYPE" NOT NULL,
    "limit" INTEGER,

    CONSTRAINT "action_bundle_action_pkey" PRIMARY KEY ("action_bundle_action_id")
);

-- CreateTable
CREATE TABLE "addon_action" (
    "addon_action_id" UUID NOT NULL,
    "addon_id" UUID NOT NULL,
    "action_id" UUID NOT NULL,
    "module" "MODULE_TYPE" NOT NULL,
    "limit" INTEGER,

    CONSTRAINT "addon_action_pkey" PRIMARY KEY ("addon_action_id")
);

-- CreateTable
CREATE TABLE "business_addon" (
    "business_addon_id" UUID NOT NULL,
    "addon_id" UUID NOT NULL,
    "reservation_module_id" UUID,
    "sms_module_id" TEXT,
    "ads_module_id" TEXT,
    "quantity" INTEGER NOT NULL DEFAULT 1,

    CONSTRAINT "business_addon_pkey" PRIMARY KEY ("business_addon_id")
);

-- CreateTable
CREATE TABLE "business_usage" (
    "business_usage_id" UUID NOT NULL,
    "action_id" UUID NOT NULL,
    "used" INTEGER NOT NULL,
    "reset_date" TIMESTAMP(3),
    "reservation_module_id" UUID,

    CONSTRAINT "business_usage_pkey" PRIMARY KEY ("business_usage_id")
);

-- CreateTable
CREATE TABLE "transport_module" (
    "transport_module_id" UUID NOT NULL,
    "business_id" UUID NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "active" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "transport_module_pkey" PRIMARY KEY ("transport_module_id")
);

-- CreateTable
CREATE TABLE "taxi_orders" (
    "order_id" UUID NOT NULL,
    "user_id" UUID NOT NULL,
    "business_users_id" UUID,
    "business_clients_id" UUID,
    "driver_id" UUID,
    "vehicle_id" UUID,
    "route" JSONB NOT NULL,
    "pickup_location" JSONB NOT NULL,
    "delivery_location" JSONB,
    "payment" JSONB,
    "estimates" JSONB,
    "timeline" JSONB NOT NULL DEFAULT '[]',
    "preferences" JSONB,
    "status" "TAXI_ORDER_STATUS" NOT NULL,
    "last_sent_at" TIMESTAMPTZ(6),
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "telephone" TEXT,
    "first_name" TEXT,
    "last_name" TEXT,
    "cancellation_reason" TEXT,
    "find_drivers_attempts" INTEGER DEFAULT 0,
    "is_scheduled" BOOLEAN NOT NULL DEFAULT false,
    "parent_order_id" UUID,
    "type" "ORDER_TYPE" NOT NULL DEFAULT 'TAXI',
    "subtype" "ORDER_SUBTYPE" NOT NULL DEFAULT 'CREATED_BY_USER',
    "cargo_preferences" JSONB,
    "customer_note" TEXT,
    "parent_user_type" TEXT DEFAULT '',
    "creating_user_id" UUID,
    "allow_credits_usage" BOOLEAN NOT NULL DEFAULT false,
    "order_number" INTEGER NOT NULL DEFAULT 0,

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
    "rejected" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "taxi_order_sent_pkey" PRIMARY KEY ("taxi_order_sent_id")
);

-- CreateTable
CREATE TABLE "driver_activity_settings" (
    "driver_activity_settings_id" UUID NOT NULL,
    "first_offline_lockout" INTEGER NOT NULL DEFAULT 30,
    "second_offline_lockout" INTEGER NOT NULL DEFAULT 120,
    "online_timeout" INTEGER NOT NULL DEFAULT 120,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "active" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "driver_activity_settings_pkey" PRIMARY KEY ("driver_activity_settings_id")
);

-- CreateTable
CREATE TABLE "driver_activity_logs" (
    "driver_activity_log_id" UUID NOT NULL,
    "driver_id" UUID NOT NULL,
    "activity_type" "ACTIVITY_TYPE" NOT NULL,
    "started_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "ended_at" TIMESTAMPTZ(6),
    "timeout_at" TIMESTAMPTZ(6),
    "lockout_until" TIMESTAMPTZ(6),

    CONSTRAINT "driver_activity_logs_pkey" PRIMARY KEY ("driver_activity_log_id")
);

-- CreateTable
CREATE TABLE "driver_history_locations" (
    "driver_history_location_id" UUID NOT NULL,
    "driver_id" UUID NOT NULL,
    "taxi_order_id" UUID,
    "delivery_order_id" UUID,
    "status" TEXT,
    "location" JSONB,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "driver_history_locations_pkey" PRIMARY KEY ("driver_history_location_id")
);

-- CreateTable
CREATE TABLE "driver_municipalities" (
    "driver_municipalities_id" UUID NOT NULL,
    "driver_id" UUID NOT NULL,
    "municipalities_id" UUID NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "driver_municipalities_pkey" PRIMARY KEY ("driver_municipalities_id")
);

-- CreateTable
CREATE TABLE "drivers" (
    "driver_id" UUID NOT NULL,
    "transport_module_id" UUID,
    "online" BOOLEAN DEFAULT false,
    "on_order" BOOLEAN DEFAULT false,
    "working_hours" JSONB,
    "ride_requirements" JSONB,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "user_id" UUID,
    "current_vehicle_id" UUID,
    "last_used_vehicle_id" UUID,
    "location" JSONB,
    "delivery_timeline" JSONB DEFAULT '[]',
    "last_ping_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "is_inactive" BOOLEAN DEFAULT false,
    "transfer_requirements" JSONB,
    "regions" TEXT[],
    "handles_taxi_orders" BOOLEAN DEFAULT false,
    "handles_transfer_orders" BOOLEAN DEFAULT false,
    "handles_courier_orders" BOOLEAN DEFAULT false,
    "handles_delivery_orders" BOOLEAN DEFAULT false,
    "taxi_orders_toggled" BOOLEAN DEFAULT false,
    "transfer_orders_toggled" BOOLEAN DEFAULT false,
    "courier_orders_toggled" BOOLEAN DEFAULT false,
    "delivery_orders_toggled" BOOLEAN DEFAULT false,
    "partner_cash_balance" DOUBLE PRECISION DEFAULT 0,
    "come_to_work_last_sent_at" TIMESTAMPTZ(6),
    "profile_picture_id" UUID,
    "delivers_daily_meals" BOOLEAN DEFAULT false,
    "on_daily_meals" BOOLEAN DEFAULT false,
    "scheduled_meals_route" JSONB DEFAULT '[]',
    "vehicle_type" "VEHICLE_TYPE",

    CONSTRAINT "drivers_pkey" PRIMARY KEY ("driver_id")
);

-- CreateTable
CREATE TABLE "vehicle_drivers" (
    "vehicle_drivers_id" UUID NOT NULL,
    "vehicle_id" UUID NOT NULL,
    "driver_id" UUID NOT NULL,
    "can_drive" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "vehicle_drivers_pkey" PRIMARY KEY ("vehicle_drivers_id")
);

-- CreateTable
CREATE TABLE "vehicles" (
    "vehicle_id" UUID NOT NULL,
    "transport_module_id" UUID,
    "active" BOOLEAN DEFAULT true,
    "class" "VEHICLE_CLASS",
    "category" "VEHICLE_CATEGORY",
    "make" TEXT,
    "model" TEXT,
    "color" TEXT,
    "license_plate" TEXT,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "business_premise_id" UUID,

    CONSTRAINT "vehicles_pkey" PRIMARY KEY ("vehicle_id")
);

-- CreateTable
CREATE TABLE "users" (
    "user_id" UUID NOT NULL,
    "first_name" TEXT,
    "last_name" TEXT,
    "password" TEXT NOT NULL,
    "email" TEXT,
    "telephone" TEXT NOT NULL,
    "telephone_code" TEXT NOT NULL,
    "date_of_birth" DATE,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "user_role" "USER_ROLES" NOT NULL DEFAULT 'PERSONAL',
    "phone_verified" BOOLEAN NOT NULL DEFAULT false,
    "notification_preferences" JSONB,
    "taxi_preferences" JSONB,
    "profile_picture_id" UUID,
    "review_complete" BOOLEAN NOT NULL DEFAULT true,
    "one_signal_id" TEXT,
    "stripe_customer_id" TEXT,
    "wallet_balance" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "transfer_preferences" JSONB,
    "allergies_preferences" JSONB,
    "spicy_preferences" JSONB,
    "radio_preferences" JSONB,
    "subscribed_to_daily_meals" BOOLEAN NOT NULL DEFAULT false,
    "daily_meal_preferences" JSONB,
    "details" JSONB,
    "taxi_push_notification_preferences" JSONB,
    "transfer_push_notification_preferences" JSONB,
    "delivery_push_notification_preferences" JSONB,
    "spoken_languages" JSONB,
    "daily_meal_day_preferences" JSONB DEFAULT '[]',
    "disabled" BOOLEAN NOT NULL DEFAULT false,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "language" TEXT DEFAULT 'en',
    "apple_id" TEXT,
    "google_id" TEXT,
    "referral_code" CHAR(6) DEFAULT upper("substring"(md5((random())::text), 1, 6)),
    "activated_at" TIMESTAMP(3),
    "deactivated_at" TIMESTAMP(3),
    "deactivated" BOOLEAN NOT NULL DEFAULT false,
    "business_teams_id" UUID,
    "allow_marketing_push_notifications" BOOLEAN DEFAULT false,
    "allow_ads_personalization" BOOLEAN DEFAULT false,
    "allow_newsletter" BOOLEAN DEFAULT false,
    "user_favorite_service_links" "SERVICES"[],

    CONSTRAINT "users_pkey" PRIMARY KEY ("user_id")
);

-- CreateTable
CREATE TABLE "user_roles" (
    "user_roles_id" UUID NOT NULL,
    "user_id" UUID NOT NULL,
    "role" "USER_ROLES" NOT NULL DEFAULT 'PERSONAL',
    "primary" BOOLEAN DEFAULT false,

    CONSTRAINT "user_roles_pkey" PRIMARY KEY ("user_roles_id")
);

-- CreateTable
CREATE TABLE "role" (
    "role_id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "module" "MODULE_TYPE" NOT NULL,
    "business_id" UUID,
    "is_admin" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "role_pkey" PRIMARY KEY ("role_id")
);

-- CreateTable
CREATE TABLE "user_role" (
    "user_id" UUID NOT NULL,
    "role_id" UUID NOT NULL,
    "reservation_module_id" UUID,

    CONSTRAINT "user_role_pkey" PRIMARY KEY ("user_id")
);

-- CreateTable
CREATE TABLE "role_permission" (
    "role_permission_id" UUID NOT NULL,
    "role_id" UUID NOT NULL,
    "permission_id" UUID NOT NULL,

    CONSTRAINT "role_permission_pkey" PRIMARY KEY ("role_permission_id")
);

-- CreateTable
CREATE TABLE "permission" (
    "permission_id" UUID NOT NULL,
    "action_id" UUID,
    "name" TEXT,
    "description" TEXT,
    "display_name" TEXT,
    "module" "MODULE_TYPE" NOT NULL,
    "limit" INTEGER,
    "scope" "PERMISSION_SCOPE" NOT NULL DEFAULT 'GLOBAL',
    "group" TEXT,

    CONSTRAINT "permission_pkey" PRIMARY KEY ("permission_id")
);

-- CreateTable
CREATE TABLE "user_permission" (
    "user_permission_id" UUID NOT NULL,
    "user_id" UUID NOT NULL,
    "reservation_module_id" UUID,
    "action_id" UUID,
    "name" TEXT,
    "display_name" TEXT,
    "module" "MODULE_TYPE" NOT NULL,
    "limit" INTEGER,
    "scope" "PERMISSION_SCOPE" NOT NULL DEFAULT 'GLOBAL',
    "is_blocked" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "user_permission_pkey" PRIMARY KEY ("user_permission_id")
);

-- CreateTable
CREATE TABLE "group_users" (
    "group_user_id" UUID NOT NULL,
    "parent_user_id" UUID NOT NULL,
    "child_user_id" UUID NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "enabled" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "group_users_pkey" PRIMARY KEY ("group_user_id")
);

-- CreateTable
CREATE TABLE "_word_bundlesTowords" (
    "A" UUID NOT NULL,
    "B" UUID NOT NULL,

    CONSTRAINT "_word_bundlesTowords_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE UNIQUE INDEX "cashback_cashback_id_key" ON "cashback"("cashback_id");

-- CreateIndex
CREATE INDEX "cashback_user_id_type_status_idx" ON "cashback"("user_id", "type", "status");

-- CreateIndex
CREATE INDEX "cashback_expires_at_idx" ON "cashback"("expires_at");

-- CreateIndex
CREATE UNIQUE INDEX "referrals_referred_user_id_key" ON "referrals"("referred_user_id");

-- CreateIndex
CREATE UNIQUE INDEX "allowances_group_user_id_key" ON "allowances"("group_user_id");

-- CreateIndex
CREATE UNIQUE INDEX "allowances_business_users_id_key" ON "allowances"("business_users_id");

-- CreateIndex
CREATE UNIQUE INDEX "files_lost_item_id_key" ON "files"("lost_item_id");

-- CreateIndex
CREATE UNIQUE INDEX "tokens_token_key" ON "tokens"("token");

-- CreateIndex
CREATE UNIQUE INDEX "addresses_address_latitude_longitude_key" ON "addresses"("address", "latitude", "longitude");

-- CreateIndex
CREATE INDEX "reviews_taxi_order_id_idx" ON "reviews"("taxi_order_id");

-- CreateIndex
CREATE INDEX "reviews_delivery_order_id_idx" ON "reviews"("delivery_order_id");

-- CreateIndex
CREATE UNIQUE INDEX "reviews_author_id_taxi_order_id_key" ON "reviews"("author_id", "taxi_order_id");

-- CreateIndex
CREATE UNIQUE INDEX "reviews_author_id_delivery_order_id_key" ON "reviews"("author_id", "delivery_order_id");

-- CreateIndex
CREATE INDEX "review_items_subject_type_subject_id_idx" ON "review_items"("subject_type", "subject_id");

-- CreateIndex
CREATE UNIQUE INDEX "review_items_review_id_subject_type_subject_id_type_key" ON "review_items"("review_id", "subject_type", "subject_id", "type");

-- CreateIndex
CREATE UNIQUE INDEX "payment_intent_logs_stripe_id_key" ON "payment_intent_logs"("stripe_id");

-- CreateIndex
CREATE UNIQUE INDEX "lost_items_image_id_key" ON "lost_items"("image_id");

-- CreateIndex
CREATE UNIQUE INDEX "wallet_funds_wallet_funds_id_key" ON "wallet_funds"("wallet_funds_id");

-- CreateIndex
CREATE UNIQUE INDEX "wallet_funds_user_id_charge_id_reserved_order_reserved_busi_key" ON "wallet_funds"("user_id", "charge_id", "reserved_order", "reserved_business", "type", "status", "referral_id", "expires_at");

-- CreateIndex
CREATE UNIQUE INDEX "promo_ads_code_key" ON "promo_ads"("code");

-- CreateIndex
CREATE UNIQUE INDEX "words_word_key" ON "words"("word");

-- CreateIndex
CREATE UNIQUE INDEX "translations_translatable_id_language_key" ON "translations"("translatable_id", "language");

-- CreateIndex
CREATE INDEX "user_favorite_businesses_user_id_module_idx" ON "user_favorite_businesses"("user_id", "module");

-- CreateIndex
CREATE UNIQUE INDEX "user_favorite_businesses_user_id_business_id_module_key" ON "user_favorite_businesses"("user_id", "business_id", "module");

-- CreateIndex
CREATE INDEX "user_favorite_drivers_user_id_driver_id_idx" ON "user_favorite_drivers"("user_id", "driver_id");

-- CreateIndex
CREATE UNIQUE INDEX "user_favorite_drivers_user_id_driver_id_key" ON "user_favorite_drivers"("user_id", "driver_id");

-- CreateIndex
CREATE UNIQUE INDEX "account_actions_account_action_id_key" ON "account_actions"("account_action_id");

-- CreateIndex
CREATE UNIQUE INDEX "payments_payment_intent_id_key" ON "payments"("payment_intent_id");

-- CreateIndex
CREATE UNIQUE INDEX "payments_daily_meal_subscription_id_key" ON "payments"("daily_meal_subscription_id");

-- CreateIndex
CREATE UNIQUE INDEX "payment_splits_external_id_key" ON "payment_splits"("external_id");

-- CreateIndex
CREATE UNIQUE INDEX "blog_posts_slug_key" ON "blog_posts"("slug");

-- CreateIndex
CREATE INDEX "municipalities_name_idx" ON "municipalities"("name");

-- CreateIndex
CREATE INDEX "municipalities_gis_sifra_idx" ON "municipalities"("gis_sifra");

-- CreateIndex
CREATE INDEX "municipalities_eid_obcina_idx" ON "municipalities"("eid_obcina");

-- CreateIndex
CREATE INDEX "settlements_name_idx" ON "settlements"("name");

-- CreateIndex
CREATE INDEX "settlements_eid_naselje_idx" ON "settlements"("eid_naselje");

-- CreateIndex
CREATE INDEX "settlements_feature_id_idx" ON "settlements"("feature_id");

-- CreateIndex
CREATE INDEX "weather_data_time_epoch_idx" ON "weather_data"("time_epoch");

-- CreateIndex
CREATE INDEX "weather_data_municipalities_id_idx" ON "weather_data"("municipalities_id");

-- CreateIndex
CREATE INDEX "weather_data_settlement_id_idx" ON "weather_data"("settlement_id");

-- CreateIndex
CREATE INDEX "weather_data_settlement_id_time_idx" ON "weather_data"("settlement_id", "time");

-- CreateIndex
CREATE INDEX "weather_data_settlement_id_time_epoch_idx" ON "weather_data"("settlement_id", "time_epoch");

-- CreateIndex
CREATE INDEX "weather_data_municipalities_id_time_epoch_idx" ON "weather_data"("municipalities_id", "time_epoch");

-- CreateIndex
CREATE INDEX "weather_data_municipalities_id_time_idx" ON "weather_data"("municipalities_id", "time");

-- CreateIndex
CREATE UNIQUE INDEX "weather_data_time_epoch_settlement_id_key" ON "weather_data"("time_epoch", "settlement_id");

-- CreateIndex
CREATE UNIQUE INDEX "tax_rates_name_rate_valid_from_key" ON "tax_rates"("name", "rate", "valid_from");

-- CreateIndex
CREATE UNIQUE INDEX "allergens_code_key" ON "allergens"("code");

-- CreateIndex
CREATE UNIQUE INDEX "tutorial_key_key" ON "tutorial"("key");

-- CreateIndex
CREATE UNIQUE INDEX "user_tutorial_state_user_id_key" ON "user_tutorial_state"("user_id");

-- CreateIndex
CREATE INDEX "user_tutorials_user_id_epoch_idx" ON "user_tutorials"("user_id", "epoch");

-- CreateIndex
CREATE INDEX "user_tutorials_tutorial_id_idx" ON "user_tutorials"("tutorial_id");

-- CreateIndex
CREATE INDEX "user_tutorials_completed" ON "user_tutorials"("user_id", "epoch");

-- CreateIndex
CREATE UNIQUE INDEX "business_business_id_key" ON "business"("business_id");

-- CreateIndex
CREATE UNIQUE INDEX "business_email_key" ON "business"("email");

-- CreateIndex
CREATE UNIQUE INDEX "business_business_details_id_key" ON "business"("business_details_id");

-- CreateIndex
CREATE INDEX "business_parent_business_id_idx" ON "business"("parent_business_id");

-- CreateIndex
CREATE UNIQUE INDEX "business_details_business_id_key" ON "business_details"("business_id");

-- CreateIndex
CREATE UNIQUE INDEX "business_details_logo_id_key" ON "business_details"("logo_id");

-- CreateIndex
CREATE UNIQUE INDEX "business_details_banner_id_key" ON "business_details"("banner_id");

-- CreateIndex
CREATE INDEX "business_users_business_id_idx" ON "business_users"("business_id");

-- CreateIndex
CREATE INDEX "business_users_user_id_idx" ON "business_users"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "business_users_user_id_business_id_key" ON "business_users"("user_id", "business_id");

-- CreateIndex
CREATE INDEX "business_teams_business_id_idx" ON "business_teams"("business_id");

-- CreateIndex
CREATE UNIQUE INDEX "business_teams_team_name_business_id_key" ON "business_teams"("team_name", "business_id");

-- CreateIndex
CREATE UNIQUE INDEX "crm_module_business_id_key" ON "crm_module"("business_id");

-- CreateIndex
CREATE UNIQUE INDEX "business_clients_telephone_crm_module_id_key" ON "business_clients"("telephone", "crm_module_id");

-- CreateIndex
CREATE UNIQUE INDEX "stores_module_business_id_key" ON "stores_module"("business_id");

-- CreateIndex
CREATE UNIQUE INDEX "stores_module_business_details_id_key" ON "stores_module"("business_details_id");

-- CreateIndex
CREATE UNIQUE INDEX "food_drinks_module_business_id_key" ON "food_drinks_module"("business_id");

-- CreateIndex
CREATE UNIQUE INDEX "food_drinks_module_business_details_id_key" ON "food_drinks_module"("business_details_id");

-- CreateIndex
CREATE UNIQUE INDEX "delivery_orders_file_id_key" ON "delivery_orders"("file_id");

-- CreateIndex
CREATE UNIQUE INDEX "delivery_order_sent_order_id_driver_id_key" ON "delivery_order_sent"("order_id", "driver_id");

-- CreateIndex
CREATE UNIQUE INDEX "daily_meals_module_business_id_key" ON "daily_meals_module"("business_id");

-- CreateIndex
CREATE UNIQUE INDEX "daily_meals_module_business_details_id_key" ON "daily_meals_module"("business_details_id");

-- CreateIndex
CREATE INDEX "daily_meals_drivers_driver_id_idx" ON "daily_meals_drivers"("driver_id");

-- CreateIndex
CREATE UNIQUE INDEX "daily_meals_drivers_daily_meals_module_id_driver_id_key" ON "daily_meals_drivers"("daily_meals_module_id", "driver_id");

-- CreateIndex
CREATE UNIQUE INDEX "business_local_locations_stores_id_local_location_id_time_key" ON "business_local_locations"("stores_id", "local_location_id", "time");

-- CreateIndex
CREATE UNIQUE INDEX "local_locations_address_id_key" ON "local_locations"("address_id");

-- CreateIndex
CREATE UNIQUE INDEX "categories_tag_category_type_key" ON "categories"("tag", "category_type");

-- CreateIndex
CREATE UNIQUE INDEX "menus_stores_id_key" ON "menus"("stores_id");

-- CreateIndex
CREATE UNIQUE INDEX "menus_food_drinks_id_key" ON "menus"("food_drinks_id");

-- CreateIndex
CREATE UNIQUE INDEX "menus_menu_id_key" ON "menus"("menu_id");

-- CreateIndex
CREATE UNIQUE INDEX "daily_meal_menus_daily_meal_menu_id_key" ON "daily_meal_menus"("daily_meal_menu_id");

-- CreateIndex
CREATE UNIQUE INDEX "menu_categories_stores_id_key" ON "menu_categories"("stores_id");

-- CreateIndex
CREATE UNIQUE INDEX "menu_categories_food_drinks_id_key" ON "menu_categories"("food_drinks_id");

-- CreateIndex
CREATE UNIQUE INDEX "menu_categories_menu_category_id_key" ON "menu_categories"("menu_category_id");

-- CreateIndex
CREATE UNIQUE INDEX "menu_items_stores_id_key" ON "menu_items"("stores_id");

-- CreateIndex
CREATE UNIQUE INDEX "menu_items_food_drinks_id_key" ON "menu_items"("food_drinks_id");

-- CreateIndex
CREATE UNIQUE INDEX "menu_items_image_file_id_key" ON "menu_items"("image_file_id");

-- CreateIndex
CREATE UNIQUE INDEX "menu_items_menu_item_id_key" ON "menu_items"("menu_item_id");

-- CreateIndex
CREATE UNIQUE INDEX "line_items_replaces_id_key" ON "line_items"("replaces_id");

-- CreateIndex
CREATE INDEX "menu_item_versions_menu_item_id_idx" ON "menu_item_versions"("menu_item_id");

-- CreateIndex
CREATE UNIQUE INDEX "menu_item_versions_menu_item_id_version_key" ON "menu_item_versions"("menu_item_id", "version");

-- CreateIndex
CREATE UNIQUE INDEX "menu_item_stock_change_menu_item_id_order_id_key" ON "menu_item_stock_change"("menu_item_id", "order_id");

-- CreateIndex
CREATE UNIQUE INDEX "table_reservations_module_business_id_key" ON "table_reservations_module"("business_id");

-- CreateIndex
CREATE UNIQUE INDEX "table_reservations_module_business_details_id_key" ON "table_reservations_module"("business_details_id");

-- CreateIndex
CREATE UNIQUE INDEX "reservations_delivery_order_id_key" ON "reservations"("delivery_order_id");

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

-- CreateIndex
CREATE UNIQUE INDEX "order_lobbies_delivery_orders_id_key" ON "order_lobbies"("delivery_orders_id");

-- CreateIndex
CREATE UNIQUE INDEX "order_lobby_users_user_id_order_lobbies_id_key" ON "order_lobby_users"("user_id", "order_lobbies_id");

-- CreateIndex
CREATE INDEX "business_premise_transport_module_id_idx" ON "business_premise"("transport_module_id");

-- CreateIndex
CREATE INDEX "electronic_device_business_premise_id_idx" ON "electronic_device"("business_premise_id");

-- CreateIndex
CREATE INDEX "device_assignment_driver_id_idx" ON "device_assignment"("driver_id");

-- CreateIndex
CREATE INDEX "device_assignment_business_premise_id_electronic_device_id_idx" ON "device_assignment"("business_premise_id", "electronic_device_id");

-- CreateIndex
CREATE UNIQUE INDEX "invoice_taxi_order_id_key" ON "invoice"("taxi_order_id");

-- CreateIndex
CREATE UNIQUE INDEX "invoice_delivery_order_id_key" ON "invoice"("delivery_order_id");

-- CreateIndex
CREATE INDEX "invoice_driver_id_idx" ON "invoice"("driver_id");

-- CreateIndex
CREATE INDEX "invoice_business_id_idx" ON "invoice"("business_id");

-- CreateIndex
CREATE INDEX "invoice_vehicle_id_idx" ON "invoice"("vehicle_id");

-- CreateIndex
CREATE INDEX "invoice_issue_datetime_idx" ON "invoice"("issue_datetime");

-- CreateIndex
CREATE UNIQUE INDEX "invoice_business_premise_id_electronic_device_id_invoice_nu_key" ON "invoice"("business_premise_id", "electronic_device_id", "invoice_number");

-- CreateIndex
CREATE UNIQUE INDEX "invoice_zoi_key" ON "invoice"("zoi");

-- CreateIndex
CREATE UNIQUE INDEX "invoice_eor_key" ON "invoice"("eor");

-- CreateIndex
CREATE INDEX "invoice_item_invoice_id_idx" ON "invoice_item"("invoice_id");

-- CreateIndex
CREATE INDEX "invoice_tax_invoice_id_idx" ON "invoice_tax"("invoice_id");

-- CreateIndex
CREATE UNIQUE INDEX "invoice_tax_invoice_id_tax_rate_key" ON "invoice_tax"("invoice_id", "tax_rate");

-- CreateIndex
CREATE INDEX "certificate_metadata_sha256_thumbprint_idx" ON "certificate_metadata"("sha256_thumbprint");

-- CreateIndex
CREATE UNIQUE INDEX "certificate_metadata_driver_id_serial_number_key" ON "certificate_metadata"("driver_id", "serial_number");

-- CreateIndex
CREATE INDEX "submission_log_invoice_id_idx" ON "submission_log"("invoice_id");

-- CreateIndex
CREATE INDEX "submission_log_message_id_idx" ON "submission_log"("message_id");

-- CreateIndex
CREATE INDEX "furs_job_type_status_idx" ON "furs_job"("type", "status");

-- CreateIndex
CREATE INDEX "furs_job_business_id_idx" ON "furs_job"("business_id");

-- CreateIndex
CREATE INDEX "furs_job_business_premise_id_idx" ON "furs_job"("business_premise_id");

-- CreateIndex
CREATE INDEX "furs_job_invoice_id_idx" ON "furs_job"("invoice_id");

-- CreateIndex
CREATE INDEX "furs_job_message_id_idx" ON "furs_job"("message_id");

-- CreateIndex
CREATE UNIQUE INDEX "reservation_module_public_link_hash_key" ON "reservation_module"("public_link_hash");

-- CreateIndex
CREATE UNIQUE INDEX "reservation_module_business_id_key" ON "reservation_module"("business_id");

-- CreateIndex
CREATE UNIQUE INDEX "reservation_module_business_details_id_key" ON "reservation_module"("business_details_id");

-- CreateIndex
CREATE UNIQUE INDEX "employee_business_users_id_key" ON "employee"("business_users_id");

-- CreateIndex
CREATE UNIQUE INDEX "customers_reservation_module_id_email_key" ON "customers"("reservation_module_id", "email");

-- CreateIndex
CREATE UNIQUE INDEX "customers_reservation_module_id_telephone_key" ON "customers"("reservation_module_id", "telephone");

-- CreateIndex
CREATE UNIQUE INDEX "customers_code_key" ON "customers"("code");

-- CreateIndex
CREATE UNIQUE INDEX "schedule_slot_schedule_id_schedule_employee_id_date_key" ON "schedule_slot"("schedule_id", "schedule_employee_id", "date");

-- CreateIndex
CREATE UNIQUE INDEX "schedule_slot_exceptions_schedule_slot_id_date_start_time_e_key" ON "schedule_slot_exceptions"("schedule_slot_id", "date", "start_time", "end_time", "type");

-- CreateIndex
CREATE UNIQUE INDEX "booking_course_participant_customer_id_key" ON "booking_course_participant"("customer_id");

-- CreateIndex
CREATE UNIQUE INDEX "notification_event_key_key" ON "notification_event"("key");

-- CreateIndex
CREATE UNIQUE INDEX "notification_template_reservation_module_id_key_key" ON "notification_template"("reservation_module_id", "key");

-- CreateIndex
CREATE UNIQUE INDEX "notification_template_version_notification_template_id_vers_key" ON "notification_template_version"("notification_template_id", "version");

-- CreateIndex
CREATE INDEX "idx_module_event" ON "notification_mapping"("reservation_module_id", "notification_event_id");

-- CreateIndex
CREATE UNIQUE INDEX "uniq_active_slot_no_locale" ON "notification_mapping"("reservation_module_id", "notification_event_id");

-- CreateIndex
CREATE UNIQUE INDEX "notification_preference_reservation_module_id_notification__key" ON "notification_preference"("reservation_module_id", "notification_event_id", "channel");

-- CreateIndex
CREATE INDEX "notification_provider_credential_reservation_module_id_chan_idx" ON "notification_provider_credential"("reservation_module_id", "channel", "is_default");

-- CreateIndex
CREATE UNIQUE INDEX "notification_provider_credential_reservation_module_id_chan_key" ON "notification_provider_credential"("reservation_module_id", "channel", "provider");

-- CreateIndex
CREATE INDEX "notification_message_reservation_module_id_notification_eve_idx" ON "notification_message"("reservation_module_id", "notification_event_id", "created_at");

-- CreateIndex
CREATE INDEX "notification_message_channel_status_created_at_idx" ON "notification_message"("channel", "status", "created_at");

-- CreateIndex
CREATE INDEX "notification_message_event_notification_message_id_occurred_idx" ON "notification_message_event"("notification_message_id", "occurred_at");

-- CreateIndex
CREATE UNIQUE INDEX "action_bundle_name_key" ON "action_bundle"("name");

-- CreateIndex
CREATE UNIQUE INDEX "addon_name_key" ON "addon"("name");

-- CreateIndex
CREATE UNIQUE INDEX "action_name_key" ON "action"("name");

-- CreateIndex
CREATE UNIQUE INDEX "business_addon_addon_id_reservation_module_id_key" ON "business_addon"("addon_id", "reservation_module_id");

-- CreateIndex
CREATE UNIQUE INDEX "transport_module_business_id_key" ON "transport_module"("business_id");

-- CreateIndex
CREATE UNIQUE INDEX "taxi_order_sent_order_id_driver_id_key" ON "taxi_order_sent"("order_id", "driver_id");

-- CreateIndex
CREATE INDEX "driver_activity_logs_driver_id_activity_type_idx" ON "driver_activity_logs"("driver_id", "activity_type");

-- CreateIndex
CREATE INDEX "driver_activity_logs_started_at_idx" ON "driver_activity_logs"("started_at");

-- CreateIndex
CREATE INDEX "driver_activity_logs_ended_at_idx" ON "driver_activity_logs"("ended_at");

-- CreateIndex
CREATE INDEX "driver_municipalities_driver_id_idx" ON "driver_municipalities"("driver_id");

-- CreateIndex
CREATE UNIQUE INDEX "driver_municipalities_driver_id_municipalities_id_key" ON "driver_municipalities"("driver_id", "municipalities_id");

-- CreateIndex
CREATE UNIQUE INDEX "drivers_user_id_key" ON "drivers"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "drivers_current_vehicle_id_key" ON "drivers"("current_vehicle_id");

-- CreateIndex
CREATE UNIQUE INDEX "drivers_profile_picture_id_key" ON "drivers"("profile_picture_id");

-- CreateIndex
CREATE UNIQUE INDEX "vehicle_drivers_vehicle_drivers_id_key" ON "vehicle_drivers"("vehicle_drivers_id");

-- CreateIndex
CREATE INDEX "vehicle_drivers_driver_id_can_drive_idx" ON "vehicle_drivers"("driver_id", "can_drive");

-- CreateIndex
CREATE INDEX "vehicle_drivers_vehicle_id_can_drive_idx" ON "vehicle_drivers"("vehicle_id", "can_drive");

-- CreateIndex
CREATE UNIQUE INDEX "vehicle_drivers_vehicle_id_driver_id_key" ON "vehicle_drivers"("vehicle_id", "driver_id");

-- CreateIndex
CREATE UNIQUE INDEX "vehicles_vehicle_id_key" ON "vehicles"("vehicle_id");

-- CreateIndex
CREATE UNIQUE INDEX "vehicles_business_premise_id_key" ON "vehicles"("business_premise_id");

-- CreateIndex
CREATE UNIQUE INDEX "users_user_id_key" ON "users"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "users_telephone_key" ON "users"("telephone");

-- CreateIndex
CREATE UNIQUE INDEX "users_profile_picture_id_key" ON "users"("profile_picture_id");

-- CreateIndex
CREATE UNIQUE INDEX "users_referral_code_key" ON "users"("referral_code");

-- CreateIndex
CREATE UNIQUE INDEX "user_roles_user_roles_id_key" ON "user_roles"("user_roles_id");

-- CreateIndex
CREATE UNIQUE INDEX "role_name_business_id_key" ON "role"("name", "business_id");

-- CreateIndex
CREATE UNIQUE INDEX "user_role_user_id_role_id_reservation_module_id_key" ON "user_role"("user_id", "role_id", "reservation_module_id");

-- CreateIndex
CREATE UNIQUE INDEX "role_permission_role_id_permission_id_key" ON "role_permission"("role_id", "permission_id");

-- CreateIndex
CREATE UNIQUE INDEX "user_permission_name_module_key" ON "user_permission"("name", "module");

-- CreateIndex
CREATE UNIQUE INDEX "user_permission_action_id_module_key" ON "user_permission"("action_id", "module");

-- CreateIndex
CREATE UNIQUE INDEX "group_users_child_user_id_key" ON "group_users"("child_user_id");

-- CreateIndex
CREATE INDEX "_word_bundlesTowords_B_index" ON "_word_bundlesTowords"("B");

-- AddForeignKey
ALTER TABLE "cashback" ADD CONSTRAINT "cashback_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cashback" ADD CONSTRAINT "cashback_taxi_order_id_fkey" FOREIGN KEY ("taxi_order_id") REFERENCES "taxi_orders"("order_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cashback" ADD CONSTRAINT "cashback_delivery_order_id_fkey" FOREIGN KEY ("delivery_order_id") REFERENCES "delivery_orders"("order_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "referrals" ADD CONSTRAINT "referrals_referrer_user_id_fkey" FOREIGN KEY ("referrer_user_id") REFERENCES "users"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "referrals" ADD CONSTRAINT "referrals_referred_user_id_fkey" FOREIGN KEY ("referred_user_id") REFERENCES "users"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "allowances" ADD CONSTRAINT "allowances_group_user_id_fkey" FOREIGN KEY ("group_user_id") REFERENCES "group_users"("group_user_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "allowances" ADD CONSTRAINT "allowances_business_users_id_fkey" FOREIGN KEY ("business_users_id") REFERENCES "business_users"("business_users_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "documents" ADD CONSTRAINT "documents_driver_id_fkey" FOREIGN KEY ("driver_id") REFERENCES "drivers"("driver_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "documents" ADD CONSTRAINT "documents_business_id_fkey" FOREIGN KEY ("business_id") REFERENCES "business"("business_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "documents" ADD CONSTRAINT "documents_vehicle_id_fkey" FOREIGN KEY ("vehicle_id") REFERENCES "vehicles"("vehicle_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "documents" ADD CONSTRAINT "documents_transaction_id_fkey" FOREIGN KEY ("transaction_id") REFERENCES "transactions"("transaction_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "documents" ADD CONSTRAINT "documents_order_id_fkey" FOREIGN KEY ("order_id") REFERENCES "taxi_orders"("order_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "files" ADD CONSTRAINT "files_document_id_fkey" FOREIGN KEY ("document_id") REFERENCES "documents"("document_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "files" ADD CONSTRAINT "files_lost_item_id_fkey" FOREIGN KEY ("lost_item_id") REFERENCES "lost_items"("lost_item_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tokens" ADD CONSTRAINT "tokens_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_address" ADD CONSTRAINT "user_address_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("user_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_address" ADD CONSTRAINT "user_address_address_id_fkey" FOREIGN KEY ("address_id") REFERENCES "addresses"("address_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "reviews" ADD CONSTRAINT "reviews_taxi_order_id_fkey" FOREIGN KEY ("taxi_order_id") REFERENCES "taxi_orders"("order_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "reviews" ADD CONSTRAINT "reviews_delivery_order_id_fkey" FOREIGN KEY ("delivery_order_id") REFERENCES "delivery_orders"("order_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "reviews" ADD CONSTRAINT "reviews_author_id_fkey" FOREIGN KEY ("author_id") REFERENCES "users"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "review_items" ADD CONSTRAINT "review_items_review_id_fkey" FOREIGN KEY ("review_id") REFERENCES "reviews"("review_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "transactions" ADD CONSTRAINT "transactions_taxi_order_id_fkey" FOREIGN KEY ("taxi_order_id") REFERENCES "taxi_orders"("order_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "transactions" ADD CONSTRAINT "transactions_delivery_order_id_fkey" FOREIGN KEY ("delivery_order_id") REFERENCES "delivery_orders"("order_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "transactions" ADD CONSTRAINT "transactions_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "transactions" ADD CONSTRAINT "transactions_wallet_fund_id_fkey" FOREIGN KEY ("wallet_fund_id") REFERENCES "wallet_funds"("wallet_funds_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_money_flows" ADD CONSTRAINT "user_money_flows_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "business_money_flows" ADD CONSTRAINT "business_money_flows_business_id_fkey" FOREIGN KEY ("business_id") REFERENCES "business"("business_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "lost_items" ADD CONSTRAINT "lost_items_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("user_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "wallet_transfer_history" ADD CONSTRAINT "wallet_transfer_history_order_id_fkey" FOREIGN KEY ("order_id") REFERENCES "delivery_orders"("order_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "wallet_transfer_history" ADD CONSTRAINT "wallet_transfer_history_taxi_order_id_fkey" FOREIGN KEY ("order_id") REFERENCES "taxi_orders"("order_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "wallet_funds" ADD CONSTRAINT "wallet_funds_referral_id_fkey" FOREIGN KEY ("referral_id") REFERENCES "referrals"("referral_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "wallet_funds" ADD CONSTRAINT "wallet_funds_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "promo_sections" ADD CONSTRAINT "promo_sections_translatable_id_fkey" FOREIGN KEY ("translatable_id") REFERENCES "translatable"("translatable_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "promo_banners" ADD CONSTRAINT "promo_banners_file_id_fkey" FOREIGN KEY ("file_id") REFERENCES "files"("file_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "promo_banners" ADD CONSTRAINT "promo_banners_promo_ads_id_fkey" FOREIGN KEY ("promo_ads_id") REFERENCES "promo_ads"("promo_ads_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "promo_sections_buy" ADD CONSTRAINT "promo_sections_buy_promo_sections_id_fkey" FOREIGN KEY ("promo_sections_id") REFERENCES "promo_sections"("promo_sections_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "promo_sections_buy" ADD CONSTRAINT "promo_sections_buy_business_id_fkey" FOREIGN KEY ("business_id") REFERENCES "business"("business_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "promo_sections_buy" ADD CONSTRAINT "promo_sections_buy_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("user_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "promo_ads_category" ADD CONSTRAINT "promo_ads_category_promo_ads_id_fkey" FOREIGN KEY ("promo_ads_id") REFERENCES "promo_ads"("promo_ads_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "promo_ads_category" ADD CONSTRAINT "promo_ads_category_categories_id_fkey" FOREIGN KEY ("categories_id") REFERENCES "categories"("categories_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "words" ADD CONSTRAINT "words_categories_id_fkey" FOREIGN KEY ("categories_id") REFERENCES "categories"("categories_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "words" ADD CONSTRAINT "words_translatable_id_fkey" FOREIGN KEY ("translatable_id") REFERENCES "translatable"("translatable_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "word_buy" ADD CONSTRAINT "word_buy_word_id_fkey" FOREIGN KEY ("word_id") REFERENCES "words"("word_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "word_buy" ADD CONSTRAINT "word_buy_business_id_fkey" FOREIGN KEY ("business_id") REFERENCES "business"("business_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "promo_analytics" ADD CONSTRAINT "promo_analytics_business_id_fkey" FOREIGN KEY ("business_id") REFERENCES "business"("business_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "promo_analytics" ADD CONSTRAINT "promo_analytics_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("user_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "promo_analytics" ADD CONSTRAINT "promo_analytics_promo_ads_id_fkey" FOREIGN KEY ("promo_ads_id") REFERENCES "promo_ads"("promo_ads_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "promo_analytics" ADD CONSTRAINT "promo_analytics_promo_sections_id_fkey" FOREIGN KEY ("promo_sections_id") REFERENCES "promo_sections"("promo_sections_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "promo_analytics" ADD CONSTRAINT "promo_analytics_word_id_fkey" FOREIGN KEY ("word_id") REFERENCES "words"("word_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "promo_analytics" ADD CONSTRAINT "promo_analytics_order_id_fkey" FOREIGN KEY ("order_id") REFERENCES "delivery_orders"("order_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "promo_analytics" ADD CONSTRAINT "promo_analytics_daily_meal_subscription_id_fkey" FOREIGN KEY ("daily_meal_subscription_id") REFERENCES "daily_meal_subscriptions"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "translations" ADD CONSTRAINT "translations_translatable_id_fkey" FOREIGN KEY ("translatable_id") REFERENCES "translatable"("translatable_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_favorite_businesses" ADD CONSTRAINT "user_favorite_businesses_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_favorite_businesses" ADD CONSTRAINT "user_favorite_businesses_business_id_fkey" FOREIGN KEY ("business_id") REFERENCES "business"("business_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_favorite_drivers" ADD CONSTRAINT "user_favorite_drivers_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_favorite_drivers" ADD CONSTRAINT "user_favorite_drivers_driver_id_fkey" FOREIGN KEY ("driver_id") REFERENCES "drivers"("driver_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "scoring_points" ADD CONSTRAINT "scoring_points_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("user_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "scoring_points" ADD CONSTRAINT "scoring_points_driver_id_fkey" FOREIGN KEY ("driver_id") REFERENCES "drivers"("driver_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "scoring_points" ADD CONSTRAINT "scoring_points_stores_id_fkey" FOREIGN KEY ("stores_id") REFERENCES "stores_module"("stores_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "scoring_points" ADD CONSTRAINT "scoring_points_food_drinks_id_fkey" FOREIGN KEY ("food_drinks_id") REFERENCES "food_drinks_module"("food_drinks_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "scoring_points" ADD CONSTRAINT "scoring_points_delivery_order_id_fkey" FOREIGN KEY ("delivery_order_id") REFERENCES "delivery_orders"("order_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "scoring_points" ADD CONSTRAINT "scoring_points_taxi_order_id_fkey" FOREIGN KEY ("taxi_order_id") REFERENCES "taxi_orders"("order_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "late_events" ADD CONSTRAINT "late_events_stores_id_fkey" FOREIGN KEY ("stores_id") REFERENCES "stores_module"("stores_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "late_events" ADD CONSTRAINT "late_events_food_drinks_id_fkey" FOREIGN KEY ("food_drinks_id") REFERENCES "food_drinks_module"("food_drinks_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "late_events" ADD CONSTRAINT "late_events_driver_id_fkey" FOREIGN KEY ("driver_id") REFERENCES "drivers"("driver_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "late_events" ADD CONSTRAINT "late_events_delivery_order_id_fkey" FOREIGN KEY ("delivery_order_id") REFERENCES "delivery_orders"("order_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "late_events" ADD CONSTRAINT "late_events_taxi_order_id_fkey" FOREIGN KEY ("taxi_order_id") REFERENCES "taxi_orders"("order_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "late_events" ADD CONSTRAINT "late_events_scoring_points_id_fkey" FOREIGN KEY ("scoring_points_id") REFERENCES "scoring_points"("scoring_points_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "account_actions" ADD CONSTRAINT "account_actions_business_id_fkey" FOREIGN KEY ("business_id") REFERENCES "business"("business_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "account_actions" ADD CONSTRAINT "account_actions_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("user_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "account_actions" ADD CONSTRAINT "account_actions_action_creator_user_id_fkey" FOREIGN KEY ("action_creator_user_id") REFERENCES "users"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "payments" ADD CONSTRAINT "payments_daily_meal_subscription_id_fkey" FOREIGN KEY ("daily_meal_subscription_id") REFERENCES "daily_meal_subscriptions"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "payments" ADD CONSTRAINT "payments_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "payment_splits" ADD CONSTRAINT "payment_splits_payment_id_fkey" FOREIGN KEY ("payment_id") REFERENCES "payments"("payment_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "payment_splits" ADD CONSTRAINT "payment_splits_payment_transfer_group_id_fkey" FOREIGN KEY ("payment_transfer_group_id") REFERENCES "payment_transfer_groups"("payment_transfer_group_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "payment_transfer_groups" ADD CONSTRAINT "payment_transfer_groups_payment_id_fkey" FOREIGN KEY ("payment_id") REFERENCES "payments"("payment_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "blog_tags_blog_posts" ADD CONSTRAINT "blog_tags_blog_posts_blog_tags_id_fkey" FOREIGN KEY ("blog_tags_id") REFERENCES "blog_tags"("blog_tags_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "blog_tags_blog_posts" ADD CONSTRAINT "blog_tags_blog_posts_blog_posts_id_fkey" FOREIGN KEY ("blog_posts_id") REFERENCES "blog_posts"("blog_posts_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "blog_posts" ADD CONSTRAINT "blog_posts_image_file_id_fkey" FOREIGN KEY ("image_file_id") REFERENCES "files"("file_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "blog_posts" ADD CONSTRAINT "blog_posts_author_id_fkey" FOREIGN KEY ("author_id") REFERENCES "users"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "blog_posts" ADD CONSTRAINT "blog_posts_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "blog_categories"("blog_categories_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "settlements" ADD CONSTRAINT "settlements_municipalities_id_fkey" FOREIGN KEY ("municipalities_id") REFERENCES "municipalities"("municipalities_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "weather_data" ADD CONSTRAINT "weather_data_municipalities_id_fkey" FOREIGN KEY ("municipalities_id") REFERENCES "municipalities"("municipalities_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "weather_data" ADD CONSTRAINT "weather_data_settlement_id_fkey" FOREIGN KEY ("settlement_id") REFERENCES "settlements"("settlement_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "allergens_to_menu_items" ADD CONSTRAINT "allergens_to_menu_items_allergen_id_fkey" FOREIGN KEY ("allergen_id") REFERENCES "allergens"("allergen_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "allergens_to_menu_items" ADD CONSTRAINT "allergens_to_menu_items_menu_item_id_fkey" FOREIGN KEY ("menu_item_id") REFERENCES "menu_items"("menu_item_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_allergens" ADD CONSTRAINT "user_allergens_allergen_id_fkey" FOREIGN KEY ("allergen_id") REFERENCES "allergens"("allergen_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_allergens" ADD CONSTRAINT "user_allergens_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("user_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_tutorial_state" ADD CONSTRAINT "user_tutorial_state_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("user_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_tutorials" ADD CONSTRAINT "user_tutorials_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("user_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_tutorials" ADD CONSTRAINT "user_tutorials_tutorial_id_fkey" FOREIGN KEY ("tutorial_id") REFERENCES "tutorial"("tutorial_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "business" ADD CONSTRAINT "business_address_id_fkey" FOREIGN KEY ("address_id") REFERENCES "addresses"("address_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "business" ADD CONSTRAINT "business_parent_business_id_fkey" FOREIGN KEY ("parent_business_id") REFERENCES "business"("business_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "business" ADD CONSTRAINT "business_business_details_id_fkey" FOREIGN KEY ("business_details_id") REFERENCES "business_details"("business_details_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "business_details" ADD CONSTRAINT "business_details_logo_id_fkey" FOREIGN KEY ("logo_id") REFERENCES "files"("file_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "business_details" ADD CONSTRAINT "business_details_banner_id_fkey" FOREIGN KEY ("banner_id") REFERENCES "files"("file_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "business_users" ADD CONSTRAINT "business_users_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "business_users" ADD CONSTRAINT "business_users_business_id_fkey" FOREIGN KEY ("business_id") REFERENCES "business"("business_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "business_users" ADD CONSTRAINT "business_users_operating_address_id_fkey" FOREIGN KEY ("operating_address_id") REFERENCES "addresses"("address_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "business_teams" ADD CONSTRAINT "business_teams_business_id_fkey" FOREIGN KEY ("business_id") REFERENCES "business"("business_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "crm_module" ADD CONSTRAINT "crm_module_business_id_fkey" FOREIGN KEY ("business_id") REFERENCES "business"("business_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "business_clients" ADD CONSTRAINT "business_clients_crm_module_id_fkey" FOREIGN KEY ("crm_module_id") REFERENCES "crm_module"("crm_module_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "stores_module" ADD CONSTRAINT "stores_module_business_id_fkey" FOREIGN KEY ("business_id") REFERENCES "business"("business_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "stores_module" ADD CONSTRAINT "stores_module_delivery_address_id_fkey" FOREIGN KEY ("delivery_address_id") REFERENCES "addresses"("address_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "stores_module" ADD CONSTRAINT "stores_module_business_details_id_fkey" FOREIGN KEY ("business_details_id") REFERENCES "business_details"("business_details_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "food_drinks_module" ADD CONSTRAINT "food_drinks_module_business_id_fkey" FOREIGN KEY ("business_id") REFERENCES "business"("business_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "food_drinks_module" ADD CONSTRAINT "food_drinks_module_delivery_address_id_fkey" FOREIGN KEY ("delivery_address_id") REFERENCES "addresses"("address_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "food_drinks_module" ADD CONSTRAINT "food_drinks_module_business_details_id_fkey" FOREIGN KEY ("business_details_id") REFERENCES "business_details"("business_details_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "delivery_orders" ADD CONSTRAINT "delivery_orders_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("user_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "delivery_orders" ADD CONSTRAINT "delivery_orders_vehicle_id_fkey" FOREIGN KEY ("vehicle_id") REFERENCES "vehicles"("vehicle_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "delivery_orders" ADD CONSTRAINT "delivery_orders_driver_id_fkey" FOREIGN KEY ("driver_id") REFERENCES "drivers"("driver_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "delivery_orders" ADD CONSTRAINT "delivery_orders_business_local_location_id_fkey" FOREIGN KEY ("business_local_location_id") REFERENCES "business_local_locations"("business_local_location_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "delivery_orders" ADD CONSTRAINT "delivery_orders_stores_id_fkey" FOREIGN KEY ("stores_id") REFERENCES "stores_module"("stores_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "delivery_orders" ADD CONSTRAINT "delivery_orders_food_drinks_id_fkey" FOREIGN KEY ("food_drinks_id") REFERENCES "food_drinks_module"("food_drinks_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "delivery_orders" ADD CONSTRAINT "delivery_orders_file_id_fkey" FOREIGN KEY ("file_id") REFERENCES "files"("file_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "delivery_order_sent" ADD CONSTRAINT "delivery_order_sent_order_id_fkey" FOREIGN KEY ("order_id") REFERENCES "delivery_orders"("order_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "delivery_order_sent" ADD CONSTRAINT "delivery_order_sent_driver_id_fkey" FOREIGN KEY ("driver_id") REFERENCES "drivers"("driver_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "daily_meals_module" ADD CONSTRAINT "daily_meals_module_business_id_fkey" FOREIGN KEY ("business_id") REFERENCES "business"("business_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "daily_meals_module" ADD CONSTRAINT "daily_meals_module_delivery_address_id_fkey" FOREIGN KEY ("delivery_address_id") REFERENCES "addresses"("address_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "daily_meals_module" ADD CONSTRAINT "daily_meals_module_business_details_id_fkey" FOREIGN KEY ("business_details_id") REFERENCES "business_details"("business_details_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "daily_meals_drivers" ADD CONSTRAINT "daily_meals_drivers_daily_meals_module_id_fkey" FOREIGN KEY ("daily_meals_module_id") REFERENCES "daily_meals_module"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "daily_meals_drivers" ADD CONSTRAINT "daily_meals_drivers_driver_id_fkey" FOREIGN KEY ("driver_id") REFERENCES "drivers"("driver_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "business_local_locations" ADD CONSTRAINT "business_local_locations_local_location_id_fkey" FOREIGN KEY ("local_location_id") REFERENCES "local_locations"("local_location_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "business_local_locations" ADD CONSTRAINT "business_local_locations_stores_id_fkey" FOREIGN KEY ("stores_id") REFERENCES "stores_module"("stores_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "local_locations" ADD CONSTRAINT "local_locations_address_id_fkey" FOREIGN KEY ("address_id") REFERENCES "addresses"("address_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "categories" ADD CONSTRAINT "categories_icon_file_id_fkey" FOREIGN KEY ("icon_file_id") REFERENCES "files"("file_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "categories" ADD CONSTRAINT "categories_parent_categories_id_fkey" FOREIGN KEY ("parent_categories_id") REFERENCES "categories"("categories_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "categories" ADD CONSTRAINT "categories_translatable_id_fkey" FOREIGN KEY ("translatable_id") REFERENCES "translatable"("translatable_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "menu_categories_categories" ADD CONSTRAINT "menu_categories_categories_menu_categories_id_fkey" FOREIGN KEY ("menu_categories_id") REFERENCES "menu_categories"("menu_category_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "menu_categories_categories" ADD CONSTRAINT "menu_categories_categories_categories_id_fkey" FOREIGN KEY ("categories_id") REFERENCES "categories"("categories_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "menus" ADD CONSTRAINT "menus_stores_id_fkey" FOREIGN KEY ("stores_id") REFERENCES "stores_module"("stores_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "menus" ADD CONSTRAINT "menus_food_drinks_id_fkey" FOREIGN KEY ("food_drinks_id") REFERENCES "food_drinks_module"("food_drinks_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "daily_meal_menus" ADD CONSTRAINT "daily_meal_menus_daily_meals_module_id_fkey" FOREIGN KEY ("daily_meals_module_id") REFERENCES "daily_meals_module"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "menu_categories" ADD CONSTRAINT "menu_categories_name_translatable_id_fkey" FOREIGN KEY ("name_translatable_id") REFERENCES "translatable"("translatable_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "menu_categories" ADD CONSTRAINT "menu_categories_description_translatable_id_fkey" FOREIGN KEY ("description_translatable_id") REFERENCES "translatable"("translatable_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "menu_categories" ADD CONSTRAINT "menu_categories_menu_id_fkey" FOREIGN KEY ("menu_id") REFERENCES "menus"("menu_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "menu_categories" ADD CONSTRAINT "menu_categories_daily_meal_menu_id_fkey" FOREIGN KEY ("daily_meal_menu_id") REFERENCES "daily_meal_menus"("daily_meal_menu_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "menu_categories" ADD CONSTRAINT "menu_categories_daily_meal_category_id_fkey" FOREIGN KEY ("daily_meal_category_id") REFERENCES "daily_meal_categories"("daily_meal_category_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "menu_categories" ADD CONSTRAINT "menu_categories_daily_meal_category_price_id_fkey" FOREIGN KEY ("daily_meal_category_price_id") REFERENCES "daily_meal_category_prices"("daily_meal_category_prices_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "menu_items" ADD CONSTRAINT "menu_items_name_translatable_id_fkey" FOREIGN KEY ("name_translatable_id") REFERENCES "translatable"("translatable_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "menu_items" ADD CONSTRAINT "menu_items_description_translatable_id_fkey" FOREIGN KEY ("description_translatable_id") REFERENCES "translatable"("translatable_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "menu_items" ADD CONSTRAINT "menu_items_menu_category_id_fkey" FOREIGN KEY ("menu_category_id") REFERENCES "menu_categories"("menu_category_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "menu_items" ADD CONSTRAINT "menu_items_image_file_id_fkey" FOREIGN KEY ("image_file_id") REFERENCES "files"("file_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "menu_items" ADD CONSTRAINT "menu_items_tax_rates_id_fkey" FOREIGN KEY ("tax_rates_id") REFERENCES "tax_rates"("tax_rates_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "line_items" ADD CONSTRAINT "line_items_menu_item_version_id_fkey" FOREIGN KEY ("menu_item_version_id") REFERENCES "menu_item_versions"("menu_item_version_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "line_items" ADD CONSTRAINT "line_items_order_id_fkey" FOREIGN KEY ("order_id") REFERENCES "delivery_orders"("order_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "line_items" ADD CONSTRAINT "line_items_replaces_id_fkey" FOREIGN KEY ("replaces_id") REFERENCES "line_items"("line_item_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "line_items" ADD CONSTRAINT "line_items_parent_side_id_fkey" FOREIGN KEY ("parent_side_id") REFERENCES "line_items"("line_item_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "line_items" ADD CONSTRAINT "line_items_parent_extra_id_fkey" FOREIGN KEY ("parent_extra_id") REFERENCES "line_items"("line_item_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "menu_item_versions" ADD CONSTRAINT "menu_item_versions_menu_item_id_fkey" FOREIGN KEY ("menu_item_id") REFERENCES "menu_items"("menu_item_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "menu_item_stock_change" ADD CONSTRAINT "menu_item_stock_change_menu_item_id_fkey" FOREIGN KEY ("menu_item_id") REFERENCES "menu_items"("menu_item_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "menu_item_stock_change" ADD CONSTRAINT "menu_item_stock_change_order_id_fkey" FOREIGN KEY ("order_id") REFERENCES "delivery_orders"("order_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "table_reservations_module" ADD CONSTRAINT "table_reservations_module_business_id_fkey" FOREIGN KEY ("business_id") REFERENCES "business"("business_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "table_reservations_module" ADD CONSTRAINT "table_reservations_module_business_details_id_fkey" FOREIGN KEY ("business_details_id") REFERENCES "business_details"("business_details_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "reservations" ADD CONSTRAINT "reservations_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "reservations" ADD CONSTRAINT "reservations_table_reservation_id_fkey" FOREIGN KEY ("table_reservation_id") REFERENCES "table_reservations_module"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "reservations" ADD CONSTRAINT "reservations_delivery_order_id_fkey" FOREIGN KEY ("delivery_order_id") REFERENCES "delivery_orders"("order_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "daily_meal_subscriptions" ADD CONSTRAINT "daily_meal_subscriptions_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "daily_meal_subscriptions" ADD CONSTRAINT "daily_meal_subscriptions_driver_id_fkey" FOREIGN KEY ("driver_id") REFERENCES "drivers"("driver_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "daily_meal_subscriptions" ADD CONSTRAINT "daily_meal_subscriptions_delivery_address_id_fkey" FOREIGN KEY ("delivery_address_id") REFERENCES "addresses"("address_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "daily_meal_subscriptions" ADD CONSTRAINT "daily_meal_subscriptions_daily_meals_id_fkey" FOREIGN KEY ("daily_meals_id") REFERENCES "daily_meals_module"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "daily_meal_subscription_customers" ADD CONSTRAINT "daily_meal_subscription_customers_subscription_id_fkey" FOREIGN KEY ("subscription_id") REFERENCES "daily_meal_subscriptions"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "daily_meal_subscription_customers" ADD CONSTRAINT "daily_meal_subscription_customers_daily_meal_category_id_fkey" FOREIGN KEY ("daily_meal_category_id") REFERENCES "daily_meal_categories"("daily_meal_category_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "daily_meal_subscription_customers" ADD CONSTRAINT "daily_meal_subscription_customers_daily_meal_category_pric_fkey" FOREIGN KEY ("daily_meal_category_price_id") REFERENCES "daily_meal_category_prices"("daily_meal_category_prices_id") ON DELETE RESTRICT ON UPDATE CASCADE;

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

-- AddForeignKey
ALTER TABLE "daily_meal_instances" ADD CONSTRAINT "daily_meal_instances_daily_meal_category_price_id_fkey" FOREIGN KEY ("daily_meal_category_price_id") REFERENCES "daily_meal_category_prices"("daily_meal_category_prices_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "daily_meal_categories" ADD CONSTRAINT "daily_meal_categories_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "categories"("categories_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "daily_meal_categories" ADD CONSTRAINT "daily_meal_categories_daily_meals_id_fkey" FOREIGN KEY ("daily_meals_id") REFERENCES "daily_meals_module"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "daily_meal_category_prices" ADD CONSTRAINT "daily_meal_category_prices_daily_meal_category_id_fkey" FOREIGN KEY ("daily_meal_category_id") REFERENCES "daily_meal_categories"("daily_meal_category_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "order_lobbies" ADD CONSTRAINT "order_lobbies_creating_business_id_fkey" FOREIGN KEY ("creating_business_id") REFERENCES "business"("business_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "order_lobbies" ADD CONSTRAINT "order_lobbies_delivery_orders_id_fkey" FOREIGN KEY ("delivery_orders_id") REFERENCES "delivery_orders"("order_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "order_lobby_items" ADD CONSTRAINT "order_lobby_items_menu_item_id_fkey" FOREIGN KEY ("menu_item_id") REFERENCES "menu_items"("menu_item_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "order_lobby_items" ADD CONSTRAINT "order_lobby_items_menu_item_version_id_fkey" FOREIGN KEY ("menu_item_version_id") REFERENCES "menu_item_versions"("menu_item_version_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "order_lobby_items" ADD CONSTRAINT "order_lobby_items_order_lobbies_id_fkey" FOREIGN KEY ("order_lobbies_id") REFERENCES "order_lobbies"("order_lobbies_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "order_lobby_users" ADD CONSTRAINT "order_lobby_users_order_lobbies_id_fkey" FOREIGN KEY ("order_lobbies_id") REFERENCES "order_lobbies"("order_lobbies_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "order_lobby_users" ADD CONSTRAINT "order_lobby_users_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "business_premise" ADD CONSTRAINT "business_premise_transport_module_id_fkey" FOREIGN KEY ("transport_module_id") REFERENCES "transport_module"("transport_module_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "electronic_device" ADD CONSTRAINT "electronic_device_business_premise_id_fkey" FOREIGN KEY ("business_premise_id") REFERENCES "business_premise"("business_premise_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "device_assignment" ADD CONSTRAINT "device_assignment_business_premise_id_electronic_device_id_fkey" FOREIGN KEY ("business_premise_id", "electronic_device_id") REFERENCES "electronic_device"("business_premise_id", "electronic_device_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "invoice" ADD CONSTRAINT "invoice_taxi_order_id_fkey" FOREIGN KEY ("taxi_order_id") REFERENCES "taxi_orders"("order_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "invoice" ADD CONSTRAINT "invoice_delivery_order_id_fkey" FOREIGN KEY ("delivery_order_id") REFERENCES "delivery_orders"("order_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "invoice" ADD CONSTRAINT "invoice_business_premise_id_electronic_device_id_fkey" FOREIGN KEY ("business_premise_id", "electronic_device_id") REFERENCES "electronic_device"("business_premise_id", "electronic_device_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "invoice" ADD CONSTRAINT "invoice_business_premise_id_fkey" FOREIGN KEY ("business_premise_id") REFERENCES "business_premise"("business_premise_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "invoice" ADD CONSTRAINT "invoice_vehicle_id_fkey" FOREIGN KEY ("vehicle_id") REFERENCES "vehicles"("vehicle_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "invoice_item" ADD CONSTRAINT "invoice_item_invoice_id_fkey" FOREIGN KEY ("invoice_id") REFERENCES "invoice"("invoice_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "invoice_tax" ADD CONSTRAINT "invoice_tax_invoice_id_fkey" FOREIGN KEY ("invoice_id") REFERENCES "invoice"("invoice_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "submission_log" ADD CONSTRAINT "submission_log_invoice_id_fkey" FOREIGN KEY ("invoice_id") REFERENCES "invoice"("invoice_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "reservation_module" ADD CONSTRAINT "reservation_module_business_id_fkey" FOREIGN KEY ("business_id") REFERENCES "business"("business_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "reservation_module" ADD CONSTRAINT "reservation_module_action_bundle_id_fkey" FOREIGN KEY ("action_bundle_id") REFERENCES "action_bundle"("action_bundle_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "reservation_module" ADD CONSTRAINT "reservation_module_business_details_id_fkey" FOREIGN KEY ("business_details_id") REFERENCES "business_details"("business_details_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "location" ADD CONSTRAINT "location_reservation_module_id_fkey" FOREIGN KEY ("reservation_module_id") REFERENCES "reservation_module"("reservation_module_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "location" ADD CONSTRAINT "location_address_id_fkey" FOREIGN KEY ("address_id") REFERENCES "addresses"("address_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "service_category" ADD CONSTRAINT "service_category_parent_id_fkey" FOREIGN KEY ("parent_id") REFERENCES "service_category"("service_category_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "service_category" ADD CONSTRAINT "service_category_reservation_module_id_fkey" FOREIGN KEY ("reservation_module_id") REFERENCES "reservation_module"("reservation_module_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "service" ADD CONSTRAINT "service_reservation_module_id_fkey" FOREIGN KEY ("reservation_module_id") REFERENCES "reservation_module"("reservation_module_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "service" ADD CONSTRAINT "service_service_category_id_fkey" FOREIGN KEY ("service_category_id") REFERENCES "service_category"("service_category_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "service" ADD CONSTRAINT "service_tax_rate_id_fkey" FOREIGN KEY ("tax_rate_id") REFERENCES "tax_rates"("tax_rates_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "service_location" ADD CONSTRAINT "service_location_service_id_fkey" FOREIGN KEY ("service_id") REFERENCES "service"("service_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "service_location" ADD CONSTRAINT "service_location_location_id_fkey" FOREIGN KEY ("location_id") REFERENCES "location"("location_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "employee" ADD CONSTRAINT "employee_reservation_module_id_fkey" FOREIGN KEY ("reservation_module_id") REFERENCES "reservation_module"("reservation_module_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "employee" ADD CONSTRAINT "employee_business_users_id_fkey" FOREIGN KEY ("business_users_id") REFERENCES "business_users"("business_users_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "customers" ADD CONSTRAINT "customers_reservation_module_id_fkey" FOREIGN KEY ("reservation_module_id") REFERENCES "reservation_module"("reservation_module_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "customers" ADD CONSTRAINT "customers_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("user_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "service_assignment" ADD CONSTRAINT "service_assignment_employee_id_fkey" FOREIGN KEY ("employee_id") REFERENCES "employee"("employee_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "service_assignment" ADD CONSTRAINT "service_assignment_service_id_fkey" FOREIGN KEY ("service_id") REFERENCES "service"("service_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "schedule" ADD CONSTRAINT "schedule_location_id_fkey" FOREIGN KEY ("location_id") REFERENCES "location"("location_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "schedule_employee" ADD CONSTRAINT "schedule_employee_schedule_id_fkey" FOREIGN KEY ("schedule_id") REFERENCES "schedule"("schedule_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "schedule_employee" ADD CONSTRAINT "schedule_employee_employee_id_fkey" FOREIGN KEY ("employee_id") REFERENCES "employee"("employee_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "schedule_slot" ADD CONSTRAINT "schedule_slot_schedule_id_fkey" FOREIGN KEY ("schedule_id") REFERENCES "schedule"("schedule_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "schedule_slot" ADD CONSTRAINT "schedule_slot_schedule_employee_id_fkey" FOREIGN KEY ("schedule_employee_id") REFERENCES "schedule_employee"("schedule_employee_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "schedule_slot" ADD CONSTRAINT "schedule_slot_employee_id_fkey" FOREIGN KEY ("employee_id") REFERENCES "employee"("employee_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "schedule_slot_exceptions" ADD CONSTRAINT "schedule_slot_exceptions_schedule_slot_id_fkey" FOREIGN KEY ("schedule_slot_id") REFERENCES "schedule_slot"("schedule_slot_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "booking_slots" ADD CONSTRAINT "booking_slots_schedule_slot_id_fkey" FOREIGN KEY ("schedule_slot_id") REFERENCES "schedule_slot"("schedule_slot_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "booking" ADD CONSTRAINT "booking_parent_booking_id_fkey" FOREIGN KEY ("parent_booking_id") REFERENCES "booking"("booking_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "booking" ADD CONSTRAINT "booking_reservation_module_id_fkey" FOREIGN KEY ("reservation_module_id") REFERENCES "reservation_module"("reservation_module_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "booking" ADD CONSTRAINT "booking_location_id_fkey" FOREIGN KEY ("location_id") REFERENCES "location"("location_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "booking" ADD CONSTRAINT "booking_employee_id_fkey" FOREIGN KEY ("employee_id") REFERENCES "employee"("employee_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "booking" ADD CONSTRAINT "booking_service_id_fkey" FOREIGN KEY ("service_id") REFERENCES "service"("service_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "booking" ADD CONSTRAINT "booking_customer_id_fkey" FOREIGN KEY ("customer_id") REFERENCES "customers"("customer_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "booking_course_time" ADD CONSTRAINT "booking_course_time_booking_id_fkey" FOREIGN KEY ("booking_id") REFERENCES "booking"("booking_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "booking_course_time" ADD CONSTRAINT "booking_course_time_reservation_module_id_fkey" FOREIGN KEY ("reservation_module_id") REFERENCES "reservation_module"("reservation_module_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "booking_course_participant" ADD CONSTRAINT "booking_course_participant_customer_id_fkey" FOREIGN KEY ("customer_id") REFERENCES "customers"("customer_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "booking_course_participant" ADD CONSTRAINT "booking_course_participant_booking_id_fkey" FOREIGN KEY ("booking_id") REFERENCES "booking"("booking_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "booking_course_participant" ADD CONSTRAINT "booking_course_participant_reservation_module_id_fkey" FOREIGN KEY ("reservation_module_id") REFERENCES "reservation_module"("reservation_module_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "booking_history_log" ADD CONSTRAINT "booking_history_log_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("user_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "booking_history_log" ADD CONSTRAINT "booking_history_log_booking_id_fkey" FOREIGN KEY ("booking_id") REFERENCES "booking"("booking_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "notification_template" ADD CONSTRAINT "notification_template_reservation_module_id_fkey" FOREIGN KEY ("reservation_module_id") REFERENCES "reservation_module"("reservation_module_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "notification_template_version" ADD CONSTRAINT "notification_template_version_notification_template_id_fkey" FOREIGN KEY ("notification_template_id") REFERENCES "notification_template"("notification_template_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "notification_mapping" ADD CONSTRAINT "notification_mapping_reservation_module_id_fkey" FOREIGN KEY ("reservation_module_id") REFERENCES "reservation_module"("reservation_module_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "notification_mapping" ADD CONSTRAINT "notification_mapping_notification_event_id_fkey" FOREIGN KEY ("notification_event_id") REFERENCES "notification_event"("notification_event_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "notification_mapping" ADD CONSTRAINT "notification_mapping_notification_template_version_id_fkey" FOREIGN KEY ("notification_template_version_id") REFERENCES "notification_template_version"("notification_template_version_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "notification_preference" ADD CONSTRAINT "notification_preference_reservation_module_id_fkey" FOREIGN KEY ("reservation_module_id") REFERENCES "reservation_module"("reservation_module_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "notification_preference" ADD CONSTRAINT "notification_preference_notification_event_id_fkey" FOREIGN KEY ("notification_event_id") REFERENCES "notification_event"("notification_event_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "notification_provider_credential" ADD CONSTRAINT "notification_provider_credential_reservation_module_id_fkey" FOREIGN KEY ("reservation_module_id") REFERENCES "reservation_module"("reservation_module_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "notification_message" ADD CONSTRAINT "notification_message_reservation_module_id_fkey" FOREIGN KEY ("reservation_module_id") REFERENCES "reservation_module"("reservation_module_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "notification_message" ADD CONSTRAINT "notification_message_notification_event_id_fkey" FOREIGN KEY ("notification_event_id") REFERENCES "notification_event"("notification_event_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "notification_message" ADD CONSTRAINT "notification_message_notification_template_id_fkey" FOREIGN KEY ("notification_template_id") REFERENCES "notification_template"("notification_template_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "notification_message" ADD CONSTRAINT "notification_message_notification_template_id_template_ver_fkey" FOREIGN KEY ("notification_template_id", "template_version") REFERENCES "notification_template_version"("notification_template_id", "version") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "notification_message_event" ADD CONSTRAINT "notification_message_event_notification_message_id_fkey" FOREIGN KEY ("notification_message_id") REFERENCES "notification_message"("notification_message_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "action_bundle_action" ADD CONSTRAINT "action_bundle_action_action_bundle_id_fkey" FOREIGN KEY ("action_bundle_id") REFERENCES "action_bundle"("action_bundle_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "action_bundle_action" ADD CONSTRAINT "action_bundle_action_action_id_fkey" FOREIGN KEY ("action_id") REFERENCES "action"("action_id") ON DELETE RESTRICT ON UPDATE CASCADE;

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

-- AddForeignKey
ALTER TABLE "transport_module" ADD CONSTRAINT "transport_module_business_id_fkey" FOREIGN KEY ("business_id") REFERENCES "business"("business_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "taxi_orders" ADD CONSTRAINT "taxi_orders_driver_id_fkey" FOREIGN KEY ("driver_id") REFERENCES "drivers"("driver_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "taxi_orders" ADD CONSTRAINT "taxi_orders_vehicle_id_fkey" FOREIGN KEY ("vehicle_id") REFERENCES "vehicles"("vehicle_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "taxi_orders" ADD CONSTRAINT "taxi_orders_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "taxi_orders" ADD CONSTRAINT "taxi_orders_business_users_id_fkey" FOREIGN KEY ("business_users_id") REFERENCES "business_users"("business_users_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "taxi_orders" ADD CONSTRAINT "taxi_orders_business_clients_id_fkey" FOREIGN KEY ("business_clients_id") REFERENCES "business_clients"("business_clients_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "taxi_orders" ADD CONSTRAINT "taxi_orders_parent_order_id_fkey" FOREIGN KEY ("parent_order_id") REFERENCES "taxi_orders"("order_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "taxi_order_sent" ADD CONSTRAINT "taxi_order_sent_order_id_fkey" FOREIGN KEY ("order_id") REFERENCES "taxi_orders"("order_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "taxi_order_sent" ADD CONSTRAINT "taxi_order_sent_driver_id_fkey" FOREIGN KEY ("driver_id") REFERENCES "drivers"("driver_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "driver_activity_logs" ADD CONSTRAINT "driver_activity_logs_driver_id_fkey" FOREIGN KEY ("driver_id") REFERENCES "drivers"("driver_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "driver_history_locations" ADD CONSTRAINT "driver_history_locations_driver_id_fkey" FOREIGN KEY ("driver_id") REFERENCES "drivers"("driver_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "driver_history_locations" ADD CONSTRAINT "driver_history_locations_taxi_order_id_fkey" FOREIGN KEY ("taxi_order_id") REFERENCES "taxi_orders"("order_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "driver_history_locations" ADD CONSTRAINT "driver_history_locations_delivery_order_id_fkey" FOREIGN KEY ("delivery_order_id") REFERENCES "delivery_orders"("order_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "driver_municipalities" ADD CONSTRAINT "driver_municipalities_driver_id_fkey" FOREIGN KEY ("driver_id") REFERENCES "drivers"("driver_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "driver_municipalities" ADD CONSTRAINT "driver_municipalities_municipalities_id_fkey" FOREIGN KEY ("municipalities_id") REFERENCES "municipalities"("municipalities_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "drivers" ADD CONSTRAINT "drivers_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("user_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "drivers" ADD CONSTRAINT "drivers_current_vehicle_id_fkey" FOREIGN KEY ("current_vehicle_id") REFERENCES "vehicles"("vehicle_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "drivers" ADD CONSTRAINT "drivers_transport_module_id_fkey" FOREIGN KEY ("transport_module_id") REFERENCES "transport_module"("transport_module_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "drivers" ADD CONSTRAINT "drivers_profile_picture_id_fkey" FOREIGN KEY ("profile_picture_id") REFERENCES "files"("file_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "vehicle_drivers" ADD CONSTRAINT "vehicle_drivers_vehicle_id_fkey" FOREIGN KEY ("vehicle_id") REFERENCES "vehicles"("vehicle_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "vehicle_drivers" ADD CONSTRAINT "vehicle_drivers_driver_id_fkey" FOREIGN KEY ("driver_id") REFERENCES "drivers"("driver_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "vehicles" ADD CONSTRAINT "vehicles_business_premise_id_fkey" FOREIGN KEY ("business_premise_id") REFERENCES "business_premise"("business_premise_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "vehicles" ADD CONSTRAINT "vehicles_transport_module_id_fkey" FOREIGN KEY ("transport_module_id") REFERENCES "transport_module"("transport_module_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_profile_picture_id_fkey" FOREIGN KEY ("profile_picture_id") REFERENCES "files"("file_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_business_teams_id_fkey" FOREIGN KEY ("business_teams_id") REFERENCES "business_teams"("business_teams_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_roles" ADD CONSTRAINT "user_roles_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "role" ADD CONSTRAINT "role_business_id_fkey" FOREIGN KEY ("business_id") REFERENCES "business"("business_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_role" ADD CONSTRAINT "user_role_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_role" ADD CONSTRAINT "user_role_role_id_fkey" FOREIGN KEY ("role_id") REFERENCES "role"("role_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_role" ADD CONSTRAINT "user_role_reservation_module_id_fkey" FOREIGN KEY ("reservation_module_id") REFERENCES "reservation_module"("reservation_module_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "role_permission" ADD CONSTRAINT "role_permission_role_id_fkey" FOREIGN KEY ("role_id") REFERENCES "role"("role_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "role_permission" ADD CONSTRAINT "role_permission_permission_id_fkey" FOREIGN KEY ("permission_id") REFERENCES "permission"("permission_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "permission" ADD CONSTRAINT "permission_action_id_fkey" FOREIGN KEY ("action_id") REFERENCES "action"("action_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_permission" ADD CONSTRAINT "user_permission_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_permission" ADD CONSTRAINT "user_permission_action_id_fkey" FOREIGN KEY ("action_id") REFERENCES "action"("action_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_permission" ADD CONSTRAINT "user_permission_reservation_module_id_fkey" FOREIGN KEY ("reservation_module_id") REFERENCES "reservation_module"("reservation_module_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "group_users" ADD CONSTRAINT "group_users_parent_user_id_fkey" FOREIGN KEY ("parent_user_id") REFERENCES "users"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "group_users" ADD CONSTRAINT "group_users_child_user_id_fkey" FOREIGN KEY ("child_user_id") REFERENCES "users"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_word_bundlesTowords" ADD CONSTRAINT "_word_bundlesTowords_A_fkey" FOREIGN KEY ("A") REFERENCES "word_bundles"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_word_bundlesTowords" ADD CONSTRAINT "_word_bundlesTowords_B_fkey" FOREIGN KEY ("B") REFERENCES "words"("word_id") ON DELETE CASCADE ON UPDATE CASCADE;
