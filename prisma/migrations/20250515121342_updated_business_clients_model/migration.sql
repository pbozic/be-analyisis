/*
  Warnings:

  - You are about to drop the column `online` on the `business_clients` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[telephone,business_id]` on the table `business_clients` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "business_clients" DROP COLUMN "online";

-- CreateIndex
CREATE UNIQUE INDEX "business_clients_telephone_business_id_key" ON "business_clients"("telephone", "business_id");
