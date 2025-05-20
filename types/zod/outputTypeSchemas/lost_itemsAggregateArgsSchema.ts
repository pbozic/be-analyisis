import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { lost_itemsWhereInputSchema } from '../inputTypeSchemas/lost_itemsWhereInputSchema';
import { lost_itemsOrderByWithRelationInputSchema } from '../inputTypeSchemas/lost_itemsOrderByWithRelationInputSchema';
import { lost_itemsWhereUniqueInputSchema } from '../inputTypeSchemas/lost_itemsWhereUniqueInputSchema';

export const lost_itemsAggregateArgsSchema: z.ZodType<Prisma.lost_itemsAggregateArgs> = z
	.object({
		where: lost_itemsWhereInputSchema.optional(),
		orderBy: z
			.union([lost_itemsOrderByWithRelationInputSchema.array(), lost_itemsOrderByWithRelationInputSchema])
			.optional(),
		cursor: lost_itemsWhereUniqueInputSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
	})
	.strict();

export default lost_itemsAggregateArgsSchema;
