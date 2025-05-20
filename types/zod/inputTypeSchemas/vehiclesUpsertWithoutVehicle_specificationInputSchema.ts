import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { vehiclesUpdateWithoutVehicle_specificationInputSchema } from './vehiclesUpdateWithoutVehicle_specificationInputSchema';
import { vehiclesUncheckedUpdateWithoutVehicle_specificationInputSchema } from './vehiclesUncheckedUpdateWithoutVehicle_specificationInputSchema';
import { vehiclesCreateWithoutVehicle_specificationInputSchema } from './vehiclesCreateWithoutVehicle_specificationInputSchema';
import { vehiclesUncheckedCreateWithoutVehicle_specificationInputSchema } from './vehiclesUncheckedCreateWithoutVehicle_specificationInputSchema';
import { vehiclesWhereInputSchema } from './vehiclesWhereInputSchema';

export const vehiclesUpsertWithoutVehicle_specificationInputSchema: z.ZodType<Prisma.vehiclesUpsertWithoutVehicle_specificationInput> = z.object({
  update: z.union([ z.lazy(() => vehiclesUpdateWithoutVehicle_specificationInputSchema),z.lazy(() => vehiclesUncheckedUpdateWithoutVehicle_specificationInputSchema) ]),
  create: z.union([ z.lazy(() => vehiclesCreateWithoutVehicle_specificationInputSchema),z.lazy(() => vehiclesUncheckedCreateWithoutVehicle_specificationInputSchema) ]),
  where: z.lazy(() => vehiclesWhereInputSchema).optional()
}).strict();

export default vehiclesUpsertWithoutVehicle_specificationInputSchema;
