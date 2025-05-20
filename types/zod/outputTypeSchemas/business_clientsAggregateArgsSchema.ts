import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { business_clientsWhereInputSchema } from '../inputTypeSchemas/business_clientsWhereInputSchema';
import { business_clientsOrderByWithRelationInputSchema } from '../inputTypeSchemas/business_clientsOrderByWithRelationInputSchema';
import { business_clientsWhereUniqueInputSchema } from '../inputTypeSchemas/business_clientsWhereUniqueInputSchema';

export const business_clientsAggregateArgsSchema: z.ZodType<Prisma.business_clientsAggregateArgs> = z
	.object({
		where: business_clientsWhereInputSchema.optional(),
		orderBy: z
			.union([
				business_clientsOrderByWithRelationInputSchema.array(),
				business_clientsOrderByWithRelationInputSchema,
			])
			.optional(),
		cursor: business_clientsWhereUniqueInputSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
	})
	.strict();

export default business_clientsAggregateArgsSchema;
