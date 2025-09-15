/*
  Warnings:

  - A unique constraint covering the columns `[business_premise_id]` on the table `vehicles` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateEnum
CREATE TYPE "NUMBERING_STRUCTURE" AS ENUM ('C', 'B');

-- CreateEnum
CREATE TYPE "PREMISE_TYPE" AS ENUM ('A', 'B', 'C');

-- CreateEnum
CREATE TYPE "FURS_JOB_TYPE" AS ENUM ('BUSINESS_PREMISE', 'INVOICE', 'ECHO');

-- CreateEnum
CREATE TYPE "FURS_JOB_STATUS" AS ENUM ('DRAFT', 'SIGNED', 'SENT', 'ACK', 'ERROR');

-- AlterTable
ALTER TABLE "vehicles" ADD COLUMN     "business_premise_id" UUID;

-- CreateTable
CREATE TABLE "business_premise" (
    "business_premise_id" UUID NOT NULL,
    "business_id" UUID NOT NULL,
    "name" VARCHAR(120),
    "premise_type" "PREMISE_TYPE" NOT NULL DEFAULT 'A',
    "validity_date" TIMESTAMP(3),
    "special_notes" VARCHAR(255),
    "is_registered" BOOLEAN NOT NULL DEFAULT false,
    "registered_at" TIMESTAMP(3),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "business_premise_pkey" PRIMARY KEY ("business_premise_id")
);

-- CreateTable
CREATE TABLE "electronic_device" (
    "business_premise_id" UUID NOT NULL,
    "electronic_device_id" UUID NOT NULL,
    "name" VARCHAR(120),
    "active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "electronic_device_pkey" PRIMARY KEY ("business_premise_id","electronic_device_id")
);

-- CreateTable
CREATE TABLE "device_assignment" (
    "device_assignment_id" UUID NOT NULL,
    "driver_id" UUID NOT NULL,
    "business_premise_id" UUID NOT NULL,
    "electronic_device_id" UUID NOT NULL,
    "valid_from" TIMESTAMP(3) NOT NULL,
    "valid_to" TIMESTAMP(3),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "device_assignment_pkey" PRIMARY KEY ("device_assignment_id")
);

-- CreateTable
CREATE TABLE "invoice" (
    "invoice_id" UUID NOT NULL,
    "driver_id" UUID NOT NULL,
    "business_id" UUID,
    "vehicle_id" UUID,
    "tax_number" VARCHAR(8) NOT NULL,
    "taxi_order_id" UUID,
    "delivery_order_id" UUID,
    "numbering_structure" "NUMBERING_STRUCTURE" NOT NULL,
    "business_premise_id" UUID NOT NULL,
    "electronic_device_id" UUID NOT NULL,
    "invoice_number" VARCHAR(20) NOT NULL,
    "issue_datetime" TIMESTAMP(3) NOT NULL,
    "issue_datetime_local" VARCHAR(19),
    "invoice_amount" DECIMAL(14,2) NOT NULL,
    "returns_amount" DECIMAL(14,2),
    "payment_amount" DECIMAL(14,2) NOT NULL,
    "zoi" CHAR(32) NOT NULL,
    "eor" CHAR(36),
    "is_subsequent_submit" BOOLEAN NOT NULL DEFAULT false,
    "operator_tax_number" VARCHAR(8),
    "foreign_operator" BOOLEAN DEFAULT false,
    "furs_request_json" JSONB,
    "furs_response_json" JSONB,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "invoice_pkey" PRIMARY KEY ("invoice_id")
);

-- CreateTable
CREATE TABLE "invoice_item" (
    "invoice_item_id" UUID NOT NULL,
    "invoice_id" UUID NOT NULL,
    "description" VARCHAR(256) NOT NULL,
    "qty" DECIMAL(12,3) NOT NULL,
    "unit" VARCHAR(12),
    "unit_price" DECIMAL(14,4) NOT NULL,
    "tax_rate" DECIMAL(5,2) NOT NULL,
    "line_total" DECIMAL(14,2) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "invoice_item_pkey" PRIMARY KEY ("invoice_item_id")
);

-- CreateTable
CREATE TABLE "invoice_tax" (
    "invoice_tax_id" UUID NOT NULL,
    "invoice_id" UUID NOT NULL,
    "tax_rate" DECIMAL(5,2) NOT NULL,
    "taxable_amount" DECIMAL(14,2) NOT NULL,
    "tax_amount" DECIMAL(14,2) NOT NULL,
    "other_taxes_amount" DECIMAL(14,2),
    "exempt_taxable_amount" DECIMAL(14,2),
    "reverse_vat_taxable_amount" DECIMAL(14,2),
    "nontaxable_amount" DECIMAL(14,2),
    "special_tax_rules_amount" DECIMAL(14,2),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "invoice_tax_pkey" PRIMARY KEY ("invoice_tax_id")
);

-- CreateTable
CREATE TABLE "certificate_metadata" (
    "certificate_metadata_id" UUID NOT NULL,
    "driver_id" UUID NOT NULL,
    "subject_dn" VARCHAR(512) NOT NULL,
    "serial_number" VARCHAR(64) NOT NULL,
    "sha256_thumbprint" VARCHAR(64) NOT NULL,
    "valid_from" TIMESTAMP(3) NOT NULL,
    "valid_to" TIMESTAMP(3) NOT NULL,
    "ca_chain_pinned" VARCHAR(256),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "certificate_metadata_pkey" PRIMARY KEY ("certificate_metadata_id")
);

-- CreateTable
CREATE TABLE "submission_log" (
    "submission_log_id" UUID NOT NULL,
    "invoice_id" UUID NOT NULL,
    "message_id" VARCHAR(64) NOT NULL,
    "sent_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "http_status" INTEGER,
    "transport" VARCHAR(16),
    "tls_version" VARCHAR(16),
    "mtls_cn" VARCHAR(256),
    "eor" CHAR(36),
    "error_code" VARCHAR(32),
    "error_message" VARCHAR(512),
    "request_payload" JSONB,
    "response_payload" JSONB,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "submission_log_pkey" PRIMARY KEY ("submission_log_id")
);

-- CreateTable
CREATE TABLE "furs_job" (
    "furs_job_id" UUID NOT NULL,
    "type" "FURS_JOB_TYPE" NOT NULL,
    "status" "FURS_JOB_STATUS" NOT NULL DEFAULT 'DRAFT',
    "business_id" UUID,
    "business_premise_id" UUID,
    "invoice_id" UUID,
    "driver_id" UUID,
    "request_url" VARCHAR(255),
    "message_id" VARCHAR(64) NOT NULL,
    "request_payload" JSONB,
    "request_token" TEXT,
    "response_token" TEXT,
    "http_status" INTEGER,
    "error_code" VARCHAR(32),
    "error_message" VARCHAR(512),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "furs_job_pkey" PRIMARY KEY ("furs_job_id")
);

-- CreateIndex
CREATE INDEX "business_premise_business_id_idx" ON "business_premise"("business_id");

-- CreateIndex
CREATE INDEX "electronic_device_business_premise_id_idx" ON "electronic_device"("business_premise_id");

-- CreateIndex
CREATE INDEX "device_assignment_driver_id_idx" ON "device_assignment"("driver_id");

-- CreateIndex
CREATE INDEX "device_assignment_business_premise_id_electronic_device_id_idx" ON "device_assignment"("business_premise_id", "electronic_device_id");

-- CreateIndex
CREATE UNIQUE INDEX "invoice_taxi_order_id_key" ON "invoice"("taxi_order_id");

-- CreateIndex
CREATE UNIQUE INDEX "invoice_delivery_order_id_key" ON "invoice"("delivery_order_id");

-- CreateIndex
CREATE INDEX "invoice_driver_id_idx" ON "invoice"("driver_id");

-- CreateIndex
CREATE INDEX "invoice_business_id_idx" ON "invoice"("business_id");

-- CreateIndex
CREATE INDEX "invoice_vehicle_id_idx" ON "invoice"("vehicle_id");

-- CreateIndex
CREATE INDEX "invoice_issue_datetime_idx" ON "invoice"("issue_datetime");

-- CreateIndex
CREATE UNIQUE INDEX "invoice_business_premise_id_electronic_device_id_invoice_nu_key" ON "invoice"("business_premise_id", "electronic_device_id", "invoice_number");

-- CreateIndex
CREATE UNIQUE INDEX "invoice_zoi_key" ON "invoice"("zoi");

-- CreateIndex
CREATE UNIQUE INDEX "invoice_eor_key" ON "invoice"("eor");

-- CreateIndex
CREATE INDEX "invoice_item_invoice_id_idx" ON "invoice_item"("invoice_id");

-- CreateIndex
CREATE INDEX "invoice_tax_invoice_id_idx" ON "invoice_tax"("invoice_id");

-- CreateIndex
CREATE UNIQUE INDEX "invoice_tax_invoice_id_tax_rate_key" ON "invoice_tax"("invoice_id", "tax_rate");

-- CreateIndex
CREATE INDEX "certificate_metadata_sha256_thumbprint_idx" ON "certificate_metadata"("sha256_thumbprint");

-- CreateIndex
CREATE UNIQUE INDEX "certificate_metadata_driver_id_serial_number_key" ON "certificate_metadata"("driver_id", "serial_number");

-- CreateIndex
CREATE INDEX "submission_log_invoice_id_idx" ON "submission_log"("invoice_id");

-- CreateIndex
CREATE INDEX "submission_log_message_id_idx" ON "submission_log"("message_id");

-- CreateIndex
CREATE INDEX "furs_job_type_status_idx" ON "furs_job"("type", "status");

-- CreateIndex
CREATE INDEX "furs_job_business_id_idx" ON "furs_job"("business_id");

-- CreateIndex
CREATE INDEX "furs_job_business_premise_id_idx" ON "furs_job"("business_premise_id");

-- CreateIndex
CREATE INDEX "furs_job_invoice_id_idx" ON "furs_job"("invoice_id");

-- CreateIndex
CREATE INDEX "furs_job_message_id_idx" ON "furs_job"("message_id");

-- CreateIndex
CREATE UNIQUE INDEX "vehicles_business_premise_id_key" ON "vehicles"("business_premise_id");

-- AddForeignKey
ALTER TABLE "vehicles" ADD CONSTRAINT "vehicles_business_premise_id_fkey" FOREIGN KEY ("business_premise_id") REFERENCES "business_premise"("business_premise_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "business_premise" ADD CONSTRAINT "business_premise_business_id_fkey" FOREIGN KEY ("business_id") REFERENCES "business"("business_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "electronic_device" ADD CONSTRAINT "electronic_device_business_premise_id_fkey" FOREIGN KEY ("business_premise_id") REFERENCES "business_premise"("business_premise_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "device_assignment" ADD CONSTRAINT "device_assignment_business_premise_id_electronic_device_id_fkey" FOREIGN KEY ("business_premise_id", "electronic_device_id") REFERENCES "electronic_device"("business_premise_id", "electronic_device_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "invoice" ADD CONSTRAINT "invoice_taxi_order_id_fkey" FOREIGN KEY ("taxi_order_id") REFERENCES "taxi_orders"("order_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "invoice" ADD CONSTRAINT "invoice_delivery_order_id_fkey" FOREIGN KEY ("delivery_order_id") REFERENCES "delivery_orders"("order_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "invoice" ADD CONSTRAINT "invoice_business_premise_id_electronic_device_id_fkey" FOREIGN KEY ("business_premise_id", "electronic_device_id") REFERENCES "electronic_device"("business_premise_id", "electronic_device_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "invoice" ADD CONSTRAINT "invoice_business_premise_id_fkey" FOREIGN KEY ("business_premise_id") REFERENCES "business_premise"("business_premise_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "invoice" ADD CONSTRAINT "invoice_vehicle_id_fkey" FOREIGN KEY ("vehicle_id") REFERENCES "vehicles"("vehicle_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "invoice_item" ADD CONSTRAINT "invoice_item_invoice_id_fkey" FOREIGN KEY ("invoice_id") REFERENCES "invoice"("invoice_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "invoice_tax" ADD CONSTRAINT "invoice_tax_invoice_id_fkey" FOREIGN KEY ("invoice_id") REFERENCES "invoice"("invoice_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "submission_log" ADD CONSTRAINT "submission_log_invoice_id_fkey" FOREIGN KEY ("invoice_id") REFERENCES "invoice"("invoice_id") ON DELETE CASCADE ON UPDATE CASCADE;
