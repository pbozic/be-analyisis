-- AlterTable
ALTER TABLE "drivers" ADD COLUMN     "current_vehicle_id" UUID;

-- AlterTable
ALTER TABLE "users" ALTER COLUMN "allow_ads_personalization" SET DEFAULT false,
ALTER COLUMN "allow_marketing_push_notifications" SET DEFAULT false,
ALTER COLUMN "allow_newsletter" SET DEFAULT false;
