-- AlterTable
ALTER TABLE "menu_categories" ADD COLUMN     "daily_meal_category_price_id" UUID;

-- CreateTable
CREATE TABLE "daily_meal_categories" (
    "daily_meal_category_id" UUID NOT NULL,
    "business_id" UUID NOT NULL,
    "category_id" UUID NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "start_date" TIMESTAMPTZ(6) NOT NULL,

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

-- AddForeignKey
ALTER TABLE "menu_categories" ADD CONSTRAINT "menu_categories_daily_meal_category_price_id_fkey" FOREIGN KEY ("daily_meal_category_price_id") REFERENCES "daily_meal_category_prices"("daily_meal_category_prices_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "daily_meal_categories" ADD CONSTRAINT "daily_meal_categories_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "categories"("categories_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "daily_meal_categories" ADD CONSTRAINT "daily_meal_categories_business_id_fkey" FOREIGN KEY ("business_id") REFERENCES "business"("business_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "daily_meal_category_prices" ADD CONSTRAINT "daily_meal_category_prices_daily_meal_category_id_fkey" FOREIGN KEY ("daily_meal_category_id") REFERENCES "daily_meal_categories"("daily_meal_category_id") ON DELETE CASCADE ON UPDATE CASCADE;
