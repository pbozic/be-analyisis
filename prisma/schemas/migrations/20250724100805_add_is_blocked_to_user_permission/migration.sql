/*
  Warnings:

  - A unique constraint covering the columns `[role_id,action_id]` on the table `permission` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[role_id,name,module]` on the table `permission` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "permission_action_id_module_idx";

-- DropIndex
DROP INDEX "permission_name_module_idx";

-- AlterTable
ALTER TABLE "user_permission" ADD COLUMN     "display_name" TEXT,
ADD COLUMN     "is_blocked" BOOLEAN NOT NULL DEFAULT false;

-- CreateIndex
CREATE UNIQUE INDEX "permission_role_id_action_id_key" ON "permission"("role_id", "action_id");

-- CreateIndex
CREATE UNIQUE INDEX "permission_role_id_name_module_key" ON "permission"("role_id", "name", "module");
