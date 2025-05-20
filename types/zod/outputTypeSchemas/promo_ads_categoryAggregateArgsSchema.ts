import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { promo_ads_categoryWhereInputSchema } from '../inputTypeSchemas/promo_ads_categoryWhereInputSchema';
import { promo_ads_categoryOrderByWithRelationInputSchema } from '../inputTypeSchemas/promo_ads_categoryOrderByWithRelationInputSchema';
import { promo_ads_categoryWhereUniqueInputSchema } from '../inputTypeSchemas/promo_ads_categoryWhereUniqueInputSchema';

export const promo_ads_categoryAggregateArgsSchema: z.ZodType<Prisma.promo_ads_categoryAggregateArgs> = z
	.object({
		where: promo_ads_categoryWhereInputSchema.optional(),
		orderBy: z
			.union([
				promo_ads_categoryOrderByWithRelationInputSchema.array(),
				promo_ads_categoryOrderByWithRelationInputSchema,
			])
			.optional(),
		cursor: promo_ads_categoryWhereUniqueInputSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
	})
	.strict();

export default promo_ads_categoryAggregateArgsSchema;
