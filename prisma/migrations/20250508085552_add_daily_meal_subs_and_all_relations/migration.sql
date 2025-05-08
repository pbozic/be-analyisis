-- AlterTable
ALTER TABLE "delivery_drivers" ADD COLUMN     "daily_meal_business_id" UUID;

-- AlterTable
ALTER TABLE "wallet_funds" ADD COLUMN     "reserved_daily_meals_subscription" UUID;

-- CreateTable
CREATE TABLE "daily_meals_subscriptions" (
    "daily_meals_subscriptions_id" UUID NOT NULL,
    "grouped_id" UUID NOT NULL,
    "user_id" UUID NOT NULL,
    "business_id" UUID NOT NULL,
    "menu_id" UUID NOT NULL,
    "address_id" UUID NOT NULL,
    "menu_categories_id" UUID NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "date" TIMESTAMPTZ(6) NOT NULL,
    "quantity" INTEGER NOT NULL DEFAULT 1,
    "order_created" TIMESTAMP(3),
    "restaurant_comment" TEXT,
    "courier_comment" TEXT,

    CONSTRAINT "daily_meals_subscriptions_pkey" PRIMARY KEY ("daily_meals_subscriptions_id")
);

-- AddForeignKey
ALTER TABLE "delivery_drivers" ADD CONSTRAINT "delivery_drivers_daily_meal_business_id_fkey" FOREIGN KEY ("daily_meal_business_id") REFERENCES "business"("business_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "daily_meals_subscriptions" ADD CONSTRAINT "daily_meals_subscriptions_menu_categories_id_fkey" FOREIGN KEY ("menu_categories_id") REFERENCES "menu_categories"("menu_category_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "daily_meals_subscriptions" ADD CONSTRAINT "daily_meals_subscriptions_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "daily_meals_subscriptions" ADD CONSTRAINT "daily_meals_subscriptions_business_id_fkey" FOREIGN KEY ("business_id") REFERENCES "business"("business_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "daily_meals_subscriptions" ADD CONSTRAINT "daily_meals_subscriptions_menu_id_fkey" FOREIGN KEY ("menu_id") REFERENCES "menus"("menu_id") ON DELETE RESTRICT ON UPDATE CASCADE;
