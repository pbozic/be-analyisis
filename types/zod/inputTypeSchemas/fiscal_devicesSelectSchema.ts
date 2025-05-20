import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { businessFindManyArgsSchema } from "../outputTypeSchemas/businessFindManyArgsSchema"
import { Fiscal_devicesCountOutputTypeArgsSchema } from "../outputTypeSchemas/Fiscal_devicesCountOutputTypeArgsSchema"

export const fiscal_devicesSelectSchema: z.ZodType<Prisma.fiscal_devicesSelect> = z.object({
  fiscal_devices_id: z.boolean().optional(),
  name: z.boolean().optional(),
  created_at: z.boolean().optional(),
  updated_at: z.boolean().optional(),
  businesses: z.union([z.boolean(),z.lazy(() => businessFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => Fiscal_devicesCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default fiscal_devicesSelectSchema;
