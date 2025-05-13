-- CreateTable
CREATE TABLE "payment_intent_logs" (
    "payment_intent_logs_id" TEXT NOT NULL,
    "stripe_id" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "payment_intent_logs_pkey" PRIMARY KEY ("payment_intent_logs_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "payment_intent_logs_stripe_id_key" ON "payment_intent_logs"("stripe_id");
