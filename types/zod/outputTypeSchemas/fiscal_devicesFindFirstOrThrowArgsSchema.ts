import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { fiscal_devicesIncludeSchema } from '../inputTypeSchemas/fiscal_devicesIncludeSchema'
import { fiscal_devicesWhereInputSchema } from '../inputTypeSchemas/fiscal_devicesWhereInputSchema'
import { fiscal_devicesOrderByWithRelationInputSchema } from '../inputTypeSchemas/fiscal_devicesOrderByWithRelationInputSchema'
import { fiscal_devicesWhereUniqueInputSchema } from '../inputTypeSchemas/fiscal_devicesWhereUniqueInputSchema'
import { Fiscal_devicesScalarFieldEnumSchema } from '../inputTypeSchemas/Fiscal_devicesScalarFieldEnumSchema'
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

export const fiscal_devicesFindFirstOrThrowArgsSchema: z.ZodType<Prisma.fiscal_devicesFindFirstOrThrowArgs> = z.object({
  select: fiscal_devicesSelectSchema.optional(),
  include: fiscal_devicesIncludeSchema.optional(),
  where: fiscal_devicesWhereInputSchema.optional(),
  orderBy: z.union([ fiscal_devicesOrderByWithRelationInputSchema.array(),fiscal_devicesOrderByWithRelationInputSchema ]).optional(),
  cursor: fiscal_devicesWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ Fiscal_devicesScalarFieldEnumSchema,Fiscal_devicesScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default fiscal_devicesFindFirstOrThrowArgsSchema;
