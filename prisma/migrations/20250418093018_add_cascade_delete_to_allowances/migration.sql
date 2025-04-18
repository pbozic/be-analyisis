-- DropForeignKey
ALTER TABLE "allowances" DROP CONSTRAINT "allowances_group_user_id_fkey";

-- AddForeignKey
ALTER TABLE "allowances" ADD CONSTRAINT "allowances_group_user_id_fkey" FOREIGN KEY ("group_user_id") REFERENCES "group_users"("group_user_id") ON DELETE CASCADE ON UPDATE CASCADE;
