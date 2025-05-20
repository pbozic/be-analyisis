import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { local_pricesFindManyArgsSchema } from "../outputTypeSchemas/local_pricesFindManyArgsSchema"
import { businessArgsSchema } from "../outputTypeSchemas/businessArgsSchema"
import { Local_productsCountOutputTypeArgsSchema } from "../outputTypeSchemas/Local_productsCountOutputTypeArgsSchema"

export const local_productsIncludeSchema: z.ZodType<Prisma.local_productsInclude> = z.object({
  prices: z.union([z.boolean(),z.lazy(() => local_pricesFindManyArgsSchema)]).optional(),
  business: z.union([z.boolean(),z.lazy(() => businessArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => Local_productsCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default local_productsIncludeSchema;
