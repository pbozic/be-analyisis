import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { local_productsCreateWithoutBusinessInputSchema } from './local_productsCreateWithoutBusinessInputSchema';
import { local_productsUncheckedCreateWithoutBusinessInputSchema } from './local_productsUncheckedCreateWithoutBusinessInputSchema';
import { local_productsCreateOrConnectWithoutBusinessInputSchema } from './local_productsCreateOrConnectWithoutBusinessInputSchema';
import { local_productsUpsertWithoutBusinessInputSchema } from './local_productsUpsertWithoutBusinessInputSchema';
import { local_productsWhereInputSchema } from './local_productsWhereInputSchema';
import { local_productsWhereUniqueInputSchema } from './local_productsWhereUniqueInputSchema';
import { local_productsUpdateToOneWithWhereWithoutBusinessInputSchema } from './local_productsUpdateToOneWithWhereWithoutBusinessInputSchema';
import { local_productsUpdateWithoutBusinessInputSchema } from './local_productsUpdateWithoutBusinessInputSchema';
import { local_productsUncheckedUpdateWithoutBusinessInputSchema } from './local_productsUncheckedUpdateWithoutBusinessInputSchema';

export const local_productsUpdateOneWithoutBusinessNestedInputSchema: z.ZodType<Prisma.local_productsUpdateOneWithoutBusinessNestedInput> = z.object({
  create: z.union([ z.lazy(() => local_productsCreateWithoutBusinessInputSchema),z.lazy(() => local_productsUncheckedCreateWithoutBusinessInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => local_productsCreateOrConnectWithoutBusinessInputSchema).optional(),
  upsert: z.lazy(() => local_productsUpsertWithoutBusinessInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => local_productsWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => local_productsWhereInputSchema) ]).optional(),
  connect: z.lazy(() => local_productsWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => local_productsUpdateToOneWithWhereWithoutBusinessInputSchema),z.lazy(() => local_productsUpdateWithoutBusinessInputSchema),z.lazy(() => local_productsUncheckedUpdateWithoutBusinessInputSchema) ]).optional(),
}).strict();

export default local_productsUpdateOneWithoutBusinessNestedInputSchema;
