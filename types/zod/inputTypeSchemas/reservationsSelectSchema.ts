import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { businessArgsSchema } from "../outputTypeSchemas/businessArgsSchema"
import { usersArgsSchema } from "../outputTypeSchemas/usersArgsSchema"

export const reservationsSelectSchema: z.ZodType<Prisma.reservationsSelect> = z.object({
  reservation_id: z.boolean().optional(),
  seats: z.boolean().optional(),
  date: z.boolean().optional(),
  time: z.boolean().optional(),
  datetime: z.boolean().optional(),
  created_at: z.boolean().optional(),
  updated_at: z.boolean().optional(),
  business_id: z.boolean().optional(),
  user_id: z.boolean().optional(),
  status: z.boolean().optional(),
  table: z.boolean().optional(),
  business: z.union([z.boolean(),z.lazy(() => businessArgsSchema)]).optional(),
  user: z.union([z.boolean(),z.lazy(() => usersArgsSchema)]).optional(),
}).strict()

export default reservationsSelectSchema;
