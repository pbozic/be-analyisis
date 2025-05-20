import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { driversCreateNestedOneWithoutDriver_municipalitiesInputSchema } from './driversCreateNestedOneWithoutDriver_municipalitiesInputSchema';
import { municipalitiesCreateNestedOneWithoutDriver_municipalitiesInputSchema } from './municipalitiesCreateNestedOneWithoutDriver_municipalitiesInputSchema';

export const driver_municipalitiesCreateInputSchema: z.ZodType<Prisma.driver_municipalitiesCreateInput> = z.object({
  driver_municipalities_id: z.string().uuid().optional(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  drivers: z.lazy(() => driversCreateNestedOneWithoutDriver_municipalitiesInputSchema),
  municipalities: z.lazy(() => municipalitiesCreateNestedOneWithoutDriver_municipalitiesInputSchema)
}).strict();

export default driver_municipalitiesCreateInputSchema;
