import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { user_rolesIncludeSchema } from '../inputTypeSchemas/user_rolesIncludeSchema'
import { user_rolesWhereInputSchema } from '../inputTypeSchemas/user_rolesWhereInputSchema'
import { user_rolesOrderByWithRelationInputSchema } from '../inputTypeSchemas/user_rolesOrderByWithRelationInputSchema'
import { user_rolesWhereUniqueInputSchema } from '../inputTypeSchemas/user_rolesWhereUniqueInputSchema'
import { User_rolesScalarFieldEnumSchema } from '../inputTypeSchemas/User_rolesScalarFieldEnumSchema'
import { usersArgsSchema } from "../outputTypeSchemas/usersArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const user_rolesSelectSchema: z.ZodType<Prisma.user_rolesSelect> = z.object({
  user_roles_id: z.boolean().optional(),
  user_id: z.boolean().optional(),
  role: z.boolean().optional(),
  primary: z.boolean().optional(),
  user: z.union([z.boolean(),z.lazy(() => usersArgsSchema)]).optional(),
}).strict()

export const user_rolesFindFirstArgsSchema: z.ZodType<Prisma.user_rolesFindFirstArgs> = z.object({
  select: user_rolesSelectSchema.optional(),
  include: user_rolesIncludeSchema.optional(),
  where: user_rolesWhereInputSchema.optional(),
  orderBy: z.union([ user_rolesOrderByWithRelationInputSchema.array(),user_rolesOrderByWithRelationInputSchema ]).optional(),
  cursor: user_rolesWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ User_rolesScalarFieldEnumSchema,User_rolesScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default user_rolesFindFirstArgsSchema;
