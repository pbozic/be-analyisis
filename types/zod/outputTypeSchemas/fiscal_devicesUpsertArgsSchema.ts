import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { fiscal_devicesIncludeSchema } from '../inputTypeSchemas/fiscal_devicesIncludeSchema'
import { fiscal_devicesWhereUniqueInputSchema } from '../inputTypeSchemas/fiscal_devicesWhereUniqueInputSchema'
import { fiscal_devicesCreateInputSchema } from '../inputTypeSchemas/fiscal_devicesCreateInputSchema'
import { fiscal_devicesUncheckedCreateInputSchema } from '../inputTypeSchemas/fiscal_devicesUncheckedCreateInputSchema'
import { fiscal_devicesUpdateInputSchema } from '../inputTypeSchemas/fiscal_devicesUpdateInputSchema'
import { fiscal_devicesUncheckedUpdateInputSchema } from '../inputTypeSchemas/fiscal_devicesUncheckedUpdateInputSchema'
import { businessFindManyArgsSchema } from "../outputTypeSchemas/businessFindManyArgsSchema"
import { Fiscal_devicesCountOutputTypeArgsSchema } from "../outputTypeSchemas/Fiscal_devicesCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const fiscal_devicesSelectSchema: z.ZodType<Prisma.fiscal_devicesSelect> = z.object({
  fiscal_devices_id: z.boolean().optional(),
  name: z.boolean().optional(),
  created_at: z.boolean().optional(),
  updated_at: z.boolean().optional(),
  businesses: z.union([z.boolean(),z.lazy(() => businessFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => Fiscal_devicesCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const fiscal_devicesUpsertArgsSchema: z.ZodType<Prisma.fiscal_devicesUpsertArgs> = z.object({
  select: fiscal_devicesSelectSchema.optional(),
  include: fiscal_devicesIncludeSchema.optional(),
  where: fiscal_devicesWhereUniqueInputSchema,
  create: z.union([ fiscal_devicesCreateInputSchema,fiscal_devicesUncheckedCreateInputSchema ]),
  update: z.union([ fiscal_devicesUpdateInputSchema,fiscal_devicesUncheckedUpdateInputSchema ]),
}).strict() ;

export default fiscal_devicesUpsertArgsSchema;
