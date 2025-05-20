import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { businessCreateWithoutDocumentsInputSchema } from './businessCreateWithoutDocumentsInputSchema';
import { businessUncheckedCreateWithoutDocumentsInputSchema } from './businessUncheckedCreateWithoutDocumentsInputSchema';
import { businessCreateOrConnectWithoutDocumentsInputSchema } from './businessCreateOrConnectWithoutDocumentsInputSchema';
import { businessWhereUniqueInputSchema } from './businessWhereUniqueInputSchema';

export const businessCreateNestedOneWithoutDocumentsInputSchema: z.ZodType<Prisma.businessCreateNestedOneWithoutDocumentsInput> = z.object({
  create: z.union([ z.lazy(() => businessCreateWithoutDocumentsInputSchema),z.lazy(() => businessUncheckedCreateWithoutDocumentsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => businessCreateOrConnectWithoutDocumentsInputSchema).optional(),
  connect: z.lazy(() => businessWhereUniqueInputSchema).optional()
}).strict();

export default businessCreateNestedOneWithoutDocumentsInputSchema;
