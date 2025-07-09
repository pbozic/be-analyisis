-- CreateTable
CREATE TABLE "user_money_flows" (
    "balance_change_id" UUID NOT NULL,
    "user_id" UUID NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "stripe_fee" DOUBLE PRECISION NOT NULL,
    "type" "TRANSACTION_TYPE" NOT NULL,
    "payment_method" "PAYMENT_METHOD",
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "user_money_flows_pkey" PRIMARY KEY ("balance_change_id")
);

-- CreateTable
CREATE TABLE "business_money_flows" (
    "balance_change_id" UUID NOT NULL,
    "business_id" UUID NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "stripe_fee" DOUBLE PRECISION NOT NULL,
    "type" "TRANSACTION_TYPE" NOT NULL,
    "payment_method" "PAYMENT_METHOD",
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "business_money_flows_pkey" PRIMARY KEY ("balance_change_id")
);

-- AddForeignKey
ALTER TABLE "user_money_flows" ADD CONSTRAINT "user_money_flows_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "business_money_flows" ADD CONSTRAINT "business_money_flows_business_id_fkey" FOREIGN KEY ("business_id") REFERENCES "business"("business_id") ON DELETE RESTRICT ON UPDATE CASCADE;
