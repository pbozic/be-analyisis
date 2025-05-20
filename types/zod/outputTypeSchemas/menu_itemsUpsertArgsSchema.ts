import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { menu_itemsIncludeSchema } from '../inputTypeSchemas/menu_itemsIncludeSchema';
import { menu_itemsWhereUniqueInputSchema } from '../inputTypeSchemas/menu_itemsWhereUniqueInputSchema';
import { menu_itemsCreateInputSchema } from '../inputTypeSchemas/menu_itemsCreateInputSchema';
import { menu_itemsUncheckedCreateInputSchema } from '../inputTypeSchemas/menu_itemsUncheckedCreateInputSchema';
import { menu_itemsUpdateInputSchema } from '../inputTypeSchemas/menu_itemsUpdateInputSchema';
import { menu_itemsUncheckedUpdateInputSchema } from '../inputTypeSchemas/menu_itemsUncheckedUpdateInputSchema';
import { menu_categoriesArgsSchema } from '../outputTypeSchemas/menu_categoriesArgsSchema';
import { documentsFindManyArgsSchema } from '../outputTypeSchemas/documentsFindManyArgsSchema';
import { Menu_itemsCountOutputTypeArgsSchema } from '../outputTypeSchemas/Menu_itemsCountOutputTypeArgsSchema';
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const menu_itemsSelectSchema: z.ZodType<Prisma.menu_itemsSelect> = z
	.object({
		menu_item_id: z.boolean().optional(),
		names: z.boolean().optional(),
		image: z.boolean().optional(),
		description: z.boolean().optional(),
		allergens: z.boolean().optional(),
		spicy_level: z.boolean().optional(),
		unit_size: z.boolean().optional(),
		price: z.boolean().optional(),
		discount: z.boolean().optional(),
		sides: z.boolean().optional(),
		extras: z.boolean().optional(),
		ingredients: z.boolean().optional(),
		availability: z.boolean().optional(),
		business_id: z.boolean().optional(),
		menu_category_id: z.boolean().optional(),
		daily_date: z.boolean().optional(),
		is_enabled: z.boolean().optional(),
		menu_category_order_index: z.boolean().optional(),
		menu_category: z.union([z.boolean(), z.lazy(() => menu_categoriesArgsSchema)]).optional(),
		documents: z.union([z.boolean(), z.lazy(() => documentsFindManyArgsSchema)]).optional(),
		_count: z.union([z.boolean(), z.lazy(() => Menu_itemsCountOutputTypeArgsSchema)]).optional(),
	})
	.strict();

export const menu_itemsUpsertArgsSchema: z.ZodType<Prisma.menu_itemsUpsertArgs> = z
	.object({
		select: menu_itemsSelectSchema.optional(),
		include: menu_itemsIncludeSchema.optional(),
		where: menu_itemsWhereUniqueInputSchema,
		create: z.union([menu_itemsCreateInputSchema, menu_itemsUncheckedCreateInputSchema]),
		update: z.union([menu_itemsUpdateInputSchema, menu_itemsUncheckedUpdateInputSchema]),
	})
	.strict();

export default menu_itemsUpsertArgsSchema;
