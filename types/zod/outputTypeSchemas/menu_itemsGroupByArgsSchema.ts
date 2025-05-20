import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { menu_itemsWhereInputSchema } from '../inputTypeSchemas/menu_itemsWhereInputSchema';
import { menu_itemsOrderByWithAggregationInputSchema } from '../inputTypeSchemas/menu_itemsOrderByWithAggregationInputSchema';
import { Menu_itemsScalarFieldEnumSchema } from '../inputTypeSchemas/Menu_itemsScalarFieldEnumSchema';
import { menu_itemsScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/menu_itemsScalarWhereWithAggregatesInputSchema';

export const menu_itemsGroupByArgsSchema: z.ZodType<Prisma.menu_itemsGroupByArgs> = z
	.object({
		where: menu_itemsWhereInputSchema.optional(),
		orderBy: z
			.union([menu_itemsOrderByWithAggregationInputSchema.array(), menu_itemsOrderByWithAggregationInputSchema])
			.optional(),
		by: Menu_itemsScalarFieldEnumSchema.array(),
		having: menu_itemsScalarWhereWithAggregatesInputSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
	})
	.strict();

export default menu_itemsGroupByArgsSchema;
