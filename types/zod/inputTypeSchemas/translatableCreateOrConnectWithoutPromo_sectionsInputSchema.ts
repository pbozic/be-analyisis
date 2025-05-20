import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { translatableWhereUniqueInputSchema } from './translatableWhereUniqueInputSchema';
import { translatableCreateWithoutPromo_sectionsInputSchema } from './translatableCreateWithoutPromo_sectionsInputSchema';
import { translatableUncheckedCreateWithoutPromo_sectionsInputSchema } from './translatableUncheckedCreateWithoutPromo_sectionsInputSchema';

export const translatableCreateOrConnectWithoutPromo_sectionsInputSchema: z.ZodType<Prisma.translatableCreateOrConnectWithoutPromo_sectionsInput> = z.object({
  where: z.lazy(() => translatableWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => translatableCreateWithoutPromo_sectionsInputSchema),z.lazy(() => translatableUncheckedCreateWithoutPromo_sectionsInputSchema) ]),
}).strict();

export default translatableCreateOrConnectWithoutPromo_sectionsInputSchema;
