-- AlterTable
ALTER TABLE "menu_categories" ADD COLUMN     "price" DOUBLE PRECISION,
ALTER COLUMN "names" DROP NOT NULL,
ALTER COLUMN "description" DROP NOT NULL;

-- AlterTable
ALTER TABLE "menu_items" ALTER COLUMN "price" SET DEFAULT 0;

-- AlterTable
ALTER TABLE "menus" ADD COLUMN     "date" TIMESTAMPTZ(6);
