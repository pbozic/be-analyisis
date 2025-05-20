import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { translationsCreateWithoutTranslatableInputSchema } from './translationsCreateWithoutTranslatableInputSchema';
import { translationsUncheckedCreateWithoutTranslatableInputSchema } from './translationsUncheckedCreateWithoutTranslatableInputSchema';
import { translationsCreateOrConnectWithoutTranslatableInputSchema } from './translationsCreateOrConnectWithoutTranslatableInputSchema';
import { translationsUpsertWithWhereUniqueWithoutTranslatableInputSchema } from './translationsUpsertWithWhereUniqueWithoutTranslatableInputSchema';
import { translationsCreateManyTranslatableInputEnvelopeSchema } from './translationsCreateManyTranslatableInputEnvelopeSchema';
import { translationsWhereUniqueInputSchema } from './translationsWhereUniqueInputSchema';
import { translationsUpdateWithWhereUniqueWithoutTranslatableInputSchema } from './translationsUpdateWithWhereUniqueWithoutTranslatableInputSchema';
import { translationsUpdateManyWithWhereWithoutTranslatableInputSchema } from './translationsUpdateManyWithWhereWithoutTranslatableInputSchema';
import { translationsScalarWhereInputSchema } from './translationsScalarWhereInputSchema';

export const translationsUncheckedUpdateManyWithoutTranslatableNestedInputSchema: z.ZodType<Prisma.translationsUncheckedUpdateManyWithoutTranslatableNestedInput> = z.object({
  create: z.union([ z.lazy(() => translationsCreateWithoutTranslatableInputSchema),z.lazy(() => translationsCreateWithoutTranslatableInputSchema).array(),z.lazy(() => translationsUncheckedCreateWithoutTranslatableInputSchema),z.lazy(() => translationsUncheckedCreateWithoutTranslatableInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => translationsCreateOrConnectWithoutTranslatableInputSchema),z.lazy(() => translationsCreateOrConnectWithoutTranslatableInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => translationsUpsertWithWhereUniqueWithoutTranslatableInputSchema),z.lazy(() => translationsUpsertWithWhereUniqueWithoutTranslatableInputSchema).array() ]).optional(),
  createMany: z.lazy(() => translationsCreateManyTranslatableInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => translationsWhereUniqueInputSchema),z.lazy(() => translationsWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => translationsWhereUniqueInputSchema),z.lazy(() => translationsWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => translationsWhereUniqueInputSchema),z.lazy(() => translationsWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => translationsWhereUniqueInputSchema),z.lazy(() => translationsWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => translationsUpdateWithWhereUniqueWithoutTranslatableInputSchema),z.lazy(() => translationsUpdateWithWhereUniqueWithoutTranslatableInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => translationsUpdateManyWithWhereWithoutTranslatableInputSchema),z.lazy(() => translationsUpdateManyWithWhereWithoutTranslatableInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => translationsScalarWhereInputSchema),z.lazy(() => translationsScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default translationsUncheckedUpdateManyWithoutTranslatableNestedInputSchema;
