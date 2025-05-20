import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { wordsCreateWithoutTranslatableInputSchema } from './wordsCreateWithoutTranslatableInputSchema';
import { wordsUncheckedCreateWithoutTranslatableInputSchema } from './wordsUncheckedCreateWithoutTranslatableInputSchema';
import { wordsCreateOrConnectWithoutTranslatableInputSchema } from './wordsCreateOrConnectWithoutTranslatableInputSchema';
import { wordsUpsertWithWhereUniqueWithoutTranslatableInputSchema } from './wordsUpsertWithWhereUniqueWithoutTranslatableInputSchema';
import { wordsCreateManyTranslatableInputEnvelopeSchema } from './wordsCreateManyTranslatableInputEnvelopeSchema';
import { wordsWhereUniqueInputSchema } from './wordsWhereUniqueInputSchema';
import { wordsUpdateWithWhereUniqueWithoutTranslatableInputSchema } from './wordsUpdateWithWhereUniqueWithoutTranslatableInputSchema';
import { wordsUpdateManyWithWhereWithoutTranslatableInputSchema } from './wordsUpdateManyWithWhereWithoutTranslatableInputSchema';
import { wordsScalarWhereInputSchema } from './wordsScalarWhereInputSchema';

export const wordsUncheckedUpdateManyWithoutTranslatableNestedInputSchema: z.ZodType<Prisma.wordsUncheckedUpdateManyWithoutTranslatableNestedInput> = z.object({
  create: z.union([ z.lazy(() => wordsCreateWithoutTranslatableInputSchema),z.lazy(() => wordsCreateWithoutTranslatableInputSchema).array(),z.lazy(() => wordsUncheckedCreateWithoutTranslatableInputSchema),z.lazy(() => wordsUncheckedCreateWithoutTranslatableInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => wordsCreateOrConnectWithoutTranslatableInputSchema),z.lazy(() => wordsCreateOrConnectWithoutTranslatableInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => wordsUpsertWithWhereUniqueWithoutTranslatableInputSchema),z.lazy(() => wordsUpsertWithWhereUniqueWithoutTranslatableInputSchema).array() ]).optional(),
  createMany: z.lazy(() => wordsCreateManyTranslatableInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => wordsWhereUniqueInputSchema),z.lazy(() => wordsWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => wordsWhereUniqueInputSchema),z.lazy(() => wordsWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => wordsWhereUniqueInputSchema),z.lazy(() => wordsWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => wordsWhereUniqueInputSchema),z.lazy(() => wordsWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => wordsUpdateWithWhereUniqueWithoutTranslatableInputSchema),z.lazy(() => wordsUpdateWithWhereUniqueWithoutTranslatableInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => wordsUpdateManyWithWhereWithoutTranslatableInputSchema),z.lazy(() => wordsUpdateManyWithWhereWithoutTranslatableInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => wordsScalarWhereInputSchema),z.lazy(() => wordsScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default wordsUncheckedUpdateManyWithoutTranslatableNestedInputSchema;
