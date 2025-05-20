import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { driver_activity_logsWhereInputSchema } from '../inputTypeSchemas/driver_activity_logsWhereInputSchema';
import { driver_activity_logsOrderByWithAggregationInputSchema } from '../inputTypeSchemas/driver_activity_logsOrderByWithAggregationInputSchema';
import { Driver_activity_logsScalarFieldEnumSchema } from '../inputTypeSchemas/Driver_activity_logsScalarFieldEnumSchema';
import { driver_activity_logsScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/driver_activity_logsScalarWhereWithAggregatesInputSchema';

export const driver_activity_logsGroupByArgsSchema: z.ZodType<Prisma.driver_activity_logsGroupByArgs> = z
	.object({
		where: driver_activity_logsWhereInputSchema.optional(),
		orderBy: z
			.union([
				driver_activity_logsOrderByWithAggregationInputSchema.array(),
				driver_activity_logsOrderByWithAggregationInputSchema,
			])
			.optional(),
		by: Driver_activity_logsScalarFieldEnumSchema.array(),
		having: driver_activity_logsScalarWhereWithAggregatesInputSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
	})
	.strict();

export default driver_activity_logsGroupByArgsSchema;
