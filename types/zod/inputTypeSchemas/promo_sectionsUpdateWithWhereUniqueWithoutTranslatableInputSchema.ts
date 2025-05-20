import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { promo_sectionsWhereUniqueInputSchema } from './promo_sectionsWhereUniqueInputSchema';
import { promo_sectionsUpdateWithoutTranslatableInputSchema } from './promo_sectionsUpdateWithoutTranslatableInputSchema';
import { promo_sectionsUncheckedUpdateWithoutTranslatableInputSchema } from './promo_sectionsUncheckedUpdateWithoutTranslatableInputSchema';

export const promo_sectionsUpdateWithWhereUniqueWithoutTranslatableInputSchema: z.ZodType<Prisma.promo_sectionsUpdateWithWhereUniqueWithoutTranslatableInput> = z.object({
  where: z.lazy(() => promo_sectionsWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => promo_sectionsUpdateWithoutTranslatableInputSchema),z.lazy(() => promo_sectionsUncheckedUpdateWithoutTranslatableInputSchema) ]),
}).strict();

export default promo_sectionsUpdateWithWhereUniqueWithoutTranslatableInputSchema;
