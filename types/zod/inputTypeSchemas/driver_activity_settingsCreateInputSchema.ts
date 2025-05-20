import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const driver_activity_settingsCreateInputSchema: z.ZodType<Prisma.driver_activity_settingsCreateInput> = z.object({
  driver_activity_settings_id: z.string().uuid().optional(),
  first_offline_lockout: z.number().int().optional(),
  second_offline_lockout: z.number().int().optional(),
  online_timeout: z.number().int().optional(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  active: z.boolean().optional()
}).strict();

export default driver_activity_settingsCreateInputSchema;
