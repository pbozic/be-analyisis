import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { tokensWhereUniqueInputSchema } from './tokensWhereUniqueInputSchema';
import { tokensUpdateWithoutUsersInputSchema } from './tokensUpdateWithoutUsersInputSchema';
import { tokensUncheckedUpdateWithoutUsersInputSchema } from './tokensUncheckedUpdateWithoutUsersInputSchema';
import { tokensCreateWithoutUsersInputSchema } from './tokensCreateWithoutUsersInputSchema';
import { tokensUncheckedCreateWithoutUsersInputSchema } from './tokensUncheckedCreateWithoutUsersInputSchema';

export const tokensUpsertWithWhereUniqueWithoutUsersInputSchema: z.ZodType<Prisma.tokensUpsertWithWhereUniqueWithoutUsersInput> = z.object({
  where: z.lazy(() => tokensWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => tokensUpdateWithoutUsersInputSchema),z.lazy(() => tokensUncheckedUpdateWithoutUsersInputSchema) ]),
  create: z.union([ z.lazy(() => tokensCreateWithoutUsersInputSchema),z.lazy(() => tokensUncheckedCreateWithoutUsersInputSchema) ]),
}).strict();

export default tokensUpsertWithWhereUniqueWithoutUsersInputSchema;
