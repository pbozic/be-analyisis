import { z } from 'zod';
import { JsonValueSchema } from '../inputTypeSchemas/JsonValueSchema'
import type { JsonValueType } from '../inputTypeSchemas/JsonValueSchema';
import { menu_itemsWithRelationsSchema } from './menu_itemsSchema'
import type { menu_itemsWithRelations } from './menu_itemsSchema'
import { menusWithRelationsSchema } from './menusSchema'
import type { menusWithRelations } from './menusSchema'
import { menu_categories_categoriesWithRelationsSchema } from './menu_categories_categoriesSchema'
import type { menu_categories_categoriesWithRelations } from './menu_categories_categoriesSchema'
import { daily_meals_subscriptionsWithRelationsSchema } from './daily_meals_subscriptionsSchema'
import type { daily_meals_subscriptionsWithRelations } from './daily_meals_subscriptionsSchema'

/////////////////////////////////////////
// MENU CATEGORIES SCHEMA
/////////////////////////////////////////

export const menu_categoriesSchema = z.object({
  menu_category_id: z.string().uuid(),
  names: JsonValueSchema.nullable(),
  description: JsonValueSchema.nullable(),
  categories: z.string().array(),
  business_id: z.string(),
  menu_id: z.string().nullable(),
  order: z.number().int().nullable(),
  price: z.number().nullable(),
  menu_items_ordered: JsonValueSchema.nullable(),
  menu_order_index: z.number().int().nullable(),
})

export type menu_categories = z.infer<typeof menu_categoriesSchema>

/////////////////////////////////////////
// MENU CATEGORIES RELATION SCHEMA
/////////////////////////////////////////

export type menu_categoriesRelations = {
  menu_items: menu_itemsWithRelations[];
  menu?: menusWithRelations | null;
  menu_categories_categories: menu_categories_categoriesWithRelations[];
  daily_meal_subscribers: daily_meals_subscriptionsWithRelations[];
};

export type menu_categoriesWithRelations = Omit<z.infer<typeof menu_categoriesSchema>, "names" | "description" | "menu_items_ordered"> & {
  names?: JsonValueType | null;
  description?: JsonValueType | null;
  menu_items_ordered?: JsonValueType | null;
} & menu_categoriesRelations

export const menu_categoriesWithRelationsSchema: z.ZodType<menu_categoriesWithRelations> = menu_categoriesSchema.merge(z.object({
  menu_items: z.lazy(() => menu_itemsWithRelationsSchema).array(),
  menu: z.lazy(() => menusWithRelationsSchema).nullable(),
  menu_categories_categories: z.lazy(() => menu_categories_categoriesWithRelationsSchema).array(),
  daily_meal_subscribers: z.lazy(() => daily_meals_subscriptionsWithRelationsSchema).array(),
}))

export default menu_categoriesSchema;
