import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { promo_sectionsCreateWithoutTranslatableInputSchema } from './promo_sectionsCreateWithoutTranslatableInputSchema';
import { promo_sectionsUncheckedCreateWithoutTranslatableInputSchema } from './promo_sectionsUncheckedCreateWithoutTranslatableInputSchema';
import { promo_sectionsCreateOrConnectWithoutTranslatableInputSchema } from './promo_sectionsCreateOrConnectWithoutTranslatableInputSchema';
import { promo_sectionsCreateManyTranslatableInputEnvelopeSchema } from './promo_sectionsCreateManyTranslatableInputEnvelopeSchema';
import { promo_sectionsWhereUniqueInputSchema } from './promo_sectionsWhereUniqueInputSchema';

export const promo_sectionsUncheckedCreateNestedManyWithoutTranslatableInputSchema: z.ZodType<Prisma.promo_sectionsUncheckedCreateNestedManyWithoutTranslatableInput> = z.object({
  create: z.union([ z.lazy(() => promo_sectionsCreateWithoutTranslatableInputSchema),z.lazy(() => promo_sectionsCreateWithoutTranslatableInputSchema).array(),z.lazy(() => promo_sectionsUncheckedCreateWithoutTranslatableInputSchema),z.lazy(() => promo_sectionsUncheckedCreateWithoutTranslatableInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => promo_sectionsCreateOrConnectWithoutTranslatableInputSchema),z.lazy(() => promo_sectionsCreateOrConnectWithoutTranslatableInputSchema).array() ]).optional(),
  createMany: z.lazy(() => promo_sectionsCreateManyTranslatableInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => promo_sectionsWhereUniqueInputSchema),z.lazy(() => promo_sectionsWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default promo_sectionsUncheckedCreateNestedManyWithoutTranslatableInputSchema;
