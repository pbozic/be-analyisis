import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { documentsFindManyArgsSchema } from "../outputTypeSchemas/documentsFindManyArgsSchema"
import { usersArgsSchema } from "../outputTypeSchemas/usersArgsSchema"
import { Lost_itemsCountOutputTypeArgsSchema } from "../outputTypeSchemas/Lost_itemsCountOutputTypeArgsSchema"

export const lost_itemsSelectSchema: z.ZodType<Prisma.lost_itemsSelect> = z.object({
  lost_item_id: z.boolean().optional(),
  user_id: z.boolean().optional(),
  status: z.boolean().optional(),
  description: z.boolean().optional(),
  found: z.boolean().optional(),
  created_at: z.boolean().optional(),
  updated_at: z.boolean().optional(),
  documents: z.union([z.boolean(),z.lazy(() => documentsFindManyArgsSchema)]).optional(),
  user: z.union([z.boolean(),z.lazy(() => usersArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => Lost_itemsCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default lost_itemsSelectSchema;
