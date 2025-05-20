import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { driver_activity_settingsUpdateInputSchema } from '../inputTypeSchemas/driver_activity_settingsUpdateInputSchema'
import { driver_activity_settingsUncheckedUpdateInputSchema } from '../inputTypeSchemas/driver_activity_settingsUncheckedUpdateInputSchema'
import { driver_activity_settingsWhereUniqueInputSchema } from '../inputTypeSchemas/driver_activity_settingsWhereUniqueInputSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const driver_activity_settingsSelectSchema: z.ZodType<Prisma.driver_activity_settingsSelect> = z.object({
  driver_activity_settings_id: z.boolean().optional(),
  first_offline_lockout: z.boolean().optional(),
  second_offline_lockout: z.boolean().optional(),
  online_timeout: z.boolean().optional(),
  created_at: z.boolean().optional(),
  updated_at: z.boolean().optional(),
  active: z.boolean().optional(),
}).strict()

export const driver_activity_settingsUpdateArgsSchema: z.ZodType<Prisma.driver_activity_settingsUpdateArgs> = z.object({
  select: driver_activity_settingsSelectSchema.optional(),
  data: z.union([ driver_activity_settingsUpdateInputSchema,driver_activity_settingsUncheckedUpdateInputSchema ]),
  where: driver_activity_settingsWhereUniqueInputSchema,
}).strict() ;

export default driver_activity_settingsUpdateArgsSchema;
