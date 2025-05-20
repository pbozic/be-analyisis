import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { categoriesWhereUniqueInputSchema } from './categoriesWhereUniqueInputSchema';
import { categoriesUpdateWithoutParent_categoryInputSchema } from './categoriesUpdateWithoutParent_categoryInputSchema';
import { categoriesUncheckedUpdateWithoutParent_categoryInputSchema } from './categoriesUncheckedUpdateWithoutParent_categoryInputSchema';
import { categoriesCreateWithoutParent_categoryInputSchema } from './categoriesCreateWithoutParent_categoryInputSchema';
import { categoriesUncheckedCreateWithoutParent_categoryInputSchema } from './categoriesUncheckedCreateWithoutParent_categoryInputSchema';

export const categoriesUpsertWithWhereUniqueWithoutParent_categoryInputSchema: z.ZodType<Prisma.categoriesUpsertWithWhereUniqueWithoutParent_categoryInput> = z.object({
  where: z.lazy(() => categoriesWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => categoriesUpdateWithoutParent_categoryInputSchema),z.lazy(() => categoriesUncheckedUpdateWithoutParent_categoryInputSchema) ]),
  create: z.union([ z.lazy(() => categoriesCreateWithoutParent_categoryInputSchema),z.lazy(() => categoriesUncheckedCreateWithoutParent_categoryInputSchema) ]),
}).strict();

export default categoriesUpsertWithWhereUniqueWithoutParent_categoryInputSchema;
