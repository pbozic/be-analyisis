import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { settlementsWhereUniqueInputSchema } from './settlementsWhereUniqueInputSchema';
import { settlementsCreateWithoutMunicipalityInputSchema } from './settlementsCreateWithoutMunicipalityInputSchema';
import { settlementsUncheckedCreateWithoutMunicipalityInputSchema } from './settlementsUncheckedCreateWithoutMunicipalityInputSchema';

export const settlementsCreateOrConnectWithoutMunicipalityInputSchema: z.ZodType<Prisma.settlementsCreateOrConnectWithoutMunicipalityInput> = z.object({
  where: z.lazy(() => settlementsWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => settlementsCreateWithoutMunicipalityInputSchema),z.lazy(() => settlementsUncheckedCreateWithoutMunicipalityInputSchema) ]),
}).strict();

export default settlementsCreateOrConnectWithoutMunicipalityInputSchema;
