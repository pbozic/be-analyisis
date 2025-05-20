import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const driver_activity_settingsSelectSchema: z.ZodType<Prisma.driver_activity_settingsSelect> = z.object({
  driver_activity_settings_id: z.boolean().optional(),
  first_offline_lockout: z.boolean().optional(),
  second_offline_lockout: z.boolean().optional(),
  online_timeout: z.boolean().optional(),
  created_at: z.boolean().optional(),
  updated_at: z.boolean().optional(),
  active: z.boolean().optional(),
}).strict()

export default driver_activity_settingsSelectSchema;
