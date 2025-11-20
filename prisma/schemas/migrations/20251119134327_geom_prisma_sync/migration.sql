-- AlterTable
ALTER TABLE "customers" ALTER COLUMN "code" SET DEFAULT substr(md5(random()::text), 1, 16);
