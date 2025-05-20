import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { addressesWhereInputSchema } from '../inputTypeSchemas/addressesWhereInputSchema';
import { addressesOrderByWithRelationInputSchema } from '../inputTypeSchemas/addressesOrderByWithRelationInputSchema';
import { addressesWhereUniqueInputSchema } from '../inputTypeSchemas/addressesWhereUniqueInputSchema';

export const addressesAggregateArgsSchema: z.ZodType<Prisma.addressesAggregateArgs> = z
	.object({
		where: addressesWhereInputSchema.optional(),
		orderBy: z
			.union([addressesOrderByWithRelationInputSchema.array(), addressesOrderByWithRelationInputSchema])
			.optional(),
		cursor: addressesWhereUniqueInputSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
	})
	.strict();

export default addressesAggregateArgsSchema;
