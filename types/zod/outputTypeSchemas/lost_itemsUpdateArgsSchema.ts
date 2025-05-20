import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { lost_itemsIncludeSchema } from '../inputTypeSchemas/lost_itemsIncludeSchema'
import { lost_itemsUpdateInputSchema } from '../inputTypeSchemas/lost_itemsUpdateInputSchema'
import { lost_itemsUncheckedUpdateInputSchema } from '../inputTypeSchemas/lost_itemsUncheckedUpdateInputSchema'
import { lost_itemsWhereUniqueInputSchema } from '../inputTypeSchemas/lost_itemsWhereUniqueInputSchema'
import { documentsFindManyArgsSchema } from "../outputTypeSchemas/documentsFindManyArgsSchema"
import { usersArgsSchema } from "../outputTypeSchemas/usersArgsSchema"
import { Lost_itemsCountOutputTypeArgsSchema } from "../outputTypeSchemas/Lost_itemsCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

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

export const lost_itemsUpdateArgsSchema: z.ZodType<Prisma.lost_itemsUpdateArgs> = z.object({
  select: lost_itemsSelectSchema.optional(),
  include: lost_itemsIncludeSchema.optional(),
  data: z.union([ lost_itemsUpdateInputSchema,lost_itemsUncheckedUpdateInputSchema ]),
  where: lost_itemsWhereUniqueInputSchema,
}).strict() ;

export default lost_itemsUpdateArgsSchema;
