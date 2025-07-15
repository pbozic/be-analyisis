-- CreateTable
CREATE TABLE "driver_municipalities" (
    "driver_municipalities_id" UUID NOT NULL,
    "driver_id" UUID NOT NULL,
    "municipalities_id" UUID NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "driver_municipalities_pkey" PRIMARY KEY ("driver_municipalities_id")
);

-- CreateIndex
CREATE INDEX "driver_municipalities_driver_id_idx" ON "driver_municipalities"("driver_id");

-- CreateIndex
CREATE UNIQUE INDEX "driver_municipalities_driver_id_municipalities_id_key" ON "driver_municipalities"("driver_id", "municipalities_id");

-- AddForeignKey
ALTER TABLE "driver_municipalities" ADD CONSTRAINT "driver_municipalities_driver_id_fkey" FOREIGN KEY ("driver_id") REFERENCES "drivers"("driver_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "driver_municipalities" ADD CONSTRAINT "driver_municipalities_municipalities_id_fkey" FOREIGN KEY ("municipalities_id") REFERENCES "municipalities"("municipalities_id") ON DELETE RESTRICT ON UPDATE CASCADE;
