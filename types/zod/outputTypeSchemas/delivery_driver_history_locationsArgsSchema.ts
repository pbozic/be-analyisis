import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { delivery_driver_history_locationsSelectSchema } from '../inputTypeSchemas/delivery_driver_history_locationsSelectSchema';
import { delivery_driver_history_locationsIncludeSchema } from '../inputTypeSchemas/delivery_driver_history_locationsIncludeSchema';

export const delivery_driver_history_locationsArgsSchema: z.ZodType<Prisma.delivery_driver_history_locationsDefaultArgs> = z.object({
  select: z.lazy(() => delivery_driver_history_locationsSelectSchema).optional(),
  include: z.lazy(() => delivery_driver_history_locationsIncludeSchema).optional(),
}).strict();

export default delivery_driver_history_locationsArgsSchema;
