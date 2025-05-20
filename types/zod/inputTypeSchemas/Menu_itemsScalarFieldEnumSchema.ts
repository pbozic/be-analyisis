import { z } from 'zod';

export const Menu_itemsScalarFieldEnumSchema = z.enum([
	'menu_item_id',
	'names',
	'image',
	'description',
	'allergens',
	'spicy_level',
	'unit_size',
	'price',
	'discount',
	'sides',
	'extras',
	'ingredients',
	'availability',
	'business_id',
	'menu_category_id',
	'daily_date',
	'is_enabled',
	'menu_category_order_index',
]);

export default Menu_itemsScalarFieldEnumSchema;
