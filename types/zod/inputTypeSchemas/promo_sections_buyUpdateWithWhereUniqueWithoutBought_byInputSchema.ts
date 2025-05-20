import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { promo_sections_buyWhereUniqueInputSchema } from './promo_sections_buyWhereUniqueInputSchema';
import { promo_sections_buyUpdateWithoutBought_byInputSchema } from './promo_sections_buyUpdateWithoutBought_byInputSchema';
import { promo_sections_buyUncheckedUpdateWithoutBought_byInputSchema } from './promo_sections_buyUncheckedUpdateWithoutBought_byInputSchema';

export const promo_sections_buyUpdateWithWhereUniqueWithoutBought_byInputSchema: z.ZodType<Prisma.promo_sections_buyUpdateWithWhereUniqueWithoutBought_byInput> = z.object({
  where: z.lazy(() => promo_sections_buyWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => promo_sections_buyUpdateWithoutBought_byInputSchema),z.lazy(() => promo_sections_buyUncheckedUpdateWithoutBought_byInputSchema) ]),
}).strict();

export default promo_sections_buyUpdateWithWhereUniqueWithoutBought_byInputSchema;
