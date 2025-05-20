import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { promo_sectionsWhereInputSchema } from './promo_sectionsWhereInputSchema';
import { promo_sectionsUpdateWithoutPromo_section_buyInputSchema } from './promo_sectionsUpdateWithoutPromo_section_buyInputSchema';
import { promo_sectionsUncheckedUpdateWithoutPromo_section_buyInputSchema } from './promo_sectionsUncheckedUpdateWithoutPromo_section_buyInputSchema';

export const promo_sectionsUpdateToOneWithWhereWithoutPromo_section_buyInputSchema: z.ZodType<Prisma.promo_sectionsUpdateToOneWithWhereWithoutPromo_section_buyInput> = z.object({
  where: z.lazy(() => promo_sectionsWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => promo_sectionsUpdateWithoutPromo_section_buyInputSchema),z.lazy(() => promo_sectionsUncheckedUpdateWithoutPromo_section_buyInputSchema) ]),
}).strict();

export default promo_sectionsUpdateToOneWithWhereWithoutPromo_section_buyInputSchema;
