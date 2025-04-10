/*
  Warnings:

  - Added the required column `fiscal_devices_id` to the `business` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "business" ADD COLUMN     "fiscal_devices_id" UUID NOT NULL;

-- CreateTable
CREATE TABLE "fiscal_devices" (
    "fiscal_devices_id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "fiscal_devices_pkey" PRIMARY KEY ("fiscal_devices_id")
);

-- AddForeignKey
ALTER TABLE "business" ADD CONSTRAINT "business_fiscal_devices_id_fkey" FOREIGN KEY ("fiscal_devices_id") REFERENCES "fiscal_devices"("fiscal_devices_id") ON DELETE RESTRICT ON UPDATE CASCADE;
