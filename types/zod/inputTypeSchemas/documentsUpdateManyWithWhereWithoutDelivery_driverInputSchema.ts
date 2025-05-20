import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { documentsScalarWhereInputSchema } from './documentsScalarWhereInputSchema';
import { documentsUpdateManyMutationInputSchema } from './documentsUpdateManyMutationInputSchema';
import { documentsUncheckedUpdateManyWithoutDelivery_driverInputSchema } from './documentsUncheckedUpdateManyWithoutDelivery_driverInputSchema';

export const documentsUpdateManyWithWhereWithoutDelivery_driverInputSchema: z.ZodType<Prisma.documentsUpdateManyWithWhereWithoutDelivery_driverInput> = z.object({
  where: z.lazy(() => documentsScalarWhereInputSchema),
  data: z.union([ z.lazy(() => documentsUpdateManyMutationInputSchema),z.lazy(() => documentsUncheckedUpdateManyWithoutDelivery_driverInputSchema) ]),
}).strict();

export default documentsUpdateManyWithWhereWithoutDelivery_driverInputSchema;
