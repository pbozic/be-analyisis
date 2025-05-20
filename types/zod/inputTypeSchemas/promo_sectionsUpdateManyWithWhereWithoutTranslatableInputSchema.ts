import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { promo_sectionsScalarWhereInputSchema } from './promo_sectionsScalarWhereInputSchema';
import { promo_sectionsUpdateManyMutationInputSchema } from './promo_sectionsUpdateManyMutationInputSchema';
import { promo_sectionsUncheckedUpdateManyWithoutTranslatableInputSchema } from './promo_sectionsUncheckedUpdateManyWithoutTranslatableInputSchema';

export const promo_sectionsUpdateManyWithWhereWithoutTranslatableInputSchema: z.ZodType<Prisma.promo_sectionsUpdateManyWithWhereWithoutTranslatableInput> = z.object({
  where: z.lazy(() => promo_sectionsScalarWhereInputSchema),
  data: z.union([ z.lazy(() => promo_sectionsUpdateManyMutationInputSchema),z.lazy(() => promo_sectionsUncheckedUpdateManyWithoutTranslatableInputSchema) ]),
}).strict();

export default promo_sectionsUpdateManyWithWhereWithoutTranslatableInputSchema;
