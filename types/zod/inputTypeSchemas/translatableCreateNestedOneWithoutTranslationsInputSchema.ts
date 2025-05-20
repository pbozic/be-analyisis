import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { translatableCreateWithoutTranslationsInputSchema } from './translatableCreateWithoutTranslationsInputSchema';
import { translatableUncheckedCreateWithoutTranslationsInputSchema } from './translatableUncheckedCreateWithoutTranslationsInputSchema';
import { translatableCreateOrConnectWithoutTranslationsInputSchema } from './translatableCreateOrConnectWithoutTranslationsInputSchema';
import { translatableWhereUniqueInputSchema } from './translatableWhereUniqueInputSchema';

export const translatableCreateNestedOneWithoutTranslationsInputSchema: z.ZodType<Prisma.translatableCreateNestedOneWithoutTranslationsInput> = z.object({
  create: z.union([ z.lazy(() => translatableCreateWithoutTranslationsInputSchema),z.lazy(() => translatableUncheckedCreateWithoutTranslationsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => translatableCreateOrConnectWithoutTranslationsInputSchema).optional(),
  connect: z.lazy(() => translatableWhereUniqueInputSchema).optional()
}).strict();

export default translatableCreateNestedOneWithoutTranslationsInputSchema;
