import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { promo_sections_buyScalarWhereInputSchema } from './promo_sections_buyScalarWhereInputSchema';
import { promo_sections_buyUpdateManyMutationInputSchema } from './promo_sections_buyUpdateManyMutationInputSchema';
import { promo_sections_buyUncheckedUpdateManyWithoutPromo_sectionInputSchema } from './promo_sections_buyUncheckedUpdateManyWithoutPromo_sectionInputSchema';

export const promo_sections_buyUpdateManyWithWhereWithoutPromo_sectionInputSchema: z.ZodType<Prisma.promo_sections_buyUpdateManyWithWhereWithoutPromo_sectionInput> = z.object({
  where: z.lazy(() => promo_sections_buyScalarWhereInputSchema),
  data: z.union([ z.lazy(() => promo_sections_buyUpdateManyMutationInputSchema),z.lazy(() => promo_sections_buyUncheckedUpdateManyWithoutPromo_sectionInputSchema) ]),
}).strict();

export default promo_sections_buyUpdateManyWithWhereWithoutPromo_sectionInputSchema;
