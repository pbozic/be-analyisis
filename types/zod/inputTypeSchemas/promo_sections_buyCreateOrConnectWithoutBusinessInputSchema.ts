import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { promo_sections_buyWhereUniqueInputSchema } from './promo_sections_buyWhereUniqueInputSchema';
import { promo_sections_buyCreateWithoutBusinessInputSchema } from './promo_sections_buyCreateWithoutBusinessInputSchema';
import { promo_sections_buyUncheckedCreateWithoutBusinessInputSchema } from './promo_sections_buyUncheckedCreateWithoutBusinessInputSchema';

export const promo_sections_buyCreateOrConnectWithoutBusinessInputSchema: z.ZodType<Prisma.promo_sections_buyCreateOrConnectWithoutBusinessInput> = z.object({
  where: z.lazy(() => promo_sections_buyWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => promo_sections_buyCreateWithoutBusinessInputSchema),z.lazy(() => promo_sections_buyUncheckedCreateWithoutBusinessInputSchema) ]),
}).strict();

export default promo_sections_buyCreateOrConnectWithoutBusinessInputSchema;
