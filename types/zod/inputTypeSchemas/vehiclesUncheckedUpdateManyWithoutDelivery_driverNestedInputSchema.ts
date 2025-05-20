import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { vehiclesCreateWithoutDelivery_driverInputSchema } from './vehiclesCreateWithoutDelivery_driverInputSchema';
import { vehiclesUncheckedCreateWithoutDelivery_driverInputSchema } from './vehiclesUncheckedCreateWithoutDelivery_driverInputSchema';
import { vehiclesCreateOrConnectWithoutDelivery_driverInputSchema } from './vehiclesCreateOrConnectWithoutDelivery_driverInputSchema';
import { vehiclesUpsertWithWhereUniqueWithoutDelivery_driverInputSchema } from './vehiclesUpsertWithWhereUniqueWithoutDelivery_driverInputSchema';
import { vehiclesCreateManyDelivery_driverInputEnvelopeSchema } from './vehiclesCreateManyDelivery_driverInputEnvelopeSchema';
import { vehiclesWhereUniqueInputSchema } from './vehiclesWhereUniqueInputSchema';
import { vehiclesUpdateWithWhereUniqueWithoutDelivery_driverInputSchema } from './vehiclesUpdateWithWhereUniqueWithoutDelivery_driverInputSchema';
import { vehiclesUpdateManyWithWhereWithoutDelivery_driverInputSchema } from './vehiclesUpdateManyWithWhereWithoutDelivery_driverInputSchema';
import { vehiclesScalarWhereInputSchema } from './vehiclesScalarWhereInputSchema';

export const vehiclesUncheckedUpdateManyWithoutDelivery_driverNestedInputSchema: z.ZodType<Prisma.vehiclesUncheckedUpdateManyWithoutDelivery_driverNestedInput> = z.object({
  create: z.union([ z.lazy(() => vehiclesCreateWithoutDelivery_driverInputSchema),z.lazy(() => vehiclesCreateWithoutDelivery_driverInputSchema).array(),z.lazy(() => vehiclesUncheckedCreateWithoutDelivery_driverInputSchema),z.lazy(() => vehiclesUncheckedCreateWithoutDelivery_driverInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => vehiclesCreateOrConnectWithoutDelivery_driverInputSchema),z.lazy(() => vehiclesCreateOrConnectWithoutDelivery_driverInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => vehiclesUpsertWithWhereUniqueWithoutDelivery_driverInputSchema),z.lazy(() => vehiclesUpsertWithWhereUniqueWithoutDelivery_driverInputSchema).array() ]).optional(),
  createMany: z.lazy(() => vehiclesCreateManyDelivery_driverInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => vehiclesWhereUniqueInputSchema),z.lazy(() => vehiclesWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => vehiclesWhereUniqueInputSchema),z.lazy(() => vehiclesWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => vehiclesWhereUniqueInputSchema),z.lazy(() => vehiclesWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => vehiclesWhereUniqueInputSchema),z.lazy(() => vehiclesWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => vehiclesUpdateWithWhereUniqueWithoutDelivery_driverInputSchema),z.lazy(() => vehiclesUpdateWithWhereUniqueWithoutDelivery_driverInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => vehiclesUpdateManyWithWhereWithoutDelivery_driverInputSchema),z.lazy(() => vehiclesUpdateManyWithWhereWithoutDelivery_driverInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => vehiclesScalarWhereInputSchema),z.lazy(() => vehiclesScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default vehiclesUncheckedUpdateManyWithoutDelivery_driverNestedInputSchema;
