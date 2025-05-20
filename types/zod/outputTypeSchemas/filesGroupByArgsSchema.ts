import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { filesWhereInputSchema } from '../inputTypeSchemas/filesWhereInputSchema'
import { filesOrderByWithAggregationInputSchema } from '../inputTypeSchemas/filesOrderByWithAggregationInputSchema'
import { FilesScalarFieldEnumSchema } from '../inputTypeSchemas/FilesScalarFieldEnumSchema'
import { filesScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/filesScalarWhereWithAggregatesInputSchema'

export const filesGroupByArgsSchema: z.ZodType<Prisma.filesGroupByArgs> = z.object({
  where: filesWhereInputSchema.optional(),
  orderBy: z.union([ filesOrderByWithAggregationInputSchema.array(),filesOrderByWithAggregationInputSchema ]).optional(),
  by: FilesScalarFieldEnumSchema.array(),
  having: filesScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default filesGroupByArgsSchema;
