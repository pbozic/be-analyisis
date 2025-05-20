import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { vehiclesWhereUniqueInputSchema } from './vehiclesWhereUniqueInputSchema';
import { vehiclesCreateWithoutDriversInputSchema } from './vehiclesCreateWithoutDriversInputSchema';
import { vehiclesUncheckedCreateWithoutDriversInputSchema } from './vehiclesUncheckedCreateWithoutDriversInputSchema';

export const vehiclesCreateOrConnectWithoutDriversInputSchema: z.ZodType<Prisma.vehiclesCreateOrConnectWithoutDriversInput> = z.object({
  where: z.lazy(() => vehiclesWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => vehiclesCreateWithoutDriversInputSchema),z.lazy(() => vehiclesUncheckedCreateWithoutDriversInputSchema) ]),
}).strict();

export default vehiclesCreateOrConnectWithoutDriversInputSchema;
