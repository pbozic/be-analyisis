-- CreateTable
CREATE TABLE "user_permission" (
    "user_permission_id" UUID NOT NULL,
    "user_id" UUID NOT NULL,
    "action_id" UUID,
    "name" TEXT,
    "module" "MODULE_TYPE" NOT NULL,
    "limit" INTEGER,
    "scope" "PERMISSION_SCOPE" NOT NULL DEFAULT 'GLOBAL',

    CONSTRAINT "user_permission_pkey" PRIMARY KEY ("user_permission_id")
);

-- CreateIndex
CREATE INDEX "user_permission_name_module_idx" ON "user_permission"("name", "module");

-- CreateIndex
CREATE INDEX "user_permission_action_id_module_idx" ON "user_permission"("action_id", "module");

-- AddForeignKey
ALTER TABLE "user_permission" ADD CONSTRAINT "user_permission_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_permission" ADD CONSTRAINT "user_permission_action_id_fkey" FOREIGN KEY ("action_id") REFERENCES "action"("action_id") ON DELETE SET NULL ON UPDATE CASCADE;
