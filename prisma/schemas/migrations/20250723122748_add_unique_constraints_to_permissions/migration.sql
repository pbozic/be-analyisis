/*
  Warnings:

  - The primary key for the `user_role` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - A unique constraint covering the columns `[role_id,action_id]` on the table `permission` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[role_id,name,module]` on the table `permission` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[user_id,role_id,reservation_module_id]` on the table `user_role` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "permission_action_id_module_idx";

-- DropIndex
DROP INDEX "permission_name_module_idx";

-- AlterTable
ALTER TABLE "user_permission" ADD COLUMN     "reservation_module_id" UUID;

-- AlterTable
ALTER TABLE "user_role" DROP CONSTRAINT "user_role_pkey",
ADD COLUMN     "reservation_module_id" UUID,
ADD CONSTRAINT "user_role_pkey" PRIMARY KEY ("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "permission_role_id_action_id_key" ON "permission"("role_id", "action_id");

-- CreateIndex
CREATE UNIQUE INDEX "permission_role_id_name_module_key" ON "permission"("role_id", "name", "module");

-- CreateIndex
CREATE UNIQUE INDEX "user_role_user_id_role_id_reservation_module_id_key" ON "user_role"("user_id", "role_id", "reservation_module_id");

-- AddForeignKey
ALTER TABLE "user_role" ADD CONSTRAINT "user_role_reservation_module_id_fkey" FOREIGN KEY ("reservation_module_id") REFERENCES "reservation_module"("reservation_module_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_permission" ADD CONSTRAINT "user_permission_reservation_module_id_fkey" FOREIGN KEY ("reservation_module_id") REFERENCES "reservation_module"("reservation_module_id") ON DELETE SET NULL ON UPDATE CASCADE;
