import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { vehiclesCreateWithoutDelivery_driverInputSchema } from './vehiclesCreateWithoutDelivery_driverInputSchema';
import { vehiclesUncheckedCreateWithoutDelivery_driverInputSchema } from './vehiclesUncheckedCreateWithoutDelivery_driverInputSchema';
import { vehiclesCreateOrConnectWithoutDelivery_driverInputSchema } from './vehiclesCreateOrConnectWithoutDelivery_driverInputSchema';
import { vehiclesCreateManyDelivery_driverInputEnvelopeSchema } from './vehiclesCreateManyDelivery_driverInputEnvelopeSchema';
import { vehiclesWhereUniqueInputSchema } from './vehiclesWhereUniqueInputSchema';

export const vehiclesCreateNestedManyWithoutDelivery_driverInputSchema: z.ZodType<Prisma.vehiclesCreateNestedManyWithoutDelivery_driverInput> = z.object({
  create: z.union([ z.lazy(() => vehiclesCreateWithoutDelivery_driverInputSchema),z.lazy(() => vehiclesCreateWithoutDelivery_driverInputSchema).array(),z.lazy(() => vehiclesUncheckedCreateWithoutDelivery_driverInputSchema),z.lazy(() => vehiclesUncheckedCreateWithoutDelivery_driverInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => vehiclesCreateOrConnectWithoutDelivery_driverInputSchema),z.lazy(() => vehiclesCreateOrConnectWithoutDelivery_driverInputSchema).array() ]).optional(),
  createMany: z.lazy(() => vehiclesCreateManyDelivery_driverInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => vehiclesWhereUniqueInputSchema),z.lazy(() => vehiclesWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default vehiclesCreateNestedManyWithoutDelivery_driverInputSchema;
