/*
  Warnings:

  - You are about to drop the column `activated_at` on the `business` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "business" DROP COLUMN "activated_at",
ADD COLUMN     "active" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "first_activated_at" TIMESTAMP(3);

-- CreateTable
CREATE TABLE "user_favorite_businesses" (
    "user_favorite_businesses" UUID NOT NULL,
    "user_id" UUID NOT NULL,
    "business_id" UUID NOT NULL,
    "business_type" "BUSINESS_TYPE" NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "user_favorite_businesses_pkey" PRIMARY KEY ("user_favorite_businesses")
);

-- CreateIndex
CREATE INDEX "user_favorite_businesses_user_id_business_type_idx" ON "user_favorite_businesses"("user_id", "business_type");

-- AddForeignKey
ALTER TABLE "user_favorite_businesses" ADD CONSTRAINT "user_favorite_businesses_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_favorite_businesses" ADD CONSTRAINT "user_favorite_businesses_business_id_fkey" FOREIGN KEY ("business_id") REFERENCES "business"("business_id") ON DELETE RESTRICT ON UPDATE CASCADE;
