import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { vehiclesWhereInputSchema } from './vehiclesWhereInputSchema';
import { vehiclesUpdateWithoutDocumentsInputSchema } from './vehiclesUpdateWithoutDocumentsInputSchema';
import { vehiclesUncheckedUpdateWithoutDocumentsInputSchema } from './vehiclesUncheckedUpdateWithoutDocumentsInputSchema';

export const vehiclesUpdateToOneWithWhereWithoutDocumentsInputSchema: z.ZodType<Prisma.vehiclesUpdateToOneWithWhereWithoutDocumentsInput> = z.object({
  where: z.lazy(() => vehiclesWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => vehiclesUpdateWithoutDocumentsInputSchema),z.lazy(() => vehiclesUncheckedUpdateWithoutDocumentsInputSchema) ]),
}).strict();

export default vehiclesUpdateToOneWithWhereWithoutDocumentsInputSchema;
