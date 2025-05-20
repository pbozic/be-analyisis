import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { municipalitiesCreateWithoutDriver_municipalitiesInputSchema } from './municipalitiesCreateWithoutDriver_municipalitiesInputSchema';
import { municipalitiesUncheckedCreateWithoutDriver_municipalitiesInputSchema } from './municipalitiesUncheckedCreateWithoutDriver_municipalitiesInputSchema';
import { municipalitiesCreateOrConnectWithoutDriver_municipalitiesInputSchema } from './municipalitiesCreateOrConnectWithoutDriver_municipalitiesInputSchema';
import { municipalitiesWhereUniqueInputSchema } from './municipalitiesWhereUniqueInputSchema';

export const municipalitiesCreateNestedOneWithoutDriver_municipalitiesInputSchema: z.ZodType<Prisma.municipalitiesCreateNestedOneWithoutDriver_municipalitiesInput> = z.object({
  create: z.union([ z.lazy(() => municipalitiesCreateWithoutDriver_municipalitiesInputSchema),z.lazy(() => municipalitiesUncheckedCreateWithoutDriver_municipalitiesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => municipalitiesCreateOrConnectWithoutDriver_municipalitiesInputSchema).optional(),
  connect: z.lazy(() => municipalitiesWhereUniqueInputSchema).optional()
}).strict();

export default municipalitiesCreateNestedOneWithoutDriver_municipalitiesInputSchema;
