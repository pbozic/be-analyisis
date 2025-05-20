import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { promo_sections_buyWhereUniqueInputSchema } from './promo_sections_buyWhereUniqueInputSchema';
import { promo_sections_buyUpdateWithoutPromo_sectionInputSchema } from './promo_sections_buyUpdateWithoutPromo_sectionInputSchema';
import { promo_sections_buyUncheckedUpdateWithoutPromo_sectionInputSchema } from './promo_sections_buyUncheckedUpdateWithoutPromo_sectionInputSchema';

export const promo_sections_buyUpdateWithWhereUniqueWithoutPromo_sectionInputSchema: z.ZodType<Prisma.promo_sections_buyUpdateWithWhereUniqueWithoutPromo_sectionInput> = z.object({
  where: z.lazy(() => promo_sections_buyWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => promo_sections_buyUpdateWithoutPromo_sectionInputSchema),z.lazy(() => promo_sections_buyUncheckedUpdateWithoutPromo_sectionInputSchema) ]),
}).strict();

export default promo_sections_buyUpdateWithWhereUniqueWithoutPromo_sectionInputSchema;
