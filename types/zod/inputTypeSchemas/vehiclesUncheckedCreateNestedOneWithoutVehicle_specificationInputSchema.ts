import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { vehiclesCreateWithoutVehicle_specificationInputSchema } from './vehiclesCreateWithoutVehicle_specificationInputSchema';
import { vehiclesUncheckedCreateWithoutVehicle_specificationInputSchema } from './vehiclesUncheckedCreateWithoutVehicle_specificationInputSchema';
import { vehiclesCreateOrConnectWithoutVehicle_specificationInputSchema } from './vehiclesCreateOrConnectWithoutVehicle_specificationInputSchema';
import { vehiclesWhereUniqueInputSchema } from './vehiclesWhereUniqueInputSchema';

export const vehiclesUncheckedCreateNestedOneWithoutVehicle_specificationInputSchema: z.ZodType<Prisma.vehiclesUncheckedCreateNestedOneWithoutVehicle_specificationInput> = z.object({
  create: z.union([ z.lazy(() => vehiclesCreateWithoutVehicle_specificationInputSchema),z.lazy(() => vehiclesUncheckedCreateWithoutVehicle_specificationInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => vehiclesCreateOrConnectWithoutVehicle_specificationInputSchema).optional(),
  connect: z.lazy(() => vehiclesWhereUniqueInputSchema).optional()
}).strict();

export default vehiclesUncheckedCreateNestedOneWithoutVehicle_specificationInputSchema;
