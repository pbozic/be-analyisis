-- CreateTable
CREATE TABLE "local_locations" (
    "local_location_id" UUID NOT NULL,
    "address_id" UUID NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "local_locations_pkey" PRIMARY KEY ("local_location_id")
);

-- CreateTable
CREATE TABLE "business_local_locations" (
    "business_local_location_id" UUID NOT NULL,
    "business_id" UUID NOT NULL,
    "local_location_id" UUID NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "time" TIMESTAMPTZ(6) NOT NULL,

    CONSTRAINT "business_local_locations_pkey" PRIMARY KEY ("business_local_location_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "local_locations_address_id_key" ON "local_locations"("address_id");

-- CreateIndex
CREATE UNIQUE INDEX "business_local_locations_business_id_local_location_id_time_key" ON "business_local_locations"("business_id", "local_location_id", "time");

-- AddForeignKey
ALTER TABLE "local_locations" ADD CONSTRAINT "local_locations_address_id_fkey" FOREIGN KEY ("address_id") REFERENCES "addresses"("address_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "business_local_locations" ADD CONSTRAINT "business_local_locations_local_location_id_fkey" FOREIGN KEY ("local_location_id") REFERENCES "local_locations"("local_location_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "business_local_locations" ADD CONSTRAINT "business_local_locations_business_id_fkey" FOREIGN KEY ("business_id") REFERENCES "business"("business_id") ON DELETE RESTRICT ON UPDATE CASCADE;
