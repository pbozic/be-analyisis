import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { driversUpdateWithoutDocumentsInputSchema } from './driversUpdateWithoutDocumentsInputSchema';
import { driversUncheckedUpdateWithoutDocumentsInputSchema } from './driversUncheckedUpdateWithoutDocumentsInputSchema';
import { driversCreateWithoutDocumentsInputSchema } from './driversCreateWithoutDocumentsInputSchema';
import { driversUncheckedCreateWithoutDocumentsInputSchema } from './driversUncheckedCreateWithoutDocumentsInputSchema';
import { driversWhereInputSchema } from './driversWhereInputSchema';

export const driversUpsertWithoutDocumentsInputSchema: z.ZodType<Prisma.driversUpsertWithoutDocumentsInput> = z.object({
  update: z.union([ z.lazy(() => driversUpdateWithoutDocumentsInputSchema),z.lazy(() => driversUncheckedUpdateWithoutDocumentsInputSchema) ]),
  create: z.union([ z.lazy(() => driversCreateWithoutDocumentsInputSchema),z.lazy(() => driversUncheckedCreateWithoutDocumentsInputSchema) ]),
  where: z.lazy(() => driversWhereInputSchema).optional()
}).strict();

export default driversUpsertWithoutDocumentsInputSchema;
