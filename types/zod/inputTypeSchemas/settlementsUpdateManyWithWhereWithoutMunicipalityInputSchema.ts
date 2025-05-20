import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { settlementsScalarWhereInputSchema } from './settlementsScalarWhereInputSchema';
import { settlementsUpdateManyMutationInputSchema } from './settlementsUpdateManyMutationInputSchema';
import { settlementsUncheckedUpdateManyWithoutMunicipalityInputSchema } from './settlementsUncheckedUpdateManyWithoutMunicipalityInputSchema';

export const settlementsUpdateManyWithWhereWithoutMunicipalityInputSchema: z.ZodType<Prisma.settlementsUpdateManyWithWhereWithoutMunicipalityInput> = z.object({
  where: z.lazy(() => settlementsScalarWhereInputSchema),
  data: z.union([ z.lazy(() => settlementsUpdateManyMutationInputSchema),z.lazy(() => settlementsUncheckedUpdateManyWithoutMunicipalityInputSchema) ]),
}).strict();

export default settlementsUpdateManyWithWhereWithoutMunicipalityInputSchema;
