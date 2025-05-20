import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { driversWhereInputSchema } from '../inputTypeSchemas/driversWhereInputSchema';
import { driversOrderByWithRelationInputSchema } from '../inputTypeSchemas/driversOrderByWithRelationInputSchema';
import { driversWhereUniqueInputSchema } from '../inputTypeSchemas/driversWhereUniqueInputSchema';

export const driversAggregateArgsSchema: z.ZodType<Prisma.driversAggregateArgs> = z
	.object({
		where: driversWhereInputSchema.optional(),
		orderBy: z
			.union([driversOrderByWithRelationInputSchema.array(), driversOrderByWithRelationInputSchema])
			.optional(),
		cursor: driversWhereUniqueInputSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
	})
	.strict();

export default driversAggregateArgsSchema;
