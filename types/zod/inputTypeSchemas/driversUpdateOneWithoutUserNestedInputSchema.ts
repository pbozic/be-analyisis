import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { driversCreateWithoutUserInputSchema } from './driversCreateWithoutUserInputSchema';
import { driversUncheckedCreateWithoutUserInputSchema } from './driversUncheckedCreateWithoutUserInputSchema';
import { driversCreateOrConnectWithoutUserInputSchema } from './driversCreateOrConnectWithoutUserInputSchema';
import { driversUpsertWithoutUserInputSchema } from './driversUpsertWithoutUserInputSchema';
import { driversWhereInputSchema } from './driversWhereInputSchema';
import { driversWhereUniqueInputSchema } from './driversWhereUniqueInputSchema';
import { driversUpdateToOneWithWhereWithoutUserInputSchema } from './driversUpdateToOneWithWhereWithoutUserInputSchema';
import { driversUpdateWithoutUserInputSchema } from './driversUpdateWithoutUserInputSchema';
import { driversUncheckedUpdateWithoutUserInputSchema } from './driversUncheckedUpdateWithoutUserInputSchema';

export const driversUpdateOneWithoutUserNestedInputSchema: z.ZodType<Prisma.driversUpdateOneWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => driversCreateWithoutUserInputSchema),z.lazy(() => driversUncheckedCreateWithoutUserInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => driversCreateOrConnectWithoutUserInputSchema).optional(),
  upsert: z.lazy(() => driversUpsertWithoutUserInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => driversWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => driversWhereInputSchema) ]).optional(),
  connect: z.lazy(() => driversWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => driversUpdateToOneWithWhereWithoutUserInputSchema),z.lazy(() => driversUpdateWithoutUserInputSchema),z.lazy(() => driversUncheckedUpdateWithoutUserInputSchema) ]).optional(),
}).strict();

export default driversUpdateOneWithoutUserNestedInputSchema;
