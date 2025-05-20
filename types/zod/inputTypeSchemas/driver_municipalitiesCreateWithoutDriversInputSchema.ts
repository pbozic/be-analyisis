import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { municipalitiesCreateNestedOneWithoutDriver_municipalitiesInputSchema } from './municipalitiesCreateNestedOneWithoutDriver_municipalitiesInputSchema';

export const driver_municipalitiesCreateWithoutDriversInputSchema: z.ZodType<Prisma.driver_municipalitiesCreateWithoutDriversInput> = z.object({
  driver_municipalities_id: z.string().uuid().optional(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  municipalities: z.lazy(() => municipalitiesCreateNestedOneWithoutDriver_municipalitiesInputSchema)
}).strict();

export default driver_municipalitiesCreateWithoutDriversInputSchema;
