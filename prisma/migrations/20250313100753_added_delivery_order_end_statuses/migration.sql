-- AlterEnum
-- This migration adds more than one value to an enum.
-- With PostgreSQL versions 11 and earlier, this is not possible
-- in a single migration. This can be worked around by creating
-- multiple migrations, each migration adding only one value to
-- the enum.


ALTER TYPE "DELIVERY_ORDER_STATUS" ADD VALUE 'ORDER_FINISHED_FAIL';
ALTER TYPE "DELIVERY_ORDER_STATUS" ADD VALUE 'ORDER_FINISHED_SUCCESS';
ALTER TYPE "DELIVERY_ORDER_STATUS" ADD VALUE 'CUSTOMER_PICKED_UP';
