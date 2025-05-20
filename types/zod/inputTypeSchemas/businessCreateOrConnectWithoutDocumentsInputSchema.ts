import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { businessWhereUniqueInputSchema } from './businessWhereUniqueInputSchema';
import { businessCreateWithoutDocumentsInputSchema } from './businessCreateWithoutDocumentsInputSchema';
import { businessUncheckedCreateWithoutDocumentsInputSchema } from './businessUncheckedCreateWithoutDocumentsInputSchema';

export const businessCreateOrConnectWithoutDocumentsInputSchema: z.ZodType<Prisma.businessCreateOrConnectWithoutDocumentsInput> = z.object({
  where: z.lazy(() => businessWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => businessCreateWithoutDocumentsInputSchema),z.lazy(() => businessUncheckedCreateWithoutDocumentsInputSchema) ]),
}).strict();

export default businessCreateOrConnectWithoutDocumentsInputSchema;
