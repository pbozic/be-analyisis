/*
  Warnings:

  - You are about to drop the column `role_id` on the `permission` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "permission" DROP CONSTRAINT "permission_role_id_fkey";

-- DropIndex
DROP INDEX "permission_role_id_action_id_key";

-- DropIndex
DROP INDEX "permission_role_id_name_module_key";

-- AlterTable
ALTER TABLE "permission" DROP COLUMN "role_id";

-- CreateTable
CREATE TABLE "role_permission" (
    "role_permission_id" UUID NOT NULL,
    "role_id" UUID NOT NULL,
    "permission_id" UUID NOT NULL,

    CONSTRAINT "role_permission_pkey" PRIMARY KEY ("role_permission_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "role_permission_role_id_permission_id_key" ON "role_permission"("role_id", "permission_id");

-- AddForeignKey
ALTER TABLE "role_permission" ADD CONSTRAINT "role_permission_role_id_fkey" FOREIGN KEY ("role_id") REFERENCES "role"("role_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "role_permission" ADD CONSTRAINT "role_permission_permission_id_fkey" FOREIGN KEY ("permission_id") REFERENCES "permission"("permission_id") ON DELETE RESTRICT ON UPDATE CASCADE;
