import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { menu_itemsWhereInputSchema } from '../inputTypeSchemas/menu_itemsWhereInputSchema';
import { menu_itemsOrderByWithRelationInputSchema } from '../inputTypeSchemas/menu_itemsOrderByWithRelationInputSchema';
import { menu_itemsWhereUniqueInputSchema } from '../inputTypeSchemas/menu_itemsWhereUniqueInputSchema';

export const menu_itemsAggregateArgsSchema: z.ZodType<Prisma.menu_itemsAggregateArgs> = z
	.object({
		where: menu_itemsWhereInputSchema.optional(),
		orderBy: z
			.union([menu_itemsOrderByWithRelationInputSchema.array(), menu_itemsOrderByWithRelationInputSchema])
			.optional(),
		cursor: menu_itemsWhereUniqueInputSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
	})
	.strict();

export default menu_itemsAggregateArgsSchema;
