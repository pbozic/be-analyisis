-- AlterTable
ALTER TABLE "documents" ADD COLUMN     "public" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "files" ADD COLUMN     "public" BOOLEAN NOT NULL DEFAULT false;
