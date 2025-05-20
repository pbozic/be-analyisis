import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { driver_activity_logsIncludeSchema } from '../inputTypeSchemas/driver_activity_logsIncludeSchema';
import { driver_activity_logsWhereInputSchema } from '../inputTypeSchemas/driver_activity_logsWhereInputSchema';
import { driver_activity_logsOrderByWithRelationInputSchema } from '../inputTypeSchemas/driver_activity_logsOrderByWithRelationInputSchema';
import { driver_activity_logsWhereUniqueInputSchema } from '../inputTypeSchemas/driver_activity_logsWhereUniqueInputSchema';
import { Driver_activity_logsScalarFieldEnumSchema } from '../inputTypeSchemas/Driver_activity_logsScalarFieldEnumSchema';
import { driversArgsSchema } from '../outputTypeSchemas/driversArgsSchema';
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const driver_activity_logsSelectSchema: z.ZodType<Prisma.driver_activity_logsSelect> = z
	.object({
		driver_activity_log_id: z.boolean().optional(),
		driver_id: z.boolean().optional(),
		activity_type: z.boolean().optional(),
		started_at: z.boolean().optional(),
		ended_at: z.boolean().optional(),
		timeout_at: z.boolean().optional(),
		lockout_until: z.boolean().optional(),
		driver: z.union([z.boolean(), z.lazy(() => driversArgsSchema)]).optional(),
	})
	.strict();

export const driver_activity_logsFindFirstOrThrowArgsSchema: z.ZodType<Prisma.driver_activity_logsFindFirstOrThrowArgs> =
	z
		.object({
			select: driver_activity_logsSelectSchema.optional(),
			include: driver_activity_logsIncludeSchema.optional(),
			where: driver_activity_logsWhereInputSchema.optional(),
			orderBy: z
				.union([
					driver_activity_logsOrderByWithRelationInputSchema.array(),
					driver_activity_logsOrderByWithRelationInputSchema,
				])
				.optional(),
			cursor: driver_activity_logsWhereUniqueInputSchema.optional(),
			take: z.number().optional(),
			skip: z.number().optional(),
			distinct: z
				.union([Driver_activity_logsScalarFieldEnumSchema, Driver_activity_logsScalarFieldEnumSchema.array()])
				.optional(),
		})
		.strict();

export default driver_activity_logsFindFirstOrThrowArgsSchema;
