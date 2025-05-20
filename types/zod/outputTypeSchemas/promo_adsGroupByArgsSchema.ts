import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { promo_adsWhereInputSchema } from '../inputTypeSchemas/promo_adsWhereInputSchema';
import { promo_adsOrderByWithAggregationInputSchema } from '../inputTypeSchemas/promo_adsOrderByWithAggregationInputSchema';
import { Promo_adsScalarFieldEnumSchema } from '../inputTypeSchemas/Promo_adsScalarFieldEnumSchema';
import { promo_adsScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/promo_adsScalarWhereWithAggregatesInputSchema';

export const promo_adsGroupByArgsSchema: z.ZodType<Prisma.promo_adsGroupByArgs> = z
	.object({
		where: promo_adsWhereInputSchema.optional(),
		orderBy: z
			.union([promo_adsOrderByWithAggregationInputSchema.array(), promo_adsOrderByWithAggregationInputSchema])
			.optional(),
		by: Promo_adsScalarFieldEnumSchema.array(),
		having: promo_adsScalarWhereWithAggregatesInputSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
	})
	.strict();

export default promo_adsGroupByArgsSchema;
