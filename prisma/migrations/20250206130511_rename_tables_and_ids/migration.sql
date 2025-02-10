/*
  Warnings:

  - The primary key for the `categories` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `category_id` on the `categories` table. All the data in the column will be lost.
  - You are about to drop the column `parent_category_id` on the `categories` table. All the data in the column will be lost.
  - You are about to drop the column `promo_banner_id` on the `documents` table. All the data in the column will be lost.
  - The primary key for the `menu_categories_categories` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `category_id` on the `menu_categories_categories` table. All the data in the column will be lost.
  - You are about to drop the column `menu_category_id` on the `menu_categories_categories` table. All the data in the column will be lost.
  - The primary key for the `promo_ads` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `promo_ad_id` on the `promo_ads` table. All the data in the column will be lost.
  - You are about to drop the column `category_id` on the `promo_ads_category` table. All the data in the column will be lost.
  - You are about to drop the column `promo_ad_id` on the `promo_ads_category` table. All the data in the column will be lost.
  - The primary key for the `promo_banners` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `promo_banner_id` on the `promo_banners` table. All the data in the column will be lost.
  - The primary key for the `promo_sections` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `promo_section_id` on the `promo_sections` table. All the data in the column will be lost.
  - The primary key for the `promo_sections_buy` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `promo_section_buy_id` on the `promo_sections_buy` table. All the data in the column will be lost.
  - You are about to drop the column `promo_section_id` on the `promo_sections_buy` table. All the data in the column will be lost.
  - You are about to drop the column `category_id` on the `words` table. All the data in the column will be lost.
  - The required column `categories_id` was added to the `categories` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `categories_id` to the `menu_categories_categories` table without a default value. This is not possible if the table is not empty.
  - Added the required column `menu_categories_id` to the `menu_categories_categories` table without a default value. This is not possible if the table is not empty.
  - The required column `promo_ads_id` was added to the `promo_ads` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `categories_id` to the `promo_ads_category` table without a default value. This is not possible if the table is not empty.
  - Added the required column `promo_ads_id` to the `promo_ads_category` table without a default value. This is not possible if the table is not empty.
  - The required column `promo_banners_id` was added to the `promo_banners` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - The required column `promo_sections_id` was added to the `promo_sections` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `promo_sections_buy_id` to the `promo_sections_buy` table without a default value. This is not possible if the table is not empty.
  - Added the required column `promo_sections_id` to the `promo_sections_buy` table without a default value. This is not possible if the table is not empty.
  - Added the required column `categories_id` to the `words` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "categories" DROP CONSTRAINT "categories_parent_category_id_fkey";

-- DropForeignKey
ALTER TABLE "documents" DROP CONSTRAINT "documents_promo_banner_id_fkey";

-- DropForeignKey
ALTER TABLE "menu_categories_categories" DROP CONSTRAINT "menu_categories_categories_category_id_fkey";

-- DropForeignKey
ALTER TABLE "menu_categories_categories" DROP CONSTRAINT "menu_categories_categories_menu_category_id_fkey";

-- DropForeignKey
ALTER TABLE "promo_ads" DROP CONSTRAINT "promo_ads_banner_id_fkey";

-- DropForeignKey
ALTER TABLE "promo_ads_category" DROP CONSTRAINT "promo_ads_category_category_id_fkey";

-- DropForeignKey
ALTER TABLE "promo_ads_category" DROP CONSTRAINT "promo_ads_category_promo_ad_id_fkey";

-- DropForeignKey
ALTER TABLE "promo_sections_buy" DROP CONSTRAINT "promo_sections_buy_promo_section_id_fkey";

-- DropForeignKey
ALTER TABLE "words" DROP CONSTRAINT "words_category_id_fkey";

-- AlterTable
ALTER TABLE "categories" DROP CONSTRAINT "categories_pkey",
DROP COLUMN "category_id",
DROP COLUMN "parent_category_id",
ADD COLUMN     "categories_id" UUID NOT NULL,
ADD COLUMN     "parent_categories_id" UUID,
ADD CONSTRAINT "categories_pkey" PRIMARY KEY ("categories_id");

-- AlterTable
ALTER TABLE "documents" DROP COLUMN "promo_banner_id",
ADD COLUMN     "promo_banners_id" UUID;

-- AlterTable
ALTER TABLE "menu_categories_categories" DROP CONSTRAINT "menu_categories_categories_pkey",
DROP COLUMN "category_id",
DROP COLUMN "menu_category_id",
ADD COLUMN     "categories_id" UUID NOT NULL,
ADD COLUMN     "menu_categories_id" UUID NOT NULL,
ADD CONSTRAINT "menu_categories_categories_pkey" PRIMARY KEY ("menu_categories_id", "categories_id");

-- AlterTable
ALTER TABLE "promo_ads" DROP CONSTRAINT "promo_ads_pkey",
DROP COLUMN "promo_ad_id",
ADD COLUMN     "promo_ads_id" UUID NOT NULL,
ADD CONSTRAINT "promo_ads_pkey" PRIMARY KEY ("promo_ads_id");

-- AlterTable
ALTER TABLE "promo_ads_category" DROP COLUMN "category_id",
DROP COLUMN "promo_ad_id",
ADD COLUMN     "categories_id" UUID NOT NULL,
ADD COLUMN     "promo_ads_id" UUID NOT NULL;

-- AlterTable
ALTER TABLE "promo_banners" DROP CONSTRAINT "promo_banners_pkey",
DROP COLUMN "promo_banner_id",
ADD COLUMN     "promo_banners_id" UUID NOT NULL,
ADD CONSTRAINT "promo_banners_pkey" PRIMARY KEY ("promo_banners_id");

-- AlterTable
ALTER TABLE "promo_sections" DROP CONSTRAINT "promo_sections_pkey",
DROP COLUMN "promo_section_id",
ADD COLUMN     "promo_sections_id" UUID NOT NULL,
ADD CONSTRAINT "promo_sections_pkey" PRIMARY KEY ("promo_sections_id");

-- AlterTable
ALTER TABLE "promo_sections_buy" DROP CONSTRAINT "promo_sections_buy_pkey",
DROP COLUMN "promo_section_buy_id",
DROP COLUMN "promo_section_id",
ADD COLUMN     "promo_sections_buy_id" UUID NOT NULL,
ADD COLUMN     "promo_sections_id" UUID NOT NULL,
ADD CONSTRAINT "promo_sections_buy_pkey" PRIMARY KEY ("promo_sections_buy_id");

-- AlterTable
ALTER TABLE "words" DROP COLUMN "category_id",
ADD COLUMN     "categories_id" UUID NOT NULL;

-- AddForeignKey
ALTER TABLE "documents" ADD CONSTRAINT "documents_promo_banners_id_fkey" FOREIGN KEY ("promo_banners_id") REFERENCES "promo_banners"("promo_banners_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "categories" ADD CONSTRAINT "categories_parent_categories_id_fkey" FOREIGN KEY ("parent_categories_id") REFERENCES "categories"("categories_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "menu_categories_categories" ADD CONSTRAINT "menu_categories_categories_menu_categories_id_fkey" FOREIGN KEY ("menu_categories_id") REFERENCES "menu_categories"("menu_category_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "menu_categories_categories" ADD CONSTRAINT "menu_categories_categories_categories_id_fkey" FOREIGN KEY ("categories_id") REFERENCES "categories"("categories_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "promo_sections_buy" ADD CONSTRAINT "promo_sections_buy_promo_sections_id_fkey" FOREIGN KEY ("promo_sections_id") REFERENCES "promo_sections"("promo_sections_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "promo_ads" ADD CONSTRAINT "promo_ads_banner_id_fkey" FOREIGN KEY ("banner_id") REFERENCES "promo_banners"("promo_banners_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "promo_ads_category" ADD CONSTRAINT "promo_ads_category_promo_ads_id_fkey" FOREIGN KEY ("promo_ads_id") REFERENCES "promo_ads"("promo_ads_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "promo_ads_category" ADD CONSTRAINT "promo_ads_category_categories_id_fkey" FOREIGN KEY ("categories_id") REFERENCES "categories"("categories_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "words" ADD CONSTRAINT "words_categories_id_fkey" FOREIGN KEY ("categories_id") REFERENCES "categories"("categories_id") ON DELETE RESTRICT ON UPDATE CASCADE;
