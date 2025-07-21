-- AlterTable
ALTER TABLE "menu_items" ADD COLUMN     "tax_rates_id" UUID;

-- CreateTable
CREATE TABLE "tax_rates" (
    "tax_rates_id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "country" TEXT,
    "rate" DOUBLE PRECISION NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "valid_from" TIMESTAMPTZ(6) NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "tax_rates_pkey" PRIMARY KEY ("tax_rates_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "tax_rates_name_rate_valid_from_key" ON "tax_rates"("name", "rate", "valid_from");

-- AddForeignKey
ALTER TABLE "menu_items" ADD CONSTRAINT "menu_items_tax_rates_id_fkey" FOREIGN KEY ("tax_rates_id") REFERENCES "tax_rates"("tax_rates_id") ON DELETE SET NULL ON UPDATE CASCADE;
