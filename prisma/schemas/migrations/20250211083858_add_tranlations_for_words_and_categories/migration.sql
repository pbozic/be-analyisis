/*
  Warnings:

  - Added the required column `translatable_id` to the `categories` table without a default value. This is not possible if the table is not empty.
  - Added the required column `translatable_id` to the `words` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "categories" ADD COLUMN     "translatable_id" UUID NOT NULL;

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "business_teams_id" UUID;

-- AlterTable
ALTER TABLE "words" ADD COLUMN     "translatable_id" UUID NOT NULL;

-- CreateTable
CREATE TABLE "order_lobbies" (
    "order_lobbies_id" UUID NOT NULL,
    "lobby_name" TEXT NOT NULL,
    "lobby_description" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "delivery_location" JSONB,
    "courier_note" TEXT,
    "business_id" UUID NOT NULL,
    "restaurant_id" UUID NOT NULL,
    "creator_id" UUID NOT NULL,
    "delivery_orders_id" UUID NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "order_lobbies_pkey" PRIMARY KEY ("order_lobbies_id")
);

-- CreateTable
CREATE TABLE "order_lobby_items" (
    "order_lobby_items_id" UUID NOT NULL,
    "order_lobbies_id" UUID NOT NULL,
    "menu_item_id" UUID NOT NULL,
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
CREATE TABLE "translatable" (
    "translatable_id" UUID NOT NULL,

    CONSTRAINT "translatable_pkey" PRIMARY KEY ("translatable_id")
);

-- CreateTable
CREATE TABLE "translations" (
    "translations_id" UUID NOT NULL,
    "translatable_id" UUID NOT NULL,
    "language" TEXT NOT NULL,
    "translation" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "translations_pkey" PRIMARY KEY ("translations_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "order_lobbies_delivery_orders_id_key" ON "order_lobbies"("delivery_orders_id");

-- CreateIndex
CREATE UNIQUE INDEX "order_lobby_users_user_id_order_lobbies_id_key" ON "order_lobby_users"("user_id", "order_lobbies_id");

-- CreateIndex
CREATE UNIQUE INDEX "business_teams_team_name_key" ON "business_teams"("team_name");

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_business_teams_id_fkey" FOREIGN KEY ("business_teams_id") REFERENCES "business_teams"("business_teams_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "categories" ADD CONSTRAINT "categories_translatable_id_fkey" FOREIGN KEY ("translatable_id") REFERENCES "translatable"("translatable_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "words" ADD CONSTRAINT "words_translatable_id_fkey" FOREIGN KEY ("translatable_id") REFERENCES "translatable"("translatable_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "order_lobbies" ADD CONSTRAINT "order_lobbies_delivery_orders_id_fkey" FOREIGN KEY ("delivery_orders_id") REFERENCES "delivery_orders"("order_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "order_lobbies" ADD CONSTRAINT "order_lobbies_business_id_fkey" FOREIGN KEY ("business_id") REFERENCES "business"("business_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "order_lobby_items" ADD CONSTRAINT "order_lobby_items_order_lobbies_id_fkey" FOREIGN KEY ("order_lobbies_id") REFERENCES "order_lobbies"("order_lobbies_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "order_lobby_users" ADD CONSTRAINT "order_lobby_users_order_lobbies_id_fkey" FOREIGN KEY ("order_lobbies_id") REFERENCES "order_lobbies"("order_lobbies_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "order_lobby_users" ADD CONSTRAINT "order_lobby_users_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "business_teams" ADD CONSTRAINT "business_teams_business_id_fkey" FOREIGN KEY ("business_id") REFERENCES "business"("business_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "translations" ADD CONSTRAINT "translations_translatable_id_fkey" FOREIGN KEY ("translatable_id") REFERENCES "translatable"("translatable_id") ON DELETE RESTRICT ON UPDATE CASCADE;
