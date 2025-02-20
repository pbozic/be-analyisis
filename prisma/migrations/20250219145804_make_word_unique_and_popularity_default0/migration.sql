/*
  Warnings:

  - A unique constraint covering the columns `[word]` on the table `words` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "words" ALTER COLUMN "popularity" SET DEFAULT 0;

-- CreateIndex
CREATE UNIQUE INDEX "words_word_key" ON "words"("word");
