-- DropForeignKey
ALTER TABLE "scoring_points" DROP CONSTRAINT "scoring_points_user_id_fkey";

-- AlterTable
ALTER TABLE "scoring_points" ALTER COLUMN "user_id" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "scoring_points" ADD CONSTRAINT "scoring_points_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("user_id") ON DELETE SET NULL ON UPDATE CASCADE;
