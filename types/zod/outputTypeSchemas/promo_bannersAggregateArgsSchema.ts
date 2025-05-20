import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { promo_bannersWhereInputSchema } from '../inputTypeSchemas/promo_bannersWhereInputSchema';
import { promo_bannersOrderByWithRelationInputSchema } from '../inputTypeSchemas/promo_bannersOrderByWithRelationInputSchema';
import { promo_bannersWhereUniqueInputSchema } from '../inputTypeSchemas/promo_bannersWhereUniqueInputSchema';

export const promo_bannersAggregateArgsSchema: z.ZodType<Prisma.promo_bannersAggregateArgs> = z
	.object({
		where: promo_bannersWhereInputSchema.optional(),
		orderBy: z
			.union([promo_bannersOrderByWithRelationInputSchema.array(), promo_bannersOrderByWithRelationInputSchema])
			.optional(),
		cursor: promo_bannersWhereUniqueInputSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
	})
	.strict();

export default promo_bannersAggregateArgsSchema;
