import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { promo_sections_buyWhereUniqueInputSchema } from './promo_sections_buyWhereUniqueInputSchema';
import { promo_sections_buyUpdateWithoutBought_byInputSchema } from './promo_sections_buyUpdateWithoutBought_byInputSchema';
import { promo_sections_buyUncheckedUpdateWithoutBought_byInputSchema } from './promo_sections_buyUncheckedUpdateWithoutBought_byInputSchema';
import { promo_sections_buyCreateWithoutBought_byInputSchema } from './promo_sections_buyCreateWithoutBought_byInputSchema';
import { promo_sections_buyUncheckedCreateWithoutBought_byInputSchema } from './promo_sections_buyUncheckedCreateWithoutBought_byInputSchema';

export const promo_sections_buyUpsertWithWhereUniqueWithoutBought_byInputSchema: z.ZodType<Prisma.promo_sections_buyUpsertWithWhereUniqueWithoutBought_byInput> = z.object({
  where: z.lazy(() => promo_sections_buyWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => promo_sections_buyUpdateWithoutBought_byInputSchema),z.lazy(() => promo_sections_buyUncheckedUpdateWithoutBought_byInputSchema) ]),
  create: z.union([ z.lazy(() => promo_sections_buyCreateWithoutBought_byInputSchema),z.lazy(() => promo_sections_buyUncheckedCreateWithoutBought_byInputSchema) ]),
}).strict();

export default promo_sections_buyUpsertWithWhereUniqueWithoutBought_byInputSchema;
