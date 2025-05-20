import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { delivery_driversCreateWithoutVehiclesInputSchema } from './delivery_driversCreateWithoutVehiclesInputSchema';
import { delivery_driversUncheckedCreateWithoutVehiclesInputSchema } from './delivery_driversUncheckedCreateWithoutVehiclesInputSchema';
import { delivery_driversCreateOrConnectWithoutVehiclesInputSchema } from './delivery_driversCreateOrConnectWithoutVehiclesInputSchema';
import { delivery_driversUpsertWithoutVehiclesInputSchema } from './delivery_driversUpsertWithoutVehiclesInputSchema';
import { delivery_driversWhereInputSchema } from './delivery_driversWhereInputSchema';
import { delivery_driversWhereUniqueInputSchema } from './delivery_driversWhereUniqueInputSchema';
import { delivery_driversUpdateToOneWithWhereWithoutVehiclesInputSchema } from './delivery_driversUpdateToOneWithWhereWithoutVehiclesInputSchema';
import { delivery_driversUpdateWithoutVehiclesInputSchema } from './delivery_driversUpdateWithoutVehiclesInputSchema';
import { delivery_driversUncheckedUpdateWithoutVehiclesInputSchema } from './delivery_driversUncheckedUpdateWithoutVehiclesInputSchema';

export const delivery_driversUpdateOneWithoutVehiclesNestedInputSchema: z.ZodType<Prisma.delivery_driversUpdateOneWithoutVehiclesNestedInput> = z.object({
  create: z.union([ z.lazy(() => delivery_driversCreateWithoutVehiclesInputSchema),z.lazy(() => delivery_driversUncheckedCreateWithoutVehiclesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => delivery_driversCreateOrConnectWithoutVehiclesInputSchema).optional(),
  upsert: z.lazy(() => delivery_driversUpsertWithoutVehiclesInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => delivery_driversWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => delivery_driversWhereInputSchema) ]).optional(),
  connect: z.lazy(() => delivery_driversWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => delivery_driversUpdateToOneWithWhereWithoutVehiclesInputSchema),z.lazy(() => delivery_driversUpdateWithoutVehiclesInputSchema),z.lazy(() => delivery_driversUncheckedUpdateWithoutVehiclesInputSchema) ]).optional(),
}).strict();

export default delivery_driversUpdateOneWithoutVehiclesNestedInputSchema;
