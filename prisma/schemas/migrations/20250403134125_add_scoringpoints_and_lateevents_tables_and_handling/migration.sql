-- CreateEnum
CREATE TYPE "SCORING_POINTS_REASON" AS ENUM ('REJECTED', 'CANCELED', 'AUTO_REJECTED', 'LATE', 'LARGE_DELAY', 'INSUFFICIENT_DATA');

-- CreateTable
CREATE TABLE "scoring_points" (
    "scoring_points_id" UUID NOT NULL,
    "business_id" UUID NOT NULL,
    "user_id" UUID NOT NULL,
    "delivery_order_id" UUID,
    "taxi_order_id" UUID,
    "points" INTEGER NOT NULL,
    "isPenalty" BOOLEAN NOT NULL,
    "reason" "SCORING_POINTS_REASON" NOT NULL,
    "expiration_date" TIMESTAMP(3),

    CONSTRAINT "scoring_points_pkey" PRIMARY KEY ("scoring_points_id")
);

-- CreateTable
CREATE TABLE "late_events" (
    "late_events_id" UUID NOT NULL,
    "business_id" UUID NOT NULL,
    "user_id" UUID NOT NULL,
    "delivery_order_id" UUID,
    "taxi_order_id" UUID,
    "scoring_points_id" UUID,
    "seconds" INTEGER NOT NULL,

    CONSTRAINT "late_events_pkey" PRIMARY KEY ("late_events_id")
);

-- AddForeignKey
ALTER TABLE "scoring_points" ADD CONSTRAINT "scoring_points_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "scoring_points" ADD CONSTRAINT "scoring_points_business_id_fkey" FOREIGN KEY ("business_id") REFERENCES "business"("business_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "scoring_points" ADD CONSTRAINT "scoring_points_delivery_order_id_fkey" FOREIGN KEY ("delivery_order_id") REFERENCES "delivery_orders"("order_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "scoring_points" ADD CONSTRAINT "scoring_points_taxi_order_id_fkey" FOREIGN KEY ("taxi_order_id") REFERENCES "taxi_orders"("order_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "late_events" ADD CONSTRAINT "late_events_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "late_events" ADD CONSTRAINT "late_events_business_id_fkey" FOREIGN KEY ("business_id") REFERENCES "business"("business_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "late_events" ADD CONSTRAINT "late_events_delivery_order_id_fkey" FOREIGN KEY ("delivery_order_id") REFERENCES "delivery_orders"("order_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "late_events" ADD CONSTRAINT "late_events_taxi_order_id_fkey" FOREIGN KEY ("taxi_order_id") REFERENCES "taxi_orders"("order_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "late_events" ADD CONSTRAINT "late_events_scoring_points_id_fkey" FOREIGN KEY ("scoring_points_id") REFERENCES "scoring_points"("scoring_points_id") ON DELETE SET NULL ON UPDATE CASCADE;
