import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { allowancesCreateWithoutUserInputSchema } from './allowancesCreateWithoutUserInputSchema';
import { allowancesUncheckedCreateWithoutUserInputSchema } from './allowancesUncheckedCreateWithoutUserInputSchema';
import { allowancesCreateOrConnectWithoutUserInputSchema } from './allowancesCreateOrConnectWithoutUserInputSchema';
import { allowancesWhereUniqueInputSchema } from './allowancesWhereUniqueInputSchema';

export const allowancesCreateNestedOneWithoutUserInputSchema: z.ZodType<Prisma.allowancesCreateNestedOneWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => allowancesCreateWithoutUserInputSchema),z.lazy(() => allowancesUncheckedCreateWithoutUserInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => allowancesCreateOrConnectWithoutUserInputSchema).optional(),
  connect: z.lazy(() => allowancesWhereUniqueInputSchema).optional()
}).strict();

export default allowancesCreateNestedOneWithoutUserInputSchema;
