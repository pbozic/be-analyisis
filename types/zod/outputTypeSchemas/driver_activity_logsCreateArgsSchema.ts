import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { driver_activity_logsIncludeSchema } from '../inputTypeSchemas/driver_activity_logsIncludeSchema';
import { driver_activity_logsCreateInputSchema } from '../inputTypeSchemas/driver_activity_logsCreateInputSchema';
import { driver_activity_logsUncheckedCreateInputSchema } from '../inputTypeSchemas/driver_activity_logsUncheckedCreateInputSchema';
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

export const driver_activity_logsCreateArgsSchema: z.ZodType<Prisma.driver_activity_logsCreateArgs> = z
	.object({
		select: driver_activity_logsSelectSchema.optional(),
		include: driver_activity_logsIncludeSchema.optional(),
		data: z.union([driver_activity_logsCreateInputSchema, driver_activity_logsUncheckedCreateInputSchema]),
	})
	.strict();

export default driver_activity_logsCreateArgsSchema;
