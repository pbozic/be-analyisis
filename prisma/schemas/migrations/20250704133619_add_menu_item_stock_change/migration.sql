-- CreateTable
CREATE TABLE "menu_item_stock_change" (
    "id" UUID NOT NULL,
    "menu_item_id" UUID NOT NULL,
    "quantity" INTEGER NOT NULL,
    "reason" TEXT NOT NULL,
    "order_id" UUID,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "menu_item_stock_change_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "menu_item_stock_change" ADD CONSTRAINT "menu_item_stock_change_menu_item_id_fkey" FOREIGN KEY ("menu_item_id") REFERENCES "menu_items"("menu_item_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "menu_item_stock_change" ADD CONSTRAINT "menu_item_stock_change_order_id_fkey" FOREIGN KEY ("order_id") REFERENCES "delivery_orders"("order_id") ON DELETE SET NULL ON UPDATE CASCADE;
