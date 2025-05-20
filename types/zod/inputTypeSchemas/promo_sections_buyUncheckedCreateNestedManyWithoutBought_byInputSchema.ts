import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { promo_sections_buyCreateWithoutBought_byInputSchema } from './promo_sections_buyCreateWithoutBought_byInputSchema';
import { promo_sections_buyUncheckedCreateWithoutBought_byInputSchema } from './promo_sections_buyUncheckedCreateWithoutBought_byInputSchema';
import { promo_sections_buyCreateOrConnectWithoutBought_byInputSchema } from './promo_sections_buyCreateOrConnectWithoutBought_byInputSchema';
import { promo_sections_buyCreateManyBought_byInputEnvelopeSchema } from './promo_sections_buyCreateManyBought_byInputEnvelopeSchema';
import { promo_sections_buyWhereUniqueInputSchema } from './promo_sections_buyWhereUniqueInputSchema';

export const promo_sections_buyUncheckedCreateNestedManyWithoutBought_byInputSchema: z.ZodType<Prisma.promo_sections_buyUncheckedCreateNestedManyWithoutBought_byInput> = z.object({
  create: z.union([ z.lazy(() => promo_sections_buyCreateWithoutBought_byInputSchema),z.lazy(() => promo_sections_buyCreateWithoutBought_byInputSchema).array(),z.lazy(() => promo_sections_buyUncheckedCreateWithoutBought_byInputSchema),z.lazy(() => promo_sections_buyUncheckedCreateWithoutBought_byInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => promo_sections_buyCreateOrConnectWithoutBought_byInputSchema),z.lazy(() => promo_sections_buyCreateOrConnectWithoutBought_byInputSchema).array() ]).optional(),
  createMany: z.lazy(() => promo_sections_buyCreateManyBought_byInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => promo_sections_buyWhereUniqueInputSchema),z.lazy(() => promo_sections_buyWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default promo_sections_buyUncheckedCreateNestedManyWithoutBought_byInputSchema;
