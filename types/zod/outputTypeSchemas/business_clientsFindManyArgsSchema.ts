import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { business_clientsIncludeSchema } from '../inputTypeSchemas/business_clientsIncludeSchema';
import { business_clientsWhereInputSchema } from '../inputTypeSchemas/business_clientsWhereInputSchema';
import { business_clientsOrderByWithRelationInputSchema } from '../inputTypeSchemas/business_clientsOrderByWithRelationInputSchema';
import { business_clientsWhereUniqueInputSchema } from '../inputTypeSchemas/business_clientsWhereUniqueInputSchema';
import { Business_clientsScalarFieldEnumSchema } from '../inputTypeSchemas/Business_clientsScalarFieldEnumSchema';
import { businessArgsSchema } from '../outputTypeSchemas/businessArgsSchema';
import { taxi_ordersFindManyArgsSchema } from '../outputTypeSchemas/taxi_ordersFindManyArgsSchema';
import { Business_clientsCountOutputTypeArgsSchema } from '../outputTypeSchemas/Business_clientsCountOutputTypeArgsSchema';
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const business_clientsSelectSchema: z.ZodType<Prisma.business_clientsSelect> = z
	.object({
		business_clients_id: z.boolean().optional(),
		created_at: z.boolean().optional(),
		updated_at: z.boolean().optional(),
		business_id: z.boolean().optional(),
		first_name: z.boolean().optional(),
		last_name: z.boolean().optional(),
		email: z.boolean().optional(),
		telephone: z.boolean().optional(),
		telephone_code: z.boolean().optional(),
		telephone_number: z.boolean().optional(),
		business: z.union([z.boolean(), z.lazy(() => businessArgsSchema)]).optional(),
		taxi_orders: z.union([z.boolean(), z.lazy(() => taxi_ordersFindManyArgsSchema)]).optional(),
		_count: z.union([z.boolean(), z.lazy(() => Business_clientsCountOutputTypeArgsSchema)]).optional(),
	})
	.strict();

export const business_clientsFindManyArgsSchema: z.ZodType<Prisma.business_clientsFindManyArgs> = z
	.object({
		select: business_clientsSelectSchema.optional(),
		include: business_clientsIncludeSchema.optional(),
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
		distinct: z
			.union([Business_clientsScalarFieldEnumSchema, Business_clientsScalarFieldEnumSchema.array()])
			.optional(),
	})
	.strict();

export default business_clientsFindManyArgsSchema;
