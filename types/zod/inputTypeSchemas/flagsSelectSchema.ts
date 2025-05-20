import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { flag_historyFindManyArgsSchema } from "../outputTypeSchemas/flag_historyFindManyArgsSchema"
import { FlagsCountOutputTypeArgsSchema } from "../outputTypeSchemas/FlagsCountOutputTypeArgsSchema"

export const flagsSelectSchema: z.ZodType<Prisma.flagsSelect> = z.object({
  flag_id: z.boolean().optional(),
  name: z.boolean().optional(),
  status: z.boolean().optional(),
  created_at: z.boolean().optional(),
  updated_at: z.boolean().optional(),
  history: z.union([z.boolean(),z.lazy(() => flag_historyFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => FlagsCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default flagsSelectSchema;
