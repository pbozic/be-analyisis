/*
  Warnings:

  - A unique constraint covering the columns `[name,module]` on the table `user_permission` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[action_id,module]` on the table `user_permission` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "user_permission_action_id_module_idx";

-- DropIndex
DROP INDEX "user_permission_name_module_idx";

-- AlterTable
ALTER TABLE "permission" ADD COLUMN     "group" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "user_permission_name_module_key" ON "user_permission"("name", "module");

-- CreateIndex
CREATE UNIQUE INDEX "user_permission_action_id_module_key" ON "user_permission"("action_id", "module");
