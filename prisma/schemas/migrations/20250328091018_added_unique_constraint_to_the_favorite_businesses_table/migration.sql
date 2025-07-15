/*
  Warnings:

  - A unique constraint covering the columns `[user_id,business_id,business_type]` on the table `user_favorite_businesses` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "user_favorite_businesses_user_id_business_id_business_type_key" ON "user_favorite_businesses"("user_id", "business_id", "business_type");
