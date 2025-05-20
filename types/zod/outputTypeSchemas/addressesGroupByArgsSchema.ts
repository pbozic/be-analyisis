import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { addressesWhereInputSchema } from '../inputTypeSchemas/addressesWhereInputSchema';
import { addressesOrderByWithAggregationInputSchema } from '../inputTypeSchemas/addressesOrderByWithAggregationInputSchema';
import { AddressesScalarFieldEnumSchema } from '../inputTypeSchemas/AddressesScalarFieldEnumSchema';
import { addressesScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/addressesScalarWhereWithAggregatesInputSchema';

export const addressesGroupByArgsSchema: z.ZodType<Prisma.addressesGroupByArgs> = z
	.object({
		where: addressesWhereInputSchema.optional(),
		orderBy: z
			.union([addressesOrderByWithAggregationInputSchema.array(), addressesOrderByWithAggregationInputSchema])
			.optional(),
		by: AddressesScalarFieldEnumSchema.array(),
		having: addressesScalarWhereWithAggregatesInputSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
	})
	.strict();

export default addressesGroupByArgsSchema;
