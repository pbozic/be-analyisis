-- AddForeignKey
ALTER TABLE "order_lobby_items" ADD CONSTRAINT "order_lobby_items_menu_item_id_fkey" FOREIGN KEY ("menu_item_id") REFERENCES "menu_items"("menu_item_id") ON DELETE RESTRICT ON UPDATE CASCADE;
