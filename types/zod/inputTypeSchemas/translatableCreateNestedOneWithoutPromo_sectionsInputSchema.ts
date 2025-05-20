import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { translatableCreateWithoutPromo_sectionsInputSchema } from './translatableCreateWithoutPromo_sectionsInputSchema';
import { translatableUncheckedCreateWithoutPromo_sectionsInputSchema } from './translatableUncheckedCreateWithoutPromo_sectionsInputSchema';
import { translatableCreateOrConnectWithoutPromo_sectionsInputSchema } from './translatableCreateOrConnectWithoutPromo_sectionsInputSchema';
import { translatableWhereUniqueInputSchema } from './translatableWhereUniqueInputSchema';

export const translatableCreateNestedOneWithoutPromo_sectionsInputSchema: z.ZodType<Prisma.translatableCreateNestedOneWithoutPromo_sectionsInput> = z.object({
  create: z.union([ z.lazy(() => translatableCreateWithoutPromo_sectionsInputSchema),z.lazy(() => translatableUncheckedCreateWithoutPromo_sectionsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => translatableCreateOrConnectWithoutPromo_sectionsInputSchema).optional(),
  connect: z.lazy(() => translatableWhereUniqueInputSchema).optional()
}).strict();

export default translatableCreateNestedOneWithoutPromo_sectionsInputSchema;
