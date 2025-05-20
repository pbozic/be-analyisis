import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { driversCreateWithoutDriver_municipalitiesInputSchema } from './driversCreateWithoutDriver_municipalitiesInputSchema';
import { driversUncheckedCreateWithoutDriver_municipalitiesInputSchema } from './driversUncheckedCreateWithoutDriver_municipalitiesInputSchema';
import { driversCreateOrConnectWithoutDriver_municipalitiesInputSchema } from './driversCreateOrConnectWithoutDriver_municipalitiesInputSchema';
import { driversUpsertWithoutDriver_municipalitiesInputSchema } from './driversUpsertWithoutDriver_municipalitiesInputSchema';
import { driversWhereUniqueInputSchema } from './driversWhereUniqueInputSchema';
import { driversUpdateToOneWithWhereWithoutDriver_municipalitiesInputSchema } from './driversUpdateToOneWithWhereWithoutDriver_municipalitiesInputSchema';
import { driversUpdateWithoutDriver_municipalitiesInputSchema } from './driversUpdateWithoutDriver_municipalitiesInputSchema';
import { driversUncheckedUpdateWithoutDriver_municipalitiesInputSchema } from './driversUncheckedUpdateWithoutDriver_municipalitiesInputSchema';

export const driversUpdateOneRequiredWithoutDriver_municipalitiesNestedInputSchema: z.ZodType<Prisma.driversUpdateOneRequiredWithoutDriver_municipalitiesNestedInput> = z.object({
  create: z.union([ z.lazy(() => driversCreateWithoutDriver_municipalitiesInputSchema),z.lazy(() => driversUncheckedCreateWithoutDriver_municipalitiesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => driversCreateOrConnectWithoutDriver_municipalitiesInputSchema).optional(),
  upsert: z.lazy(() => driversUpsertWithoutDriver_municipalitiesInputSchema).optional(),
  connect: z.lazy(() => driversWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => driversUpdateToOneWithWhereWithoutDriver_municipalitiesInputSchema),z.lazy(() => driversUpdateWithoutDriver_municipalitiesInputSchema),z.lazy(() => driversUncheckedUpdateWithoutDriver_municipalitiesInputSchema) ]).optional(),
}).strict();

export default driversUpdateOneRequiredWithoutDriver_municipalitiesNestedInputSchema;
