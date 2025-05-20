import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { categoriesWhereInputSchema } from './categoriesWhereInputSchema';
import { categoriesUpdateWithoutPromo_ads_categoryInputSchema } from './categoriesUpdateWithoutPromo_ads_categoryInputSchema';
import { categoriesUncheckedUpdateWithoutPromo_ads_categoryInputSchema } from './categoriesUncheckedUpdateWithoutPromo_ads_categoryInputSchema';

export const categoriesUpdateToOneWithWhereWithoutPromo_ads_categoryInputSchema: z.ZodType<Prisma.categoriesUpdateToOneWithWhereWithoutPromo_ads_categoryInput> = z.object({
  where: z.lazy(() => categoriesWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => categoriesUpdateWithoutPromo_ads_categoryInputSchema),z.lazy(() => categoriesUncheckedUpdateWithoutPromo_ads_categoryInputSchema) ]),
}).strict();

export default categoriesUpdateToOneWithWhereWithoutPromo_ads_categoryInputSchema;
