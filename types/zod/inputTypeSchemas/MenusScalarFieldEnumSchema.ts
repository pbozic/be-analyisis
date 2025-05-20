import { z } from 'zod';

export const MenusScalarFieldEnumSchema = z.enum([
	'menu_id',
	'business_id',
	'active',
	'menu_categories_ordered',
	'isDailyMeal',
	'date',
]);

export default MenusScalarFieldEnumSchema;
