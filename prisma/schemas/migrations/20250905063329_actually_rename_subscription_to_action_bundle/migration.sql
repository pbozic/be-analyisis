/*
  Warnings:

  - You are about to drop the column `subscription_id` on the `reservation_module` table. All the data in the column will be lost.
  - You are about to drop the `subscription` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `subscription_action` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "reservation_module" DROP CONSTRAINT "reservation_module_subscription_id_fkey";

-- DropForeignKey
ALTER TABLE "subscription_action" DROP CONSTRAINT "subscription_action_action_id_fkey";

-- DropForeignKey
ALTER TABLE "subscription_action" DROP CONSTRAINT "subscription_action_subscription_id_fkey";

-- AlterTable
ALTER TABLE "reservation_module" DROP COLUMN "subscription_id",
ADD COLUMN     "action_bundle_id" UUID;

-- DropTable
DROP TABLE "subscription";

-- DropTable
DROP TABLE "subscription_action";

-- CreateTable
CREATE TABLE "action_bundle" (
    "action_bundle_id" UUID NOT NULL,
    "module" "MODULE_TYPE" NOT NULL,
    "name" TEXT NOT NULL,
    "price_cents" INTEGER NOT NULL,
    "stripe_price_id" TEXT NOT NULL,

    CONSTRAINT "action_bundle_pkey" PRIMARY KEY ("action_bundle_id")
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

-- CreateIndex
CREATE UNIQUE INDEX "action_bundle_name_key" ON "action_bundle"("name");

-- AddForeignKey
ALTER TABLE "reservation_module" ADD CONSTRAINT "reservation_module_action_bundle_id_fkey" FOREIGN KEY ("action_bundle_id") REFERENCES "action_bundle"("action_bundle_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "action_bundle_action" ADD CONSTRAINT "action_bundle_action_action_bundle_id_fkey" FOREIGN KEY ("action_bundle_id") REFERENCES "action_bundle"("action_bundle_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "action_bundle_action" ADD CONSTRAINT "action_bundle_action_action_id_fkey" FOREIGN KEY ("action_id") REFERENCES "action"("action_id") ON DELETE RESTRICT ON UPDATE CASCADE;
