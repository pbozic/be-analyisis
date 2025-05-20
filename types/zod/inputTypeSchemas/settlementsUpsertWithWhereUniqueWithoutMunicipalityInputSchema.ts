import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { settlementsWhereUniqueInputSchema } from './settlementsWhereUniqueInputSchema';
import { settlementsUpdateWithoutMunicipalityInputSchema } from './settlementsUpdateWithoutMunicipalityInputSchema';
import { settlementsUncheckedUpdateWithoutMunicipalityInputSchema } from './settlementsUncheckedUpdateWithoutMunicipalityInputSchema';
import { settlementsCreateWithoutMunicipalityInputSchema } from './settlementsCreateWithoutMunicipalityInputSchema';
import { settlementsUncheckedCreateWithoutMunicipalityInputSchema } from './settlementsUncheckedCreateWithoutMunicipalityInputSchema';

export const settlementsUpsertWithWhereUniqueWithoutMunicipalityInputSchema: z.ZodType<Prisma.settlementsUpsertWithWhereUniqueWithoutMunicipalityInput> = z.object({
  where: z.lazy(() => settlementsWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => settlementsUpdateWithoutMunicipalityInputSchema),z.lazy(() => settlementsUncheckedUpdateWithoutMunicipalityInputSchema) ]),
  create: z.union([ z.lazy(() => settlementsCreateWithoutMunicipalityInputSchema),z.lazy(() => settlementsUncheckedCreateWithoutMunicipalityInputSchema) ]),
}).strict();

export default settlementsUpsertWithWhereUniqueWithoutMunicipalityInputSchema;
