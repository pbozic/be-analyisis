import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { driver_activity_settingsWhereInputSchema } from '../inputTypeSchemas/driver_activity_settingsWhereInputSchema';
import { driver_activity_settingsOrderByWithAggregationInputSchema } from '../inputTypeSchemas/driver_activity_settingsOrderByWithAggregationInputSchema';
import { Driver_activity_settingsScalarFieldEnumSchema } from '../inputTypeSchemas/Driver_activity_settingsScalarFieldEnumSchema';
import { driver_activity_settingsScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/driver_activity_settingsScalarWhereWithAggregatesInputSchema';

export const driver_activity_settingsGroupByArgsSchema: z.ZodType<Prisma.driver_activity_settingsGroupByArgs> = z
	.object({
		where: driver_activity_settingsWhereInputSchema.optional(),
		orderBy: z
			.union([
				driver_activity_settingsOrderByWithAggregationInputSchema.array(),
				driver_activity_settingsOrderByWithAggregationInputSchema,
			])
			.optional(),
		by: Driver_activity_settingsScalarFieldEnumSchema.array(),
		having: driver_activity_settingsScalarWhereWithAggregatesInputSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
	})
	.strict();

export default driver_activity_settingsGroupByArgsSchema;
