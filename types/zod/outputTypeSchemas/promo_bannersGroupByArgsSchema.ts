import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { promo_bannersWhereInputSchema } from '../inputTypeSchemas/promo_bannersWhereInputSchema';
import { promo_bannersOrderByWithAggregationInputSchema } from '../inputTypeSchemas/promo_bannersOrderByWithAggregationInputSchema';
import { Promo_bannersScalarFieldEnumSchema } from '../inputTypeSchemas/Promo_bannersScalarFieldEnumSchema';
import { promo_bannersScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/promo_bannersScalarWhereWithAggregatesInputSchema';

export const promo_bannersGroupByArgsSchema: z.ZodType<Prisma.promo_bannersGroupByArgs> = z
	.object({
		where: promo_bannersWhereInputSchema.optional(),
		orderBy: z
			.union([
				promo_bannersOrderByWithAggregationInputSchema.array(),
				promo_bannersOrderByWithAggregationInputSchema,
			])
			.optional(),
		by: Promo_bannersScalarFieldEnumSchema.array(),
		having: promo_bannersScalarWhereWithAggregatesInputSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
	})
	.strict();

export default promo_bannersGroupByArgsSchema;
