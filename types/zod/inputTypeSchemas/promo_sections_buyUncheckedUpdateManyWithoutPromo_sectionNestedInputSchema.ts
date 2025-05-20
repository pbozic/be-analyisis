import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { promo_sections_buyCreateWithoutPromo_sectionInputSchema } from './promo_sections_buyCreateWithoutPromo_sectionInputSchema';
import { promo_sections_buyUncheckedCreateWithoutPromo_sectionInputSchema } from './promo_sections_buyUncheckedCreateWithoutPromo_sectionInputSchema';
import { promo_sections_buyCreateOrConnectWithoutPromo_sectionInputSchema } from './promo_sections_buyCreateOrConnectWithoutPromo_sectionInputSchema';
import { promo_sections_buyUpsertWithWhereUniqueWithoutPromo_sectionInputSchema } from './promo_sections_buyUpsertWithWhereUniqueWithoutPromo_sectionInputSchema';
import { promo_sections_buyCreateManyPromo_sectionInputEnvelopeSchema } from './promo_sections_buyCreateManyPromo_sectionInputEnvelopeSchema';
import { promo_sections_buyWhereUniqueInputSchema } from './promo_sections_buyWhereUniqueInputSchema';
import { promo_sections_buyUpdateWithWhereUniqueWithoutPromo_sectionInputSchema } from './promo_sections_buyUpdateWithWhereUniqueWithoutPromo_sectionInputSchema';
import { promo_sections_buyUpdateManyWithWhereWithoutPromo_sectionInputSchema } from './promo_sections_buyUpdateManyWithWhereWithoutPromo_sectionInputSchema';
import { promo_sections_buyScalarWhereInputSchema } from './promo_sections_buyScalarWhereInputSchema';

export const promo_sections_buyUncheckedUpdateManyWithoutPromo_sectionNestedInputSchema: z.ZodType<Prisma.promo_sections_buyUncheckedUpdateManyWithoutPromo_sectionNestedInput> = z.object({
  create: z.union([ z.lazy(() => promo_sections_buyCreateWithoutPromo_sectionInputSchema),z.lazy(() => promo_sections_buyCreateWithoutPromo_sectionInputSchema).array(),z.lazy(() => promo_sections_buyUncheckedCreateWithoutPromo_sectionInputSchema),z.lazy(() => promo_sections_buyUncheckedCreateWithoutPromo_sectionInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => promo_sections_buyCreateOrConnectWithoutPromo_sectionInputSchema),z.lazy(() => promo_sections_buyCreateOrConnectWithoutPromo_sectionInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => promo_sections_buyUpsertWithWhereUniqueWithoutPromo_sectionInputSchema),z.lazy(() => promo_sections_buyUpsertWithWhereUniqueWithoutPromo_sectionInputSchema).array() ]).optional(),
  createMany: z.lazy(() => promo_sections_buyCreateManyPromo_sectionInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => promo_sections_buyWhereUniqueInputSchema),z.lazy(() => promo_sections_buyWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => promo_sections_buyWhereUniqueInputSchema),z.lazy(() => promo_sections_buyWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => promo_sections_buyWhereUniqueInputSchema),z.lazy(() => promo_sections_buyWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => promo_sections_buyWhereUniqueInputSchema),z.lazy(() => promo_sections_buyWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => promo_sections_buyUpdateWithWhereUniqueWithoutPromo_sectionInputSchema),z.lazy(() => promo_sections_buyUpdateWithWhereUniqueWithoutPromo_sectionInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => promo_sections_buyUpdateManyWithWhereWithoutPromo_sectionInputSchema),z.lazy(() => promo_sections_buyUpdateManyWithWhereWithoutPromo_sectionInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => promo_sections_buyScalarWhereInputSchema),z.lazy(() => promo_sections_buyScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default promo_sections_buyUncheckedUpdateManyWithoutPromo_sectionNestedInputSchema;
