import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { promo_adsWhereInputSchema } from '../inputTypeSchemas/promo_adsWhereInputSchema';
import { promo_adsOrderByWithRelationInputSchema } from '../inputTypeSchemas/promo_adsOrderByWithRelationInputSchema';
import { promo_adsWhereUniqueInputSchema } from '../inputTypeSchemas/promo_adsWhereUniqueInputSchema';

export const promo_adsAggregateArgsSchema: z.ZodType<Prisma.promo_adsAggregateArgs> = z
	.object({
		where: promo_adsWhereInputSchema.optional(),
		orderBy: z
			.union([promo_adsOrderByWithRelationInputSchema.array(), promo_adsOrderByWithRelationInputSchema])
			.optional(),
		cursor: promo_adsWhereUniqueInputSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
	})
	.strict();

export default promo_adsAggregateArgsSchema;
