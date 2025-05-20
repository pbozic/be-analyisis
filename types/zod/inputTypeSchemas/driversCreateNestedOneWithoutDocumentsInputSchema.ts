import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { driversCreateWithoutDocumentsInputSchema } from './driversCreateWithoutDocumentsInputSchema';
import { driversUncheckedCreateWithoutDocumentsInputSchema } from './driversUncheckedCreateWithoutDocumentsInputSchema';
import { driversCreateOrConnectWithoutDocumentsInputSchema } from './driversCreateOrConnectWithoutDocumentsInputSchema';
import { driversWhereUniqueInputSchema } from './driversWhereUniqueInputSchema';

export const driversCreateNestedOneWithoutDocumentsInputSchema: z.ZodType<Prisma.driversCreateNestedOneWithoutDocumentsInput> = z.object({
  create: z.union([ z.lazy(() => driversCreateWithoutDocumentsInputSchema),z.lazy(() => driversUncheckedCreateWithoutDocumentsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => driversCreateOrConnectWithoutDocumentsInputSchema).optional(),
  connect: z.lazy(() => driversWhereUniqueInputSchema).optional()
}).strict();

export default driversCreateNestedOneWithoutDocumentsInputSchema;
