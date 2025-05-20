import { z } from 'zod';

export const Menu_categoriesScalarFieldEnumSchema = z.enum([
	'menu_category_id',
	'names',
	'description',
	'categories',
	'business_id',
	'menu_id',
	'order',
	'price',
	'menu_items_ordered',
	'menu_order_index',
]);

export default Menu_categoriesScalarFieldEnumSchema;
