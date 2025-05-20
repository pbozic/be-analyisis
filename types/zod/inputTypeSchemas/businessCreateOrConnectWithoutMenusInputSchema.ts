import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { businessWhereUniqueInputSchema } from './businessWhereUniqueInputSchema';
import { businessCreateWithoutMenusInputSchema } from './businessCreateWithoutMenusInputSchema';
import { businessUncheckedCreateWithoutMenusInputSchema } from './businessUncheckedCreateWithoutMenusInputSchema';

export const businessCreateOrConnectWithoutMenusInputSchema: z.ZodType<Prisma.businessCreateOrConnectWithoutMenusInput> = z.object({
  where: z.lazy(() => businessWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => businessCreateWithoutMenusInputSchema),z.lazy(() => businessUncheckedCreateWithoutMenusInputSchema) ]),
}).strict();

export default businessCreateOrConnectWithoutMenusInputSchema;
