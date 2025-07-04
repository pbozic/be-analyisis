/*
  Warnings:

  - A unique constraint covering the columns `[menu_item_id,order_id]` on the table `menu_item_stock_change` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "menu_item_stock_change_menu_item_id_order_id_key" ON "menu_item_stock_change"("menu_item_id", "order_id");
