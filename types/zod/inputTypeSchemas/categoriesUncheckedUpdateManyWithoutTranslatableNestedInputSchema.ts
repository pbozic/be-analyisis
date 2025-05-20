import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { categoriesCreateWithoutTranslatableInputSchema } from './categoriesCreateWithoutTranslatableInputSchema';
import { categoriesUncheckedCreateWithoutTranslatableInputSchema } from './categoriesUncheckedCreateWithoutTranslatableInputSchema';
import { categoriesCreateOrConnectWithoutTranslatableInputSchema } from './categoriesCreateOrConnectWithoutTranslatableInputSchema';
import { categoriesUpsertWithWhereUniqueWithoutTranslatableInputSchema } from './categoriesUpsertWithWhereUniqueWithoutTranslatableInputSchema';
import { categoriesCreateManyTranslatableInputEnvelopeSchema } from './categoriesCreateManyTranslatableInputEnvelopeSchema';
import { categoriesWhereUniqueInputSchema } from './categoriesWhereUniqueInputSchema';
import { categoriesUpdateWithWhereUniqueWithoutTranslatableInputSchema } from './categoriesUpdateWithWhereUniqueWithoutTranslatableInputSchema';
import { categoriesUpdateManyWithWhereWithoutTranslatableInputSchema } from './categoriesUpdateManyWithWhereWithoutTranslatableInputSchema';
import { categoriesScalarWhereInputSchema } from './categoriesScalarWhereInputSchema';

export const categoriesUncheckedUpdateManyWithoutTranslatableNestedInputSchema: z.ZodType<Prisma.categoriesUncheckedUpdateManyWithoutTranslatableNestedInput> = z.object({
  create: z.union([ z.lazy(() => categoriesCreateWithoutTranslatableInputSchema),z.lazy(() => categoriesCreateWithoutTranslatableInputSchema).array(),z.lazy(() => categoriesUncheckedCreateWithoutTranslatableInputSchema),z.lazy(() => categoriesUncheckedCreateWithoutTranslatableInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => categoriesCreateOrConnectWithoutTranslatableInputSchema),z.lazy(() => categoriesCreateOrConnectWithoutTranslatableInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => categoriesUpsertWithWhereUniqueWithoutTranslatableInputSchema),z.lazy(() => categoriesUpsertWithWhereUniqueWithoutTranslatableInputSchema).array() ]).optional(),
  createMany: z.lazy(() => categoriesCreateManyTranslatableInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => categoriesWhereUniqueInputSchema),z.lazy(() => categoriesWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => categoriesWhereUniqueInputSchema),z.lazy(() => categoriesWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => categoriesWhereUniqueInputSchema),z.lazy(() => categoriesWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => categoriesWhereUniqueInputSchema),z.lazy(() => categoriesWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => categoriesUpdateWithWhereUniqueWithoutTranslatableInputSchema),z.lazy(() => categoriesUpdateWithWhereUniqueWithoutTranslatableInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => categoriesUpdateManyWithWhereWithoutTranslatableInputSchema),z.lazy(() => categoriesUpdateManyWithWhereWithoutTranslatableInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => categoriesScalarWhereInputSchema),z.lazy(() => categoriesScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default categoriesUncheckedUpdateManyWithoutTranslatableNestedInputSchema;
