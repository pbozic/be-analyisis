import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { documentsIncludeSchema } from '../inputTypeSchemas/documentsIncludeSchema'
import { documentsWhereInputSchema } from '../inputTypeSchemas/documentsWhereInputSchema'
import { documentsOrderByWithRelationInputSchema } from '../inputTypeSchemas/documentsOrderByWithRelationInputSchema'
import { documentsWhereUniqueInputSchema } from '../inputTypeSchemas/documentsWhereUniqueInputSchema'
import { DocumentsScalarFieldEnumSchema } from '../inputTypeSchemas/DocumentsScalarFieldEnumSchema'
import { filesFindManyArgsSchema } from "../outputTypeSchemas/filesFindManyArgsSchema"
import { driversArgsSchema } from "../outputTypeSchemas/driversArgsSchema"
import { delivery_driversArgsSchema } from "../outputTypeSchemas/delivery_driversArgsSchema"
import { businessArgsSchema } from "../outputTypeSchemas/businessArgsSchema"
import { usersArgsSchema } from "../outputTypeSchemas/usersArgsSchema"
import { vehiclesArgsSchema } from "../outputTypeSchemas/vehiclesArgsSchema"
import { menu_itemsArgsSchema } from "../outputTypeSchemas/menu_itemsArgsSchema"
import { lost_itemsArgsSchema } from "../outputTypeSchemas/lost_itemsArgsSchema"
import { transactionsArgsSchema } from "../outputTypeSchemas/transactionsArgsSchema"
import { DocumentsCountOutputTypeArgsSchema } from "../outputTypeSchemas/DocumentsCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const documentsSelectSchema: z.ZodType<Prisma.documentsSelect> = z.object({
  document_id: z.boolean().optional(),
  document_type: z.boolean().optional(),
  created_at: z.boolean().optional(),
  updated_at: z.boolean().optional(),
  expiration_date: z.boolean().optional(),
  issue_date: z.boolean().optional(),
  additional_info: z.boolean().optional(),
  public: z.boolean().optional(),
  driver_id: z.boolean().optional(),
  delivery_driver_id: z.boolean().optional(),
  business_id: z.boolean().optional(),
  user_id: z.boolean().optional(),
  vehicle_id: z.boolean().optional(),
  menu_item_id: z.boolean().optional(),
  lost_item_id: z.boolean().optional(),
  transaction_id: z.boolean().optional(),
  files: z.union([z.boolean(),z.lazy(() => filesFindManyArgsSchema)]).optional(),
  drivers: z.union([z.boolean(),z.lazy(() => driversArgsSchema)]).optional(),
  delivery_driver: z.union([z.boolean(),z.lazy(() => delivery_driversArgsSchema)]).optional(),
  business: z.union([z.boolean(),z.lazy(() => businessArgsSchema)]).optional(),
  user: z.union([z.boolean(),z.lazy(() => usersArgsSchema)]).optional(),
  vehicles: z.union([z.boolean(),z.lazy(() => vehiclesArgsSchema)]).optional(),
  menu_items: z.union([z.boolean(),z.lazy(() => menu_itemsArgsSchema)]).optional(),
  lost_items: z.union([z.boolean(),z.lazy(() => lost_itemsArgsSchema)]).optional(),
  transactions: z.union([z.boolean(),z.lazy(() => transactionsArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => DocumentsCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const documentsFindFirstArgsSchema: z.ZodType<Prisma.documentsFindFirstArgs> = z.object({
  select: documentsSelectSchema.optional(),
  include: documentsIncludeSchema.optional(),
  where: documentsWhereInputSchema.optional(),
  orderBy: z.union([ documentsOrderByWithRelationInputSchema.array(),documentsOrderByWithRelationInputSchema ]).optional(),
  cursor: documentsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ DocumentsScalarFieldEnumSchema,DocumentsScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default documentsFindFirstArgsSchema;
