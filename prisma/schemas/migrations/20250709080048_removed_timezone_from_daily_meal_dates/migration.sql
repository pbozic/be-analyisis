-- AlterTable
ALTER TABLE "_blog_posts_in_tag" ADD CONSTRAINT "_blog_posts_in_tag_AB_pkey" PRIMARY KEY ("A", "B");

-- DropIndex
DROP INDEX "_blog_posts_in_tag_AB_unique";

-- AlterTable
ALTER TABLE "_word_bundlesTowords" ADD CONSTRAINT "_word_bundlesTowords_AB_pkey" PRIMARY KEY ("A", "B");

-- DropIndex
DROP INDEX "_word_bundlesTowords_AB_unique";

-- AlterTable
ALTER TABLE "daily_meal_instances" ALTER COLUMN "intended_date" SET DATA TYPE TIMESTAMP(0),
ALTER COLUMN "delivery_date" SET DATA TYPE TIMESTAMP(0);

-- AlterTable
ALTER TABLE "daily_meal_subscription_days" ALTER COLUMN "intended_date" SET DATA TYPE TIMESTAMP(0),
ALTER COLUMN "delivery_date" SET DATA TYPE TIMESTAMP(0);
