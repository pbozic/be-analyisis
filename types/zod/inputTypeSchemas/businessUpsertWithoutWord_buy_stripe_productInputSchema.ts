import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { businessUpdateWithoutWord_buy_stripe_productInputSchema } from './businessUpdateWithoutWord_buy_stripe_productInputSchema';
import { businessUncheckedUpdateWithoutWord_buy_stripe_productInputSchema } from './businessUncheckedUpdateWithoutWord_buy_stripe_productInputSchema';
import { businessCreateWithoutWord_buy_stripe_productInputSchema } from './businessCreateWithoutWord_buy_stripe_productInputSchema';
import { businessUncheckedCreateWithoutWord_buy_stripe_productInputSchema } from './businessUncheckedCreateWithoutWord_buy_stripe_productInputSchema';
import { businessWhereInputSchema } from './businessWhereInputSchema';

export const businessUpsertWithoutWord_buy_stripe_productInputSchema: z.ZodType<Prisma.businessUpsertWithoutWord_buy_stripe_productInput> = z.object({
  update: z.union([ z.lazy(() => businessUpdateWithoutWord_buy_stripe_productInputSchema),z.lazy(() => businessUncheckedUpdateWithoutWord_buy_stripe_productInputSchema) ]),
  create: z.union([ z.lazy(() => businessCreateWithoutWord_buy_stripe_productInputSchema),z.lazy(() => businessUncheckedCreateWithoutWord_buy_stripe_productInputSchema) ]),
  where: z.lazy(() => businessWhereInputSchema).optional()
}).strict();

export default businessUpsertWithoutWord_buy_stripe_productInputSchema;
