import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { promo_sectionsWhereInputSchema } from '../inputTypeSchemas/promo_sectionsWhereInputSchema';
import { promo_sectionsOrderByWithAggregationInputSchema } from '../inputTypeSchemas/promo_sectionsOrderByWithAggregationInputSchema';
import { Promo_sectionsScalarFieldEnumSchema } from '../inputTypeSchemas/Promo_sectionsScalarFieldEnumSchema';
import { promo_sectionsScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/promo_sectionsScalarWhereWithAggregatesInputSchema';

export const promo_sectionsGroupByArgsSchema: z.ZodType<Prisma.promo_sectionsGroupByArgs> = z
	.object({
		where: promo_sectionsWhereInputSchema.optional(),
		orderBy: z
			.union([
				promo_sectionsOrderByWithAggregationInputSchema.array(),
				promo_sectionsOrderByWithAggregationInputSchema,
			])
			.optional(),
		by: Promo_sectionsScalarFieldEnumSchema.array(),
		having: promo_sectionsScalarWhereWithAggregatesInputSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
	})
	.strict();

export default promo_sectionsGroupByArgsSchema;
