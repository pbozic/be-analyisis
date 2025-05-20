import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { local_productsCreateWithoutPricesInputSchema } from './local_productsCreateWithoutPricesInputSchema';
import { local_productsUncheckedCreateWithoutPricesInputSchema } from './local_productsUncheckedCreateWithoutPricesInputSchema';
import { local_productsCreateOrConnectWithoutPricesInputSchema } from './local_productsCreateOrConnectWithoutPricesInputSchema';
import { local_productsUpsertWithoutPricesInputSchema } from './local_productsUpsertWithoutPricesInputSchema';
import { local_productsWhereUniqueInputSchema } from './local_productsWhereUniqueInputSchema';
import { local_productsUpdateToOneWithWhereWithoutPricesInputSchema } from './local_productsUpdateToOneWithWhereWithoutPricesInputSchema';
import { local_productsUpdateWithoutPricesInputSchema } from './local_productsUpdateWithoutPricesInputSchema';
import { local_productsUncheckedUpdateWithoutPricesInputSchema } from './local_productsUncheckedUpdateWithoutPricesInputSchema';

export const local_productsUpdateOneRequiredWithoutPricesNestedInputSchema: z.ZodType<Prisma.local_productsUpdateOneRequiredWithoutPricesNestedInput> = z.object({
  create: z.union([ z.lazy(() => local_productsCreateWithoutPricesInputSchema),z.lazy(() => local_productsUncheckedCreateWithoutPricesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => local_productsCreateOrConnectWithoutPricesInputSchema).optional(),
  upsert: z.lazy(() => local_productsUpsertWithoutPricesInputSchema).optional(),
  connect: z.lazy(() => local_productsWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => local_productsUpdateToOneWithWhereWithoutPricesInputSchema),z.lazy(() => local_productsUpdateWithoutPricesInputSchema),z.lazy(() => local_productsUncheckedUpdateWithoutPricesInputSchema) ]).optional(),
}).strict();

export default local_productsUpdateOneRequiredWithoutPricesNestedInputSchema;
