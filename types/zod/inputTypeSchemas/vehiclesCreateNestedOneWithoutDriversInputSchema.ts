import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { vehiclesCreateWithoutDriversInputSchema } from './vehiclesCreateWithoutDriversInputSchema';
import { vehiclesUncheckedCreateWithoutDriversInputSchema } from './vehiclesUncheckedCreateWithoutDriversInputSchema';
import { vehiclesCreateOrConnectWithoutDriversInputSchema } from './vehiclesCreateOrConnectWithoutDriversInputSchema';
import { vehiclesWhereUniqueInputSchema } from './vehiclesWhereUniqueInputSchema';

export const vehiclesCreateNestedOneWithoutDriversInputSchema: z.ZodType<Prisma.vehiclesCreateNestedOneWithoutDriversInput> = z.object({
  create: z.union([ z.lazy(() => vehiclesCreateWithoutDriversInputSchema),z.lazy(() => vehiclesUncheckedCreateWithoutDriversInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => vehiclesCreateOrConnectWithoutDriversInputSchema).optional(),
  connect: z.lazy(() => vehiclesWhereUniqueInputSchema).optional()
}).strict();

export default vehiclesCreateNestedOneWithoutDriversInputSchema;
