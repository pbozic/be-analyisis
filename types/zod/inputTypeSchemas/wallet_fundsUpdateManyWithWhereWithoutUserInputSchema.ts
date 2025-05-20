import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { wallet_fundsScalarWhereInputSchema } from './wallet_fundsScalarWhereInputSchema';
import { wallet_fundsUpdateManyMutationInputSchema } from './wallet_fundsUpdateManyMutationInputSchema';
import { wallet_fundsUncheckedUpdateManyWithoutUserInputSchema } from './wallet_fundsUncheckedUpdateManyWithoutUserInputSchema';

export const wallet_fundsUpdateManyWithWhereWithoutUserInputSchema: z.ZodType<Prisma.wallet_fundsUpdateManyWithWhereWithoutUserInput> = z.object({
  where: z.lazy(() => wallet_fundsScalarWhereInputSchema),
  data: z.union([ z.lazy(() => wallet_fundsUpdateManyMutationInputSchema),z.lazy(() => wallet_fundsUncheckedUpdateManyWithoutUserInputSchema) ]),
}).strict();

export default wallet_fundsUpdateManyWithWhereWithoutUserInputSchema;
