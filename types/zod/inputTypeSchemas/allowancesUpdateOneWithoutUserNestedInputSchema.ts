import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { allowancesCreateWithoutUserInputSchema } from './allowancesCreateWithoutUserInputSchema';
import { allowancesUncheckedCreateWithoutUserInputSchema } from './allowancesUncheckedCreateWithoutUserInputSchema';
import { allowancesCreateOrConnectWithoutUserInputSchema } from './allowancesCreateOrConnectWithoutUserInputSchema';
import { allowancesUpsertWithoutUserInputSchema } from './allowancesUpsertWithoutUserInputSchema';
import { allowancesWhereInputSchema } from './allowancesWhereInputSchema';
import { allowancesWhereUniqueInputSchema } from './allowancesWhereUniqueInputSchema';
import { allowancesUpdateToOneWithWhereWithoutUserInputSchema } from './allowancesUpdateToOneWithWhereWithoutUserInputSchema';
import { allowancesUpdateWithoutUserInputSchema } from './allowancesUpdateWithoutUserInputSchema';
import { allowancesUncheckedUpdateWithoutUserInputSchema } from './allowancesUncheckedUpdateWithoutUserInputSchema';

export const allowancesUpdateOneWithoutUserNestedInputSchema: z.ZodType<Prisma.allowancesUpdateOneWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => allowancesCreateWithoutUserInputSchema),z.lazy(() => allowancesUncheckedCreateWithoutUserInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => allowancesCreateOrConnectWithoutUserInputSchema).optional(),
  upsert: z.lazy(() => allowancesUpsertWithoutUserInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => allowancesWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => allowancesWhereInputSchema) ]).optional(),
  connect: z.lazy(() => allowancesWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => allowancesUpdateToOneWithWhereWithoutUserInputSchema),z.lazy(() => allowancesUpdateWithoutUserInputSchema),z.lazy(() => allowancesUncheckedUpdateWithoutUserInputSchema) ]).optional(),
}).strict();

export default allowancesUpdateOneWithoutUserNestedInputSchema;
