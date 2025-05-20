import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { allowancesWhereUniqueInputSchema } from './allowancesWhereUniqueInputSchema';
import { allowancesCreateWithoutUserInputSchema } from './allowancesCreateWithoutUserInputSchema';
import { allowancesUncheckedCreateWithoutUserInputSchema } from './allowancesUncheckedCreateWithoutUserInputSchema';

export const allowancesCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.allowancesCreateOrConnectWithoutUserInput> = z.object({
  where: z.lazy(() => allowancesWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => allowancesCreateWithoutUserInputSchema),z.lazy(() => allowancesUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export default allowancesCreateOrConnectWithoutUserInputSchema;
