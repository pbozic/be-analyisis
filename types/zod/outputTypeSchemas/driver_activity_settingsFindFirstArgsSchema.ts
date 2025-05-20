import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { driver_activity_settingsWhereInputSchema } from '../inputTypeSchemas/driver_activity_settingsWhereInputSchema';
import { driver_activity_settingsOrderByWithRelationInputSchema } from '../inputTypeSchemas/driver_activity_settingsOrderByWithRelationInputSchema';
import { driver_activity_settingsWhereUniqueInputSchema } from '../inputTypeSchemas/driver_activity_settingsWhereUniqueInputSchema';
import { Driver_activity_settingsScalarFieldEnumSchema } from '../inputTypeSchemas/Driver_activity_settingsScalarFieldEnumSchema';
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

export const driver_activity_settingsFindFirstArgsSchema: z.ZodType<Prisma.driver_activity_settingsFindFirstArgs> = z
	.object({
		select: driver_activity_settingsSelectSchema.optional(),
		where: driver_activity_settingsWhereInputSchema.optional(),
		orderBy: z
			.union([
				driver_activity_settingsOrderByWithRelationInputSchema.array(),
				driver_activity_settingsOrderByWithRelationInputSchema,
			])
			.optional(),
		cursor: driver_activity_settingsWhereUniqueInputSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		distinct: z
			.union([
				Driver_activity_settingsScalarFieldEnumSchema,
				Driver_activity_settingsScalarFieldEnumSchema.array(),
			])
			.optional(),
	})
	.strict();

export default driver_activity_settingsFindFirstArgsSchema;
