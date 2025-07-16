/*
  Warnings:

  - A unique constraint covering the columns `[word_id,business_id]` on the table `word_buy` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "word_buy_word_id_business_id_key" ON "word_buy"("word_id", "business_id");
