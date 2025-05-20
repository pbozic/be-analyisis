import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { flagsWhereInputSchema } from '../inputTypeSchemas/flagsWhereInputSchema';
import { flagsOrderByWithRelationInputSchema } from '../inputTypeSchemas/flagsOrderByWithRelationInputSchema';
import { flagsWhereUniqueInputSchema } from '../inputTypeSchemas/flagsWhereUniqueInputSchema';

export const flagsAggregateArgsSchema: z.ZodType<Prisma.flagsAggregateArgs> = z
	.object({
		where: flagsWhereInputSchema.optional(),
		orderBy: z.union([flagsOrderByWithRelationInputSchema.array(), flagsOrderByWithRelationInputSchema]).optional(),
		cursor: flagsWhereUniqueInputSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
	})
	.strict();

export default flagsAggregateArgsSchema;
