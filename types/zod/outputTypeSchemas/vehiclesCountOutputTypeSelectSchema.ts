import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const vehiclesCountOutputTypeSelectSchema: z.ZodType<Prisma.vehiclesCountOutputTypeSelect> = z.object({
  documents: z.boolean().optional(),
  drivers: z.boolean().optional(),
  taxi_orders: z.boolean().optional(),
  delivery_orders: z.boolean().optional(),
}).strict();

export default vehiclesCountOutputTypeSelectSchema;
