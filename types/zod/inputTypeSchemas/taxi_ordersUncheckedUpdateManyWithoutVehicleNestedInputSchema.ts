import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { taxi_ordersCreateWithoutVehicleInputSchema } from './taxi_ordersCreateWithoutVehicleInputSchema';
import { taxi_ordersUncheckedCreateWithoutVehicleInputSchema } from './taxi_ordersUncheckedCreateWithoutVehicleInputSchema';
import { taxi_ordersCreateOrConnectWithoutVehicleInputSchema } from './taxi_ordersCreateOrConnectWithoutVehicleInputSchema';
import { taxi_ordersUpsertWithWhereUniqueWithoutVehicleInputSchema } from './taxi_ordersUpsertWithWhereUniqueWithoutVehicleInputSchema';
import { taxi_ordersCreateManyVehicleInputEnvelopeSchema } from './taxi_ordersCreateManyVehicleInputEnvelopeSchema';
import { taxi_ordersWhereUniqueInputSchema } from './taxi_ordersWhereUniqueInputSchema';
import { taxi_ordersUpdateWithWhereUniqueWithoutVehicleInputSchema } from './taxi_ordersUpdateWithWhereUniqueWithoutVehicleInputSchema';
import { taxi_ordersUpdateManyWithWhereWithoutVehicleInputSchema } from './taxi_ordersUpdateManyWithWhereWithoutVehicleInputSchema';
import { taxi_ordersScalarWhereInputSchema } from './taxi_ordersScalarWhereInputSchema';

export const taxi_ordersUncheckedUpdateManyWithoutVehicleNestedInputSchema: z.ZodType<Prisma.taxi_ordersUncheckedUpdateManyWithoutVehicleNestedInput> = z.object({
  create: z.union([ z.lazy(() => taxi_ordersCreateWithoutVehicleInputSchema),z.lazy(() => taxi_ordersCreateWithoutVehicleInputSchema).array(),z.lazy(() => taxi_ordersUncheckedCreateWithoutVehicleInputSchema),z.lazy(() => taxi_ordersUncheckedCreateWithoutVehicleInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => taxi_ordersCreateOrConnectWithoutVehicleInputSchema),z.lazy(() => taxi_ordersCreateOrConnectWithoutVehicleInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => taxi_ordersUpsertWithWhereUniqueWithoutVehicleInputSchema),z.lazy(() => taxi_ordersUpsertWithWhereUniqueWithoutVehicleInputSchema).array() ]).optional(),
  createMany: z.lazy(() => taxi_ordersCreateManyVehicleInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => taxi_ordersWhereUniqueInputSchema),z.lazy(() => taxi_ordersWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => taxi_ordersWhereUniqueInputSchema),z.lazy(() => taxi_ordersWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => taxi_ordersWhereUniqueInputSchema),z.lazy(() => taxi_ordersWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => taxi_ordersWhereUniqueInputSchema),z.lazy(() => taxi_ordersWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => taxi_ordersUpdateWithWhereUniqueWithoutVehicleInputSchema),z.lazy(() => taxi_ordersUpdateWithWhereUniqueWithoutVehicleInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => taxi_ordersUpdateManyWithWhereWithoutVehicleInputSchema),z.lazy(() => taxi_ordersUpdateManyWithWhereWithoutVehicleInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => taxi_ordersScalarWhereInputSchema),z.lazy(() => taxi_ordersScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default taxi_ordersUncheckedUpdateManyWithoutVehicleNestedInputSchema;
