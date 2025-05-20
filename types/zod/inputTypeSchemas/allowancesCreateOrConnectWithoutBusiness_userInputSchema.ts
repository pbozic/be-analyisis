import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { allowancesWhereUniqueInputSchema } from './allowancesWhereUniqueInputSchema';
import { allowancesCreateWithoutBusiness_userInputSchema } from './allowancesCreateWithoutBusiness_userInputSchema';
import { allowancesUncheckedCreateWithoutBusiness_userInputSchema } from './allowancesUncheckedCreateWithoutBusiness_userInputSchema';

export const allowancesCreateOrConnectWithoutBusiness_userInputSchema: z.ZodType<Prisma.allowancesCreateOrConnectWithoutBusiness_userInput> = z.object({
  where: z.lazy(() => allowancesWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => allowancesCreateWithoutBusiness_userInputSchema),z.lazy(() => allowancesUncheckedCreateWithoutBusiness_userInputSchema) ]),
}).strict();

export default allowancesCreateOrConnectWithoutBusiness_userInputSchema;
