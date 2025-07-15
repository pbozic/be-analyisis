/*
  Warnings:

  - The primary key for the `user_favorite_businesses` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `user_favorite_businesses` on the `user_favorite_businesses` table. All the data in the column will be lost.
  - The required column `user_favorite_businesses_id` was added to the `user_favorite_businesses` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- AlterTable
ALTER TABLE "user_favorite_businesses" DROP CONSTRAINT "user_favorite_businesses_pkey",
DROP COLUMN "user_favorite_businesses",
ADD COLUMN     "user_favorite_businesses_id" UUID NOT NULL,
ADD CONSTRAINT "user_favorite_businesses_pkey" PRIMARY KEY ("user_favorite_businesses_id");
