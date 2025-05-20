import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { tokensWhereUniqueInputSchema } from './tokensWhereUniqueInputSchema';
import { tokensCreateWithoutUsersInputSchema } from './tokensCreateWithoutUsersInputSchema';
import { tokensUncheckedCreateWithoutUsersInputSchema } from './tokensUncheckedCreateWithoutUsersInputSchema';

export const tokensCreateOrConnectWithoutUsersInputSchema: z.ZodType<Prisma.tokensCreateOrConnectWithoutUsersInput> = z.object({
  where: z.lazy(() => tokensWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => tokensCreateWithoutUsersInputSchema),z.lazy(() => tokensUncheckedCreateWithoutUsersInputSchema) ]),
}).strict();

export default tokensCreateOrConnectWithoutUsersInputSchema;
