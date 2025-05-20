import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { vehiclesUpdateWithoutDriversInputSchema } from './vehiclesUpdateWithoutDriversInputSchema';
import { vehiclesUncheckedUpdateWithoutDriversInputSchema } from './vehiclesUncheckedUpdateWithoutDriversInputSchema';
import { vehiclesCreateWithoutDriversInputSchema } from './vehiclesCreateWithoutDriversInputSchema';
import { vehiclesUncheckedCreateWithoutDriversInputSchema } from './vehiclesUncheckedCreateWithoutDriversInputSchema';
import { vehiclesWhereInputSchema } from './vehiclesWhereInputSchema';

export const vehiclesUpsertWithoutDriversInputSchema: z.ZodType<Prisma.vehiclesUpsertWithoutDriversInput> = z.object({
  update: z.union([ z.lazy(() => vehiclesUpdateWithoutDriversInputSchema),z.lazy(() => vehiclesUncheckedUpdateWithoutDriversInputSchema) ]),
  create: z.union([ z.lazy(() => vehiclesCreateWithoutDriversInputSchema),z.lazy(() => vehiclesUncheckedCreateWithoutDriversInputSchema) ]),
  where: z.lazy(() => vehiclesWhereInputSchema).optional()
}).strict();

export default vehiclesUpsertWithoutDriversInputSchema;
