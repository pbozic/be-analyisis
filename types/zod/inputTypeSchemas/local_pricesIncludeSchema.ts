import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { local_productsArgsSchema } from "../outputTypeSchemas/local_productsArgsSchema"

export const local_pricesIncludeSchema: z.ZodType<Prisma.local_pricesInclude> = z.object({
  product: z.union([z.boolean(),z.lazy(() => local_productsArgsSchema)]).optional(),
}).strict()

export default local_pricesIncludeSchema;
