import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { referralsWhereInputSchema } from '../inputTypeSchemas/referralsWhereInputSchema';
import { referralsOrderByWithRelationInputSchema } from '../inputTypeSchemas/referralsOrderByWithRelationInputSchema';
import { referralsWhereUniqueInputSchema } from '../inputTypeSchemas/referralsWhereUniqueInputSchema';

export const referralsAggregateArgsSchema: z.ZodType<Prisma.referralsAggregateArgs> = z
	.object({
		where: referralsWhereInputSchema.optional(),
		orderBy: z
			.union([referralsOrderByWithRelationInputSchema.array(), referralsOrderByWithRelationInputSchema])
			.optional(),
		cursor: referralsWhereUniqueInputSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
	})
	.strict();

export default referralsAggregateArgsSchema;
