import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { businessWhereUniqueInputSchema } from './businessWhereUniqueInputSchema';
import { businessCreateWithoutWord_buysInputSchema } from './businessCreateWithoutWord_buysInputSchema';
import { businessUncheckedCreateWithoutWord_buysInputSchema } from './businessUncheckedCreateWithoutWord_buysInputSchema';

export const businessCreateOrConnectWithoutWord_buysInputSchema: z.ZodType<Prisma.businessCreateOrConnectWithoutWord_buysInput> = z.object({
  where: z.lazy(() => businessWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => businessCreateWithoutWord_buysInputSchema),z.lazy(() => businessUncheckedCreateWithoutWord_buysInputSchema) ]),
}).strict();

export default businessCreateOrConnectWithoutWord_buysInputSchema;
