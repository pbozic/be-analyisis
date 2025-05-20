import { z } from 'zod';
import { ACTIVITY_TYPESchema } from '../inputTypeSchemas/ACTIVITY_TYPESchema'
import { driversWithRelationsSchema } from './driversSchema'
import type { driversWithRelations } from './driversSchema'

/////////////////////////////////////////
// DRIVER ACTIVITY LOGS SCHEMA
/////////////////////////////////////////

export const driver_activity_logsSchema = z.object({
  activity_type: ACTIVITY_TYPESchema,
  driver_activity_log_id: z.string().uuid(),
  driver_id: z.string(),
  started_at: z.coerce.date(),
  ended_at: z.coerce.date().nullable(),
  timeout_at: z.coerce.date().nullable(),
  lockout_until: z.coerce.date().nullable(),
})

export type driver_activity_logs = z.infer<typeof driver_activity_logsSchema>

/////////////////////////////////////////
// DRIVER ACTIVITY LOGS RELATION SCHEMA
/////////////////////////////////////////

export type driver_activity_logsRelations = {
  driver: driversWithRelations;
};

export type driver_activity_logsWithRelations = z.infer<typeof driver_activity_logsSchema> & driver_activity_logsRelations

export const driver_activity_logsWithRelationsSchema: z.ZodType<driver_activity_logsWithRelations> = driver_activity_logsSchema.merge(z.object({
  driver: z.lazy(() => driversWithRelationsSchema),
}))

export default driver_activity_logsSchema;
