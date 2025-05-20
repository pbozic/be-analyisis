import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { categoriesCreateWithoutPromo_ads_categoryInputSchema } from './categoriesCreateWithoutPromo_ads_categoryInputSchema';
import { categoriesUncheckedCreateWithoutPromo_ads_categoryInputSchema } from './categoriesUncheckedCreateWithoutPromo_ads_categoryInputSchema';
import { categoriesCreateOrConnectWithoutPromo_ads_categoryInputSchema } from './categoriesCreateOrConnectWithoutPromo_ads_categoryInputSchema';
import { categoriesWhereUniqueInputSchema } from './categoriesWhereUniqueInputSchema';

export const categoriesCreateNestedOneWithoutPromo_ads_categoryInputSchema: z.ZodType<Prisma.categoriesCreateNestedOneWithoutPromo_ads_categoryInput> = z.object({
  create: z.union([ z.lazy(() => categoriesCreateWithoutPromo_ads_categoryInputSchema),z.lazy(() => categoriesUncheckedCreateWithoutPromo_ads_categoryInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => categoriesCreateOrConnectWithoutPromo_ads_categoryInputSchema).optional(),
  connect: z.lazy(() => categoriesWhereUniqueInputSchema).optional()
}).strict();

export default categoriesCreateNestedOneWithoutPromo_ads_categoryInputSchema;
