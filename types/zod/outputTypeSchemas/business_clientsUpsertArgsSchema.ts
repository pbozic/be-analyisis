import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { business_clientsIncludeSchema } from '../inputTypeSchemas/business_clientsIncludeSchema'
import { business_clientsWhereUniqueInputSchema } from '../inputTypeSchemas/business_clientsWhereUniqueInputSchema'
import { business_clientsCreateInputSchema } from '../inputTypeSchemas/business_clientsCreateInputSchema'
import { business_clientsUncheckedCreateInputSchema } from '../inputTypeSchemas/business_clientsUncheckedCreateInputSchema'
import { business_clientsUpdateInputSchema } from '../inputTypeSchemas/business_clientsUpdateInputSchema'
import { business_clientsUncheckedUpdateInputSchema } from '../inputTypeSchemas/business_clientsUncheckedUpdateInputSchema'
import { businessArgsSchema } from "../outputTypeSchemas/businessArgsSchema"
import { taxi_ordersFindManyArgsSchema } from "../outputTypeSchemas/taxi_ordersFindManyArgsSchema"
import { Business_clientsCountOutputTypeArgsSchema } from "../outputTypeSchemas/Business_clientsCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const business_clientsSelectSchema: z.ZodType<Prisma.business_clientsSelect> = z.object({
  business_clients_id: z.boolean().optional(),
  created_at: z.boolean().optional(),
  updated_at: z.boolean().optional(),
  business_id: z.boolean().optional(),
  first_name: z.boolean().optional(),
  last_name: z.boolean().optional(),
  email: z.boolean().optional(),
  telephone: z.boolean().optional(),
  telephone_code: z.boolean().optional(),
  telephone_number: z.boolean().optional(),
  business: z.union([z.boolean(),z.lazy(() => businessArgsSchema)]).optional(),
  taxi_orders: z.union([z.boolean(),z.lazy(() => taxi_ordersFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => Business_clientsCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const business_clientsUpsertArgsSchema: z.ZodType<Prisma.business_clientsUpsertArgs> = z.object({
  select: business_clientsSelectSchema.optional(),
  include: business_clientsIncludeSchema.optional(),
  where: business_clientsWhereUniqueInputSchema,
  create: z.union([ business_clientsCreateInputSchema,business_clientsUncheckedCreateInputSchema ]),
  update: z.union([ business_clientsUpdateInputSchema,business_clientsUncheckedUpdateInputSchema ]),
}).strict() ;

export default business_clientsUpsertArgsSchema;
