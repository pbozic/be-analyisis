import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { user_favorite_businessesIncludeSchema } from '../inputTypeSchemas/user_favorite_businessesIncludeSchema'
import { user_favorite_businessesWhereInputSchema } from '../inputTypeSchemas/user_favorite_businessesWhereInputSchema'
import { user_favorite_businessesOrderByWithRelationInputSchema } from '../inputTypeSchemas/user_favorite_businessesOrderByWithRelationInputSchema'
import { user_favorite_businessesWhereUniqueInputSchema } from '../inputTypeSchemas/user_favorite_businessesWhereUniqueInputSchema'
import { User_favorite_businessesScalarFieldEnumSchema } from '../inputTypeSchemas/User_favorite_businessesScalarFieldEnumSchema'
import { usersArgsSchema } from "../outputTypeSchemas/usersArgsSchema"
import { businessArgsSchema } from "../outputTypeSchemas/businessArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const user_favorite_businessesSelectSchema: z.ZodType<Prisma.user_favorite_businessesSelect> = z.object({
  user_favorite_businesses_id: z.boolean().optional(),
  user_id: z.boolean().optional(),
  business_id: z.boolean().optional(),
  business_type: z.boolean().optional(),
  created_at: z.boolean().optional(),
  updated_at: z.boolean().optional(),
  users: z.union([z.boolean(),z.lazy(() => usersArgsSchema)]).optional(),
  businesses: z.union([z.boolean(),z.lazy(() => businessArgsSchema)]).optional(),
}).strict()

export const user_favorite_businessesFindFirstArgsSchema: z.ZodType<Prisma.user_favorite_businessesFindFirstArgs> = z.object({
  select: user_favorite_businessesSelectSchema.optional(),
  include: user_favorite_businessesIncludeSchema.optional(),
  where: user_favorite_businessesWhereInputSchema.optional(),
  orderBy: z.union([ user_favorite_businessesOrderByWithRelationInputSchema.array(),user_favorite_businessesOrderByWithRelationInputSchema ]).optional(),
  cursor: user_favorite_businessesWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ User_favorite_businessesScalarFieldEnumSchema,User_favorite_businessesScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default user_favorite_businessesFindFirstArgsSchema;
