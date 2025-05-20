import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { delivery_driversCreateWithoutUserInputSchema } from './delivery_driversCreateWithoutUserInputSchema';
import { delivery_driversUncheckedCreateWithoutUserInputSchema } from './delivery_driversUncheckedCreateWithoutUserInputSchema';
import { delivery_driversCreateOrConnectWithoutUserInputSchema } from './delivery_driversCreateOrConnectWithoutUserInputSchema';
import { delivery_driversUpsertWithoutUserInputSchema } from './delivery_driversUpsertWithoutUserInputSchema';
import { delivery_driversWhereInputSchema } from './delivery_driversWhereInputSchema';
import { delivery_driversWhereUniqueInputSchema } from './delivery_driversWhereUniqueInputSchema';
import { delivery_driversUpdateToOneWithWhereWithoutUserInputSchema } from './delivery_driversUpdateToOneWithWhereWithoutUserInputSchema';
import { delivery_driversUpdateWithoutUserInputSchema } from './delivery_driversUpdateWithoutUserInputSchema';
import { delivery_driversUncheckedUpdateWithoutUserInputSchema } from './delivery_driversUncheckedUpdateWithoutUserInputSchema';

export const delivery_driversUncheckedUpdateOneWithoutUserNestedInputSchema: z.ZodType<Prisma.delivery_driversUncheckedUpdateOneWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => delivery_driversCreateWithoutUserInputSchema),z.lazy(() => delivery_driversUncheckedCreateWithoutUserInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => delivery_driversCreateOrConnectWithoutUserInputSchema).optional(),
  upsert: z.lazy(() => delivery_driversUpsertWithoutUserInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => delivery_driversWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => delivery_driversWhereInputSchema) ]).optional(),
  connect: z.lazy(() => delivery_driversWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => delivery_driversUpdateToOneWithWhereWithoutUserInputSchema),z.lazy(() => delivery_driversUpdateWithoutUserInputSchema),z.lazy(() => delivery_driversUncheckedUpdateWithoutUserInputSchema) ]).optional(),
}).strict();

export default delivery_driversUncheckedUpdateOneWithoutUserNestedInputSchema;
