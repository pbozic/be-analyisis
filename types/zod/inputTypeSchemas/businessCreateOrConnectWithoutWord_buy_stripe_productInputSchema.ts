import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { businessWhereUniqueInputSchema } from './businessWhereUniqueInputSchema';
import { businessCreateWithoutWord_buy_stripe_productInputSchema } from './businessCreateWithoutWord_buy_stripe_productInputSchema';
import { businessUncheckedCreateWithoutWord_buy_stripe_productInputSchema } from './businessUncheckedCreateWithoutWord_buy_stripe_productInputSchema';

export const businessCreateOrConnectWithoutWord_buy_stripe_productInputSchema: z.ZodType<Prisma.businessCreateOrConnectWithoutWord_buy_stripe_productInput> = z.object({
  where: z.lazy(() => businessWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => businessCreateWithoutWord_buy_stripe_productInputSchema),z.lazy(() => businessUncheckedCreateWithoutWord_buy_stripe_productInputSchema) ]),
}).strict();

export default businessCreateOrConnectWithoutWord_buy_stripe_productInputSchema;
