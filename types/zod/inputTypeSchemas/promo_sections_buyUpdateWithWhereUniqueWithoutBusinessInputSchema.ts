import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { promo_sections_buyWhereUniqueInputSchema } from './promo_sections_buyWhereUniqueInputSchema';
import { promo_sections_buyUpdateWithoutBusinessInputSchema } from './promo_sections_buyUpdateWithoutBusinessInputSchema';
import { promo_sections_buyUncheckedUpdateWithoutBusinessInputSchema } from './promo_sections_buyUncheckedUpdateWithoutBusinessInputSchema';

export const promo_sections_buyUpdateWithWhereUniqueWithoutBusinessInputSchema: z.ZodType<Prisma.promo_sections_buyUpdateWithWhereUniqueWithoutBusinessInput> = z.object({
  where: z.lazy(() => promo_sections_buyWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => promo_sections_buyUpdateWithoutBusinessInputSchema),z.lazy(() => promo_sections_buyUncheckedUpdateWithoutBusinessInputSchema) ]),
}).strict();

export default promo_sections_buyUpdateWithWhereUniqueWithoutBusinessInputSchema;
