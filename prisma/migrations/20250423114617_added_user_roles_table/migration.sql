-- CreateTable
CREATE TABLE "user_roles" (
    "user_roles_id" UUID NOT NULL,
    "user_id" UUID NOT NULL,
    "role" "USER_ROLES" NOT NULL DEFAULT 'PERSONAL',
    "primary" BOOLEAN DEFAULT false,

    CONSTRAINT "user_roles_pkey" PRIMARY KEY ("user_roles_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_roles_user_roles_id_key" ON "user_roles"("user_roles_id");

-- AddForeignKey
ALTER TABLE "user_roles" ADD CONSTRAINT "user_roles_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;
