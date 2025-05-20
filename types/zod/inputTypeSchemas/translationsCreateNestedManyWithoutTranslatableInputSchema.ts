import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { translationsCreateWithoutTranslatableInputSchema } from './translationsCreateWithoutTranslatableInputSchema';
import { translationsUncheckedCreateWithoutTranslatableInputSchema } from './translationsUncheckedCreateWithoutTranslatableInputSchema';
import { translationsCreateOrConnectWithoutTranslatableInputSchema } from './translationsCreateOrConnectWithoutTranslatableInputSchema';
import { translationsCreateManyTranslatableInputEnvelopeSchema } from './translationsCreateManyTranslatableInputEnvelopeSchema';
import { translationsWhereUniqueInputSchema } from './translationsWhereUniqueInputSchema';

export const translationsCreateNestedManyWithoutTranslatableInputSchema: z.ZodType<Prisma.translationsCreateNestedManyWithoutTranslatableInput> = z.object({
  create: z.union([ z.lazy(() => translationsCreateWithoutTranslatableInputSchema),z.lazy(() => translationsCreateWithoutTranslatableInputSchema).array(),z.lazy(() => translationsUncheckedCreateWithoutTranslatableInputSchema),z.lazy(() => translationsUncheckedCreateWithoutTranslatableInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => translationsCreateOrConnectWithoutTranslatableInputSchema),z.lazy(() => translationsCreateOrConnectWithoutTranslatableInputSchema).array() ]).optional(),
  createMany: z.lazy(() => translationsCreateManyTranslatableInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => translationsWhereUniqueInputSchema),z.lazy(() => translationsWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default translationsCreateNestedManyWithoutTranslatableInputSchema;
