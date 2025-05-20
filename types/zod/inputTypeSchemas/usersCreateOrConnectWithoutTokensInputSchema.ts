import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { usersWhereUniqueInputSchema } from './usersWhereUniqueInputSchema';
import { usersCreateWithoutTokensInputSchema } from './usersCreateWithoutTokensInputSchema';
import { usersUncheckedCreateWithoutTokensInputSchema } from './usersUncheckedCreateWithoutTokensInputSchema';

export const usersCreateOrConnectWithoutTokensInputSchema: z.ZodType<Prisma.usersCreateOrConnectWithoutTokensInput> = z.object({
  where: z.lazy(() => usersWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => usersCreateWithoutTokensInputSchema),z.lazy(() => usersUncheckedCreateWithoutTokensInputSchema) ]),
}).strict();

export default usersCreateOrConnectWithoutTokensInputSchema;
