/*
  Warnings:

  - A unique constraint covering the columns `[user_id,business_id]` on the table `business_users` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "business_users_user_id_business_id_key" ON "business_users"("user_id", "business_id");
