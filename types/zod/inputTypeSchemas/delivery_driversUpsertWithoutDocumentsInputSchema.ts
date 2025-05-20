import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { delivery_driversUpdateWithoutDocumentsInputSchema } from './delivery_driversUpdateWithoutDocumentsInputSchema';
import { delivery_driversUncheckedUpdateWithoutDocumentsInputSchema } from './delivery_driversUncheckedUpdateWithoutDocumentsInputSchema';
import { delivery_driversCreateWithoutDocumentsInputSchema } from './delivery_driversCreateWithoutDocumentsInputSchema';
import { delivery_driversUncheckedCreateWithoutDocumentsInputSchema } from './delivery_driversUncheckedCreateWithoutDocumentsInputSchema';
import { delivery_driversWhereInputSchema } from './delivery_driversWhereInputSchema';

export const delivery_driversUpsertWithoutDocumentsInputSchema: z.ZodType<Prisma.delivery_driversUpsertWithoutDocumentsInput> = z.object({
  update: z.union([ z.lazy(() => delivery_driversUpdateWithoutDocumentsInputSchema),z.lazy(() => delivery_driversUncheckedUpdateWithoutDocumentsInputSchema) ]),
  create: z.union([ z.lazy(() => delivery_driversCreateWithoutDocumentsInputSchema),z.lazy(() => delivery_driversUncheckedCreateWithoutDocumentsInputSchema) ]),
  where: z.lazy(() => delivery_driversWhereInputSchema).optional()
}).strict();

export default delivery_driversUpsertWithoutDocumentsInputSchema;
