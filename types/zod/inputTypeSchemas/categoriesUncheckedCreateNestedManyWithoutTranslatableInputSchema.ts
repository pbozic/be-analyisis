import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { categoriesCreateWithoutTranslatableInputSchema } from './categoriesCreateWithoutTranslatableInputSchema';
import { categoriesUncheckedCreateWithoutTranslatableInputSchema } from './categoriesUncheckedCreateWithoutTranslatableInputSchema';
import { categoriesCreateOrConnectWithoutTranslatableInputSchema } from './categoriesCreateOrConnectWithoutTranslatableInputSchema';
import { categoriesCreateManyTranslatableInputEnvelopeSchema } from './categoriesCreateManyTranslatableInputEnvelopeSchema';
import { categoriesWhereUniqueInputSchema } from './categoriesWhereUniqueInputSchema';

export const categoriesUncheckedCreateNestedManyWithoutTranslatableInputSchema: z.ZodType<Prisma.categoriesUncheckedCreateNestedManyWithoutTranslatableInput> = z.object({
  create: z.union([ z.lazy(() => categoriesCreateWithoutTranslatableInputSchema),z.lazy(() => categoriesCreateWithoutTranslatableInputSchema).array(),z.lazy(() => categoriesUncheckedCreateWithoutTranslatableInputSchema),z.lazy(() => categoriesUncheckedCreateWithoutTranslatableInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => categoriesCreateOrConnectWithoutTranslatableInputSchema),z.lazy(() => categoriesCreateOrConnectWithoutTranslatableInputSchema).array() ]).optional(),
  createMany: z.lazy(() => categoriesCreateManyTranslatableInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => categoriesWhereUniqueInputSchema),z.lazy(() => categoriesWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default categoriesUncheckedCreateNestedManyWithoutTranslatableInputSchema;
