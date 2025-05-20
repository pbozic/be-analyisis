import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { promo_sectionsWhereUniqueInputSchema } from './promo_sectionsWhereUniqueInputSchema';
import { promo_sectionsUpdateWithoutTranslatableInputSchema } from './promo_sectionsUpdateWithoutTranslatableInputSchema';
import { promo_sectionsUncheckedUpdateWithoutTranslatableInputSchema } from './promo_sectionsUncheckedUpdateWithoutTranslatableInputSchema';
import { promo_sectionsCreateWithoutTranslatableInputSchema } from './promo_sectionsCreateWithoutTranslatableInputSchema';
import { promo_sectionsUncheckedCreateWithoutTranslatableInputSchema } from './promo_sectionsUncheckedCreateWithoutTranslatableInputSchema';

export const promo_sectionsUpsertWithWhereUniqueWithoutTranslatableInputSchema: z.ZodType<Prisma.promo_sectionsUpsertWithWhereUniqueWithoutTranslatableInput> = z.object({
  where: z.lazy(() => promo_sectionsWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => promo_sectionsUpdateWithoutTranslatableInputSchema),z.lazy(() => promo_sectionsUncheckedUpdateWithoutTranslatableInputSchema) ]),
  create: z.union([ z.lazy(() => promo_sectionsCreateWithoutTranslatableInputSchema),z.lazy(() => promo_sectionsUncheckedCreateWithoutTranslatableInputSchema) ]),
}).strict();

export default promo_sectionsUpsertWithWhereUniqueWithoutTranslatableInputSchema;
