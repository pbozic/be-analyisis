import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { municipalitiesCreateWithoutSettlementsInputSchema } from './municipalitiesCreateWithoutSettlementsInputSchema';
import { municipalitiesUncheckedCreateWithoutSettlementsInputSchema } from './municipalitiesUncheckedCreateWithoutSettlementsInputSchema';
import { municipalitiesCreateOrConnectWithoutSettlementsInputSchema } from './municipalitiesCreateOrConnectWithoutSettlementsInputSchema';
import { municipalitiesUpsertWithoutSettlementsInputSchema } from './municipalitiesUpsertWithoutSettlementsInputSchema';
import { municipalitiesWhereUniqueInputSchema } from './municipalitiesWhereUniqueInputSchema';
import { municipalitiesUpdateToOneWithWhereWithoutSettlementsInputSchema } from './municipalitiesUpdateToOneWithWhereWithoutSettlementsInputSchema';
import { municipalitiesUpdateWithoutSettlementsInputSchema } from './municipalitiesUpdateWithoutSettlementsInputSchema';
import { municipalitiesUncheckedUpdateWithoutSettlementsInputSchema } from './municipalitiesUncheckedUpdateWithoutSettlementsInputSchema';

export const municipalitiesUpdateOneRequiredWithoutSettlementsNestedInputSchema: z.ZodType<Prisma.municipalitiesUpdateOneRequiredWithoutSettlementsNestedInput> = z.object({
  create: z.union([ z.lazy(() => municipalitiesCreateWithoutSettlementsInputSchema),z.lazy(() => municipalitiesUncheckedCreateWithoutSettlementsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => municipalitiesCreateOrConnectWithoutSettlementsInputSchema).optional(),
  upsert: z.lazy(() => municipalitiesUpsertWithoutSettlementsInputSchema).optional(),
  connect: z.lazy(() => municipalitiesWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => municipalitiesUpdateToOneWithWhereWithoutSettlementsInputSchema),z.lazy(() => municipalitiesUpdateWithoutSettlementsInputSchema),z.lazy(() => municipalitiesUncheckedUpdateWithoutSettlementsInputSchema) ]).optional(),
}).strict();

export default municipalitiesUpdateOneRequiredWithoutSettlementsNestedInputSchema;
