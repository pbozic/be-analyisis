import { z } from 'zod';
import { JsonValueSchema } from '../inputTypeSchemas/JsonValueSchema';
import { menu_categoriesWithRelationsSchema } from './menu_categoriesSchema';
import type { menu_categoriesWithRelations } from './menu_categoriesSchema';
import { documentsWithRelationsSchema } from './documentsSchema';
import type { documentsWithRelations } from './documentsSchema';

/////////////////////////////////////////
// MENU ITEMS SCHEMA
/////////////////////////////////////////

export const menu_itemsSchema = z.object({
	menu_item_id: z.string().uuid(),
	names: JsonValueSchema,
	image: z.string().nullable(),
	description: JsonValueSchema,
	allergens: z.string().array(),
	spicy_level: z.number().int(),
	unit_size: z.string(),
	price: z.number(),
	discount: z.number().nullable(),
	sides: z.string().array(),
	extras: z.string().array(),
	ingredients: JsonValueSchema,
	availability: z.string().array(),
	business_id: z.string(),
	menu_category_id: z.string().nullable(),
	daily_date: z.coerce.date().nullable(),
	is_enabled: z.boolean(),
	menu_category_order_index: z.number().int().nullable(),
});

export type menu_items = z.infer<typeof menu_itemsSchema>;

/////////////////////////////////////////
// MENU ITEMS RELATION SCHEMA
/////////////////////////////////////////

export type menu_itemsRelations = {
	menu_category?: menu_categoriesWithRelations | null;
	documents: documentsWithRelations[];
};

export type menu_itemsWithRelations = z.infer<typeof menu_itemsSchema> & menu_itemsRelations;

export const menu_itemsWithRelationsSchema: z.ZodType<menu_itemsWithRelations> = menu_itemsSchema.merge(
	z.object({
		menu_category: z.lazy(() => menu_categoriesWithRelationsSchema).nullable(),
		documents: z.lazy(() => documentsWithRelationsSchema).array(),
	})
);

export default menu_itemsSchema;
