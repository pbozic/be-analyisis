import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { vehiclesCreateWithoutCurrent_driverInputSchema } from './vehiclesCreateWithoutCurrent_driverInputSchema';
import { vehiclesUncheckedCreateWithoutCurrent_driverInputSchema } from './vehiclesUncheckedCreateWithoutCurrent_driverInputSchema';
import { vehiclesCreateOrConnectWithoutCurrent_driverInputSchema } from './vehiclesCreateOrConnectWithoutCurrent_driverInputSchema';
import { vehiclesWhereUniqueInputSchema } from './vehiclesWhereUniqueInputSchema';

export const vehiclesCreateNestedOneWithoutCurrent_driverInputSchema: z.ZodType<Prisma.vehiclesCreateNestedOneWithoutCurrent_driverInput> = z.object({
  create: z.union([ z.lazy(() => vehiclesCreateWithoutCurrent_driverInputSchema),z.lazy(() => vehiclesUncheckedCreateWithoutCurrent_driverInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => vehiclesCreateOrConnectWithoutCurrent_driverInputSchema).optional(),
  connect: z.lazy(() => vehiclesWhereUniqueInputSchema).optional()
}).strict();

export default vehiclesCreateNestedOneWithoutCurrent_driverInputSchema;
