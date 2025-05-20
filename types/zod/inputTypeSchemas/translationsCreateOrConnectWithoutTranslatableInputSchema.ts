import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { translationsWhereUniqueInputSchema } from './translationsWhereUniqueInputSchema';
import { translationsCreateWithoutTranslatableInputSchema } from './translationsCreateWithoutTranslatableInputSchema';
import { translationsUncheckedCreateWithoutTranslatableInputSchema } from './translationsUncheckedCreateWithoutTranslatableInputSchema';

export const translationsCreateOrConnectWithoutTranslatableInputSchema: z.ZodType<Prisma.translationsCreateOrConnectWithoutTranslatableInput> = z.object({
  where: z.lazy(() => translationsWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => translationsCreateWithoutTranslatableInputSchema),z.lazy(() => translationsUncheckedCreateWithoutTranslatableInputSchema) ]),
}).strict();

export default translationsCreateOrConnectWithoutTranslatableInputSchema;
