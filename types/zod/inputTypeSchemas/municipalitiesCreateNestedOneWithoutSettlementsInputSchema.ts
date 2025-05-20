import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { municipalitiesCreateWithoutSettlementsInputSchema } from './municipalitiesCreateWithoutSettlementsInputSchema';
import { municipalitiesUncheckedCreateWithoutSettlementsInputSchema } from './municipalitiesUncheckedCreateWithoutSettlementsInputSchema';
import { municipalitiesCreateOrConnectWithoutSettlementsInputSchema } from './municipalitiesCreateOrConnectWithoutSettlementsInputSchema';
import { municipalitiesWhereUniqueInputSchema } from './municipalitiesWhereUniqueInputSchema';

export const municipalitiesCreateNestedOneWithoutSettlementsInputSchema: z.ZodType<Prisma.municipalitiesCreateNestedOneWithoutSettlementsInput> = z.object({
  create: z.union([ z.lazy(() => municipalitiesCreateWithoutSettlementsInputSchema),z.lazy(() => municipalitiesUncheckedCreateWithoutSettlementsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => municipalitiesCreateOrConnectWithoutSettlementsInputSchema).optional(),
  connect: z.lazy(() => municipalitiesWhereUniqueInputSchema).optional()
}).strict();

export default municipalitiesCreateNestedOneWithoutSettlementsInputSchema;
