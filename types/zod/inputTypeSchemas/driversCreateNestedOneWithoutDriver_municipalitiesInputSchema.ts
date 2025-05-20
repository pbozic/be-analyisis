import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { driversCreateWithoutDriver_municipalitiesInputSchema } from './driversCreateWithoutDriver_municipalitiesInputSchema';
import { driversUncheckedCreateWithoutDriver_municipalitiesInputSchema } from './driversUncheckedCreateWithoutDriver_municipalitiesInputSchema';
import { driversCreateOrConnectWithoutDriver_municipalitiesInputSchema } from './driversCreateOrConnectWithoutDriver_municipalitiesInputSchema';
import { driversWhereUniqueInputSchema } from './driversWhereUniqueInputSchema';

export const driversCreateNestedOneWithoutDriver_municipalitiesInputSchema: z.ZodType<Prisma.driversCreateNestedOneWithoutDriver_municipalitiesInput> = z.object({
  create: z.union([ z.lazy(() => driversCreateWithoutDriver_municipalitiesInputSchema),z.lazy(() => driversUncheckedCreateWithoutDriver_municipalitiesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => driversCreateOrConnectWithoutDriver_municipalitiesInputSchema).optional(),
  connect: z.lazy(() => driversWhereUniqueInputSchema).optional()
}).strict();

export default driversCreateNestedOneWithoutDriver_municipalitiesInputSchema;
