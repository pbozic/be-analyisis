import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { businessWhereUniqueInputSchema } from './businessWhereUniqueInputSchema';
import { businessCreateWithoutChild_businessesInputSchema } from './businessCreateWithoutChild_businessesInputSchema';
import { businessUncheckedCreateWithoutChild_businessesInputSchema } from './businessUncheckedCreateWithoutChild_businessesInputSchema';

export const businessCreateOrConnectWithoutChild_businessesInputSchema: z.ZodType<Prisma.businessCreateOrConnectWithoutChild_businessesInput> = z.object({
  where: z.lazy(() => businessWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => businessCreateWithoutChild_businessesInputSchema),z.lazy(() => businessUncheckedCreateWithoutChild_businessesInputSchema) ]),
}).strict();

export default businessCreateOrConnectWithoutChild_businessesInputSchema;
