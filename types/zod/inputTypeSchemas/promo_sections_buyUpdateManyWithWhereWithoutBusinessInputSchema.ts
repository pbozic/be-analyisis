import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { promo_sections_buyScalarWhereInputSchema } from './promo_sections_buyScalarWhereInputSchema';
import { promo_sections_buyUpdateManyMutationInputSchema } from './promo_sections_buyUpdateManyMutationInputSchema';
import { promo_sections_buyUncheckedUpdateManyWithoutBusinessInputSchema } from './promo_sections_buyUncheckedUpdateManyWithoutBusinessInputSchema';

export const promo_sections_buyUpdateManyWithWhereWithoutBusinessInputSchema: z.ZodType<Prisma.promo_sections_buyUpdateManyWithWhereWithoutBusinessInput> = z.object({
  where: z.lazy(() => promo_sections_buyScalarWhereInputSchema),
  data: z.union([ z.lazy(() => promo_sections_buyUpdateManyMutationInputSchema),z.lazy(() => promo_sections_buyUncheckedUpdateManyWithoutBusinessInputSchema) ]),
}).strict();

export default promo_sections_buyUpdateManyWithWhereWithoutBusinessInputSchema;
