import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { businessWhereUniqueInputSchema } from './businessWhereUniqueInputSchema';
import { businessCreateWithoutParent_businessInputSchema } from './businessCreateWithoutParent_businessInputSchema';
import { businessUncheckedCreateWithoutParent_businessInputSchema } from './businessUncheckedCreateWithoutParent_businessInputSchema';

export const businessCreateOrConnectWithoutParent_businessInputSchema: z.ZodType<Prisma.businessCreateOrConnectWithoutParent_businessInput> = z.object({
  where: z.lazy(() => businessWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => businessCreateWithoutParent_businessInputSchema),z.lazy(() => businessUncheckedCreateWithoutParent_businessInputSchema) ]),
}).strict();

export default businessCreateOrConnectWithoutParent_businessInputSchema;
