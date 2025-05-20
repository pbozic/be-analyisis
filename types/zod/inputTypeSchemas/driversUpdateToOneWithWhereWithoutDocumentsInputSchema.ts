import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { driversWhereInputSchema } from './driversWhereInputSchema';
import { driversUpdateWithoutDocumentsInputSchema } from './driversUpdateWithoutDocumentsInputSchema';
import { driversUncheckedUpdateWithoutDocumentsInputSchema } from './driversUncheckedUpdateWithoutDocumentsInputSchema';

export const driversUpdateToOneWithWhereWithoutDocumentsInputSchema: z.ZodType<Prisma.driversUpdateToOneWithWhereWithoutDocumentsInput> = z.object({
  where: z.lazy(() => driversWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => driversUpdateWithoutDocumentsInputSchema),z.lazy(() => driversUncheckedUpdateWithoutDocumentsInputSchema) ]),
}).strict();

export default driversUpdateToOneWithWhereWithoutDocumentsInputSchema;
