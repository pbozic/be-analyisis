import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { wordsCreateWithoutTranslatableInputSchema } from './wordsCreateWithoutTranslatableInputSchema';
import { wordsUncheckedCreateWithoutTranslatableInputSchema } from './wordsUncheckedCreateWithoutTranslatableInputSchema';
import { wordsCreateOrConnectWithoutTranslatableInputSchema } from './wordsCreateOrConnectWithoutTranslatableInputSchema';
import { wordsCreateManyTranslatableInputEnvelopeSchema } from './wordsCreateManyTranslatableInputEnvelopeSchema';
import { wordsWhereUniqueInputSchema } from './wordsWhereUniqueInputSchema';

export const wordsCreateNestedManyWithoutTranslatableInputSchema: z.ZodType<Prisma.wordsCreateNestedManyWithoutTranslatableInput> = z.object({
  create: z.union([ z.lazy(() => wordsCreateWithoutTranslatableInputSchema),z.lazy(() => wordsCreateWithoutTranslatableInputSchema).array(),z.lazy(() => wordsUncheckedCreateWithoutTranslatableInputSchema),z.lazy(() => wordsUncheckedCreateWithoutTranslatableInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => wordsCreateOrConnectWithoutTranslatableInputSchema),z.lazy(() => wordsCreateOrConnectWithoutTranslatableInputSchema).array() ]).optional(),
  createMany: z.lazy(() => wordsCreateManyTranslatableInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => wordsWhereUniqueInputSchema),z.lazy(() => wordsWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default wordsCreateNestedManyWithoutTranslatableInputSchema;
