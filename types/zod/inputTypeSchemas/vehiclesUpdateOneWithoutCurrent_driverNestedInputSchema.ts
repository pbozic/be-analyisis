import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { vehiclesCreateWithoutCurrent_driverInputSchema } from './vehiclesCreateWithoutCurrent_driverInputSchema';
import { vehiclesUncheckedCreateWithoutCurrent_driverInputSchema } from './vehiclesUncheckedCreateWithoutCurrent_driverInputSchema';
import { vehiclesCreateOrConnectWithoutCurrent_driverInputSchema } from './vehiclesCreateOrConnectWithoutCurrent_driverInputSchema';
import { vehiclesUpsertWithoutCurrent_driverInputSchema } from './vehiclesUpsertWithoutCurrent_driverInputSchema';
import { vehiclesWhereInputSchema } from './vehiclesWhereInputSchema';
import { vehiclesWhereUniqueInputSchema } from './vehiclesWhereUniqueInputSchema';
import { vehiclesUpdateToOneWithWhereWithoutCurrent_driverInputSchema } from './vehiclesUpdateToOneWithWhereWithoutCurrent_driverInputSchema';
import { vehiclesUpdateWithoutCurrent_driverInputSchema } from './vehiclesUpdateWithoutCurrent_driverInputSchema';
import { vehiclesUncheckedUpdateWithoutCurrent_driverInputSchema } from './vehiclesUncheckedUpdateWithoutCurrent_driverInputSchema';

export const vehiclesUpdateOneWithoutCurrent_driverNestedInputSchema: z.ZodType<Prisma.vehiclesUpdateOneWithoutCurrent_driverNestedInput> = z.object({
  create: z.union([ z.lazy(() => vehiclesCreateWithoutCurrent_driverInputSchema),z.lazy(() => vehiclesUncheckedCreateWithoutCurrent_driverInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => vehiclesCreateOrConnectWithoutCurrent_driverInputSchema).optional(),
  upsert: z.lazy(() => vehiclesUpsertWithoutCurrent_driverInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => vehiclesWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => vehiclesWhereInputSchema) ]).optional(),
  connect: z.lazy(() => vehiclesWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => vehiclesUpdateToOneWithWhereWithoutCurrent_driverInputSchema),z.lazy(() => vehiclesUpdateWithoutCurrent_driverInputSchema),z.lazy(() => vehiclesUncheckedUpdateWithoutCurrent_driverInputSchema) ]).optional(),
}).strict();

export default vehiclesUpdateOneWithoutCurrent_driverNestedInputSchema;
