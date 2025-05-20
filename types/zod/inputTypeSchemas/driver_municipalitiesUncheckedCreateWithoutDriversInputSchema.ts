import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const driver_municipalitiesUncheckedCreateWithoutDriversInputSchema: z.ZodType<Prisma.driver_municipalitiesUncheckedCreateWithoutDriversInput> = z.object({
  driver_municipalities_id: z.string().uuid().optional(),
  municipalities_id: z.string(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional()
}).strict();

export default driver_municipalitiesUncheckedCreateWithoutDriversInputSchema;
