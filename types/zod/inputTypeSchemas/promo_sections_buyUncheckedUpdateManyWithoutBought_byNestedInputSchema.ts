import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { promo_sections_buyCreateWithoutBought_byInputSchema } from './promo_sections_buyCreateWithoutBought_byInputSchema';
import { promo_sections_buyUncheckedCreateWithoutBought_byInputSchema } from './promo_sections_buyUncheckedCreateWithoutBought_byInputSchema';
import { promo_sections_buyCreateOrConnectWithoutBought_byInputSchema } from './promo_sections_buyCreateOrConnectWithoutBought_byInputSchema';
import { promo_sections_buyUpsertWithWhereUniqueWithoutBought_byInputSchema } from './promo_sections_buyUpsertWithWhereUniqueWithoutBought_byInputSchema';
import { promo_sections_buyCreateManyBought_byInputEnvelopeSchema } from './promo_sections_buyCreateManyBought_byInputEnvelopeSchema';
import { promo_sections_buyWhereUniqueInputSchema } from './promo_sections_buyWhereUniqueInputSchema';
import { promo_sections_buyUpdateWithWhereUniqueWithoutBought_byInputSchema } from './promo_sections_buyUpdateWithWhereUniqueWithoutBought_byInputSchema';
import { promo_sections_buyUpdateManyWithWhereWithoutBought_byInputSchema } from './promo_sections_buyUpdateManyWithWhereWithoutBought_byInputSchema';
import { promo_sections_buyScalarWhereInputSchema } from './promo_sections_buyScalarWhereInputSchema';

export const promo_sections_buyUncheckedUpdateManyWithoutBought_byNestedInputSchema: z.ZodType<Prisma.promo_sections_buyUncheckedUpdateManyWithoutBought_byNestedInput> = z.object({
  create: z.union([ z.lazy(() => promo_sections_buyCreateWithoutBought_byInputSchema),z.lazy(() => promo_sections_buyCreateWithoutBought_byInputSchema).array(),z.lazy(() => promo_sections_buyUncheckedCreateWithoutBought_byInputSchema),z.lazy(() => promo_sections_buyUncheckedCreateWithoutBought_byInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => promo_sections_buyCreateOrConnectWithoutBought_byInputSchema),z.lazy(() => promo_sections_buyCreateOrConnectWithoutBought_byInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => promo_sections_buyUpsertWithWhereUniqueWithoutBought_byInputSchema),z.lazy(() => promo_sections_buyUpsertWithWhereUniqueWithoutBought_byInputSchema).array() ]).optional(),
  createMany: z.lazy(() => promo_sections_buyCreateManyBought_byInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => promo_sections_buyWhereUniqueInputSchema),z.lazy(() => promo_sections_buyWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => promo_sections_buyWhereUniqueInputSchema),z.lazy(() => promo_sections_buyWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => promo_sections_buyWhereUniqueInputSchema),z.lazy(() => promo_sections_buyWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => promo_sections_buyWhereUniqueInputSchema),z.lazy(() => promo_sections_buyWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => promo_sections_buyUpdateWithWhereUniqueWithoutBought_byInputSchema),z.lazy(() => promo_sections_buyUpdateWithWhereUniqueWithoutBought_byInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => promo_sections_buyUpdateManyWithWhereWithoutBought_byInputSchema),z.lazy(() => promo_sections_buyUpdateManyWithWhereWithoutBought_byInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => promo_sections_buyScalarWhereInputSchema),z.lazy(() => promo_sections_buyScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default promo_sections_buyUncheckedUpdateManyWithoutBought_byNestedInputSchema;
