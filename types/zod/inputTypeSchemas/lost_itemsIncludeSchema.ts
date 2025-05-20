import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { documentsFindManyArgsSchema } from "../outputTypeSchemas/documentsFindManyArgsSchema"
import { usersArgsSchema } from "../outputTypeSchemas/usersArgsSchema"
import { Lost_itemsCountOutputTypeArgsSchema } from "../outputTypeSchemas/Lost_itemsCountOutputTypeArgsSchema"

export const lost_itemsIncludeSchema: z.ZodType<Prisma.lost_itemsInclude> = z.object({
  documents: z.union([z.boolean(),z.lazy(() => documentsFindManyArgsSchema)]).optional(),
  user: z.union([z.boolean(),z.lazy(() => usersArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => Lost_itemsCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default lost_itemsIncludeSchema;
