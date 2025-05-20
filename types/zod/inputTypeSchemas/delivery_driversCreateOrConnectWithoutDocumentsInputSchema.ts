import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { delivery_driversWhereUniqueInputSchema } from './delivery_driversWhereUniqueInputSchema';
import { delivery_driversCreateWithoutDocumentsInputSchema } from './delivery_driversCreateWithoutDocumentsInputSchema';
import { delivery_driversUncheckedCreateWithoutDocumentsInputSchema } from './delivery_driversUncheckedCreateWithoutDocumentsInputSchema';

export const delivery_driversCreateOrConnectWithoutDocumentsInputSchema: z.ZodType<Prisma.delivery_driversCreateOrConnectWithoutDocumentsInput> = z.object({
  where: z.lazy(() => delivery_driversWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => delivery_driversCreateWithoutDocumentsInputSchema),z.lazy(() => delivery_driversUncheckedCreateWithoutDocumentsInputSchema) ]),
}).strict();

export default delivery_driversCreateOrConnectWithoutDocumentsInputSchema;
