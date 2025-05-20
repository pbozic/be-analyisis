import { z } from 'zod';
import { JsonValueSchema } from '../inputTypeSchemas/JsonValueSchema'
import type { JsonValueType } from '../inputTypeSchemas/JsonValueSchema';
import { businessWithRelationsSchema } from './businessSchema'
import type { businessWithRelations } from './businessSchema'
import { menu_categoriesWithRelationsSchema } from './menu_categoriesSchema'
import type { menu_categoriesWithRelations } from './menu_categoriesSchema'
import { daily_meals_subscriptionsWithRelationsSchema } from './daily_meals_subscriptionsSchema'
import type { daily_meals_subscriptionsWithRelations } from './daily_meals_subscriptionsSchema'

/////////////////////////////////////////
// MENUS SCHEMA
/////////////////////////////////////////

export const menusSchema = z.object({
  menu_id: z.string().uuid(),
  business_id: z.string(),
  active: z.boolean(),
  menu_categories_ordered: JsonValueSchema.nullable(),
  isDailyMeal: z.boolean(),
  date: z.coerce.date().nullable(),
})

export type menus = z.infer<typeof menusSchema>

/////////////////////////////////////////
// MENUS RELATION SCHEMA
/////////////////////////////////////////

export type menusRelations = {
  business: businessWithRelations;
  categories: menu_categoriesWithRelations[];
  daily_meal_subscribers: daily_meals_subscriptionsWithRelations[];
};

export type menusWithRelations = Omit<z.infer<typeof menusSchema>, "menu_categories_ordered"> & {
  menu_categories_ordered?: JsonValueType | null;
} & menusRelations

export const menusWithRelationsSchema: z.ZodType<menusWithRelations> = menusSchema.merge(z.object({
  business: z.lazy(() => businessWithRelationsSchema),
  categories: z.lazy(() => menu_categoriesWithRelationsSchema).array(),
  daily_meal_subscribers: z.lazy(() => daily_meals_subscriptionsWithRelationsSchema).array(),
}))

export default menusSchema;
