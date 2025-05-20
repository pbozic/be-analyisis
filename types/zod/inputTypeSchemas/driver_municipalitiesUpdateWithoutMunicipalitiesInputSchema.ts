import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { driversUpdateOneRequiredWithoutDriver_municipalitiesNestedInputSchema } from './driversUpdateOneRequiredWithoutDriver_municipalitiesNestedInputSchema';

export const driver_municipalitiesUpdateWithoutMunicipalitiesInputSchema: z.ZodType<Prisma.driver_municipalitiesUpdateWithoutMunicipalitiesInput> = z.object({
  driver_municipalities_id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  drivers: z.lazy(() => driversUpdateOneRequiredWithoutDriver_municipalitiesNestedInputSchema).optional()
}).strict();

export default driver_municipalitiesUpdateWithoutMunicipalitiesInputSchema;
