import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { businessWhereInputSchema } from './businessWhereInputSchema';
import { businessUpdateWithoutWord_buy_stripe_productInputSchema } from './businessUpdateWithoutWord_buy_stripe_productInputSchema';
import { businessUncheckedUpdateWithoutWord_buy_stripe_productInputSchema } from './businessUncheckedUpdateWithoutWord_buy_stripe_productInputSchema';

export const businessUpdateToOneWithWhereWithoutWord_buy_stripe_productInputSchema: z.ZodType<Prisma.businessUpdateToOneWithWhereWithoutWord_buy_stripe_productInput> = z.object({
  where: z.lazy(() => businessWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => businessUpdateWithoutWord_buy_stripe_productInputSchema),z.lazy(() => businessUncheckedUpdateWithoutWord_buy_stripe_productInputSchema) ]),
}).strict();

export default businessUpdateToOneWithWhereWithoutWord_buy_stripe_productInputSchema;
