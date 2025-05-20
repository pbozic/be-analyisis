import { z } from 'zod';

export const Order_lobby_itemsScalarFieldEnumSchema = z.enum(['order_lobby_items_id','order_lobbies_id','menu_item_id','user_id','sides','extras','quantity','customer_note','created_at','updated_at']);

export default Order_lobby_itemsScalarFieldEnumSchema;
