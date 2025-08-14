-- CreateEnum
CREATE TYPE "PERMISSION_SCOPE" AS ENUM ('GLOBAL', 'BUSINESS', 'USER');

-- AlterEnum
-- This migration adds more than one value to an enum.
-- With PostgreSQL versions 11 and earlier, this is not possible
-- in a single migration. This can be worked around by creating
-- multiple migrations, each migration adding only one value to
-- the enum.


ALTER TYPE "MODULE_TYPE" ADD VALUE 'delivery';
ALTER TYPE "MODULE_TYPE" ADD VALUE 'crm';
ALTER TYPE "MODULE_TYPE" ADD VALUE 'taxi';

-- AlterTable
ALTER TABLE "reservation_module" ADD COLUMN     "subscription_expires_at" TIMESTAMP(3);

-- CreateTable
CREATE TABLE "role" (
    "role_id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "module" "MODULE_TYPE" NOT NULL,
    "business_id" UUID,

    CONSTRAINT "role_pkey" PRIMARY KEY ("role_id")
);

-- CreateTable
CREATE TABLE "user_role" (
    "user_id" UUID NOT NULL,
    "role_id" UUID NOT NULL,

    CONSTRAINT "user_role_pkey" PRIMARY KEY ("user_id","role_id")
);

-- CreateTable
CREATE TABLE "permission" (
    "permission_id" UUID NOT NULL,
    "role_id" UUID NOT NULL,
    "action_id" UUID,
    "name" TEXT,
    "module" "MODULE_TYPE" NOT NULL,
    "limit" INTEGER,
    "scope" "PERMISSION_SCOPE" NOT NULL DEFAULT 'GLOBAL',

    CONSTRAINT "permission_pkey" PRIMARY KEY ("permission_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "role_name_business_id_key" ON "role"("name", "business_id");

-- CreateIndex
CREATE INDEX "permission_name_module_idx" ON "permission"("name", "module");

-- CreateIndex
CREATE INDEX "permission_action_id_module_idx" ON "permission"("action_id", "module");

-- AddForeignKey
ALTER TABLE "user_role" ADD CONSTRAINT "user_role_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_role" ADD CONSTRAINT "user_role_role_id_fkey" FOREIGN KEY ("role_id") REFERENCES "role"("role_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "permission" ADD CONSTRAINT "permission_role_id_fkey" FOREIGN KEY ("role_id") REFERENCES "role"("role_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "permission" ADD CONSTRAINT "permission_action_id_fkey" FOREIGN KEY ("action_id") REFERENCES "action"("action_id") ON DELETE SET NULL ON UPDATE CASCADE;
