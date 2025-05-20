import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { translatableCreateWithoutPromo_sectionsInputSchema } from './translatableCreateWithoutPromo_sectionsInputSchema';
import { translatableUncheckedCreateWithoutPromo_sectionsInputSchema } from './translatableUncheckedCreateWithoutPromo_sectionsInputSchema';
import { translatableCreateOrConnectWithoutPromo_sectionsInputSchema } from './translatableCreateOrConnectWithoutPromo_sectionsInputSchema';
import { translatableUpsertWithoutPromo_sectionsInputSchema } from './translatableUpsertWithoutPromo_sectionsInputSchema';
import { translatableWhereUniqueInputSchema } from './translatableWhereUniqueInputSchema';
import { translatableUpdateToOneWithWhereWithoutPromo_sectionsInputSchema } from './translatableUpdateToOneWithWhereWithoutPromo_sectionsInputSchema';
import { translatableUpdateWithoutPromo_sectionsInputSchema } from './translatableUpdateWithoutPromo_sectionsInputSchema';
import { translatableUncheckedUpdateWithoutPromo_sectionsInputSchema } from './translatableUncheckedUpdateWithoutPromo_sectionsInputSchema';

export const translatableUpdateOneRequiredWithoutPromo_sectionsNestedInputSchema: z.ZodType<Prisma.translatableUpdateOneRequiredWithoutPromo_sectionsNestedInput> = z.object({
  create: z.union([ z.lazy(() => translatableCreateWithoutPromo_sectionsInputSchema),z.lazy(() => translatableUncheckedCreateWithoutPromo_sectionsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => translatableCreateOrConnectWithoutPromo_sectionsInputSchema).optional(),
  upsert: z.lazy(() => translatableUpsertWithoutPromo_sectionsInputSchema).optional(),
  connect: z.lazy(() => translatableWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => translatableUpdateToOneWithWhereWithoutPromo_sectionsInputSchema),z.lazy(() => translatableUpdateWithoutPromo_sectionsInputSchema),z.lazy(() => translatableUncheckedUpdateWithoutPromo_sectionsInputSchema) ]).optional(),
}).strict();

export default translatableUpdateOneRequiredWithoutPromo_sectionsNestedInputSchema;
