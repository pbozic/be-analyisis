import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { driver_activity_settingsWhereUniqueInputSchema } from '../inputTypeSchemas/driver_activity_settingsWhereUniqueInputSchema';
import { driver_activity_settingsCreateInputSchema } from '../inputTypeSchemas/driver_activity_settingsCreateInputSchema';
import { driver_activity_settingsUncheckedCreateInputSchema } from '../inputTypeSchemas/driver_activity_settingsUncheckedCreateInputSchema';
import { driver_activity_settingsUpdateInputSchema } from '../inputTypeSchemas/driver_activity_settingsUpdateInputSchema';
import { driver_activity_settingsUncheckedUpdateInputSchema } from '../inputTypeSchemas/driver_activity_settingsUncheckedUpdateInputSchema';
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const driver_activity_settingsSelectSchema: z.ZodType<Prisma.driver_activity_settingsSelect> = z
	.object({
		driver_activity_settings_id: z.boolean().optional(),
		first_offline_lockout: z.boolean().optional(),
		second_offline_lockout: z.boolean().optional(),
		online_timeout: z.boolean().optional(),
		created_at: z.boolean().optional(),
		updated_at: z.boolean().optional(),
		active: z.boolean().optional(),
	})
	.strict();

export const driver_activity_settingsUpsertArgsSchema: z.ZodType<Prisma.driver_activity_settingsUpsertArgs> = z
	.object({
		select: driver_activity_settingsSelectSchema.optional(),
		where: driver_activity_settingsWhereUniqueInputSchema,
		create: z.union([
			driver_activity_settingsCreateInputSchema,
			driver_activity_settingsUncheckedCreateInputSchema,
		]),
		update: z.union([
			driver_activity_settingsUpdateInputSchema,
			driver_activity_settingsUncheckedUpdateInputSchema,
		]),
	})
	.strict();

export default driver_activity_settingsUpsertArgsSchema;
