import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { menu_categories_categoriesIncludeSchema } from '../inputTypeSchemas/menu_categories_categoriesIncludeSchema';
import { menu_categories_categoriesWhereInputSchema } from '../inputTypeSchemas/menu_categories_categoriesWhereInputSchema';
import { menu_categories_categoriesOrderByWithRelationInputSchema } from '../inputTypeSchemas/menu_categories_categoriesOrderByWithRelationInputSchema';
import { menu_categories_categoriesWhereUniqueInputSchema } from '../inputTypeSchemas/menu_categories_categoriesWhereUniqueInputSchema';
import { Menu_categories_categoriesScalarFieldEnumSchema } from '../inputTypeSchemas/Menu_categories_categoriesScalarFieldEnumSchema';
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

export const menu_categories_categoriesFindFirstOrThrowArgsSchema: z.ZodType<Prisma.menu_categories_categoriesFindFirstOrThrowArgs> =
	z
		.object({
			select: menu_categories_categoriesSelectSchema.optional(),
			include: menu_categories_categoriesIncludeSchema.optional(),
			where: menu_categories_categoriesWhereInputSchema.optional(),
			orderBy: z
				.union([
					menu_categories_categoriesOrderByWithRelationInputSchema.array(),
					menu_categories_categoriesOrderByWithRelationInputSchema,
				])
				.optional(),
			cursor: menu_categories_categoriesWhereUniqueInputSchema.optional(),
			take: z.number().optional(),
			skip: z.number().optional(),
			distinct: z
				.union([
					Menu_categories_categoriesScalarFieldEnumSchema,
					Menu_categories_categoriesScalarFieldEnumSchema.array(),
				])
				.optional(),
		})
		.strict();

export default menu_categories_categoriesFindFirstOrThrowArgsSchema;
