import { z } from 'zod';

/////////////////////////////////////////
// DRIVER ACTIVITY SETTINGS SCHEMA
/////////////////////////////////////////

export const driver_activity_settingsSchema = z.object({
  driver_activity_settings_id: z.string().uuid(),
  first_offline_lockout: z.number().int(),
  second_offline_lockout: z.number().int(),
  online_timeout: z.number().int(),
  created_at: z.coerce.date(),
  updated_at: z.coerce.date(),
  active: z.boolean(),
})

export type driver_activity_settings = z.infer<typeof driver_activity_settingsSchema>

export default driver_activity_settingsSchema;
