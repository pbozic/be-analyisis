import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { categoriesWhereUniqueInputSchema } from './categoriesWhereUniqueInputSchema';
import { categoriesCreateWithoutPromo_ads_categoryInputSchema } from './categoriesCreateWithoutPromo_ads_categoryInputSchema';
import { categoriesUncheckedCreateWithoutPromo_ads_categoryInputSchema } from './categoriesUncheckedCreateWithoutPromo_ads_categoryInputSchema';

export const categoriesCreateOrConnectWithoutPromo_ads_categoryInputSchema: z.ZodType<Prisma.categoriesCreateOrConnectWithoutPromo_ads_categoryInput> = z.object({
  where: z.lazy(() => categoriesWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => categoriesCreateWithoutPromo_ads_categoryInputSchema),z.lazy(() => categoriesUncheckedCreateWithoutPromo_ads_categoryInputSchema) ]),
}).strict();

export default categoriesCreateOrConnectWithoutPromo_ads_categoryInputSchema;
