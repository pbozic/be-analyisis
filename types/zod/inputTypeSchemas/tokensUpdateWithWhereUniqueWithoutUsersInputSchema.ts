import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { tokensWhereUniqueInputSchema } from './tokensWhereUniqueInputSchema';
import { tokensUpdateWithoutUsersInputSchema } from './tokensUpdateWithoutUsersInputSchema';
import { tokensUncheckedUpdateWithoutUsersInputSchema } from './tokensUncheckedUpdateWithoutUsersInputSchema';

export const tokensUpdateWithWhereUniqueWithoutUsersInputSchema: z.ZodType<Prisma.tokensUpdateWithWhereUniqueWithoutUsersInput> = z.object({
  where: z.lazy(() => tokensWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => tokensUpdateWithoutUsersInputSchema),z.lazy(() => tokensUncheckedUpdateWithoutUsersInputSchema) ]),
}).strict();

export default tokensUpdateWithWhereUniqueWithoutUsersInputSchema;
