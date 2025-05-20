import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { promo_sectionsWhereUniqueInputSchema } from './promo_sectionsWhereUniqueInputSchema';
import { promo_sectionsCreateWithoutTranslatableInputSchema } from './promo_sectionsCreateWithoutTranslatableInputSchema';
import { promo_sectionsUncheckedCreateWithoutTranslatableInputSchema } from './promo_sectionsUncheckedCreateWithoutTranslatableInputSchema';

export const promo_sectionsCreateOrConnectWithoutTranslatableInputSchema: z.ZodType<Prisma.promo_sectionsCreateOrConnectWithoutTranslatableInput> = z.object({
  where: z.lazy(() => promo_sectionsWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => promo_sectionsCreateWithoutTranslatableInputSchema),z.lazy(() => promo_sectionsUncheckedCreateWithoutTranslatableInputSchema) ]),
}).strict();

export default promo_sectionsCreateOrConnectWithoutTranslatableInputSchema;
