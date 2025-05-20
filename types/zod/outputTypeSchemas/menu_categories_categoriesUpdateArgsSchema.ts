import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { menu_categories_categoriesIncludeSchema } from '../inputTypeSchemas/menu_categories_categoriesIncludeSchema';
import { menu_categories_categoriesUpdateInputSchema } from '../inputTypeSchemas/menu_categories_categoriesUpdateInputSchema';
import { menu_categories_categoriesUncheckedUpdateInputSchema } from '../inputTypeSchemas/menu_categories_categoriesUncheckedUpdateInputSchema';
import { menu_categories_categoriesWhereUniqueInputSchema } from '../inputTypeSchemas/menu_categories_categoriesWhereUniqueInputSchema';
import { menu_categoriesArgsSchema } from '../outputTypeSchemas/menu_categoriesArgsSchema';
import { categoriesArgsSchema } from '../outputTypeSchemas/categoriesArgsSchema';
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const menu_categories_categoriesSelectSchema: z.ZodType<Prisma.menu_categories_categoriesSelect> = z
	.object({
		menu_categories_id: z.boolean().optional(),
		categories_id: z.boolean().optional(),
		menu_category: z.union([z.boolean(), z.lazy(() => menu_categoriesArgsSchema)]).optional(),
		category: z.union([z.boolean(), z.lazy(() => categoriesArgsSchema)]).optional(),
	})
	.strict();

export const menu_categories_categoriesUpdateArgsSchema: z.ZodType<Prisma.menu_categories_categoriesUpdateArgs> = z
	.object({
		select: menu_categories_categoriesSelectSchema.optional(),
		include: menu_categories_categoriesIncludeSchema.optional(),
		data: z.union([
			menu_categories_categoriesUpdateInputSchema,
			menu_categories_categoriesUncheckedUpdateInputSchema,
		]),
		where: menu_categories_categoriesWhereUniqueInputSchema,
	})
	.strict();

export default menu_categories_categoriesUpdateArgsSchema;
