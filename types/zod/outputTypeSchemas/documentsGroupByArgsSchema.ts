import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { documentsWhereInputSchema } from '../inputTypeSchemas/documentsWhereInputSchema'
import { documentsOrderByWithAggregationInputSchema } from '../inputTypeSchemas/documentsOrderByWithAggregationInputSchema'
import { DocumentsScalarFieldEnumSchema } from '../inputTypeSchemas/DocumentsScalarFieldEnumSchema'
import { documentsScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/documentsScalarWhereWithAggregatesInputSchema'

export const documentsGroupByArgsSchema: z.ZodType<Prisma.documentsGroupByArgs> = z.object({
  where: documentsWhereInputSchema.optional(),
  orderBy: z.union([ documentsOrderByWithAggregationInputSchema.array(),documentsOrderByWithAggregationInputSchema ]).optional(),
  by: DocumentsScalarFieldEnumSchema.array(),
  having: documentsScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default documentsGroupByArgsSchema;
