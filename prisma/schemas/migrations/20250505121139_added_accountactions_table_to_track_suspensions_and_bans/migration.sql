-- CreateEnum
CREATE TYPE "ACCOUNT_ACTIONS" AS ENUM ('SUSPEND', 'UNSUSPEND', 'BAN', 'UNBAN', 'DELETE', 'CREATE');

-- CreateEnum
CREATE TYPE "ACCOUNT_ACTIONS_REASON" AS ENUM ('SUSPICIOUS_BEHAVIOUR', 'VIOLATION_OF_TERMS', 'SPAMMING_OR_SCAMMING', 'HATE_SPEECH_OR_ABUSE', 'IMPERSONATION', 'PAYMENT_FRAUD', 'SELF_DISABLE', 'APPEAL_APPROVED', 'MANUAL_REVIEW_CLEAR', 'SYSTEM_ERROR_CORRECTION', 'USER_VERIFIED', 'BUSINESS_VERIFIED', 'TERMS_ACCEPTED', 'TEMPORARY_BAN_EXPIRED');

-- CreateTable
CREATE TABLE "account_actions" (
    "account_action_id" UUID NOT NULL,
    "business_id" UUID,
    "user_id" UUID,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "action_creator_user_id" UUID NOT NULL,
    "reason" "ACCOUNT_ACTIONS_REASON" NOT NULL,
    "action" "ACCOUNT_ACTIONS" NOT NULL,

    CONSTRAINT "account_actions_pkey" PRIMARY KEY ("account_action_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "account_actions_account_action_id_key" ON "account_actions"("account_action_id");

-- AddForeignKey
ALTER TABLE "account_actions" ADD CONSTRAINT "account_actions_business_id_fkey" FOREIGN KEY ("business_id") REFERENCES "business"("business_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "account_actions" ADD CONSTRAINT "account_actions_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("user_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "account_actions" ADD CONSTRAINT "account_actions_action_creator_user_id_fkey" FOREIGN KEY ("action_creator_user_id") REFERENCES "users"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;
