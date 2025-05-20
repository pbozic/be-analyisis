import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { vehiclesWhereUniqueInputSchema } from './vehiclesWhereUniqueInputSchema';
import { vehiclesCreateWithoutVehicle_specificationInputSchema } from './vehiclesCreateWithoutVehicle_specificationInputSchema';
import { vehiclesUncheckedCreateWithoutVehicle_specificationInputSchema } from './vehiclesUncheckedCreateWithoutVehicle_specificationInputSchema';

export const vehiclesCreateOrConnectWithoutVehicle_specificationInputSchema: z.ZodType<Prisma.vehiclesCreateOrConnectWithoutVehicle_specificationInput> = z.object({
  where: z.lazy(() => vehiclesWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => vehiclesCreateWithoutVehicle_specificationInputSchema),z.lazy(() => vehiclesUncheckedCreateWithoutVehicle_specificationInputSchema) ]),
}).strict();

export default vehiclesCreateOrConnectWithoutVehicle_specificationInputSchema;
