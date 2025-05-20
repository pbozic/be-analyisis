import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { usersCreateWithoutDelivery_driverInputSchema } from './usersCreateWithoutDelivery_driverInputSchema';
import { usersUncheckedCreateWithoutDelivery_driverInputSchema } from './usersUncheckedCreateWithoutDelivery_driverInputSchema';
import { usersCreateOrConnectWithoutDelivery_driverInputSchema } from './usersCreateOrConnectWithoutDelivery_driverInputSchema';
import { usersUpsertWithoutDelivery_driverInputSchema } from './usersUpsertWithoutDelivery_driverInputSchema';
import { usersWhereInputSchema } from './usersWhereInputSchema';
import { usersWhereUniqueInputSchema } from './usersWhereUniqueInputSchema';
import { usersUpdateToOneWithWhereWithoutDelivery_driverInputSchema } from './usersUpdateToOneWithWhereWithoutDelivery_driverInputSchema';
import { usersUpdateWithoutDelivery_driverInputSchema } from './usersUpdateWithoutDelivery_driverInputSchema';
import { usersUncheckedUpdateWithoutDelivery_driverInputSchema } from './usersUncheckedUpdateWithoutDelivery_driverInputSchema';

export const usersUpdateOneWithoutDelivery_driverNestedInputSchema: z.ZodType<Prisma.usersUpdateOneWithoutDelivery_driverNestedInput> = z.object({
  create: z.union([ z.lazy(() => usersCreateWithoutDelivery_driverInputSchema),z.lazy(() => usersUncheckedCreateWithoutDelivery_driverInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => usersCreateOrConnectWithoutDelivery_driverInputSchema).optional(),
  upsert: z.lazy(() => usersUpsertWithoutDelivery_driverInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => usersWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => usersWhereInputSchema) ]).optional(),
  connect: z.lazy(() => usersWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => usersUpdateToOneWithWhereWithoutDelivery_driverInputSchema),z.lazy(() => usersUpdateWithoutDelivery_driverInputSchema),z.lazy(() => usersUncheckedUpdateWithoutDelivery_driverInputSchema) ]).optional(),
}).strict();

export default usersUpdateOneWithoutDelivery_driverNestedInputSchema;
