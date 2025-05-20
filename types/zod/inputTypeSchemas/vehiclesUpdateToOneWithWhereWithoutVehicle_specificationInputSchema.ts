import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { vehiclesWhereInputSchema } from './vehiclesWhereInputSchema';
import { vehiclesUpdateWithoutVehicle_specificationInputSchema } from './vehiclesUpdateWithoutVehicle_specificationInputSchema';
import { vehiclesUncheckedUpdateWithoutVehicle_specificationInputSchema } from './vehiclesUncheckedUpdateWithoutVehicle_specificationInputSchema';

export const vehiclesUpdateToOneWithWhereWithoutVehicle_specificationInputSchema: z.ZodType<Prisma.vehiclesUpdateToOneWithWhereWithoutVehicle_specificationInput> = z.object({
  where: z.lazy(() => vehiclesWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => vehiclesUpdateWithoutVehicle_specificationInputSchema),z.lazy(() => vehiclesUncheckedUpdateWithoutVehicle_specificationInputSchema) ]),
}).strict();

export default vehiclesUpdateToOneWithWhereWithoutVehicle_specificationInputSchema;
