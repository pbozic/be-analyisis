import { z } from 'zod';
import { menu_categoriesWithRelationsSchema } from './menu_categoriesSchema'
import type { menu_categoriesWithRelations } from './menu_categoriesSchema'
import { categoriesWithRelationsSchema } from './categoriesSchema'
import type { categoriesWithRelations } from './categoriesSchema'

/////////////////////////////////////////
// MENU CATEGORIES CATEGORIES SCHEMA
/////////////////////////////////////////

export const menu_categories_categoriesSchema = z.object({
  menu_categories_id: z.string(),
  categories_id: z.string(),
})

export type menu_categories_categories = z.infer<typeof menu_categories_categoriesSchema>

/////////////////////////////////////////
// MENU CATEGORIES CATEGORIES RELATION SCHEMA
/////////////////////////////////////////

export type menu_categories_categoriesRelations = {
  menu_category: menu_categoriesWithRelations;
  category: categoriesWithRelations;
};

export type menu_categories_categoriesWithRelations = z.infer<typeof menu_categories_categoriesSchema> & menu_categories_categoriesRelations

export const menu_categories_categoriesWithRelationsSchema: z.ZodType<menu_categories_categoriesWithRelations> = menu_categories_categoriesSchema.merge(z.object({
  menu_category: z.lazy(() => menu_categoriesWithRelationsSchema),
  category: z.lazy(() => categoriesWithRelationsSchema),
}))

export default menu_categories_categoriesSchema;
