import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { documentsScalarWhereInputSchema } from './documentsScalarWhereInputSchema';
import { documentsUpdateManyMutationInputSchema } from './documentsUpdateManyMutationInputSchema';
import { documentsUncheckedUpdateManyWithoutVehiclesInputSchema } from './documentsUncheckedUpdateManyWithoutVehiclesInputSchema';

export const documentsUpdateManyWithWhereWithoutVehiclesInputSchema: z.ZodType<Prisma.documentsUpdateManyWithWhereWithoutVehiclesInput> = z.object({
  where: z.lazy(() => documentsScalarWhereInputSchema),
  data: z.union([ z.lazy(() => documentsUpdateManyMutationInputSchema),z.lazy(() => documentsUncheckedUpdateManyWithoutVehiclesInputSchema) ]),
}).strict();

export default documentsUpdateManyWithWhereWithoutVehiclesInputSchema;
